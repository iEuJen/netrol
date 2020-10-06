import createError, { ErrorType } from './createError'
import { isOwnProp } from '../helpers'
/**
 * 超时/状态异常捕获器
 */
class Catcher {
  targets: Record<number, Function> = {}
  timeoutHander: Function // 超时处理函数
  /**
   * 捕获状态码
   * @param code 要捕获的状态码
   * @param exec 执行函数
   */
  catch (code: number | string, exec: Function) {
    code = Number(code)
    if (!isOwnProp(this.targets, code)) {
      this.targets[code] = exec
    } else {
      throw createError(`The catcher of status code ${code} already exists`, ErrorType.FAIL)
    }
  }

  /**
   * 触发事件
   * @param code 可能触发捕获函数的状态码
   */
  trigger (code: number | string) {
    code = Number(code)
    if (isOwnProp(this.targets, code)) {
      this.targets[code]()
      return true
    }
    return false
  }

  /**
   * 注册超时处理函数
   */
  registerTimeoutHander (hander: Function) {
    this.timeoutHander = hander
  }
}

export default new Catcher()
