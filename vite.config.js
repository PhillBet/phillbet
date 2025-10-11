import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set `base` to your repo name when deploying to GitHub Pages
// Example: if your repo is `FelipeBet/phillbet`, use base: '/phillbet/'
export default defineConfig({
  plugins: [react()],
  base: '/phillbet/' // <-- change to '/<tu-repo>/' antes de `npm run deploy`
})