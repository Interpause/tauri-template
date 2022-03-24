import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode == 'production'
  return {
    plugins: [
      preact({
        babel: {
          plugins: [
            '@emotion/babel-plugin',
            'babel-plugin-macros',
            [
              isProd
                ? '@babel/plugin-transform-react-jsx'
                : '@babel/plugin-transform-react-jsx-development',
              {
                runtime: 'automatic',
                importSource: '@emotion/react',
              },
            ],
          ],
        },
      }),
      !isProd && FullReload(['src/**/*']),
    ],
    server: {
      open: true,
      hmr: false,
    },
  }
})
