// 导入接口
import { NetrolOptions } from '@/interfaces/index'
// 导入适配器
import adapters from '@/adapters/index'
/**
 * Netrol 对象
 */
class Netrol {
  // 管理所有 apis
  apis: object
  // 发送 xhr请求 所需的 Request Headers
  headers: object = {
    'Content-Type': 'application/json;charset=utf-8'
  }
  
  // 响应数据过滤器，用于在请求成功后，接受服务器数据，并进行处理和返回
  leach: object
  // 基本url
  baseUrl: string

  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  constructor (options: NetrolOptions) {
    console.log(options)
    let { apis, headers, leach, baseUrl } = options
    // 检查 apis 是否存在
    if (!apis) {
      throw new Error('The create method needs to accept a options object with apis object; create 方法需要接受一个带有 apis属性 的配置对象')
    }
    this.apis = apis
    this.headers = {
      ...this.headers,
      ...headers,
    }
    this.leach = leach
    this.baseUrl = baseUrl
  }

  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis 
   * @param data 传递给服务器的数据
   */
  request (apiName: string, data: object) {
    // console.log(apiName)
    console.log(data)
    let api = this.apis[apiName]
    // 检查 api 是否存在
    if (!api) {
      // throw new Error(`api ${apiName} is not exist; api ${apiName} 不存在`)
      return Promise.reject(new Error(`api ${apiName} is not exist; api ${apiName} 不存在`))
    }
    // 将 api method 的值，转为英文小写
    api.method = api.method.toLowerCase()
    console.log(api)
    console.log(this.headers)
  }
}

export default Netrol