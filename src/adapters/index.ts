/* global  XMLHttpRequest */

export default function () {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    
    xhr.open('post', '/apis/post', true)
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

    xhr.send()
  })
}