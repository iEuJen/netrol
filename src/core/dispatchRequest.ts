// 导入适配器
import adapters from '@/adapters/index'
// 导入捕获器
import catcher from '@/core/catcher'

export default function (config: Record<string, any>) {
  // console.log(config)
  // 调用适配器
  return adapters(config).then(res => {
    // console.log('-------', res)
    // http 状态码 在 200 - 300 之间， 返回数据
    if (res.status >= 200 && res.status < 300) {
      return res
    } else {
      let result = catcher.trigger(res.status)
      if (result) {
        return Promise.reject(new Error('be catched'))
      } else {
        return Promise.reject(res.statusText)
      }
    }
  })
}