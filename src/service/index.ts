import { local } from './config'
import { VAxios } from './request'

const vAxios = new VAxios({
  baseURL: local.baseURL,
  timeout: local.timeout,
})

export default vAxios
