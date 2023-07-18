/* eslint-disable array-callback-return */
import { produce } from 'immer'
import { ActionTypes } from './actions'

interface LicitacoesState {
  key_words: string[]
  negative_key_words: string[]
  UF: string | null
}

export function licitacoesReducer(state: LicitacoesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_KEY_WORLD: {
      return produce(state, (draft) => {
        draft.key_words.push(action.payload.newWord)
      })
    }
    case ActionTypes.REMOVE_KEY_WORLD: {
      return produce(state, (draft) => {
        const keyWords = draft.key_words.filter((keyWord) => {
          if (keyWord !== action.payload.word) {
            return keyWord
          }
        })

        draft.key_words = keyWords
      })
    }
    case ActionTypes.ADD_NEW_NEGATIVE_KEY_WORLD: {
      return produce(state, (draft) => {
        draft.negative_key_words.push(action.payload.newWord)
      })
    }
    case ActionTypes.REMOVE_NEGATIVE_KEY_WORLD: {
      return produce(state, (draft) => {
        const keyWords = draft.negative_key_words.filter((keyWord) => {
          if (keyWord !== action.payload.word) {
            return keyWord
          }
        })

        draft.negative_key_words = keyWords
      })
    }

    case ActionTypes.CHANGE_STATE: {
      return produce(state, (draft) => {
        draft.UF = action.payload.state
      })
    }

    case ActionTypes.FAVORITE_LICITACOES: {
      return produce(state, (draft) => {})
    }
  }
}
