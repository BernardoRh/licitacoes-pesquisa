/* eslint-disable camelcase */
import {
  HomeContainer,
  SearchForm,
  KeyWordsContainer,
  KeyWords,
} from './styles'
import { KeyReturn, MagnifyingGlass, X } from 'phosphor-react'
import { Licitacoes } from './components/Licitacoes'
import { ChangeEvent, useContext, useState } from 'react'
import { LicitacoesContext } from '../../contexts/LicitacoesContext'

interface LicitacoesProps {
  id_licitacao: string
  titulo: string
  municipio_IBGE: string
  uf: string
  orgao: string
  abertura_datetime: string
  objeto: string
  link: string
  linkExterno: string
  municipio: string
  abertura: string
  aberturaComHora: string
  id_tipo: string
  tipo: string
  valor: string
  id_portal: string
}

export interface FetchedLicitacoesProps {
  erros: any[]
  totalErros: number
  totalLicitacoes: number
  paginas: number
  licitacoesPorPagina: number
  licitacoesNestaPagina: number
  licitacoes: LicitacoesProps[]
}

export function Home() {
  const {
    key_words,
    negative_key_words,
    UF,
    removeNegativeKeyWord,
    addNewNegativeKeyWord,
    addNewKeyWord,
    removeKeyWord,
    changeState,
  } = useContext(LicitacoesContext)

  const [newKeyWord, setNewKeyWord] = useState('')
  const [newNegativeKeyWord, setNewNegativeKeyWord] = useState('')

  function handleAddKeyWord(event: { key: string }) {
    if (event.key === 'Enter') {
      addNewKeyWord(newKeyWord)
      setNewKeyWord('')
    }
  }

  function handleAddNegativeKeyWord(event: { key: string }) {
    if (event.key === 'Enter') {
      addNewNegativeKeyWord(newNegativeKeyWord)
      setNewNegativeKeyWord('')
    }
  }

  function handleChangeNewKeyWord(event: ChangeEvent<HTMLInputElement>) {
    setNewKeyWord(event.target.value)
  }

  function handleChangeNewNegativeKeyWord(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setNewNegativeKeyWord(event.target.value)
  }

  function handleDeleteKeyWord(word: string) {
    removeKeyWord(word)
  }

  function handleDeleteNegativeKeyWord(word: string) {
    removeNegativeKeyWord(word)
  }

  function handleChangeState(event: ChangeEvent<HTMLSelectElement>) {
    changeState(event.target.value)
  }

  return (
    <HomeContainer>
      <SearchForm>
        <KeyWordsContainer>
          <label className="labelInput" htmlFor="positiveWords">
            <input
              type="text"
              id="positiveWords"
              placeholder="Palavras chave positivas"
              onChange={handleChangeNewKeyWord}
              onKeyDown={handleAddKeyWord}
              value={newKeyWord}
            />
            <span>
              <KeyReturn size={38} weight="regular" />
              Enter
            </span>
          </label>
          <KeyWords variant="positive">
            {key_words.map((keyword) => {
              return (
                <span key={keyword}>
                  {keyword}
                  <button
                    onClick={() => {
                      handleDeleteKeyWord(keyword)
                    }}
                  >
                    <X size={24} weight="fill" />
                  </button>
                </span>
              )
            })}
          </KeyWords>
        </KeyWordsContainer>
        <KeyWordsContainer>
          <label className="labelInput" htmlFor="negativeWords">
            <input
              type="text"
              id="negativeWords"
              placeholder="Palavras chave negativas"
              onChange={handleChangeNewNegativeKeyWord}
              onKeyDown={handleAddNegativeKeyWord}
              value={newNegativeKeyWord}
            />
            <span>
              <KeyReturn size={38} weight="regular" />
              Enter
            </span>
          </label>
          <KeyWords variant="negative">
            {negative_key_words.map((keyword) => {
              return (
                <span key={keyword}>
                  {keyword}{' '}
                  <button
                    onClick={() => {
                      handleDeleteNegativeKeyWord(keyword)
                    }}
                  >
                    <X size={24} weight="fill" />
                  </button>
                </span>
              )
            })}
          </KeyWords>
        </KeyWordsContainer>
        <label className="estate" id="estate" htmlFor="estateSelect">
          <span>Estado</span>
          <select
            id="estateSelect"
            name="estateSelect"
            value={UF}
            onChange={handleChangeState}
          >
            <option value="none">Todos</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
        <button type="submit">
          <MagnifyingGlass size={32} weight="bold" />
        </button>
      </SearchForm>
      <Licitacoes />
    </HomeContainer>
  )
}
