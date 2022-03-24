# tauri-template

Figuring out how to use [Tauri](https://tauri.studio/), then configuring it to match my development style. See [Decisions](#decisions) for what template has been preconfigured with. It wasn't easy to hack things to work. May evolve to become a multiplatform + backend monorepo at some point.

## Decisions

- VSCode-first support
- [Yarn 2 Zero-Installs](https://yarnpkg.com/features/zero-installs)
- [Vite](https://vitejs.dev/) + [Babel](https://babeljs.io/)
- [Preact](https://preactjs.com/) framework (Typescript)
- [twin.macro](https://github.com/ben-rogerson/twin.macro) + [Emotion](https://emotion.sh/docs/introduction) CSS-in-JS

## Recommendations

- Download VSCode: <https://code.visualstudio.com/>
- Add Preact Devtools Extension to browser: <https://preactjs.com/guide/v10/debugging/>
- Enable Yarn 2 through NodeJS Corepack: <https://yarnpkg.com/getting-started/install>

## Quirks

### @preact/preset-vite

Apparently it uses Babel's programmatic API to transform the code. Does not expose allowing user to further customize Babel configuration though. Also it already contains the Preact alias to React.

I created a fork of it with the following features:

- make Babel config accessible so macros work
- remove conflicting Babel plugin to allow Emotion to work
- change npm scripts to allow installing from git without problems

### Note on ESM Dependency Resolution

Yarn 2 PnP ESM Support is as experimental as NodeJS support for ESM. @preact/preset-vite declares certain Babel plugins as dependencies, but yarn is unable to resolve these dependencies correctly. For now, installing these plugins as devDependencies (despite the fact they aren't peerDependencies of @preact/preset-vite) fixes this, but seriously.

### index.html

In my webpack toolchain, I used a plugin to auto-generate index.html in the build. I am not used to seeing or configuring it, but apparently in Vite it isn't supposed to be hidden? Could not find a plugin to auto-generate it...

### git submodules

Typically cloning a git repo doesn't clone the submodules of the repo unless `--recursive` is used. In some cases, this is bad as code directly relies on the submodule being present. In our case, it doesn't matter as Yarn Zero-Installs keeps a cached version of it. That however means whenever the submodule is updated, `yarn` has to be run again to update it.

### @types/react

Guess what? React types are still needed for packages that use React-aliased-to-Preact to type properly.

### HMR

Hot Module Replacement is broken. It detects when changes are made correctly, sends the updated source code correctly, and the updated code is received correctly. However, it doesn't seem to replace the page contents with the new code afterwards. It is likely caused by Emotion's use of Higher Order Components (HOC), which may have glitches for Preact and Prefresh. Either ways, HMR is a difficult and often buggy thing since app state is retained between changes, potentially leading to corruption. Live refresh is probably better in most cases especially since vite builds faster than webpack.
