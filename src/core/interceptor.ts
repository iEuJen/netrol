import { InterceptorRequest, InterceptorResponse } from '../types/interceptor'

class Interceptor {
  request: InterceptorRequest[] = []
  response: InterceptorResponse[] = []

  req (inter: InterceptorRequest) {
    this.request.push(inter)
  }

  res (inter: InterceptorResponse) {
    this.response.push(inter)
  }
}

export const interceptor = new Interceptor()
