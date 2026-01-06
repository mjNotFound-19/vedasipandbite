# Blue & Black Portfolio (React + Vite + Tailwind + Framer Motion)

A modern, animated portfolio with a blue (#00AEEF) & black (#000) theme. Ready for GitHub Pages.

## ✨ Features
- Dark, neon‑blue aesthetic
- Smooth animations with Framer Motion
- Responsive Tailwind UI + accessible nav
- Project cards, About, Contact sections
- Ready‑to‑deploy with `gh-pages`

## 🧰 Stack
- React + Vite
- TailwindCSS
- Framer Motion
- Lucide Icons

## 🚀 Quickstart
```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
```

## 🌐 Deploy to GitHub Pages
1. Create a public repo on GitHub (e.g., `YOUR_REPO_NAME`).  
2. Update these fields:
   - In `package.json` set the correct `homepage`:  
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - In `vite.config.js` set the correct `base`:  
     `base: '/YOUR_REPO_NAME/'`
3. Commit & push your code to GitHub.
4. Deploy:
```bash
npm run deploy
```
GitHub Pages will serve from the `gh-pages` branch.

### Alternate: GitHub Actions (no gh-pages package)
If you prefer Actions:
- Remove `gh-pages` dev dependency + scripts.
- Follow Vite + GitHub Pages official workflow and ensure `base` is set as above.

## 🖌 Customization
- Change site title & meta in `index.html`
- Colors live in `tailwind.config.js` (`primary`, `secondary`, `cardDark`, `textLight`)
- Update links in `src/components/NavBar.jsx` and `src/App.jsx`
- Add your projects in `src/data/projects.js`

## 🧪 Build
```bash
npm run build
npm run preview
```

## 📄 License
MIT