/* eslint-disable */
import netrol from './callsever/index'

// netrol('null', { b: 666 })
// netrol('post1', { a: 233 })
// .then(res => {
//   console.log(res)
// })
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
// let formdata = new FormData()
// formdata.append('a', 'b')

// netrol('error', formdata)
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err)
// })
// netrol('moduleA.post3', { a: 666 })

// netrol('post2')
// .then(res => {
//   console.log(res)
// })