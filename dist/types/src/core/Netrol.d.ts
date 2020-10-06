import { NetrolOptions, NetrolApis } from '../types/netrol';
import { AdaptersRequest } from '../types/adapters';
export declare class Netrol {
    apis: NetrolApis;
    constructor(options: NetrolOptions);
    private parseOption;
    private createApi;
    request(name: string, data?: any): Promise<any>;
    stop(): Promise<Error>;
    /**
     * 转换请求数据, 作为请求拦截器的一环
     * @param data
     */
    transformData(config: AdaptersRequest): Promise<AdaptersRequest>;
}
