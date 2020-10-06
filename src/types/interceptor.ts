import { AdaptersRequest } from './adapters'
import { ResponseData } from './responseData'

// 停止promise链函数
type Stop = () => Promise<Error>

// 请求拦截器
type InterceptorRequest = (config: AdaptersRequest,) => AdaptersRequest

// 响应拦截器
type InterceptorResponse = (response: ResponseData | unknown, stop: Stop) => ResponseData | Promise<Error>

export {
  InterceptorRequest,
  InterceptorResponse,
  Stop
}
