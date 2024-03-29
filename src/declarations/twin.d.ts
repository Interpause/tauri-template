import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import styledImport from '@emotion/styled'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'preact' {
  interface ClassAttributes<T> extends Attributes {
    tw?: string | undefined
  }
}
