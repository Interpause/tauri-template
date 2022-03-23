# tauri-template

Figuring out how to use Tauri, then configuring it to match my development style. May evolve to a monorepo at some point.

## Decisions

- VSCode-first support
- Yarn 2 Zero-Installs
- Vite (sorry Babel macros...)
- Preact framework (Typescript)
- twin.macro + Emotion CSS-in-JS

## Quirks

### @preact/preset-vite

Apparently it uses Babel's programmatic API to transform the code. Does not expose allowing user to further customize Babel configuration though. Also it already contains the Preact alias to React.

### Note on ESM Dependency Resolution

Yarn 2 PnP ESM Support is as experimental as NodeJS support for ESM. @preact/preset-vite declares certain Babel plugins as dependencies, but yarn is unable to resolve these dependencies correctly. For now, installing these plugins as devDependencies (despite the fact they aren't peerDependencies of @preact/preset-vite) fixes this, but seriously.

### index.html

In my webpack toolchain, I used a plugin to auto-generate index.html in the build. I am not used to seeing or configuring it, but apparently in Vite it isn't supposed to be hidden? Could not find a plugin to auto-generate it...
