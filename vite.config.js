import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // El service worker se actualiza solo cuando hay una versión nueva
      registerType: 'autoUpdate',
      manifest: {
        name: 'Combo',
        short_name: 'Combo',
        description: 'Tu grupo propone, vota y decide.',
        lang: 'es',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        // Colores de la pantalla de carga y de la barra: Noche
        background_color: '#15171A',
        theme_color: '#15171A',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Cachea el "shell" (HTML, JS, CSS, fuentes e iconos) para que abra sin conexión.
        // Los datos de Firestore los gestiona Firebase aparte.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // Cualquier ruta de la app (/unirse/ABC123...) devuelve el index.html
        navigateFallback: '/index.html',
      },
    }),
  ],
})
