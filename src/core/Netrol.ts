// 导入接口
import { 
  NetrolOptions,
  ModuleDetail,
  Modules,
  InterceptorRequest,
  InterceptorResponse,
  TransformData 
} from '@/interfaces/index'
// 导入请求
import dispatchRequest from './dispatchRequest'
// 导入默认请求头
import defaultHeaders from './headers'
// 引入请求池
import requestPool from './requestPool'
// 引入工具方法
import utils from '@/utils/index'
// 引入错误创建工具
import createError, { ErrorType } from './createError'

/**
 * Netrol 对象
 */
class Netrol {
  // 管理所有 apis
  apis: object
  // 发送 xhr请求 所需的 Request Headers
  headers: object
  // 响应数据过滤器，用于在请求成功后，接受服务器数据，并进行处理和返回
  leach: object
  // 基本url
  baseUrl: string
  // 模块
  modules: Modules
  // 超时时限
  timeout: number
  // 默认请求方法
  defaultMethod: string

  // 数据转换方法
  transformData: TransformData

  // 请求拦截器
  static interceptorRequest: InterceptorRequest
  // 响应拦截器
  static interceptorResponse: InterceptorResponse

  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  constructor (options: NetrolOptions) {
    let { apis, leach, module, transformData, config = {} } = options
    let { headers, baseUrl, timeout, defaultMethod } = config

    // 检查 apis 是否存在
    if (!apis) throw createError('apis is required in constructor', ErrorType.FAIL)

    // 初始化数据
    this.apis = apis
    this.headers = {
      ...defaultHeaders,
      ...headers,
    }
    this.leach = leach
    this.baseUrl = baseUrl || ''
    this.modules = module
    this.timeout = timeout || 0
    this.defaultMethod = defaultMethod || 'get'
    this.transformData = transformData
  }

  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis 
   * @param data 传递给服务器的数据
   */
  request (apiName: string, data: any) {
    let promise = null
    let chain = null
    
    // 判断是否该请求是否正在执行
    if ( requestPool.isExist(apiName) ) return createError('Triggered throttle;', ErrorType.THROTTLE, true)
    // 将 apiname 添加到请求池
    requestPool.push(apiName)

    // 根据调用 api，合并配置项
    let config = this.mergeConfig(apiName, data)
    // 如果返回的是 Promise 对象， 则直接返回
    if (config instanceof Promise) return config

    // 合并 promise 链
    chain = this.mergePromiseChain(config)

    // 连接 promise 链
    promise = Promise.resolve(config)
    while (chain.length) {
      promise = promise.then( chain.shift() )
    }
    
    return promise
  }

  /**
   * 合并 promise 链
   * @param config 请求配置对象
   */
  mergePromiseChain (config: Record<string, any>) {
    // 将请求函数，添加到 promise 链数组中
    let chain: Array<Function> = [dispatchRequest]

    // 如果存在 interceptorRequest 则添加到 promise 链的最前面
    if (Netrol.interceptorRequest) {
      chain.unshift(Netrol.interceptorRequest)
    }
    // 如果存在 interceptorResponse 则添加到 promise 连上
    if (Netrol.interceptorResponse) {
      chain.push(Netrol.interceptorResponse)

      // 同时添加后续处理函数，当返回值为空值的时候，抛出异常，终止promise
      chain.push((res) => {
        if (!res) return createError('the interceptorResponse return value is void, the promise has been cancelled', ErrorType.CATCHED, true)
        return res
      })
    }

    // 存在 leach，则添加到 promise 链中
    if (config.leach) {
      chain.push(config.leach)
    }
    delete config.leach
    
    return chain
  }

  /**
   * 合并配置项
   * @param apiName 对应调用的接口
   */
  mergeConfig (apiName: string, data: object): Record<string, any> {
    let config = null
    let api = null
    let leach = null
    let headers = utils.deepCopy(this.headers)
    let baseUrl = this.baseUrl
    let timeout = this.timeout
    let defaultMethod = this.defaultMethod
    // 数据转换函数
    let transformData = this.transformData

    // 判断调用的是否为 module 中 api
    if ( apiName.includes('.') ) {
      let [module, name] = apiName.split('.')
      let theModule: ModuleDetail = this.modules[module]

      // 判断传递的 module 是否存在
      if (!theModule) return createError(`module ${module} does not exist; 模块 ${module} 不存在`, ErrorType.FAIL, true)

      // 如果 transformData 方法存在，则重新赋值
      if (theModule.transformData) {
        transformData = theModule.transformData
      }

      // 判断模块上是否存在配置项
      if (theModule.config) {
        // 模块上如果存在 baseUrl，则更改 baseUrl，则更改
        if (theModule.config.baseUrl) {
          baseUrl = theModule.config.baseUrl
        }
        // 模块上如果存在 headers，则合并
        if (theModule.config.headers) {
          headers = {
            ...headers,
            ...utils.deepCopy(theModule.config.headers)
          }
        }
        // 如果模块上存在 timeout，则进行替换
        if (theModule.config.timeout) {
          timeout = theModule.config.timeout
        }
        // 判断模块上是否存在默认请求方法，存在则替换
        if (theModule.config.defaultMethod) {
          defaultMethod = theModule.config.defaultMethod
        }
      }
      
      // 提取 api 和 leach
      api = theModule.apis[name]
      leach = theModule.leach[name]
    } else {
      // 提取 api 和 leach
      api = this.apis[apiName]
      leach = this.leach[apiName]
    }

    // 判断是否找到对应 api
    if (!api) return createError(`api ${apiName} does not exist; 接口 ${apiName} 不存在`, ErrorType.FAIL, true)

    // 判断api是否为对象
    if ( utils.isObject(api) ) {
      // 深复制 api
      api = utils.deepCopy(api)
      // 将 api.method 的值，转为英文小写, method 存在，默认调用 get
      api.method = !api.method ? defaultMethod : api.method.toLowerCase()
      // 合并 baseUrl 和 api.url
      api.url = `${baseUrl}${api.url}`
    } else {
      // 不是对象，则使用默认的方法
      let url = `${baseUrl}${api}`
      api = {
        url,
        method: defaultMethod
      }
    }

    // 合并 headers 和 api.headers
    headers = {
      ...headers,
      ...api.headers
    }
    // 删除 api.headers
    delete api.headers

    // 合并配置项
    config = {
      apiName,
      headers,
      timeout,
      leach,
      ...api,
    }
    
    // data 存在，则将其装换后添加到 config 上
    if (data && !transformData) {
      config.data = this.defaultTransformData(data)
    } else if (data && transformData) {
      config.data = transformData(data)
    }

    // 返回
    return config
  }

  /**
   * 默认的转换请求数据方法
   * @param data 
   */
  defaultTransformData (data) {
    // 特殊对象，直接返回
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data
    }

    // 普通对象，转为 JSON 字符串
    if ( utils.isObject(data) ) {
      return JSON.stringify(data)
    }

    // 未知情况，直接返回
    return data
  }
}

export default Netrol