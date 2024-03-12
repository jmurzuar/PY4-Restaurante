import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PY4-Restaurante/',
  
  build: {
    rollupOptions: {
      external: [
        '/PY4-Restaurante/imagen01.jpeg', // Agregar la ruta de la imagen externa aquí
        '/PY4-Restaurante/imagen02.jpeg', // Agregar la ruta de la imagen externa aquí
        '/PY4-Restaurante/imagen03.jpeg', // Agregar la ruta de la imagen externa aquí
      ]
    }
  }

})

