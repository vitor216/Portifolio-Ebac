import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Vitor de Aguiar</Titulo>
      <Paragrafo tipo="secundario" fontSise={16}>
        vitor216
      </Paragrafo>
      <Descricao tipo="principal" fontSise={12}>
        Analista d Sistemas
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
