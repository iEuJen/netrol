import utils from '@/utils/index'
/**
 * 状态捕获器
 */
class Catcher {
  targets: Record<number, Function> = {}

  /**
   * 捕获状态码
   * @param code 要捕获的状态码
   * @param exec 执行函数
   */
  catch (code: number, exec: Function) {
    code = Number(code)
    if ( !utils.isOwnProp(this.targets, code) ) {
      this.targets[code] = exec
    } else {
      throw new Error(`The catcher of status code ${code} already exists`)
    }
  }

  /**
   * 触发事件
   * @param code 可能触发捕获函数的状态码
   */
  trigger (code) {
    code = Number(code)
    if ( utils.isOwnProp(this.targets, code) ) {
      this.targets[code]()
      return true
    }
    return false
  }
}

export default new Catcher()