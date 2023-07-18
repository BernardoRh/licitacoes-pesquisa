/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_KEY_WORLD = 'ADD_NEW_KEY_WORLD',
  REMOVE_KEY_WORLD = 'REMOVE_KEY_WORLD',
  ADD_NEW_NEGATIVE_KEY_WORLD = 'ADD_NEW_NEGATIVE_KEY_WORLD',
  REMOVE_NEGATIVE_KEY_WORLD = 'REMOVE_NEGATIVE_KEY_WORLD',
  FAVORITE_LICITACOES = 'FAVORITE_LICITACOES',
  CHANGE_STATE = 'CHANGE_STATE',
}

export function addNewKeyWordAction(newWord: string) {
  return {
    type: ActionTypes.ADD_NEW_KEY_WORLD,
    payload: {
      newWord,
    },
  }
}

export function removeKeyWordAction(word: string) {
  return {
    type: ActionTypes.REMOVE_KEY_WORLD,
    payload: {
      word,
    },
  }
}

export function addNegativeNewKeyWordAction(newWord: string) {
  return {
    type: ActionTypes.ADD_NEW_NEGATIVE_KEY_WORLD,
    payload: {
      newWord,
    },
  }
}

export function removeNegativeKeyWordAction(word: string) {
  return {
    type: ActionTypes.REMOVE_NEGATIVE_KEY_WORLD,
    payload: {
      word,
    },
  }
}

export function changeStateAction(state: string) {
  return {
    type: ActionTypes.CHANGE_STATE,
    payload: {
      state,
    },
  }
}
