# Malik Hashim — Portfolio

A futuristic, fully responsive portfolio site — React + Vite + TypeScript, an
interactive Three.js / WebGL hero, glassmorphism UI, holographic neon accents
and Framer Motion animations. **Deploys to GitHub Pages for free** (no AWS, no
paid services).

---

## ✦ Quick start (local)

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build locally
```

---

## ✦ Deploy to GitHub Pages — for free

There are **two ways**. Option A (GitHub Actions) is recommended — every push
auto-deploys.

### Option A — Automatic (GitHub Actions) ✅ recommended

1. Create a new **public** repo on GitHub (e.g. `portfolio`).
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo>.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
4. That's it. The included workflow (`.github/workflows/deploy.yml`) builds and
   publishes automatically. Your site goes live at:
   ```
   https://<your-username>.github.io/<repo>/
   ```
   Every future `git push` to `main` redeploys it.

### Option B — Manual one-command deploy

```bash
npm run deploy     # builds and pushes /dist to the gh-pages branch
```
Then set **Settings → Pages → Source → "Deploy from a branch" → gh-pages → /(root)**.

> The build uses a **relative base path** (`base: "./"` in `vite.config.ts`), so
> it works under any repo name without configuration. If you deploy to a custom
> domain or a `username.github.io` root repo, it still works as-is.

---

## ✦ Editing your content

**All text lives in one file:** [`src/data/portfolio.ts`](src/data/portfolio.ts)

- `profile` — name, title, email, phone, GitHub, tagline, rotating roles
- `stats` — the headline numbers
- `skillGroups` — skill categories + chips
- `experiences` — work timeline
- `projects` — featured project cards

Change anything there and the whole site updates. No component edits needed.

### Replacing the resume
Drop your PDF into `public/` and update `resumeUrl` in `portfolio.ts`.

### Adding project images / screenshots
1. Put images in `public/` (e.g. `public/projects/crv.png`).
2. Reference them with a relative path: `./projects/crv.png`.
   (Then add an `<img>` to `src/components/Projects.tsx` if you want thumbnails.)

---

## ✦ Tech

| Layer       | Tech                                   |
|-------------|----------------------------------------|
| Framework   | React 18 + TypeScript + Vite           |
| 3D / WebGL  | three.js · @react-three/fiber · drei   |
| Animation   | Framer Motion                          |
| Styling     | Hand-crafted CSS design system         |
| Deploy      | GitHub Pages (Actions or gh-pages)     |

Built by Malik Hashim.
