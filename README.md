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

<https://github.com/preactjs/preset-vite/pull/47> has already been approved, so its a matter of time till the fork is no longer needed.

### Note on ESM Dependency Resolution

Yarn 2 PnP ESM Support is as experimental as NodeJS support for ESM. `@preact/preset-vite` declares certain Babel plugins as dependencies, but yarn is unable to resolve these dependencies correctly. For now, installing these plugins as devDependencies (despite the fact they aren't peerDependencies of `@preact/preset-vite`) fixes this, but seriously.

### Multi-platform Zero Installs

Certain packages resolve differentially depending on the platform, be it `win32` or `linux`. For example, `esbuild` depends on `esbuild-linux-64` on `linux` but instead depends on `esbuild-windows-64` on `win32`. Hence, when switching between platforms, it has to retrieve said dependencies from online (violating Zero Installs), and will delete dependencies meant for other platforms. The official way to solve this is to specify `supportedArchitectures` in `.yarnrc.yml`:

```yaml
# .yarnrc.yml
supportedArchitectures:
  os:
    - linux
    - win32
    - darwin
```

### index.html

In my webpack toolchain, I used a plugin to auto-generate index.html in the build. I am not used to seeing or configuring it, but apparently in Vite it isn't supposed to be hidden? Could not find a plugin to auto-generate it...

### @types/react

Guess what? React types are still needed for packages that use React-aliased-to-Preact to type properly.
