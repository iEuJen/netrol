// 测试服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/post1', (req, res) => {
  res.json({
    code: 1,
    data: 'post1',
    body: req.body
  })
})
app.post('/post2', (req, res) => {
  res.json({
    code: 1,
    data: 'post2',
    body: req.body
  })
})
app.post('/error', (req, res) => {
  res.status(500)
  res.json({
    code: 1,
    data: 'error',
    body: req.body
  })
})

app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 0,
      data: 666
    })
  }, 10000)
})

app.listen(port, () => {
  console.log(`Debug server listening on port ${port}!`)
})