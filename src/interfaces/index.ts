// Netrol 模块详情
interface ModuleDetail {
  apis: Record<string, any>,
  baseUrl?: string,
  headers?: Record<string, any>,
  leach?: Record<string, any>,
}
// Netrol 模块
interface ConfigModule {
  [key: string]: ModuleDetail
}
// Netrol 构造函数接受的配置对象
interface NetrolOptions {
  apis: Record<string, any>,
  baseUrl?: string,
  headers?: Record<string, any>,
  leach?: Record<string, any>,
  module?: ConfigModule
}

export {
  NetrolOptions
}