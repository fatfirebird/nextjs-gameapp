import axios from 'axios'
import { publicRuntimeConfig } from '../../next.config'

// если существует свой ключ - используем его, иначе дефолтный
const key = publicRuntimeConfig.RAWG_API_KEY ?? 'beea7e6e1af940f0b99bbc496d817bac'

const Request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_PROD_URL ?? 'https://api.rawg.io/api/',
  headers: {},
})

Request.interceptors.request.use((config) => ({ ...config, params: { ...config.params, key } }))

export default Request
