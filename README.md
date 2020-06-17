# netrol

一个用于浏览器端的 AJAX 请求库。采用集中存储的方式，管理项目的服务端接口。

## 通过脚手架安装

> npm install netrol-cli -D

> npx netrol

## npm 安装

> npm install netrol

## 简单的演示

```javascript
// @/netrol/index.js
import Netrol from 'netrol'
let request = Netrol.create({
  config: {
    baseUrl: 'http://yourwebsite.com'
  },
  apis: {
    apiname: {
      url: '/demo'
      method: 'post'
    } 
  },
})

request('apiname', { a: 2 })
.then( res => {
  console.log(res)
  // do something
})
```

## 文档地址

[netrol](https://ieujen.github.io/netrol-doc/)