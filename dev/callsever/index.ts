import Netrol from '../../index'

// import apis from './apis'
// import headers from './headers'
// import leach from './leach'
// let moduleA = {
//   apis: {
//     demo: {
//       method: 'post',
//       url: '/post'
//     }
//   }
// }
export default Netrol.create({
  baseUrl: '/apis',
  apis: {
    demo: {
      method: 'pOst',
      url: '/post'
    }
  },
  headers: {
  },
  leach: {
    demo (data) {
      console.log(data)
      return data
    }
  },
})