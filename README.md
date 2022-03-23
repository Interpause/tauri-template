# tauri-template

Figuring out how to use Tauri, then configuring it to match my development style. May evolve to a monorepo at some point.

## Decisions

- VSCode-first support
- Yarn 2 Zero-Installs
- Vite (sorry Babel macros...)
- Preact framework (Typescript)
- twind CSS-in-JS

## @preact/preset-vite

Apparently it uses Babel's programmatic API to transform the code. Does not expose allowing user to further customize Babel configuration though. Also it already contains the Preact alias to React.
