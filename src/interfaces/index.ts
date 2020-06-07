// config
interface Config {
  baseUrl?: string, // url默认部分（域名）
  headers?: Record<string, any>, // 请求头
  request?: Function, // 请求拦截器
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