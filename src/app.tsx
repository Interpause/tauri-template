import { Logo } from './logo'
import { tw, setup } from '@twind/preact'
setup()

export function App() {
  return (
    <div tw='absolute inset-0 text(center white 2xl) pt-20 bg-purple-400'>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          tw='text-white'
          href='https://preactjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Preact
        </a>
      </p>
    </div>
  )
}
