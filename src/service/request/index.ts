import axios from 'axios'
import type { AxiosInstance } from 'axios'

import type { IYRequestConfig } from './type'
//拦截器: 蒙版Loading/token/修改配置
/**
 * 两个难点:
 * 1.拦截器进行精准控制
 * >全局拦截器
 * >实例拦截器
 * >单次请求拦截器
 * 2.响应泛型
 */

// 每个instance都添加拦截器
class IYRequest {
  instance: AxiosInstance
  // request 实例 => axios的实例
  constructor(config: IYRequestConfig) {
    this.instance = axios.create(config)
    //拦截器: 蒙版Loading/token/修改配置
    // 每个instance都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功的拦截')
        // console.log(config)
        return config
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功的拦截')
        // console.log(res.data)
        return res.data
      },
      (err) => {
        // console.log('全局响应失败的拦截')
        console.log(err)
      }
    )

    // 针对特定的iyRequest实例添加蓝旗
    // if (config.interceptors) { //  类型缩小
    //   this.instance.interceptors.request.use(config.interceptors.requestSuccessFn, config.interceptors.requestFailureFn)
    //   this.instance.interceptors.response.use(config.interceptors.responseSuccessFn, config.interceptors.responseFailureFn)
    // }
    // 可选链
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: IYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // 返回的promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          // resolve( res as any as T)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: IYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: IYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: IYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: IYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default IYRequest
