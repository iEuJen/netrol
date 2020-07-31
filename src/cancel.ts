import cancelRequest from './helpers/cancelRequest'
/**
 * 取消一个请求
 */
export default function (name: string): boolean {
  return cancelRequest.cancel(name)
}