/* global  XMLHttpRequest */
/**
 * 请求池，用于保留当前正在执行的请求
 */

class RequestPool {
  xhrPools: Record<string, XMLHttpRequest> = {}

  /**
   * 判断请求是否存在
   * @param name 请求的 apiname
   */
  isExist (name: string): boolean {
    if (this.xhrPools[name]) return true
    return false
  }

  /**
   * 执行取消请求
   * @param name 接口名
   */
  cancel (name: string) {
    if (!this.xhrPools[name]) return false
    this.xhrPools[name].abort()
    return true
  }

  /**
   * 将请求名添加到 xhrPools 中
   * @param name 请求的 apiname
   * @param xhr xhr 对象
   */
  add (name: string, xhr: XMLHttpRequest) {
    if (this.xhrPools[name]) return
    this.xhrPools[name] = xhr
  }

  /**
   * 删除对应 apiname
   * @param name 请求的 apiname
   */
  remove (name: string) {
    if (!this.xhrPools[name]) return
    delete this.xhrPools[name]
  }
}

export const requestPool = new RequestPool()
