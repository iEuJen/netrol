// 导入适配器
import adapters from '@/adapters/index'

export default function (config: Record<string, any>) {
  // console.log(config)
  // 调用适配器
  return adapters(config).then(res => {
    // console.log('-------', res)
    // http 状态码 在 200 - 300 之间， 返回数据
    if (res.status >= 200 && res.status < 300) {
      return res
    } else {
      return Promise.reject(res.statusText)
    }
  })
}