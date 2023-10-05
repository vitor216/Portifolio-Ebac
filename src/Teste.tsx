import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao> <br />
      <br />
      <Botao fontSize="14px" principal={false}>
        cancelar
      </Botao>{' '}
      <br />
      <br />
      <BotaoPerigo principal={false}>Não clique aqui</BotaoPerigo> <br />
      <br />
      <BotaoPerigo as="a" principal={false}>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
