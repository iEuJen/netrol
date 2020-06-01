import Netrol from '../../index'

import apis from './apis'
import headers from './headers'
import leach from './leach'

import moduleA from './moduleA/index'

export default Netrol.create({
  baseUrl: '/apis',
  apis,
  headers,
  leach,
  module: {
    moduleA
  }
})