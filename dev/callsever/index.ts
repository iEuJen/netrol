import Netrol, { toCatch } from '../../index'

import apis from './apis'
import headers from './headers'
import leach from './leach'

import moduleA from './moduleA/index'

toCatch(500, function () {
  console.log('catch, 500')
})

/* eslint-disable */
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