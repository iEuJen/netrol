import { create } from '../../dist/netrol.esm'
import apis from './apis'
import leach from './leach'
import get from './get/index'

const request = create({
  config: {
    baseUrl: 'http://localhost:3000',
    defaultMethod: 'post'
  },
  apis,
  leach,
  module: {
    get
  }
})

export { request }
