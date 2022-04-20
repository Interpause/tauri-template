import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode == 'production'
  return {
    plugins: [
      preact({
        babel: {
          plugins: ['@emotion/babel-plugin', 'babel-plugin-macros'],
        },
        jsxImportSource: '@emotion/react',
      }),
    ],
    server: {
      open: false,
    },
  }
})
