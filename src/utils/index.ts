/* global 
    FormData
    ArrayBuffer
    Function
    File
    Blob
*/
/**
 * 深复制对象
 * @param obj 要复制的对象
 * @return 一个新的对象
 */
function deepCopy (obj: Object): object {
  return JSON.parse( JSON.stringify(obj) )
}

/**
 * 判断是否为对象
 * @param value 要判断的对象
 */
function isObject (value): Boolean {
  return value !== null && typeof value === 'object'
}

/**
 * 判断是否为函数
 * @param value 
 */
function isFunction (value): Boolean {
  return value && value instanceof Function
}
/**
 * 判断是否为 Formdata 对象
 * @param value 要判断的对象
 */
function isFormData (value): Boolean {
  return FormData && (value instanceof FormData)
}

/**
 * 判断 ArrayBuffer 对象
 * @param value 要判断的对象
 */
function isArrayBuffer (value): Boolean {
  return ArrayBuffer && (value instanceof ArrayBuffer)
}

/**
 * 判断是否为 Stream
 * @param value 要判断的对象
 */
function isStream (value): Boolean {
  return isObject(value) && isFunction(value.pipe)
}

/**
 * 判断是否为 文件
 * @param value 
 */
function isFile (value) {
  return isObject(value) && value instanceof File
}

/**
 * 判断是否为 Blob 对象
 * @param value 
 */
function isBlob (value) {
  return isObject(value) && value instanceof Blob
}

/**
 * 判断属性是否为目标对象自有属性
 * @param target 目标对象
 * @param prop 判断的属相
 */
function isOwnProp (target: Record<string, any>, prop: any) {
  return Object.prototype.hasOwnProperty.call(target, prop)
}

export default {
  deepCopy,
  isObject,
  isFunction,
  isFormData,
  isArrayBuffer,
  isStream,
  isFile,
  isBlob,
  isOwnProp,
}