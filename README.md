# tauri-template

Figuring out how to use Tauri, then configuring it to match my development style. May evolve to a monorepo at some point.

## Decisions

- VSCode-first support
- Yarn 2 Zero-Installs
- Vite
- Babel
- Preact framework (Typescript)
- twin.macro + Emotion CSS-in-JS

## Recommendations

- Download VSCode: <https://code.visualstudio.com/>
- Add Preact Devtools Extension to browser: <https://preactjs.com/guide/v10/debugging/>
- Enable Yarn 2 through NodeJS Corepack: <https://yarnpkg.com/getting-started/install>

## Quirks

### @preact/preset-vite

Apparently it uses Babel's programmatic API to transform the code. Does not expose allowing user to further customize Babel configuration though. Also it already contains the Preact alias to React. By using a fork with said access to Babel, macros work again.

#### modifying @preact/preset-vite

When modified, 3 steps needed to properly update it:

1. commit new changes in @preact/preset vite
2. re-run `npm run build` in @preact/preset_vite folder
3. run `yarn` to update package used

### Note on ESM Dependency Resolution

Yarn 2 PnP ESM Support is as experimental as NodeJS support for ESM. @preact/preset-vite declares certain Babel plugins as dependencies, but yarn is unable to resolve these dependencies correctly. For now, installing these plugins as devDependencies (despite the fact they aren't peerDependencies of @preact/preset-vite) fixes this, but seriously.

### index.html

In my webpack toolchain, I used a plugin to auto-generate index.html in the build. I am not used to seeing or configuring it, but apparently in Vite it isn't supposed to be hidden? Could not find a plugin to auto-generate it...

### git submodules

Typically cloning a git repo doesn't clone the submodules of the repo unless `--recursive` is used. In some cases, this is bad as code directly relies on the submodule being present. In our case, it doesn't matter as Yarn Zero-Installs keeps a cached version of it. That however means whenever the submodule is updated, `yarn` has to be run again to update it.
