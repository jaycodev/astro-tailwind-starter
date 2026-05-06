import { defineConfig, svgoOptimizer } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/': path.resolve('./src') + '/',
      },
    },
  },
})
