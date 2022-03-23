import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      babel: {
        plugins: [
          '@emotion/babel-plugin',
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            {
              pragma: '__cssprop',
              pragmaFrag: 'Fragment',
            },
          ],
        ],
      },
    }),
  ],
  esbuild: {
    jsxInject: `import { Fragment } from 'preact'`,
  },
})
