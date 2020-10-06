/* global  XMLHttpRequest */
import { ResponseData } from '../types/responseData'

/**
 * 生成响应数据
 */
export function createResponseData (xhr: XMLHttpRequest): ResponseData {
  let data = !xhr.responseType || xhr.responseType === 'text' ? xhr.responseText : xhr.response
  // 将字符串响应数据，转换为 JSON
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) { /* Ignore */ }
  }

  return {
    body: data,
    xhr,
    status: xhr.status,
    statusText: xhr.statusText
  }
}
