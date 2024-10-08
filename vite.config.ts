import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 8000,
  },
  optimizeDeps: {
    include: ['vue','buffer'],
  },
  plugins: [
    vue()
  ],
})
