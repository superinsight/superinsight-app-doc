# Deployment

How https://docs.superinsight.me is built and published, and why it silently
served six-month-old content until August 2026.

## How it works now

```
docs/*.md  ──►  main  ──►  GitHub Actions (mkdocs build)  ──►  GitHub Pages
                                                                    │
                                          superinsight.github.io ◄──┘
                                                    │
                              Cloudflare CNAME (proxied)
                                                    │
                                      docs.superinsight.me
```

Merge to `main` and you are done. `.github/workflows/deploy.yml` installs the
pinned dependencies, runs `mkdocs build --strict`, and publishes the generated
`site/` directory. There is nothing to build by hand and nothing to copy.

The `gh-pages` branch is **no longer used**. Do not merge into it, do not push
to it, do not treat it as the source of truth.

## Why the site went stale

### Symptom

Between February and August 2026 the docs were edited repeatedly. Every
deployment reported success. The live site never changed.

### Root cause

The site is MkDocs, so `docs/*.md` is source that has to be *compiled* into
HTML. GitHub Pages was configured in legacy mode, pointed at the `gh-pages`
branch, which means it publishes whatever is already sitting on that branch —
it does not know what MkDocs is and never ran it.

Building was therefore a manual step, performed on someone's laptop and
committed as pre-built HTML. The old README documented it:

```
mkdocs build --site-dir public
mv public ../
git checkout gh-pages
cp -R ../public/ ./
git add . && git commit && git push
```

When that step was skipped, the commits that reached `gh-pages` were
`Merge branch 'main' into gh-pages` — which brings across the Markdown
*source* but leaves the compiled HTML at the branch root untouched. The result:

| File on `gh-pages`                  | Last changed |
| ----------------------------------- | ------------ |
| `docs/` (Markdown source)           | 2026-08-06   |
| `index.html` (**the page served**)  | 2026-02-02   |

Every edit landed on the branch. None of it reached the rendered page.

### Why nobody noticed

Three things hid the failure:

1. **The build was always green.** The `pages build and deployment` run in the
   Actions tab is GitHub's own built-in job, not ours — the repo had no
   `.github/workflows` directory at all. That job's only responsibility is to
   copy `gh-pages` to the CDN, and it did that flawlessly. It reported success
   for publishing content that was six months old.
2. **The deploy timestamp moved.** Each re-run refreshed the `Last-Modified`
   header and produced a new deployment record, so the site looked freshly
   published.
3. **`gh-pages` looked correct.** Because `cp -R` copies over the top without
   deleting, and because merges added more, the branch accumulated both the
   Markdown source and the compiled output side by side. Browsing it showed the
   latest `docs/*.md`, which read as "the new content is deployed."

### The general lesson

A deploy pipeline that reports success without verifying that output changed is
indistinguishable from one that works. The fix is not "remember to run the
build" — it is removing the human step entirely, which is what the workflow now
does.

## The CNAME landmine

`docs.superinsight.me` is a Cloudflare CNAME to `superinsight.github.io`. That
hostname is GitHub's shared entry point for every Pages site in the org and
points at no repository in particular:

```
GET https://superinsight.github.io/                    →  404
GET same host, with header "Host: docs.superinsight.me" →  200
```

GitHub routes on the `Host` header: it looks for the repository whose published
`CNAME` file contains `docs.superinsight.me` and serves that one. So the file
`CNAME` at the root of the published site — not the DNS record — is what binds
this repository to the domain.

MkDocs copies everything under `docs/` into `site/` verbatim, so `docs/CNAME`
is what puts `CNAME` into the published output. **If `docs/CNAME` is deleted,
the custom domain stops resolving to this repo and the docs 404.** The workflow
asserts the file survives every build, and fails rather than publishing a site
that would take docs offline.

This is also why the old `mkdocs gh-deploy` route was dangerous: it replaces the
branch wholesale, and before `docs/CNAME` existed it would have dropped the
domain binding.

## Working on the docs

```bash
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve          # http://127.0.0.1:8000, live reload
```

Before opening a PR, reproduce what CI does:

```bash
mkdocs build --strict
```

`--strict` promotes MkDocs warnings to errors, so broken internal links,
missing images and stale `nav:` entries fail the build. Pull requests run this
check without deploying; only merges to `main` publish.

Dependencies in `requirements.txt` are pinned. An unpinned upstream release
breaking the live docs site is not a failure mode worth keeping — bump them
deliberately, in a PR, where the strict build can vet the change.

## Troubleshooting

**A change is merged but the live page looks unchanged.** Check the
`Build and deploy docs` workflow run for that commit. If it is green, the
content is published and you are seeing a cache — hard-reload, or purge the
Cloudflare cache for the affected path.

**The build fails on a link or image.** `--strict` is doing its job; the error
names the file and the target. Fix the reference rather than removing the flag.

**The site 404s entirely.** Confirm `docs/CNAME` still exists and still reads
`docs.superinsight.me`, then confirm the Cloudflare record for `docs` still
points at `superinsight.github.io`.

**`deploy-pages` fails with a configuration error.** The repository's Pages
source must be set to **GitHub Actions**
(Settings → Pages → Build and deployment → Source), not the legacy
`gh-pages` branch.
