import catcher from './core/catcher'
/**
 * 对外暴露捕获方法
 * @param code 状态码
 * @param exec 执行函数
 */
export function toCatch (code: number, exec: Function) {
  catcher.catch(code, exec)
}
