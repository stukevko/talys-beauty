import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so assets work under any subpath (e.g. /bdf69a47/)
  base: './',
  plugins: [react(), tailwindcss()],
})
