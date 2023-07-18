import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://alertalicitacao.com.br/api/v1/',
})
