// import demo from './callsever'
// demo()

// 模拟一些测试
/* global XMLHttpRequest */
let http = {
  Interceptor: [],
  use: function (callback: Function) {
    this.Interceptor.push(callback)
  }
}

function xhr (data: object) {
  let promise = new Promise((resolve) => {
    let request = new XMLHttpRequest()
    request.open('post', '/apis/post', true)
    request.onload = () => {
      let data = JSON.parse(request.responseText)
      resolve(data)
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(data))
  })
  http.Interceptor.forEach(item => {
    promise = promise.then(item)
  })
  return promise
}

// 实现拦截器
http.use(function (data) {
  console.log(1, data)
  data[1] = 233
  return data
})
http.use(function (data) {
  console.log(2, data)
  data[2] = 666
  return data
})
http.use(function (data) {
  console.log(3, data)
  data[3] = 3
  return data
})

;(async () => {
  let res = await xhr({ a: 2 })
  console.log('end', res)
})()