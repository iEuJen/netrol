/* global  XMLHttpRequest */
// 引入请求池
import requestPool from '@/core/requestPool'
// 引入工具类
import utils from '@/utils/index'
// 引入生成响应数据的函数
import responseDataCreate from '@/core/responseDataCreate'

export default function (config: Record<string, any>): Promise<any> {
  // 解构配置项
  let { headers, method, url, data } = config

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

    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== XMLHttpRequest.DONE) return
      if ( xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0) ) return
      
      // 移除请求池中对应的api
      requestPool.delete(config.apiName)

      resolve( responseDataCreate(xhr) )
      xhr = null
    }

    xhr.onerror = function () {
      // 移除请求池中对应的api
      requestPool.delete(config.apiName)

      reject(new Error('a error'))
      xhr = null
    }
    
    if (!data) {
      data = null
    }

    xhr.send(data)
  })
}