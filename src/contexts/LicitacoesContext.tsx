/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useReducer,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { licitacoesReducer } from '../reducers/Licitacoes/reducer'
import { api } from '../lib/axios'
import {
  // eslint-disable-next-line no-unused-vars
  ActionTypes,
  addNegativeNewKeyWordAction,
  addNewKeyWordAction,
  changeStateAction,
  removeKeyWordAction,
  removeNegativeKeyWordAction,
} from '../reducers/Licitacoes/actions'

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

interface LicitacoesContextType {
  key_words: string[]
  negative_key_words: string[]
  UF: string
  fetchedLicitacoes: FetchedLicitacoesProps
  addNewKeyWord: (newWord: string) => void
  removeKeyWord: (word: string) => void
  addNewNegativeKeyWord: (newWord: string) => void
  removeNegativeKeyWord: (word: string) => void
  changeState: (state: string) => void
}

export const LicitacoesContext = createContext({} as LicitacoesContextType)

interface LicitacoesProviderProps {
  children: ReactNode
}

export function LicitacoesProvider({ children }: LicitacoesProviderProps) {
  const [licitacoesState, dispatch] = useReducer(
    licitacoesReducer,
    {
      key_words: [],
      negative_key_words: [],
      UF: '',
    },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@licitacoes:licitacoes-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return {
        key_words: [],
        negative_key_words: [],
        UF: '',
      }
    },
  )

  const { key_words, negative_key_words, UF } = licitacoesState

  const [fetchedLicitacoes, setFetchedLicitacoes] =
    useState<FetchedLicitacoesProps>({
      erros: [],
      licitacoes: [],
      licitacoesNestaPagina: 0,
      licitacoesPorPagina: 0,
      paginas: 0,
      totalErros: 0,
      totalLicitacoes: 0,
    })

  const keyWordInString = () => {
    let nestKeywords = ''
    for (let i = 0; i < key_words.length; i++) {
      if (i === 0) {
        nestKeywords = `"${key_words[i]}"`
      } else {
        nestKeywords = nestKeywords + `, "${key_words[i]}"`
      }
    }
    for (let i = 0; i < negative_key_words.length; i++) {
      nestKeywords = nestKeywords + `, -"${negative_key_words[i]}"`
    }
    return nestKeywords
  }

  const fetchLicitacoes = useCallback(async () => {
    const response = await api.get('licitacoesAbertas/', {
      params: {
        uf: UF === 'none' ? '' : UF,
        token: 'abcdefabcdefabcdefabcdefabcdef99',
        palavra_chave: keyWordInString(),
        modalidade: 5,
      },
    })

    setFetchedLicitacoes(response.data)
  }, [licitacoesState])

  useEffect(() => {
    fetchLicitacoes()
  }, [fetchLicitacoes])

  function addNewKeyWord(newWord: string) {
    dispatch(addNewKeyWordAction(newWord))
  }

  function removeKeyWord(word: string) {
    dispatch(removeKeyWordAction(word))
  }

  function addNewNegativeKeyWord(newWord: string) {
    dispatch(addNegativeNewKeyWordAction(newWord))
  }

  function removeNegativeKeyWord(word: string) {
    dispatch(removeNegativeKeyWordAction(word))
  }

  function changeState(state: string) {
    dispatch(changeStateAction(state))
  }

  useEffect(() => {
    const StateJSON = JSON.stringify(licitacoesState)

    localStorage.setItem('@licitacoes:licitacoes-state-1.0.0', StateJSON)
  }, [licitacoesState])

  return (
    <LicitacoesContext.Provider
      value={{
        key_words,
        negative_key_words,
        UF,
        fetchedLicitacoes,
        addNewKeyWord,
        removeKeyWord,
        addNewNegativeKeyWord,
        removeNegativeKeyWord,
        changeState,
      }}
    >
      {children}
    </LicitacoesContext.Provider>
  )
}
