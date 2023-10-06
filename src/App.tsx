import { ThemeProvider } from 'styled-components'

import Projetos from './Cotainers/Projetos'
import Sidebar from './Cotainers/Sidebar'
import Sobre from './Cotainers/Sobre'
import EstiloGlobal, { Container } from './Styles'
import temaDark from './Themes/dark'
import { useState } from 'react'
import temaLight from './Themes/light'

function App() {
  const [estaUsandoDark, setEstaUsandoDark] = useState(false)

  function trocaTema() {
    setEstaUsandoDark(!estaUsandoDark)
  }

  return (
    <ThemeProvider theme={estaUsandoDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
