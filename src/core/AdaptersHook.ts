import { AdaptersRequest } from '../types/adapters'
import catcher from './catcher'
import createError, { ErrorType } from './createError'
/* global  XMLHttpRequest */
import { createResponseData } from './createResponseData'
import { progressListener } from './progress/listener'
import { toListening } from './progress/toListening'
import { requestPool } from './requestPool'
/**
 * 适配器钩子对象
 */

export class AdaptersHook {
  xhr = null
  resolve = null
  reject = null
  requestConfig = null

  constructor (config: AdaptersRequest, resolve: Function, reject: Function) {
    this.requestConfig = config
    this.resolve = resolve
    this.reject = reject
  }

  // 接口发起请求，接收并保存 xhr 对象
  start (xhr: XMLHttpRequest) {
    const name = this.requestConfig.name

    requestPool.add(name, xhr)

    // 判断当前 apiName 是否存在进度监听器，存在则进行监听
    if (progressListener.isExist('upload', name)) {
      toListening('upload', name, xhr)
    }
    if (progressListener.isExist('download', name)) {
      toListening('download', name, xhr)
    }

    this.xhr = xhr
  }

  // 请求成功有了结果
  success () {
    requestPool.remove(this.requestConfig.name)
    const response = createResponseData(this.xhr)
    if (response.status >= 200 && response.status < 300) return this.resolve(response)
    // 触发对应的状态捕获器，根据返回结果，判断是否存在状态捕获器，并响应不同提醒
    const result = catcher.trigger(response.status)
    if (result) {
      this.reject(
        createError(`Not an error; promise stop; https status ${response.status} be catched`, ErrorType.STOP)
      )
    } else {
      this.reject(
        createError(`request failed with status code ${response.status}`, ErrorType.STATUS, false, { code: response.status })
      )
    }
  }

  // 接口超时
  timeout () {
    const { name, method, url, timeout, data } = this.requestConfig
    requestPool.remove(name)
    // 触发超时处理器，并传递接口信息
    catcher.timeoutHander && catcher.timeoutHander({
      apiName: name,
      method,
      url,
      timeout,
      data
    })
    this.reject(
      createError(`timeout of ${timeout} ms exceeded`, ErrorType.TIMEOUT)
    )
  }

  // 发生错误
  error () {
    requestPool.remove(this.requestConfig.name)
    this.reject(
      createError('Network Error', ErrorType.FAIL)
    )
  }

  // 请求被取消
  abort () {
    requestPool.remove(this.requestConfig.name)
    this.reject(
      createError('Request cancelled', ErrorType.CANCELED)
    )
  }
}
