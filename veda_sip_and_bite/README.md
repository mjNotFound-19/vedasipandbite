# Veda Sip & Bite

Luxury wellness storefront for a static GitHub Pages deployment. Built with React + Vite + TypeScript, Tailwind CSS, Framer Motion, React Router, and Zustand (cart only).

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Security & Privacy

- Static storefront only. No authentication, no client-side payment processing, and no order database.
- Cart persistence stores only `{ productId, quantity }` in localStorage.
- UI-only contact and newsletter forms. No PII collection on the client.
- Checkout redirects to a hosted checkout provider (placeholder URLs for now).
- CSP, Referrer-Policy, and Permissions-Policy are enforced via meta tags in `index.html`.
- See `src/security/csp.ts` for CSP documentation and notes.

## Performance Notes

- Route-level code splitting with `React.lazy` and `Suspense`.
- Images include width/height attributes and use `loading="lazy"` where appropriate.
- IntersectionObserver-powered reveals; no scroll listeners.
- Motion uses transform/opacity only and respects `prefers-reduced-motion`.

## Deployment (GitHub Pages)

1. Ensure the Vite base path matches your repo name in `vite.config.ts` (currently `/vedasipandbite/`).
2. Push to `main` and the GitHub Actions workflow will build and deploy.
3. In GitHub: Settings ? Pages ? Source = GitHub Actions.

### Troubleshooting

- 404 on refresh: confirm the `base` path in `vite.config.ts` matches the repo name.
- CSP blocking local dev: the CSP is strict by design for production. If local dev breaks, temporarily relax CSP while running `npm run dev` and restore it before deployment.

### CSS / Tailwind not loading

- Confirm `src/index.css` has `@tailwind base; @tailwind components; @tailwind utilities;` and is imported in `src/main.tsx`.
- Verify Tailwind content paths include `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` in `tailwind.config.ts`.
- Check `postcss.config.cjs` has `tailwindcss` and `autoprefixer` plugins.
- Relax CSP in `index.html` for dev so inline styles injected by Vite are not blocked.
- Run the dev server from the project root after `npm install`; the in-app Tailwind sanity card (visible only in dev) should render with styled pills.

## Checkout Integration Path

Replace placeholder `checkoutUrl` values in `src/data/products.ts` with real Stripe Payment Links or a Shopify hosted checkout URL. The redirect happens from the Checkout page and never collects payment data on the client.

