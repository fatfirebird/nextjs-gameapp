import React from 'react'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import { ThemeProvider } from 'styled-components'

import { theme, gridTheme } from '../src/styles/theme'

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
