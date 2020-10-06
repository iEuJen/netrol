import { InterceptorRequest, InterceptorResponse } from './types/interceptor';
export declare const interceptor: {
    request(inter: InterceptorRequest): any;
    response(inter: InterceptorResponse): any;
};
