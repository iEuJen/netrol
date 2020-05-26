// 测试服务器
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/post', (req, res) => {
  res.json({
    code: 0,
    data: 233
  })
})

app.listen(port, () => {
  console.log(`Debug server listening on port ${port}!`)
})