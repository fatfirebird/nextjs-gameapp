import axios from 'axios'
import { publicRuntimeConfig } from '../../next.config'

const Request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_PROD_URL ?? 'https://api.rawg.io/api/',
  headers: {},
  withCredentials: true,
  params: {
    key: publicRuntimeConfig.RAWG_API_KEY,
  },
})

Request.interceptors.request.use((config) => {
  return config
})

export default Request
