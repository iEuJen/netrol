import { AdaptersRequest } from '../types/adapters';
/**
 * 适配器钩子对象
 */
export declare class AdaptersHook {
    xhr: any;
    resolve: any;
    reject: any;
    requestConfig: any;
    constructor(config: AdaptersRequest, resolve: Function, reject: Function);
    start(xhr: XMLHttpRequest): void;
    success(): any;
    timeout(): void;
    error(): void;
    abort(): void;
}
