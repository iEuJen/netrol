import createError, { ErrorType } from '../createError'
import { isFunction, isOwnProp } from '../../helpers'

/**
 * 进度监听器
 */

class ProgressListener {
  upload: Record<string, Function> = {}
  download: Record<string, Function> = {}

  /**
   * 添加监听器
   * @param type 监听的类型，upload/download
   * @param name 监听的 apiname
   * @param exec 执行方法
   */
  add (type: string, name: string, exec: Function) {
    if (!isOwnProp(this[type], name)) {
      this[type][name] = exec
    } else {
      throw createError(`The listener ${name} already exists`, ErrorType.FAIL)
    }
  }

  /**
   * 触发监听器
   * @param type 监听的类型，upload/download
   * @param name 监听的 apiname
   */
  trigger (type: string, name: string, progressEvent: Record<string, any>) {
    isFunction(this[type][name]) && this[type][name](progressEvent)
  }

  /**
   * 判断存在
   * @param type 监听的类型，upload/download
   * @param name 监听的 apiname
   */
  isExist (type: string, name: string): boolean {
    if (isOwnProp(this[type], name)) return true
    return false
  }
}

export const progressListener = new ProgressListener()
