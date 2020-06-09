/* eslint-disable */
import netrol from './callsever/index'

netrol('error', { a: 233 })
.then(res => {
  console.log(res)
})

netrol('post1', { a: 233 })
.then(res => {
  console.log(res)
})
// netrol('post1', { a: 233 })
// .then(res => {
//   console.log(res)
// })