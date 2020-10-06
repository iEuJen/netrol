import catcher from './core/catcher'
import createError, { ErrorType } from './core/createError'
/**
 * 注册超时处理函数
 */

export function timeoutHander (hander: Function) {
  if (!catcher.timeoutHander) {
    catcher.registerTimeoutHander(hander)
  } else {
    throw createError('timeoutHander already exists', ErrorType.FAIL)
  }
}
