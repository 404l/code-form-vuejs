#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New'
git push -f git@github.com:404l/form-vuejs.git master:gh-pages

cd -
