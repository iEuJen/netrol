/* global  XMLHttpRequest */

export default function (config: any) {
  // 解析获取配置项
  let { headers, method, url, data } = config

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    
    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr)
        resolve(xhr.responseText)
      }
    }

    xhr.onerror = function () {
      reject(new Error('a error'))
      xhr = null
    }
    
    if (!data) {
      data = null
    }

    xhr.send(data ? JSON.stringify(data) : data)
  })
}