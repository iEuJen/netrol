import { AdaptersRequest } from './adapters';
import { ResponseData } from './responseData';
declare type Stop = () => Promise<Error>;
declare type InterceptorRequest = (config: AdaptersRequest) => AdaptersRequest;
declare type InterceptorResponse = (response: ResponseData | unknown, stop: Stop) => ResponseData | Promise<Error>;
export { InterceptorRequest, InterceptorResponse, Stop };
