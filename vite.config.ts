import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"],
    // }),
  ],
})
