import { interceptor as intercept } from './core/interceptor'
import { InterceptorRequest, InterceptorResponse } from './types/interceptor'

export const interceptor = {
  request (inter: InterceptorRequest) {
    intercept.req(inter)
    return this
  },
  response (inter: InterceptorResponse) {
    intercept.res(inter)
    return this
  }
}
