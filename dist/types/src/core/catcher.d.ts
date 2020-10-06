/**
 * 超时/状态异常捕获器
 */
declare class Catcher {
    targets: Record<number, Function>;
    timeoutHander: Function;
    /**
     * 捕获状态码
     * @param code 要捕获的状态码
     * @param exec 执行函数
     */
    catch(code: number | string, exec: Function): void;
    /**
     * 触发事件
     * @param code 可能触发捕获函数的状态码
     */
    trigger(code: number | string): boolean;
    /**
     * 注册超时处理函数
     */
    registerTimeoutHander(hander: Function): void;
}
declare const _default: Catcher;
export default _default;
