import catcher from './helpers/catcher'
import createError, { ErrorType } from './core/createError'
/**
 * 注册超时处理函数
 */

export default function (hander: Function) {
  if (!catcher.timeoutHander) {
    catcher.registerTimeoutHander(hander)
  } else {
    throw createError('timeoutHander already exists', ErrorType.FAIL)
  }
}