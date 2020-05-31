// Netrol 模块详情
interface ModuleDetail {
  apis: object,
  baseUrl?: string,
  headers?: object,
  leach?: object,
}
// Netrol 模块
interface ConfigModule {
  [key: string]: ModuleDetail
}
// Netrol 构造函数接受的配置对象
interface NetrolOptions {
  apis: object,
  baseUrl?: string,
  headers?: object,
  leach?: object,
  module?: ConfigModule
}

export {
  NetrolOptions
}