# superinsight-app-doc

Documentation for the Superinsight app, published to
https://docs.superinsight.me.

Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Local setup

```bash
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run locally

```bash
mkdocs serve
```

Then open http://127.0.0.1:8000. The site reloads as you edit.

## Publishing

**Merge to `main`.** That is the whole process.

A GitHub Actions workflow builds the site and deploys it to GitHub Pages on
every push to `main`. There is no manual build step, and the `gh-pages` branch
is no longer used — do not merge or push to it.

Before opening a PR, run the same check CI runs:

```bash
mkdocs build --strict
```

This fails on broken links, missing images and stale `nav:` entries. Pull
requests run it automatically without deploying.

See [DEPLOYMENT.md](DEPLOYMENT.md) for how the pipeline works, why the manual
process used to publish stale pages, and how to troubleshoot a deploy.
