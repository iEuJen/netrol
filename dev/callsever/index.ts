/* eslint-disable */
import Netrol, { toCatch, timeoutHander, cancel, interceptor } from '../../index'

import apis from './apis'
import headers from './headers'
import leach from './leach'

import moduleA from './moduleA/index'

// toCatch(500, function () {
//   console.log('catch, 500')
// })
timeoutHander((data) => {
  console.log('--', data)
})

interceptor.request((config) => {
  console.log('i', config)
  return config
})
interceptor.response((res) => {
  console.log('i', res)
  return res
})

setTimeout(() => {
  console.log(cancel('timeout'))
}, 2000)

export default Netrol.create({
  config: {
    baseUrl: '/apis',
    headers,
  },
  apis,
  leach,
  module: {
    moduleA
  }
})