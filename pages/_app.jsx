import React from 'react'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import { ThemeProvider } from 'styled-components'

import { theme, gridTheme } from '../src/styles/theme'

import 'react-dropdown/style.css'
import 'swiper/swiper.min.css'
import 'normalize.css'

import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GridThemeProvider gridTheme={gridTheme}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GridThemeProvider>
  )
}

export default MyApp
