import Netrol, { toCatch, timeoutHander, cancel } from '../../index'

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

setTimeout(() => {
  console.log(cancel('timeout'))
}, 2000)
/* eslint-disable */
export default Netrol.create({
  config: {
    baseUrl: '/apis',
    headers,
    // timeout: 5000,
    response (res) {
      console.log(res)
      return res
    },
    request (config) {
      // console.log(config)
      return config
    }
  },
  apis,
  leach,
  module: {
    moduleA
  }
})