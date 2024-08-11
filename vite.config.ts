import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { VineVitePlugin } from 'vue-vine/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VineVitePlugin(),
    vue(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
      ],
    }),
    Components({
      resolvers: [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
