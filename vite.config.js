import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimize } from 'vite-plugin-imagemin'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimize({
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