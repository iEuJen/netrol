import { requestPool } from './core/requestPool'
/**
 * 取消一个请求
 */
export function cancel (name: string): boolean {
  return requestPool.cancel(name)
}
