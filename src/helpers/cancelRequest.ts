/* global  XMLHttpRequest */
import utils from '@/utils/index'
/**
 * 取消ajax请求
 */
class CancelRequest {
  xhrPools: Record<string, XMLHttpRequest> = {}

  /**
   * 保存xhr对象
   * @param name 接口名
   * @param xhr xhr对象
   */
  add (name: string, xhr: XMLHttpRequest) {
    if ( !utils.isOwnProp(this.xhrPools, name) ) {
      this.xhrPools[name] = xhr
    }
  }

  /**
   * 移除xhr对象
   * @param name 接口名
   */
  remove (name: string) {
    if ( utils.isOwnProp(this.xhrPools, name) ) {
      delete this.xhrPools[name]
    }
  }

  /**
   * 执行取消请求
   * @param name 接口名
   */
  cancel (name: string) {
    if ( !utils.isOwnProp(this.xhrPools, name) ) return false
    this.xhrPools[name].abort()
    return true
  }
}

export default new CancelRequest()