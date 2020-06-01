
/**
 * 深复制对象
 * @param obj 要复制的对象
 * @return 一个新的对象
 */
function deepCopy (obj: Object): object {
  return JSON.parse( JSON.stringify(obj) )
}

export default {
  deepCopy
}