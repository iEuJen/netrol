/* eslint-disable no-unused-vars */
// 错误类型的枚举
enum ErrorType {
  STOP = 0, // promise链终止，为了不执行 then 方法中或者 await 后的程序
  FAIL = 1, // 一般错误
  THROTTLE = 2, // 触发节流
  STATUS = 3, // 服务器状态码错误
  TIMEOUT = 4, // 超时错误
  CANCELED = 5, // 请求已被取消
}

/**
 * 生成一个错误
 * @param message 错误信息
 * @param type 错误类型
 * @param isPromise 是否返回 promise.reject
 * @param extra 扩展对象，用于特殊处理
 */
function createError (
  message: string,
  type: ErrorType,
  isPromise: boolean = false,
  extra?: Record<string, any>
): Promise<Error> | Error {
  // 创建一个错误
  const error: any = new Error(message)

  // 扩展 error 的属性
  // 当前的错误类型
  error.type = type
  // 错误类型的值
  error.ErrorType = {
    STOP: ErrorType.STOP,
    FAIL: ErrorType.FAIL,
    THROTTLE: ErrorType.THROTTLE,
    STATUS: ErrorType.STATUS,
    TIMEOUT: ErrorType.TIMEOUT,
    CANCELED: ErrorType.CANCELED
  }

  // 状态码错误， 需要见状态码挂载到错误对象上
  if (type === ErrorType.STATUS) {
    error.statusCode = extra.code
  }

  // 转 JSON 的方法
  error.toJSON = function () {
    const result: Record<string, any> = {
      type: this.type,
      message,
      ErrorType: this.ErrorType
    }
    if (this.statusCode !== undefined) {
      result.statusCode = this.statusCode
    }
    return result
  }

  if (isPromise) {
    return Promise.reject(error)
  }

  return error
}

// 导出函数
export default createError

// 导出错误类型
export { ErrorType }
