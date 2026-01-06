import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Update base to '/YOUR_REPO_NAME/' if deploying to project pages.
// If you're deploying to https://YOUR_USERNAME.github.io (user/organization page),
// you can keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/YOUR_REPO_NAME/'
})