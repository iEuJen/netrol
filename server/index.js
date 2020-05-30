// 测试服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/post', (req, res) => {
  console.log(req.body)
  res.json({
    code: 0,
    data: 233,
    body: req.body
  })
})

app.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      code: 0,
      data: 666
    })
  }, 20000)
})

app.listen(port, () => {
  console.log(`Debug server listening on port ${port}!`)
})