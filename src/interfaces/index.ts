// config
interface Config {
  baseUrl?: string, // url默认部分（域名）
  headers?: Record<string, any>, // 请求头
  timeout?: Number, // 超时时间
  // throttle?: Boolean, // 是否开启节流，此功能也许不可开放
}
// Netrol 模块详情
interface ModuleDetail {
  apis: Record<string, any>,
  leach?: Record<string, any>,
  config?: Config,
}
// Netrol 模块
interface Modules {
  [key: string]: ModuleDetail,
}
// Netrol 构造函数接受的配置对象
interface NetrolOptions {
  apis: Record<string, any>,
  leach?: Record<string, any>,
  module?: Modules,
  config?: Config,
}

// 请求拦截器
interface InterceptorRequest {
  (config: Record<string, any>): Record<string, any> 
}
// 请求拦截器
interface InterceptorResponse {
  (response: Record<string, any>): Record<string, any> | void
}

export {
  NetrolOptions,
  ModuleDetail,
  Modules,
  InterceptorRequest,
  InterceptorResponse,
}