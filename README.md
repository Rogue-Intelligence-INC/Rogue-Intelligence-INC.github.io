# Rogue Intelligence — GitHub Pages site

Scientific front door for the laboratory (research-serious style).

## Pages

| Path | Role |
|------|------|
| `/` | Overview · research hierarchy |
| `/valhalla/` | **Primary** product line |
| `/cryptography/` | Secondary — Yaksha Cipher |
| `/wave/` | Secondary — Wave / Val-OS |
| `/about/` | Author bio · self-funded since 2025-04-05 · financing · personal gifts |
| `/windohouse-lad/` | Archival lab notebook |

## Local preview

```bash
cd rogue-intelligence-site
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000/
```

If `bundle` is unavailable, the static HTML/CSS/Markdown still documents structure; GitHub Pages builds with `github-pages` gem (see `Gemfile`).

## Publish notes

1. Set `url` / `baseurl` in `_config.yml` for the real Pages host.  
2. Financing and gift willingness appear **only** on `/about/` by design.  
3. Do not put wallet addresses on the site — confirm by email.

Contact: licensing@rogue-intelligence.com
