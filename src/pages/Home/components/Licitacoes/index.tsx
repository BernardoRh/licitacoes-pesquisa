import { Star } from 'phosphor-react'
import {
  Licitacao,
  LicitacaoBody,
  LicitacaoFooter,
  LicitacaoHeader,
  LicitacoesContainer,
} from './styles'
import { useContext } from 'react'
import { LicitacoesContext } from '../../../../contexts/LicitacoesContext'

export function Licitacoes() {
  const { fetchedLicitacoes } = useContext(LicitacoesContext)

  return (
    <LicitacoesContainer>
      {fetchedLicitacoes.licitacoes.map((licitacao) => {
        return (
          <Licitacao
            key={
              licitacao.id_licitacao +
              licitacao.uf +
              licitacao.objeto +
              licitacao.abertura_datetime +
              licitacao.aberturaComHora +
              licitacao.abertura
            }
          >
            <LicitacaoHeader>
              <button>
                <Star size={24} weight="fill" />
              </button>
              <span>
                <h3>{licitacao.uf}</h3> <h3> / </h3>{' '}
                <h3>{licitacao.municipio}</h3>
                <h3> - </h3> <h3>{licitacao.orgao}</h3>
              </span>
              <div>
                <p>{licitacao.titulo}</p>
                <p>{licitacao.aberturaComHora}</p>
                <p>R$ {licitacao.valor}</p>
              </div>
            </LicitacaoHeader>
            <LicitacaoBody>
              <p>{licitacao.objeto}</p>
            </LicitacaoBody>
            <LicitacaoFooter>
              <a href={licitacao.link}>Link</a>
              <a href={licitacao.linkExterno}>Link Externo</a>
              <span>{licitacao.id_licitacao}</span>
            </LicitacaoFooter>
          </Licitacao>
        )
      })}
    </LicitacoesContainer>
  )
}
