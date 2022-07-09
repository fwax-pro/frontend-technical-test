import type { AppProps } from 'next/app'
import { LayoutGroup } from "framer-motion"
import { ThemeProvider, DefaultTheme } from 'styled-components'

import initAxios from '../libs/axios'

import GlobalStyle from '../components/globalstyles'

import '../styles/static.css'


initAxios();

export const theme: DefaultTheme = {
  colors: {
    primary: '#ff6e14',
    secondary: '#fff',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutGroup>
        <GlobalStyle />
        <Component {...pageProps} />
      </LayoutGroup>
    </ThemeProvider>
  )
}

export default MyApp
