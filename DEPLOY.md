# Deploy architecture (extensible)

## Target

| Item | Value |
|------|-------|
| Live URL | https://rogue-intelligence-inc.github.io/ |
| Deploy repo | `Rogue-Intelligence-INC/Rogue-Intelligence-INC.github.io` |
| Build | **GitHub Actions** · `actions/jekyll-build-pages` · `actions/deploy-pages` |
| Content source | Valhalla monorepo `rogue-intelligence-site/` |

```
Valhalla monorepo                    Pages repo (.github.io)
rogue-intelligence-site/   --sync-->  (same tree + workflows)
        │                                    │
        │ publish_github_pages.sh            ▼
        │                         Actions: build → artifact → deploy
        └─ optional workflow      environment: github-pages
           publish-research-site
```

## Why Actions (not classic branch build)

1. Reproducible, versioned build image  
2. Easy to add jobs later: link check, i18n matrix, lighthouse, PR previews  
3. Official Pages OIDC deploy (`id-token`) — no long-lived deploy keys required on the Pages repo itself  
4. `workflow_dispatch` for forced rebuilds  

## Extension points already wired

| Hook | Location |
|------|----------|
| Nav items | `_data/navigation.yml` |
| Header / footer | `_includes/header.html`, `footer.html` |
| Future collections | `_config.yml` → `papers` / `notes` (output: false until needed) |
| CI publish from monorepo | `.github/workflows/publish-research-site.yml` + secret `SITE_DEPLOY_TOKEN` |
| Extra build steps | `.github/workflows/pages.yml` commented hook |

## Publish from laptop

```bash
# Needs gh auth with `workflow` scope the first time workflows change
gh auth refresh -h github.com -s repo,workflow,read:org

./scripts/publish_github_pages.sh
```

## First-time Pages settings

Deploy repo → Settings → Pages → **GitHub Actions** as source  
(API: `build_type=workflow`).
