import { InterceptorRequest, InterceptorResponse } from '../types/interceptor';
declare class Interceptor {
    request: InterceptorRequest[];
    response: InterceptorResponse[];
    req(inter: InterceptorRequest): void;
    res(inter: InterceptorResponse): void;
}
export declare const interceptor: Interceptor;
export {};
