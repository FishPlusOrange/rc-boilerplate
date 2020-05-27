#!/bin/bash

set -e
echo "Enter release version:"
read VERSION
read -p "Release version $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
# update version
npm version $VERSION --message "Release $VERSION"
git push origin master tags/v$VERSION

# publish package
npm publish --access public --registry=https://registry.npmjs.org
fi
