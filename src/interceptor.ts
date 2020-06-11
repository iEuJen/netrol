import Netrol from './core/Netrol'
import createError, { ErrorType } from './core/createError'
import { InterceptorResponse, InterceptorRequest } from './interfaces/index'

export default {
  // 绑定请求拦截器
  request (callback: InterceptorRequest) {
    if (Netrol.interceptorRequest) throw createError('interceptorRequest already exists', ErrorType.FAIL)
    Netrol.interceptorRequest = callback
  },
  // 绑定响应拦截器
  response (callback: InterceptorResponse) {
    if (Netrol.interceptorResponse) throw createError('interceptorResponse already exists', ErrorType.FAIL)
    Netrol.interceptorResponse = callback
  }
}