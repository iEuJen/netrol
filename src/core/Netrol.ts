// 导入接口
import { NetrolOptions } from '@/interfaces/index'
// 导入适配器
import adapters from '@/adapters/index'
// 导入默认请求头
import defaultHeaders from './headers'
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

  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  constructor (options: NetrolOptions) {
    console.log(options)
    let { apis, headers, leach, baseUrl, module } = options
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
  }

  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis 
   * @param data 传递给服务器的数据
   */
  request (apiName: string, data: object) {
    // 根据调用 api，合并配置项
    let config = this.mergeConfig(apiName, data)

    // 如果返回的是 Promise 对象， 则直接返回
    if (config instanceof Promise) return config

    // 调用 adapters
    return adapters(config)
  }

  /**
   * 合并配置项
   * @param apiName 对应调用的接口
   */
  mergeConfig (apiName: string, data: object): any {
    let config = null
    let api = null
    let headers = null
    let baseUrl = this.baseUrl

    // 判断调用的是否为 module 中 api
    if ( apiName.includes('.') ) {
      let [module, name] = apiName.split('.')
      let theModule = this.modules[module]

      // 判断传递的 module 是否存在
      if (!theModule) return Promise.reject(new Error(`module ${module} is not exist; 模块 ${module} 不存在`))

      // 模块上如果存在 baseUrl，则更改 baseUrl，则更改
      if (theModule.baseUrl) {
        baseUrl = theModule.baseUrl
      }
      
      // 提取 api
      api = theModule.apis[name]
    } else {
      api = this.apis[apiName]
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
      ...this.headers,
      ...api.headers
    }
    // 删除 api.headers
    delete api.headers

    // 合并配置项
    config = {
      headers,
      ...api,
    }
    // data 存在，则添加到 config 上
    if (data) config.data = data

    // 返回
    return config
  }
}

export default Netrol