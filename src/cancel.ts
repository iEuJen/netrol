import cancelRequest from './helpers/cancelRequest'
/**
 * 取消一个请求
 */
export default function (name: string): Boolean {
  return cancelRequest.cancel(name)
}