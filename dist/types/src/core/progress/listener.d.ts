/**
 * 进度监听器
 */
declare class ProgressListener {
    upload: Record<string, Function>;
    download: Record<string, Function>;
    /**
     * 添加监听器
     * @param type 监听的类型，upload/download
     * @param name 监听的 apiname
     * @param exec 执行方法
     */
    add(type: string, name: string, exec: Function): void;
    /**
     * 触发监听器
     * @param type 监听的类型，upload/download
     * @param name 监听的 apiname
     */
    trigger(type: string, name: string, progressEvent: Record<string, any>): void;
    /**
     * 判断存在
     * @param type 监听的类型，upload/download
     * @param name 监听的 apiname
     */
    isExist(type: string, name: string): boolean;
}
export declare const progressListener: ProgressListener;
export {};
