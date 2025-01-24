import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
})
