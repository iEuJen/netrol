import Netrol from 'netrol'

import apis from './apis'
import headers from './headers'
import leach from './leach'

export default Netrol.create({
  apis,
  headers,
  leach,
})