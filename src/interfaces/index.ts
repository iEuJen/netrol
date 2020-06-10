// config
interface Config {
  baseUrl?: string, // url默认部分（域名）
  headers?: Record<string, any>, // 请求头
  timeout?: Number, // 超时时间
  request?: Function, // 请求拦截器
  response?: Function, // 响应拦截器
  // throttle?: Boolean, // 是否开启节流，此功能也许不可开放
}
// Netrol 模块详情
interface ModuleDetail {
  apis: Record<string, any>,
  config?: Config,
  leach?: Record<string, any>,
}
// Netrol 模块
interface Module {
  [key: string]: ModuleDetail,
}
// Netrol 构造函数接受的配置对象
interface NetrolOptions {
  apis: Record<string, any>,
  config?: Config,
  leach?: Record<string, any>,
  module?: Module,
}

export {
  NetrolOptions
}