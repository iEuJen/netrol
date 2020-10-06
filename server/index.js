// 测试服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 设置跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

// 主页
app.get('/', (req, res) => res.send('Hello World!'))

// 返回普通文件
app.get('/text', (req, res) => {
  res.send('普通文本信息')
})

// 超时模拟
app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 0,
      data: 'timeout'
    })
  }, 10000)
})

app.post('/post', (req, res) => {
  console.log(req.body)
  res.json({
    code: 1,
    result: {
      query: req.body
    }
  })
})

app.post('/code', (req, res) => {
  res.json({
    code: 0,
    result: '状态0，错误'
  })
})

// 错误模拟
app.post('/error', (req, res) => {
  res.status(500)
  res.send()
})

app.listen(port, () => {
  console.log(`Debug server listening on port ${port}!`)
})
