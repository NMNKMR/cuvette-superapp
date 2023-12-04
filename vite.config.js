import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/news': 'https://text-ease.vercel.app/superapp/get'
    }
  },
  plugins: [react()],
})
