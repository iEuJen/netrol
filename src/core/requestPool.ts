/**
 * 请求池，用于保留当前正在执行的请求
 */

class RequestPool {
  pools: Array<string> = []

  /**
   * 判断请求是否存在
   * @param name 请求的 apiname
   */
  isExist (name: string): Boolean {
    if ( this.pools.includes(name) ) return true
    return false
  }

  /**
   * 将请求名添加到 pools 中
   * @param name 请求的 apiname
   */
  push (name: string) {
    if ( this.pools.includes(name) ) return
    this.pools.push(name)
  }

  /**
   * 删除对应 apiname
   * @param name 请求的 apiname
   */
  delete (name: string) {
    let index = this.pools.indexOf(name)
    if (index === -1) return
    this.pools.splice(index, 1)
  }
}

export default new RequestPool()