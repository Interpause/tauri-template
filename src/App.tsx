import { Logo } from './Logo'
import tw, { css, GlobalStyles as BaseStyles, styled } from 'twin.macro'

const Page = tw.div`absolute inset-0`

const Banner = styled(Page)`
  ${tw`text-center text-white text-2xl pt-[50px] bg-purple-400`}
  a {
    ${tw`hover:(text-[#5050a9] underline)`}
    text-decoration-line: none;
  }
`

export function App() {
  return (
    <>
      <BaseStyles />
      <Banner>
        <Logo />
        <p>
          Hello <a href='https://vitejs.dev/'>Vite</a> +{' '}
          <a href='https://preactjs.com/'>Preact</a>!
        </p>
        <p tw='text-lg'>
          + <a href='https://tauri.studio/'>Tauri</a> +{' '}
          <a href='https://yarnpkg.com/features/zero-installs'>
            Yarn 2 Zero Installs
          </a>{' '}
          + <a href='https://github.com/ben-rogerson/twin.macro'>twin.macro</a>{' '}
          + <a href='https://emotion.sh/docs/introduction'>Emotion</a>
        </p>
        <p tw='text-base'>Now with live refresh instead of HMR!</p>
        <p>Click the names above to learn more!</p>
        <p tw='text-green-400'>Test tw property</p>
        <p
          css={css`
            ${tw`text-green-400`}
            span {
              color: green;
            }
          `}
        >
          Test <span>css</span> property
        </p>
      </Banner>
    </>
  )
}
