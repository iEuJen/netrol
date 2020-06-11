// 测试服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World!'))

// 测试接口
app.get('/text', (req, res) => {
  res.send('普通文本信息')
})

app.post('/post', (req, res) => {
  res.json({
    code: 1,
    result: {
      query: req.body
    },
  })
})

app.post('/code', (req, res) => {
  res.json({
    code: 0,
    result: '状态0，错误',
  })
})

app.post('/error', (req, res) => {
  res.status(500)
  res.send()
})

app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 0,
      data: 'timeout'
    })
  }, 10000)
})

app.listen(port, () => {
  console.log(`Debug server listening on port ${port}!`)
})