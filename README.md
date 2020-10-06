# netrol

一个用于浏览器端的 AJAX 请求库。采用集中存储的方式，管理项目的服务端接口。

## 1.1.0版本更新说明

文档尚未更新，大体用法不变

主要变更如下

1. 对项目结构进行优化, 放弃 webpack 而采用 rollup 进行项目打包，大大减少了打包后的文件体积
2. 取消 TransformData, 因为此功能与请求拦截器功能重叠
3. 拦截器可以定义多个，执行顺序按照定义顺序以此执行，并支持链式调用
4. 响应拦截器/leach，新增 stop 参数，
    * stop 参数为一个函数，通过调用并 return 其返回值，可中止 Promise 链的执行
    * 实际上，这只是一个语义化的变更，比起以往通过 return false/void/null 的方式，使逻辑更加的清晰
5. 增加 TS 类型声明，以适用于 TS 项目


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

## 文档

[文档地址](https://ieujen.github.io/netrol-doc/)
[国内镜像](http://129.204.3.166/netrol-doc/)