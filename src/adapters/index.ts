/* global  XMLHttpRequest */
// 引入工具类
import utils from '@/utils/index'
// 引入生成响应数据的函数
import responseDataCreate from '@/helpers/responseDataCreate'
// // 引入取消xhr请求对象
import cancelRequest from '@/helpers/cancelRequest'
// 引入 进度监听器
import progressListener from '@/helpers/progressListener'
// 引入 进度事件处理
import progress from './progress'

// adapter 结果状态
enum STATUS {
  response = 0,
  timeout = 1,
  fail = 2,
  cancell = 3
}

export {
  STATUS
}

export default function (config: Record<string, any>): Promise<any> {
  // 解构配置项
  let { headers, method, url, data, timeout, apiName } = config

  return new Promise(resolve => {
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
      
      resolve({
        status: STATUS.response,
        data: responseDataCreate(xhr),
        extra: {
          apiName
        }
      })
      xhr = null
    }

    // 超时处理
    xhr.ontimeout = function () {
      resolve({ 
        status: STATUS.timeout, 
        timeout,
        extra: {
          apiName,
          method,
          url,
          timeout,
          data
        }
      })
      xhr = null
    }

    // 请求报错
    xhr.onerror = function () {
      resolve({ 
        status: STATUS.fail,
        extra: {
          apiName,
        }
      })
      xhr = null
    }

    // 请求被取消
    xhr.onabort = function () {
      resolve({ 
        status: STATUS.cancell,
        extra: {
          apiName,
        }
      })
      xhr = null
    }

    // 判断当前 apiName 是否存在进度监听器，存在则绑定对应事件
    if ( progressListener.isExist('upload', apiName) ) {
      progress('upload', apiName, xhr)
    }
    if ( progressListener.isExist('download', apiName) ) {
      progress('download', apiName, xhr)
    }
    
    // data 为空，则置为 null
    if (!data) {
      data = null
    }

    // 添加xhr对象到 cancelRequest
    cancelRequest.add(apiName, xhr)

    xhr.send(data)
  })
}