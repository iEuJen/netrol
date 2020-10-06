declare enum ErrorType {
    STOP = 0,
    FAIL = 1,
    THROTTLE = 2,
    STATUS = 3,
    TIMEOUT = 4,
    CANCELED = 5
}
/**
 * 生成一个错误
 * @param message 错误信息
 * @param type 错误类型
 * @param isPromise 是否返回 promise.reject
 * @param extra 扩展对象，用于特殊处理
 */
declare function createError(message: string, type: ErrorType, isPromise?: boolean, extra?: Record<string, any>): Promise<Error> | Error;
export default createError;
export { ErrorType };
