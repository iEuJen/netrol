import { Stop } from './interceptor'

// api
interface OptionsApi {
  url: string,
  method: string
}
// apis
interface OptionsApis {
  [key: string]: string | OptionsApi
}

type leach = (res: unknown, stop: Stop) => Promise<any> | any

interface NetrolApi {
  url: string,
  method: string,
  leach?: leach,
  timeout?: number,
  headers?: Record<string, string>
}
interface NetrolApis {
  [key: string]: NetrolApi
}

// config
interface Config {
  baseUrl?: string, // url默认部分（域名）
  headers?: Record<string, string>, // 请求头
  timeout?: number, // 超时时间
  defaultMethod?: string, // 默认请求方法
}
// 模块详情
interface ModuleDetail {
  apis: OptionsApis,
  leach?: Record<string, leach>,
  config?: Config,
}

// 模块
interface Modules {
  [key: string]: ModuleDetail,
}

// Netrol 构造函数接受的配置对象
interface NetrolOptions {
  apis: OptionsApis,
  leach?: Record<string, leach>,
  module?: Modules,
  config?: Config,
}

export {
  OptionsApis,
  OptionsApi,
  NetrolApis,
  NetrolApi,
  NetrolOptions,
  ModuleDetail,
  Modules,
  Config
}
