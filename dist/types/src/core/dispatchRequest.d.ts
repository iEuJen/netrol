import { AdaptersRequest } from '../types/adapters';
import { ResponseData } from '../types/responseData';
export declare function dispatchRequest(config: AdaptersRequest): Promise<Error | ResponseData>;
