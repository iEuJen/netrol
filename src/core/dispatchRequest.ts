// 导入适配器
import adapters, { STATUS } from '@/adapters/index'
// 导入捕获器
import catcher from '@/helpers/catcher'
// 导入错误创建
import createError, { ErrorType } from './createError'
// 引入请求池
import requestPool from '@/core/requestPool'
// 引入取消xhr请求对象
import cancelRequest from '@/helpers/cancelRequest'

// 响应状态流程控制
const processControl = {
  response ({ data }) {
    if (data.status >= 200 && data.status < 300) return data

    let result = catcher.trigger(data.status)
    if (result) {
      return createError(`Not an error; promise stop; https status ${data.status} be catched`, ErrorType.STOP, true)
    } else {
      return createError(`request failed with status code ${data.status}`, ErrorType.STATUS, true, { code: data.status })
    }
  },
  timeout ({ extra }) {
    let { apiName, method, url, timeout, data } = extra
    // 执行超时处理器
    catcher.timeoutHander && catcher.timeoutHander({
      apiName,
      method,
      url,
      timeout,
      data
    })
    return createError(`timeout of ${timeout} ms exceeded`, ErrorType.TIMEOUT)
  },
  fail () {
    return createError('Network Error', ErrorType.FAIL)
  },
  cancell () {
    return createError('Request cancelled', ErrorType.CANCELED)
  }
}

export default async function (config: Record<string, any>) {
  // console.log(config)
  // 调用适配器
  return adapters(config).then(res => {
    let name = STATUS[res.status] // 状态名
    let { extra } = res
    // 移除请求池中对应的api
    requestPool.delete(extra.apiName)
    // 移除对应xhr
    cancelRequest.remove(extra.apiName)
    // 执行对应流程
    return processControl[name](res)
  })
}