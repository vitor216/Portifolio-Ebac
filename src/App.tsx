import Projetos from './Cotainers/Projetos'
import Sidebar from './Cotainers/Sidebar'
import Sobre from './Cotainers/Sobre'
import EstiloGlobal, { Container } from './Styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
