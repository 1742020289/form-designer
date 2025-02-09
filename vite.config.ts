import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      // 指定 symbolId 格式
      symbolId: 'icon-[name]'
    })
    // eslintPlugin({
    //   include: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 可以在这里添加 Less 的全局变量或其他配置
        javascriptEnabled: true,
      },
    },
  },
})
