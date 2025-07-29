import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-pedrorivero-brazilinves-t8s5mgchs89.ws-us120.gitpod.io'],
  },
})
