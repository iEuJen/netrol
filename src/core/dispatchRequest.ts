import adapters from '../adapters/index'
import { AdaptersRequest } from '../types/adapters'
import { ResponseData } from '../types/responseData'
import { AdaptersHook } from './AdaptersHook'
import createError, { ErrorType } from './createError'
import { requestPool } from './requestPool'

// 默认请求头
const defaultHeaders = {
  'Content-Type': 'application/json;charset=utf-8',
  Accept: 'application/json, text/plain, */*'
}

export function dispatchRequest (config: AdaptersRequest): Promise<Error | ResponseData> {
  config.headers = {
    ...defaultHeaders,
    ...config.headers
  }

  // 节流处理，同一时间不可对同一接口进行两次请求
  const isExist = requestPool.isExist(config.name)
  if (isExist) return createError('Not an error; Triggered throttle;', ErrorType.THROTTLE, true) as Promise<Error>

  return new Promise((resolve, reject) => {
    // 生成钩子实例
    const adaptersHook = new AdaptersHook(config, res => resolve(res), err => reject(err))
    // 调用适配器
    adapters(config, adaptersHook)
  })
}
