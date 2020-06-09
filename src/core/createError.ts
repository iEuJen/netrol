// 错误类型的枚举
enum ErrorType {
  CATCHED = 0, // 已经通过 toCatch 函数（或者其他方式拦截）的错误
  FAIL = 1, // 一般错误
  THROTTLE = 2, // 触发节流
  STATUS = 3, // 服务器状态码错误
}

/**
 * 生成一个错误
 * @param message 错误信息
 * @param type 错误类型
 * @param isPromise 是否返回 promise.reject
 */
export default function (
  message: string,
  type: ErrorType,
  isPromise: Boolean = false,
  extra?: Record<string, any>,
): Promise<Error> | Error {
  // 创建一个错误
  let error: any = new Error(message)

  // 扩展 error 的属性
  // 当前的错误类型
  error.type = type 
  // 错误类型的值
  error.ErrorType = {
    CATCHED: ErrorType.CATCHED,
    FAIL: ErrorType.FAIL,
    THROTTLE: ErrorType.THROTTLE,
    STATUS: ErrorType.STATUS
  }

  // 状态码错误， 需要见状态码挂载到错误对象上
  if (type === ErrorType.STATUS) {
    error.statusCode = extra.code
  }

  // 转 JSON 的方法
  error.toJSON = function () {
    let result: Record<string, any> = {
      type: this.type,
      message,
      ErrorType: this.ErrorType,
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

export {
  ErrorType
}