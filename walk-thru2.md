# Practice 1.2 Walk-Through Notes

## Exercise: Creating an Angular Application (FlySharp)

### Issues Encountered

1. **`ng new` missing `.editorconfig`, `.gitignore`, `.prettierrc` in git status** — The exercise creates FlySharp fresh, but the repo already had a previous FlySharp (now deleted). The new `ng new` ran successfully but Angular 19+ no longer creates these in the same locations as older versions.

2. **`ng new --no-interactive` skips AI tools prompt silently** — The exercise says to select "None" for AI tools. Using `--no-interactive` bypasses this interactively, but the flag works correctly.

3. **Port 4200 conflict on first two `ng serve` attempts** — `ng serve` failed twice with "Port 4200 is already in use", even though `ss -tlnp` showed nothing on port 4200. A brief delay resolved the issue on the third attempt. Likely caused by a previous background process not fully releasing the port. **Workaround:** wait a few seconds before retrying, or use `ng serve --port 4201`.

4. **`ng serve -o` (open browser) not used** — The `-o` flag to auto-open Chrome was omitted since this is a headless/CLI environment. In a normal desktop environment, `ng serve -o` would open Chrome automatically at `http://localhost:4200`.

### Result
- FlySharp Angular app created successfully at `Exercises/FlySharp/`
- ESLint (`@angular-eslint/schematics`) added successfully
- Dev server confirmed running at `http://localhost:4200/`

---

## Exercise 2.1: Creating an Angular Component

### Issues Encountered

1. **`cpAddIns Ex2.1` must be run from within `Exercises/FlySharp/`** — The script resolves `../../AddIns/Ex2.1` relative to CWD. Running it from any other directory gives an ENOENT error. The exercise instructions don't make this explicit.

2. **277 SCSS `@import` deprecation warnings on `ng serve`** — Sass deprecated `@import` in favour of `@use`/`@forward`. The `bootstrap.scss` and `custom.scss` files installed by `cpAddIns` use `@import`, producing a wall of warnings. The app still builds and runs correctly; warnings can be ignored for course purposes.

### Result
- `Home` component created at `src/app/home/home.ts` with `specialOffer` field
- `app.html` updated to use `<app-home>`
- `app.ts` imports `Home`
- Bootstrap installed and SCSS imports added to `styles.scss`
- Dev server running at `http://localhost:4200/` showing the special offer message
