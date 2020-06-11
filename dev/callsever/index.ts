import Netrol from '@/../index'

const apis = {
  text: {
    method: 'get',
    url: '/text'
  },
  post: {
    method: 'post',
    url: '/post'
  },
  code: {
    method: 'post',
    url: '/code'
  },
  error: {
    method: 'post',
    url: '/error'
  },
  timeout: {
    method: 'get',
    url: '/timeout'
  },
}

const leach = {
  post (res) {
    console.log('leach', res)
    return res
  },
  code (res) {
    console.log('leach', res)
    return res
  }
}

const moduleA = {
  apis: {
    post: {
      method: 'post',
      url: '/post'
    },
  },
  leach: {
    post (res) {
      console.log(res)
      return res.body
    }
  }
}

export default Netrol.create({
  apis,
  leach,
  module: {
    moduleA
  },
  config: {
    baseUrl: '/apis',
    headers: {
      token: '233666fjg'
    },
    timeout: 5000
  },
})