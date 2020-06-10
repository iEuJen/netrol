import Netrol from './core/Netrol'
import { NetrolOptions } from './interfaces/index'
/**
 * 创建一个 netrol 实例
 */
let netrol: Netrol = null
export default function (options: NetrolOptions): Function {
  // 只允许单例存在
  if (!netrol) {
    netrol = new Netrol(options)
  } else {
    console.warn('netrol instance is only')
  }
  return (apiName: string, data: any) => {
    return netrol.request(apiName, data)
  }
}