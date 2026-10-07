import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esto define que la app corra bajo el sub-path /agenda/
  base: '/agenda/',
  server: {
    port: 3000, // Opcional: fija el puerto si lo deseas
  }
})