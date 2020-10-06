/**
 * 请求池，用于保留当前正在执行的请求
 */
declare class RequestPool {
    xhrPools: Record<string, XMLHttpRequest>;
    /**
     * 判断请求是否存在
     * @param name 请求的 apiname
     */
    isExist(name: string): boolean;
    /**
     * 执行取消请求
     * @param name 接口名
     */
    cancel(name: string): boolean;
    /**
     * 将请求名添加到 xhrPools 中
     * @param name 请求的 apiname
     * @param xhr xhr 对象
     */
    add(name: string, xhr: XMLHttpRequest): void;
    /**
     * 删除对应 apiname
     * @param name 请求的 apiname
     */
    remove(name: string): void;
}
export declare const requestPool: RequestPool;
export {};
