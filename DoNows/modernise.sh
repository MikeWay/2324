#!/usr/bin/env bash
# =============================================================================
# ng-modernise.sh
#
# Migrates Angular source from legacy naming (Angular 2–19) to modern naming
# (Angular 20+), which removes .component / .service / .directive / .pipe
# suffixes from both file names and TypeScript class names.
#
# FILE RENAMES
#   foo.component.ts   -> foo.ts        foo.component.html -> foo.html
#   foo.component.css  -> foo.css       foo.component.scss -> foo.scss
#   foo.component.spec.ts -> foo.spec.ts
#   foo.service.ts     -> foo.ts
#   foo.directive.ts   -> foo.ts
#   foo.pipe.ts        -> foo-pipe.ts   (Angular 20 convention: dot -> dash)
#   foo.guard.ts       -> foo.ts
#   foo.resolver.ts    -> foo.ts
#   foo.interceptor.ts -> foo.ts
#   foo.module.ts      -> foo.ts        (if you are removing NgModules)
#
# CLASS NAME RENAMES (inside .ts files, after renaming)
#   FooComponent       -> Foo
#   FooService         -> Foo
#   FooDirective       -> Foo
#   FooPipe            -> Foo           (class name keeps no suffix)
#   FooGuard           -> Foo
#   FooResolver        -> Foo
#   FooInterceptor     -> Foo
#   FooModule          -> Foo
#
# CROSS-FILE REFERENCE UPDATES
#   templateUrl: './foo.component.html' -> templateUrl: './foo.html'
#   styleUrls:   ['./foo.component.css']-> styleUrls:   ['./foo.css']
#   import { FooComponent } from './foo.component'
#                               -> import { Foo } from './foo'
#
# USAGE
#   ./ng-modernise.sh [OPTIONS] [TARGET_DIR]
#
#   TARGET_DIR   Root of the Angular project (default: current directory)
#
# OPTIONS
#   --dry-run    Show what would change; make no modifications
#   --no-backup  Skip creating .bak files before editing
#   --skip-files Skip file renaming (only update source content)
#   --skip-class Skip class name refactoring (only rename files)
#   --verbose    Print every change
#   --help       Show this message
#
# REQUIREMENTS
#   bash 4+, GNU sed, find, mv
#   (On macOS install GNU sed: brew install gnu-sed, then alias sed=gsed)
#
# CAVEATS
#   - Run from within a git repo so changes are easily reviewable / reversible.
#   - The script renames one suffix at a time; if a file somehow has two
#     suffixes (unusual) run again.
#   - Class renames use whole-word sed; they will not touch FooComponentHelper.
#   - Pipe files get a dash rather than removal: foo.pipe.ts -> foo-pipe.ts
#     because Angular 20 keeps "pipe" in the file name.
#   - Spec files follow their source: foo.component.spec.ts -> foo.spec.ts
# =============================================================================

set -euo pipefail

# ── defaults ──────────────────────────────────────────────────────────────────
DRY_RUN=false
BACKUP=true
SKIP_FILES=false
SKIP_CLASS=false
VERBOSE=false
TARGET_DIR="."

# ── colours ───────────────────────────────────────────────────────────────────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; NC='\033[0m'

info()    { echo -e "${CYAN}[INFO]${NC}  $*"; }
success() { echo -e "${GREEN}[OK]${NC}    $*"; }
warn()    { echo -e "${YELLOW}[WARN]${NC}  $*"; }
changed() { echo -e "${GREEN}[CHANGE]${NC} $*"; }
dry()     { echo -e "${YELLOW}[DRY]${NC}   $*"; }

# ── argument parsing ──────────────────────────────────────────────────────────
for arg in "$@"; do
  case $arg in
    --dry-run)    DRY_RUN=true  ;;
    --no-backup)  BACKUP=false  ;;
    --skip-files) SKIP_FILES=true ;;
    --skip-class) SKIP_CLASS=true ;;
    --verbose)    VERBOSE=true  ;;
    --help|-h)
      sed -n '/^# USAGE/,/^# [A-Z]/p' "$0" | sed 's/^# \?//'
      exit 0 ;;
    -*)
      warn "Unknown option: $arg  (use --help for usage)"
      exit 1 ;;
    *)
      TARGET_DIR="$arg" ;;
  esac
done

TARGET_DIR="${TARGET_DIR%/}"   # strip trailing slash

if [[ ! -d "$TARGET_DIR" ]]; then
  echo -e "${RED}ERROR${NC}: Directory not found: $TARGET_DIR"
  exit 1
fi

$DRY_RUN && warn "DRY-RUN mode — no files will be modified."
info "Target directory : $TARGET_DIR"

# ── counters ──────────────────────────────────────────────────────────────────
FILES_RENAMED=0
FILES_EDITED=0

# =============================================================================
# STEP 1 – RENAME FILES
# Order matters: rename .spec. files first so they shadow their source name,
# then rename source files.
# =============================================================================

rename_files() {
  local suffix="$1"     # e.g. component
  local replacement="$2" # e.g. "" (empty = remove) or "pipe" (for dash form)
  # replacement="" means   foo.component.ts -> foo.ts
  # replacement="pipe" means foo.pipe.ts -> foo-pipe.ts

  # Process spec files first  (foo.component.spec.ts -> foo.spec.ts)
  while IFS= read -r filepath; do
    local dir filename base newname newpath

    dir=$(dirname "$filepath")
    filename=$(basename "$filepath")

    if [[ -n "$replacement" ]]; then
      # pipe: foo.pipe.spec.ts -> foo-pipe.spec.ts
      newname=$(echo "$filename" | sed "s/\\.${suffix}\\.spec\\.ts/-${replacement}.spec.ts/")
    else
      newname=$(echo "$filename" | sed "s/\\.${suffix}\\.spec\\.ts/.spec.ts/")
    fi

    if [[ "$filename" != "$newname" ]]; then
      newpath="$dir/$newname"
      if [[ -e "$newpath" ]]; then
        warn "SKIP (target exists): $filepath -> $newpath"
      elif $DRY_RUN; then
        dry "RENAME $filepath  ->  $newpath"
        (( FILES_RENAMED++ )) || true
      else
        mv "$filepath" "$newpath"
        $VERBOSE && changed "RENAMED $filepath -> $newpath"
        (( FILES_RENAMED++ )) || true
      fi
    fi
  done < <(find "$TARGET_DIR" -type f -name "*.${suffix}.spec.ts" 2>/dev/null)

  # Now process all other files with this suffix  (any extension)
  while IFS= read -r filepath; do
    local dir filename newname newpath

    dir=$(dirname "$filepath")
    filename=$(basename "$filepath")

    if [[ -n "$replacement" ]]; then
      newname=$(echo "$filename" | sed "s/\\.${suffix}\\./-${replacement}./")
    else
      newname=$(echo "$filename" | sed "s/\\.${suffix}\\././")
    fi

    if [[ "$filename" != "$newname" ]]; then
      newpath="$dir/$newname"
      if [[ -e "$newpath" ]]; then
        warn "SKIP (target exists): $filepath -> $newpath"
      elif $DRY_RUN; then
        dry "RENAME $filepath  ->  $newpath"
        (( FILES_RENAMED++ )) || true
      else
        mv "$filepath" "$newpath"
        $VERBOSE && changed "RENAMED $filepath -> $newpath"
        (( FILES_RENAMED++ )) || true
      fi
    fi
  done < <(find "$TARGET_DIR" -type f -name "*.${suffix}.*" ! -name "*.spec.ts" 2>/dev/null)
}

if ! $SKIP_FILES; then
  info "Step 1: Renaming files..."

  rename_files "component" ""
  rename_files "service"   ""
  rename_files "directive" ""
  rename_files "guard"     ""
  rename_files "resolver"  ""
  rename_files "interceptor" ""
  rename_files "module"    ""
  rename_files "pipe"      "pipe"   # foo.pipe.ts -> foo-pipe.ts

  info "Files renamed: $FILES_RENAMED"
else
  info "Step 1: Skipped (--skip-files)."
fi

# =============================================================================
# STEP 2 – UPDATE SOURCE CONTENT
#
# For each .ts, .html, .scss, .css and .json file under TARGET_DIR, apply:
#   a) templateUrl / styleUrl(s) path patches  (.component.html -> .html etc.)
#   b) import path patches  ('./foo.component' -> './foo')
#   c) Class name renames   (FooComponent -> Foo etc.)
# =============================================================================

# backup a file once
backup_file() {
  local f="$1"
  $BACKUP && [[ ! -f "${f}.bak" ]] && cp "$f" "${f}.bak"
}

# sed_inplace: portable in-place sed (GNU sed uses -i'', BSD sed needs -i '')
sed_inplace() {
  if sed --version 2>/dev/null | grep -q GNU; then
    sed -i'' "$@"
  else
    # macOS / BSD
    sed -i '' "$@"
  fi
}

# apply_replacement FILE DESCRIPTION PATTERN REPLACEMENT
# Uses perl when the pattern contains a lookbehind (?<!) — sed doesn't support
# those. Falls back to GNU/BSD sed for all other patterns.
# Returns 0 if a change was made, 1 if not.
apply_replacement() {
  local file="$1" desc="$2" pattern="$3" repl="$4"

  if grep -qP "$pattern" "$file" 2>/dev/null; then
    if $DRY_RUN; then
      dry "EDIT [$desc]  $file"
      (( FILES_EDITED++ )) || true
      return 0
    fi
    backup_file "$file"
    if [[ "$pattern" == *'(?<'* ]]; then
      # Pattern uses a lookbehind — must use perl
      perl -i -pe "s/${pattern}/${repl}/g" "$file"
    else
      sed_inplace -E "s/${pattern}/${repl}/g" "$file"
    fi
    $VERBOSE && changed "EDITED [$desc]  $file"
    (( FILES_EDITED++ )) || true
    return 0
  fi
  return 1
}

if ! $SKIP_CLASS; then
  info "Step 2: Updating file content..."

  # Collect all editable source files
  mapfile -t SOURCE_FILES < <(
    find "$TARGET_DIR" -type f \( \
      -name "*.ts" -o -name "*.html" -o \
      -name "*.scss" -o -name "*.css" -o \
      -name "*.json" \
    \) ! -path "*/node_modules/*" ! -path "*/.git/*" \
       ! -name "*.bak" 2>/dev/null
  )

  for file in "${SOURCE_FILES[@]}"; do

    # ── 2a  templateUrl / styleUrl(s) path patches ────────────────────────
    # These only appear in .ts files
    if [[ "$file" == *.ts ]]; then
      for suffix in component service directive guard resolver interceptor module; do
        # templateUrl: './foo.component.html'  -> './foo.html'
        apply_replacement "$file" "templateUrl .${suffix}." \
          "(['\"])([^'\"]+)\.${suffix}\.(html)(['\"])" \
          "\1\2.\3\4" || true

        # styleUrls: ['./foo.component.css']
        apply_replacement "$file" "styleUrls .${suffix}." \
          "(['\"])([^'\"]+)\.${suffix}\.(css|scss|sass|less)(['\"])" \
          "\1\2.\3\4" || true

        # styleUrl (Angular 17+ single string form)
        apply_replacement "$file" "styleUrl .${suffix}." \
          "(['\"])([^'\"]+)\.${suffix}\.(css|scss|sass|less)(['\"])" \
          "\1\2.\3\4" || true

        # import paths:  from './foo.component'
        apply_replacement "$file" "import path .${suffix}" \
          "(from\s+['\"])([^'\"]+)\.${suffix}(['\"])" \
          "\1\2\3" || true
      done

      # pipe: import path foo.pipe -> foo-pipe
      apply_replacement "$file" "import path .pipe" \
        "(from\s+['\"])([^'\"]+)\.pipe(['\"])" \
        "\1\2-pipe\3" || true
    fi

    # ── 2b  class name renames  ───────────────────────────────────────────
    # Only in .ts files; use word-boundary to avoid partial matches
    if [[ "$file" == *.ts ]]; then
      for suffix in Component Service Directive Guard Resolver Interceptor; do
        # Match word boundary: FooComponent but NOT FooComponentHelper
        # sed word boundary \b is supported in GNU sed with -E
        apply_replacement "$file" "class ${suffix}->" \
          "([A-Z][A-Za-z0-9]*)${suffix}\b" \
          "\1" || true
      done

      # Module is handled separately: must not touch configureTestingModule
      # Negative lookbehind ensures we skip that Angular testing API call.
      apply_replacement "$file" "class Module->" \
        "(?<!configure(?:Testing)?)([A-Z][A-Za-z0-9]*)Module\b" \
        "\1" || true

      # Pipe class: FooPipe stays in class name (Angular 20 keeps it)
      # No change needed for Pipe class names per style guide.
    fi

  done

  info "Files with content updates: $FILES_EDITED"
else
  info "Step 2: Skipped (--skip-class)."
fi

# =============================================================================
# SUMMARY
# =============================================================================
echo ""
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}  ng-modernise complete${NC}"
echo -e "${GREEN}═══════════════════════════════════════${NC}"
$DRY_RUN && echo -e "  Mode            : ${YELLOW}DRY RUN (nothing written)${NC}"
echo    "  Files renamed   : $FILES_RENAMED"
echo    "  Files edited    : $FILES_EDITED"
$BACKUP && ! $DRY_RUN && echo "  Backups         : *.bak alongside each modified file"
echo ""
echo -e "  ${CYAN}Recommended next steps:${NC}"
echo    "  1. Review changes:       git diff"
echo    "  2. Run tests:            ng test"
echo    "  3. Build check:          ng build"
echo    "  4. Remove backups:       find . -name '*.bak' -delete"
echo ""