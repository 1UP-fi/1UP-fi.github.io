set -ev

npx html-minifier-next \
    --input-dir=_site --output-dir=_temp --file-ext=html \
    --collapse-whitespace --conservative-collapse \
    --remove-comments --decode-entities

cp -rf _temp/* _site
rm -rf _temp

for f in _site/**/*.js; do
    npx terser $f -c --source-map "content='$f.map',url='$(basename "$f.map")'" -o "$f"
done
