# tauri-template

Monorepos for life!

## Decisions

- VSCode-first support
- [Yarn 2 Zero-Installs](https://yarnpkg.com/features/zero-installs)

## Recommendations

- Download VSCode: <https://code.visualstudio.com/>
- Enable Yarn 2 through NodeJS Corepack: <https://yarnpkg.com/getting-started/install>

## Quirks

- Preact must be present as a top-layer dependency or vite cannot resolve correctly. I do not know why.
