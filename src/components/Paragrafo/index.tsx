import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSise?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSise }: Props) => (
  <P fontSise={fontSise} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
