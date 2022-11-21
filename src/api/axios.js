import axios from 'axios'
import {getItem} from '@/helpers/persistanceStorage'

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use((config) => {
  const token = getItem('accessToken')
  const authorizationToken = token ? `Token ${token}` : ''
  config.headers.authorization = authorizationToken
  return config
  // Передача authorization = Token *** в headers. Происходит перед then и catch
})

export default axios
