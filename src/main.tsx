import { render } from 'preact'
import { setup as twindSetup } from '@twind/preact'

import { App } from './app'
import twindConfig from './twind.config'

twindSetup(twindConfig)
render(<App />, document.getElementById('app')!)
