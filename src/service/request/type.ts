import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface IYInterceptor<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  // responseSuccessFn?: (res: any) => any
  responseFailureFn?: (err: any) => any
}
export interface IYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IYInterceptor<T>
}
