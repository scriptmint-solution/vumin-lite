import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@layouts' : path.resolve(__dirname, './src/layouts'),
      '@components' : path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vue(),
    viteCompression({
      filter: /\.(js|mjs|css)$/i
    })
  ]
})
