import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { APP_ID, API_BASE } from '@env'

const instance = axios.create({
  baseURL: API_BASE
})

instance.interceptors.request.use(
  function (config): AxiosRequestConfig {
    config.params['APP_ID'] = APP_ID
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (res): AxiosResponse {
    return res.data.main
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
