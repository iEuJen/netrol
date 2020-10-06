/* global  XMLHttpRequest */
import { AdaptersRequest, AdaptersHook } from '../types/adapters'
import { isFormData } from '../helpers/index'

export default function (config: AdaptersRequest, hook: AdaptersHook) {
  // 解构请求配置项
  let { headers, method, url, data, timeout } = config

  let xhr = new XMLHttpRequest()

  xhr.open(method, url, true)

  // 如果传给后端的数据为 FormData 格式，则移除 content-type，让浏览器自己设置
  if (data && isFormData(data)) {
    delete headers['Content-Type']
  }

  // 设置请求头
  Object.entries(headers).forEach(([key, val]) => {
    xhr.setRequestHeader(key, val as string)
  })

  // 设置超时
  xhr.timeout = timeout

  // 请求状态变化
  xhr.onreadystatechange = function () {
    if (!xhr || xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) return

    hook.success()
    xhr = null
  }

  // 超时处理
  xhr.ontimeout = function () {
    hook.timeout()
    xhr = null
  }

  // 请求报错
  xhr.onerror = function () {
    hook.error()
    xhr = null
  }

  // 请求被取消
  xhr.onabort = function () {
    hook.abort()
    xhr = null
  }

  // data 为空，则置为 null
  if (!data) {
    data = null
  }

  hook.start(xhr)

  xhr.send(data)
}
