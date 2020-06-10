import cancelRequest from './core/cancelRequest'
/**
 * 取消一个请求
 */
export default function (name: string): Boolean {
  return cancelRequest.cancel(name)
}