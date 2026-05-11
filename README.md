# vitaly-gorelov.github.io

Personal academic site for Vitaly Gorelov — CNRS researcher, Laboratoire des Solides Irradiés, École Polytechnique.

Built with [Jekyll](https://jekyllrb.com), styled by hand, deployed to GitHub Pages.

## Quick start

### 1. Put this on GitHub

Two options for the repo name:

- **`USERNAME.github.io`** — the site lives at `https://USERNAME.github.io/`. In `_config.yml` set `url: "https://USERNAME.github.io"` and `baseurl: ""`.
- **Any other name** (e.g. `academic-site`) — the site lives at `https://USERNAME.github.io/academic-site/`. Set `url: "https://USERNAME.github.io"` and `baseurl: "/academic-site"`.

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:gorelov93/<repo-name>.git
git push -u origin main
```

### 2. Enable Pages

On GitHub → repo → **Settings** → **Pages** → set **Source** to *GitHub Actions*. The workflow in `.github/workflows/pages.yml` will build and deploy on every push to `main`.

### 3. Add your photo and CV

- Drop a profile photo at `assets/img/photo.jpg` (square, ~400×400 is plenty). If absent, the sidebar shows "VG" initials.
- Drop your CV PDF at `assets/files/Gorelov_CV.pdf`.
- Drop figure images referenced from `_data/publications.yml` (e.g. `eps_G0Gp0.jpg`, `exc_xy_7_ellipce.jpg`) into `assets/img/`. They're optional — entries without an image still render.

## Local preview

You need Ruby (3.0+). On macOS: `brew install ruby`. On Ubuntu: `sudo apt install ruby-full build-essential zlib1g-dev`.

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Editing content

Most content lives in two places:

| File | What it controls |
| ---- | ---------------- |
| `_config.yml` | Site title, your name, affiliation, social handles |
| `_data/publications.yml` | Publication list. New paper? Add an entry at the top. |
| `_data/talks.yml` | Conference talks and invited contributions |
| `_data/students.yml` | Students you supervise |
| `_data/navigation.yml` | Top-bar links |
| `index.md` | Home page text and news items |
| `_pages/research.md` | Research topics, in prose |
| `_pages/cv.md` | CV page (the prose mirror of the PDF) |

Markdown works inside YAML strings — wrap your name in `**...**` to bold it in author lists, use `*...*` for italics.

## Customising the look

The whole visual system lives in `assets/css/style.scss`. The accent colour is one variable at the top:

```scss
:root {
  --accent: #0F6E56;        /* teal — change me */
  --accent-soft: #E1F5EE;   /* and me */
  --accent-strong: #085041; /* and me */
}
```

Dark-mode equivalents are under `[data-theme="dark"]` just below.

## Notes

- Dark mode preference is stored in `localStorage` and respects the system preference on first visit. The toggle is the moon / sun button in the top-right.
- The site is fully responsive — it stacks to a single column below 820 px.
- `jekyll-seo-tag` is enabled, so meta tags for sharing on Twitter / Mastodon / etc. are generated automatically.
