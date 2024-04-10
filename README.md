# superinsight-app-doc

Documentation for superinsight app

## Installation virtual environment
```
python3 -m pip install virtualenv
python3 -m virtualenv -p python3 .venv
```

## Activate the virtual environment

```
source .venv/bin/activate
```

## Install dependencies

```
pip install -r requirements.txt
```


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
git add .
git commit -m "xxxxxx"
git push
```
