// 导入接口
import { NetrolOptions } from '@/interfaces/index'
// 导入请求
import dispatchRequest from './dispatchRequest'
// 导入默认请求头
import defaultHeaders from './headers'
// 引入请求池
import requestPool from './requestPool'
// 引入工具方法
import utils from '@/utils/index'
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
  modules: object
  // 请求拦截器
  interceptorRequest: Function

  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  constructor (options: NetrolOptions) {
    let { apis, leach, module, config = {} } = options
    let { headers, baseUrl, request } = config
    // console.log(request)
    // 检查 apis 是否存在
    if (!apis) {
      throw new Error('The create method needs to accept a options object with apis object; create 方法需要接受一个带有 apis属性 的配置对象')
    }
    // 初始化数据
    this.apis = apis
    this.headers = {
      ...defaultHeaders,
      ...headers,
    }
    this.leach = leach
    this.baseUrl = baseUrl || ''
    this.modules = module
    this.interceptorRequest = request
  }

  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis 
   * @param data 传递给服务器的数据
   */
  request (apiName: string, data: object) {
    // 将请求函数，添加到 promise 链数组中
    const chain = [dispatchRequest]
    let promise = null
    // console.log(apiName)
    // 判断是否该请求是否正在执行
    if ( requestPool.isExist(apiName) ) return Promise.resolve(false)
    // 将 apiname 添加到请求池
    requestPool.push(apiName)

    // 根据调用 api，合并配置项
    let config = this.mergeConfig(apiName, data)

    // 如果返回的是 Promise 对象， 则直接返回
    if (config instanceof Promise) return config

    // 如果存在 interceptorRequest 则添加到 promise 链的最前面
    if (config.interceptorRequest) {
      chain.unshift(config.interceptorRequest)
      delete config.interceptorRequest
    }

    // 存在 leach，则添加到 promise 链中
    if (config.leach) {
      chain.push(config.leach)
    }
    delete config.leach
    
    // 连接 promise 链
    promise = Promise.resolve(config)
    while (chain.length) {
      promise = promise.then( chain.shift() )
    }
    
    return promise
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
    let interceptorRequest = this.interceptorRequest

    // 判断调用的是否为 module 中 api
    if ( apiName.includes('.') ) {
      let [module, name] = apiName.split('.')
      let theModule = this.modules[module]

      // 判断传递的 module 是否存在
      if (!theModule) return Promise.reject(new Error(`module ${module} is not exist; 模块 ${module} 不存在`))

      // 判断模块上是否存在配置项
      if (theModule.config) {
        // 模块上如果存在 baseUrl，则更改 baseUrl，则更改
        if (theModule.config.baseUrl) {
          baseUrl = theModule.baseUrl
        }
        // 模块上如果存在 headers，则合并
        if (theModule.config.headers) {
          headers = {
            ...headers,
            ...utils.deepCopy(theModule.config.headers)
          }
        }
        // 如果模块上存在 request（请求拦截器），则进行替换
        if (theModule.config.request) {
          interceptorRequest = theModule.config.request
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
    if (!api) return Promise.reject(new Error(`api ${apiName} is not exist; 接口 ${apiName} 不存在`))

    // 深复制 api
    api = utils.deepCopy(api)

    // 将 api.method 的值，转为英文小写
    api.method = api.method.toLowerCase()
    // 合并 baseUrl 和 api.url
    api.url = `${baseUrl}${api.url}`
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
      leach,
      ...api,
    }
    // data 和 interceptorRequest 存在，则添加到 config 上
    if (data) config.data = this.transformData(data)
    if (interceptorRequest) config.interceptorRequest = interceptorRequest

    // 返回
    return config
  }

  /**
   * 转换请求数据
   * @param data 
   */
  transformData (data) {
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