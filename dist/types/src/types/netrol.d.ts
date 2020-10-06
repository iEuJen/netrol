import { Stop } from './interceptor';
interface OptionsApi {
    url: string;
    method: string;
}
interface OptionsApis {
    [key: string]: string | OptionsApi;
}
declare type leach = (res: unknown, stop: Stop) => Promise<any> | any;
interface NetrolApi {
    url: string;
    method: string;
    leach?: leach;
    timeout?: number;
    headers?: Record<string, string>;
}
interface NetrolApis {
    [key: string]: NetrolApi;
}
interface Config {
    baseUrl?: string;
    headers?: Record<string, string>;
    timeout?: number;
    defaultMethod?: string;
}
interface ModuleDetail {
    apis: OptionsApis;
    leach?: Record<string, leach>;
    config?: Config;
}
interface Modules {
    [key: string]: ModuleDetail;
}
interface NetrolOptions {
    apis: OptionsApis;
    leach?: Record<string, leach>;
    module?: Modules;
    config?: Config;
}
export { OptionsApis, OptionsApi, NetrolApis, NetrolApi, NetrolOptions, ModuleDetail, Modules, Config };
