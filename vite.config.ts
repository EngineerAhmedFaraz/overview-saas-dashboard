import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← keep if you're using it, otherwise remove
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],          // ← remove tailwindcss() if not using it

  resolve: {
    alias: {
      // This must match exactly what we use in tsconfig
      '@': path.resolve(__dirname, './src'),
    },
  },
})