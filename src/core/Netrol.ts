import { NetrolOptions, NetrolApis, OptionsApi, NetrolApi, Config } from '../types/netrol'
import { AdaptersRequest } from '../types/adapters'
import { appendQueryToUrl, isArrayBuffer, isBlob, isFile, isFormData, isObject, isStream } from '../helpers/index'
import createError, { ErrorType } from './createError'
import { dispatchRequest } from './dispatchRequest'
import { interceptor } from './interceptor'

export class Netrol {
  apis: NetrolApis = {}

  constructor (options: NetrolOptions) {
    this.parseOption(options)
  }

  // 解析构造函数选项
  private parseOption (options: NetrolOptions, moduleName?: string, mainConfig?: Config) {
    const { apis, leach, module, config = {} } = options
    const { defaultMethod, baseUrl, timeout, headers } = config

    // 检查 apis 是否存在
    if (!apis) throw createError('apis is required in constructor', ErrorType.FAIL)

    // 遍历 生成 apis
    Object.keys(apis).forEach(key => {
      const value = apis[key]

      const api: NetrolApi = this.createApi(
        value,
        baseUrl || mainConfig?.baseUrl,
        defaultMethod || mainConfig?.defaultMethod || 'get'
      )

      api.headers = {
        ...mainConfig?.headers,
        ...headers
      }

      api.timeout = timeout || mainConfig?.timeout || 0
      if (timeout === 0) api.timeout = 0 // 如何是0，那还是赋0值

      // 判断是否存在过滤器
      if (leach && leach[key]) {
        api.leach = leach[key]
      }

      // 添加到 apis 上
      this.apis[moduleName ? `${moduleName}.${key}` : key] = api
    })

    if (!module) return
    // 处理模块
    Object.keys(module).forEach(key => {
      this.parseOption(module[key], key, config)
    })
  }

  private createApi (api: OptionsApi | string, baseUrl: string, defaultMethod: string): NetrolApi {
    let netrolApi: NetrolApi
    if (isObject(api)) {
      netrolApi = {
        url: `${baseUrl}${(api as OptionsApi).url}`,
        method: (api as OptionsApi).method.toLowerCase()
      }
    } else {
      netrolApi = {
        url: `${baseUrl}${api as string}`,
        method: defaultMethod.toLowerCase()
      }
    }
    return netrolApi
  }

  // 发起请求
  request (name: string, data?: any): Promise<any> {
    const api = this.apis[name]
    // 判断对应 name 的 api 是否存在
    if (!api) return createError(`api ${name} is not exist`, ErrorType.FAIL, true) as Promise<Error>
    // 定义请求配置
    const config = {
      name,
      data,
      headers: api.headers,
      method: api.method,
      url: api.url,
      timeout: api.timeout
    }

    // 请求为get请求，且存在data
    if (config.data && config.method === 'get') {
      // 将data存放到url上
      config.url = appendQueryToUrl(config.url, data)
      config.data = null
    }

    // promise 链数组
    const chain: Array<any> = [this.transformData, dispatchRequest]

    // 将拦截器添加到promise链上
    interceptor.request.forEach(inter => {
      chain.unshift(inter)
    })
    interceptor.response.forEach(inter => {
      chain.push((res) => {
        return inter(res, this.stop)
      })
    })

    // 添加过滤器
    if (api.leach) {
      chain.push((res) => {
        return api.leach(res, this.stop)
      })
    }

    // 串连promise链
    let promise = Promise.resolve(config)
    while (chain.length) {
      promise = promise.then(chain.shift())
    }
    return promise
  }

  // 终止promise的函数
  stop (): Promise<Error> {
    return createError('Not an error; promise stop;', ErrorType.STOP, true) as Promise<Error>
  }

  /**
   * 转换请求数据, 作为请求拦截器的一环
   * @param data
   */
  transformData (config: AdaptersRequest) {
    const data = config.data
    if (typeof data === 'string') return Promise.resolve(config)
    // 特殊对象，直接返回
    if (
      isFormData(data) ||
      isArrayBuffer(data) ||
      isStream(data) ||
      isFile(data) ||
      isBlob(data)
    ) {
      return Promise.resolve(config)
    }

    // 普通对象，转为 JSON 字符串
    if (isObject(data)) {
      return Promise.resolve({
        ...config,
        data: JSON.stringify(data)
      })
    }

    // 未知情况，直接返回
    return Promise.resolve(config)
  }
}
