/* global test expect */
import { request } from './netrol/index'

test('get.text 返回 未处理对象', () => {
  return request('get.text').then(res => {
    delete res.xhr // 移除无法检验的 xhr 对象
    expect(res).toEqual({ body: '普通文本信息', status: 200, statusText: 'OK' })
  })
})

test('get.textLeach 返回 普通文本信息', () => {
  return request('get.textLeach').then(res => {
    expect(res).toBe('普通文本信息')
  })
})
