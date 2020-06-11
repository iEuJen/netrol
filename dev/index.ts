/* eslint-disable */
import netrol from './callsever/index'
import { toCatch, timeoutHander, cancel, interceptor } from '@/../index'

// netrol('moduleA.post', { a: 2 })
// .then( res => {
//   console.log(res)
// })
// .catch( err => {
//   console.log(err.toJSON())
// })
interceptor.request((config) => {
  console.log('ireq', config)
  // let f = new FormData()
  // f.append('a', '233')
  // config.data = f
  return config
})
interceptor.response(res => {
  console.log('ires', res)
  if (res.body.code === 1) {
    return res.body
  } else {
    return
  }
})

netrol('post', { a: 2 })
.then( res => {
  console.log(res)
})
.catch( err => {
  console.log(err.toJSON())
})
netrol('code', { a: 2 })
.then( res => {
  console.log(res)
})
.catch( err => {
  console.log(err.toJSON())
})

// netrol('text', { a: 2 })
// .then( res => {
//   console.log(res)
// })
// .catch( err => {
//   console.log(err.toJSON())
// })

// netrol('error', { a: 2 })
// .then( res => {
//   console.log(res)
// })
// .catch( err => {
//   console.log(err.toJSON())
// })

// netrol('timeout', { a: 2 })
// .then( res => {
//   console.log(res)
// })
// .catch( err => {
//   console.log(err.toJSON())
// })

timeoutHander((info) => {
  console.log(info)
})

toCatch(500, () => {
  console.log(500, 500)
})

document.body.style.height = '100vh'
document.body.addEventListener('click', () => {
  cancel('timeout')
})