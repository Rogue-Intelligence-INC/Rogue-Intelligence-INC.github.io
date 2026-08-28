# Rogue Intelligence — GitHub Pages site

**Live:** [https://rogue-intelligence-inc.github.io/](https://rogue-intelligence-inc.github.io/)  
**Deploy repo:** [Rogue-Intelligence-INC/Rogue-Intelligence-INC.github.io](https://github.com/Rogue-Intelligence-INC/Rogue-Intelligence-INC.github.io)

## Architecture (extensible)

```
Valhalla/rogue-intelligence-site/   ← content source of truth
        │  ./scripts/publish_github_pages.sh
        ▼
*.github.io  +  Actions: jekyll-build-pages → deploy-pages
```

| Extension point | File |
|-----------------|------|
| Nav | `_data/navigation.yml` |
| Chrome | `_includes/header.html`, `footer.html` |
| Future papers/notes | `_config.yml` collections (`output: false` until needed) |
| Deploy pipeline | `.github/workflows/pages.yml` |
| Monorepo auto-publish | `.github/workflows/publish-research-site.yml` + `SITE_DEPLOY_TOKEN` |

See [`DEPLOY.md`](./DEPLOY.md).

## Enable Actions build (one-time)

Current laptop `gh` OAuth may lack `workflow` scope. Then:

```bash
gh auth refresh -h github.com -s repo,workflow,read:org
# browser device login
./scripts/enable_pages_actions.sh
```

Until then, classic Jekyll Pages still serves the site; content sync works without workflows.

## Everyday publish

```bash
./scripts/publish_github_pages.sh
```

## Pages

| Path | Role |
|------|------|
| `/` | Overview |
| `/valhalla/` | Primary |
| `/cryptography/` | Secondary |
| `/wave/` | Secondary |
| `/about/` | Author · financing · gifts |
