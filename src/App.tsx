import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'
import { ThemeProvider } from 'styled-components'
import { LicitacoesProvider } from './contexts/LicitacoesContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <LicitacoesProvider>
          <Router />
        </LicitacoesProvider>
      </HashRouter>
    </ThemeProvider>
  )
}
