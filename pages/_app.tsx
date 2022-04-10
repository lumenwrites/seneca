import '../styles/style.scss'
import type { AppProps } from 'next/app'

// Next app props type
// https://nextjs.org/docs/basic-features/typescript
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
