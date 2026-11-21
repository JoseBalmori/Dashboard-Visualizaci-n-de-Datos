import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Dashboard-Visualizaci-n-de-Datos/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})