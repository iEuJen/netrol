import { Netrol } from './core/Netrol'
import { NetrolOptions } from './types/netrol'

/**
 * 生成 netrol 实例并返回请求方法的函数
 */
let netrol: Netrol = null
export function create (options: NetrolOptions) {
  if (netrol) return console.warn('netrol instance is only')
  netrol = new Netrol(options)

  return (name: string, data?: any) => {
    return netrol.request(name, data)
  }
}
