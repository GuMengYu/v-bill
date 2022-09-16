import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  server: {
    port: 3003,
    proxy: {
      // http://127.0.0.1:4523/m1/1448890-0-default mock server
      // https://cloudbase-baas-4g55sa6t673d1fe0-1253508198.ap-shanghai.app.tcloudbase.com
      // http://127.0.0.1:3303
      '/api': {
        target: 'http://127.0.0.1:3002',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(),
  VitePWA({
    injectRegister: 'auto',
    // registerType: 'prompt',
    // includeManifestIcons: false,
    manifest: {
      name: 'v-bill',
      short_name: 'vbill',
      description: '记账软件',
      theme_color: '#fdfcf4',
      background_color: '#fdfcf4',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  })],
})
