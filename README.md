# Rogue Intelligence — GitHub Pages site

**Live:** [https://rogue-intelligence-inc.github.io/](https://rogue-intelligence-inc.github.io/)  
**Deploy repo:** [Rogue-Intelligence-INC/Rogue-Intelligence-INC.github.io](https://github.com/Rogue-Intelligence-INC/Rogue-Intelligence-INC.github.io)

Scientific front door (research-serious style). This folder is the editable source in the Valhalla monorepo; the `.github.io` repo is what Pages serves.

## Pages

| Path | Role |
|------|------|
| `/` | Overview · research hierarchy |
| `/valhalla/` | **Primary** product line |
| `/cryptography/` | Secondary — Yaksha Cipher |
| `/wave/` | Secondary — Wave / Val-OS |
| `/about/` | Author · self-funded since 2025-04-05 · financing · personal gifts |

## Publish / sync

```bash
# From Valhalla monorepo — sync this folder to the Pages repo and push
rsync -a --delete \
  --exclude '.git' --exclude '_site' --exclude '.jekyll-cache' --exclude 'vendor' \
  rogue-intelligence-site/ /tmp/ri-pages-sync/
cd /tmp/ri-pages-sync
# clone or pull Rogue-Intelligence-INC.github.io, copy files, commit, push main
```

Or clone the Pages repo, copy updated files from `rogue-intelligence-site/`, commit, `git push`.

Pages build mode: **legacy** (branch `main` / root). GitHub builds Jekyll automatically.

## Local preview

```bash
cd rogue-intelligence-site
bundle install
bundle exec jekyll serve
```

Contact: licensing@rogue-intelligence.com
