import { BASE_URL, TIME_OUT } from './config'
import IYRequest from './request'
// import { localCache } from '@/utils'

// import { LOGIN_TOKEN } from '@/global/constant'

export const iyRequest = new IYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // const token = localCache.getCache(LOGIN_TOKEN)
      // if (config.headers && token) {
      //   config.headers.Authorization = 'Bearer ' + token
      // }
      return config
    }
  }
})
export default iyRequest
