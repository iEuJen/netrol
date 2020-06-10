import Netrol, { toCatch, timeoutHander } from '../../index'

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
/* eslint-disable */
export default Netrol.create({
  config: {
    baseUrl: '/apis',
    headers,
    timeout: 5000,
    response (res) {
      return res
    },
    request (config) {
      return config
    }
  },
  apis,
  leach,
  module: {
    moduleA
  }
})