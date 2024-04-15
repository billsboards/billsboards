import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
    })
  ],
  build: {
    minify: 'esbuild',
    sourcemap: 'true',
    rollupOptions: {
      input: {
        main: '/index.html',
        embed: '/embed.html'
      }
    }
  }
})