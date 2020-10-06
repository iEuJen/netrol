/**
 * 深复制对象
 * @param obj 要复制的对象
 * @return 一个新的对象
 */
export declare function deepCopy(obj: Object): object;
/**
 * 判断是否为对象
 * @param value 要判断的对象
 */
export declare function isObject(value: any): boolean;
/**
 * 判断是否为函数
 * @param value
 */
export declare function isFunction(value: any): boolean;
/**
 * 判断是否为 Formdata 对象
 * @param value 要判断的对象
 */
export declare function isFormData(value: any): boolean;
/**
 * 判断 ArrayBuffer 对象
 * @param value 要判断的对象
 */
export declare function isArrayBuffer(value: any): boolean;
/**
 * 判断是否为 Stream
 * @param value 要判断的对象
 */
export declare function isStream(value: any): boolean;
/**
 * 判断是否为 文件
 * @param value
 */
export declare function isFile(value: any): boolean;
/**
 * 判断是否为 Blob 对象
 * @param value
 */
export declare function isBlob(value: any): boolean;
/**
 * 判断属性是否为目标对象自有属性
 * @param target 目标对象
 * @param prop 判断的属相
 */
export declare function isOwnProp(target: Record<string, any>, prop: any): any;
/**
 * 往url上添加查询参数
 * @param url 要添加的url
 * @param query 参数对象
 */
export declare function appendQueryToUrl(url: string, query: Record<string, any>): string;
