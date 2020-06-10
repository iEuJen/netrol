/* global  XMLHttpRequest */
// 引入请求池
import requestPool from '@/core/requestPool'
// 引入工具类
import utils from '@/utils/index'
// 引入生成响应数据的函数
import responseDataCreate from '@/core/responseDataCreate'
// 引入创建一个错误
import createError, { ErrorType } from '@/core/createError'
// 引入捕获器
import catcher from '@/core/catcher'

export default function (config: Record<string, any>): Promise<any> {
  // 解构配置项
  let { headers, method, url, data, timeout, apiName } = config

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    
    xhr.open(method, url, true)

    // 如果传给后端的数据为 FormData 格式，则移除 content-type，让浏览器自己设置
    if ( data && utils.isFormData(data) ) {
      delete headers['Content-Type']
    }

    // 设置请求头
    Object.entries(headers).forEach(([key, val]) => {
      xhr.setRequestHeader(key, val as string)
    })

    // 设置超时
    if (timeout) {
      xhr.timeout = timeout
    }

    // 请求状态变化
    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== XMLHttpRequest.DONE) return
      if ( xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0) ) return
      
      // 移除请求池中对应的api
      requestPool.delete(apiName)

      resolve( responseDataCreate(xhr) )
      xhr = null
    }

    // 超时处理
    xhr.ontimeout = function () {
      // 移除请求池中对应的api
      requestPool.delete(apiName)

      // 执行超时处理器
      catcher.timeoutHander && catcher.timeoutHander({
        name: apiName,
        method,
        url,
        timeout,
        data
      })

      reject( createError(`timeout of ${timeout} ms exceeded`, ErrorType.TIMEOUT) )
      xhr = null
    }

    // 报错
    xhr.onerror = function () {
      // 移除请求池中对应的api
      requestPool.delete(apiName)

      reject( createError('Network Error', ErrorType.FAIL) )
      xhr = null
    }
    
    if (!data) {
      data = null
    }

    xhr.send(data)
  })
}