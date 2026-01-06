export const csp =
  "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' https: data:; connect-src 'self' ws: wss:; base-uri 'self'; frame-ancestors 'none'; object-src 'none'";

export const cspNotes = [
  'Relaxed for Vite dev server: inline styles/scripts are allowed so Tailwind and HMR can inject CSS.',
  'data: is enabled for small inline SVG texture overlays used in CSS (hero grain).',
  'Tighten for production by removing unsafe-inline/eval and restricting connect-src to only what you host.'
];
