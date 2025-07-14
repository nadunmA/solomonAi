import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteImagemin } from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      webp: {
        quality: 80,
      }
    })
  ],
  optimizeDeps: {
    include: ['prop-types'],
  },
})