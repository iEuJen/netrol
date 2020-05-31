import Netrol from './core/Netrol'
import { NetrolOptions } from './interfaces/index'
/**
 * 创建一个 netrol 实例
 */
export default function (options: NetrolOptions): Function {
  let netrol = new Netrol(options)
  console.log(netrol)
  console.log('------------')
  return (apiName: string, data: object) => {
    return netrol.request(apiName, data)
  }
}