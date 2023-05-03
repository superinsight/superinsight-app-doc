# superinsight-app-doc

Documentation for superinsight app

## Run Locally

```
mkdocs serve
```

### Build folder and Copy to gh-pages branch

```
mkdocs build --site-dir public
mv public ../
git checkout gh-pages
cp -R ../public/ ./
rm -rf ../public
```
