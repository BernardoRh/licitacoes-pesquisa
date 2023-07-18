import { styled } from 'styled-components'

export const LicitacoesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 1.5rem;
`

export const Licitacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme['base-input']};
  padding: 1.5rem 2rem;
  border: 1px solid ${(props) => props.theme['base-hover']};
  border-radius: 8px;
`

export const LicitacaoHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  span {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    position: absolute;
    right: 0;
    cursor: pointer;
    svg {
      fill: ${(props) => props.theme.yellow};
      transition: 0.2s;
    }
    svg:hover {
      fill: ${(props) => props.theme['dark-yellow']};
    }
  }
`

export const LicitacaoBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const LicitacaoFooter = styled.div`
  display: block;
  position: relative;

  a {
    float: left;
    margin: 0 0.5rem 0 0;
  }

  span {
    position: absolute;
    right: 0;
  }
`
