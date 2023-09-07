import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'

import { Global } from '@emotion/react'
import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
