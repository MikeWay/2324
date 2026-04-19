find . -type f -name '*.component.*' | while read -r filepath; do
  dir=$(dirname "$filepath")
  filename=$(basename "$filepath")
  newname=$(echo "$filename" | sed 's/\.component\././')
  mv "$filepath" "$dir/$newname"
done
