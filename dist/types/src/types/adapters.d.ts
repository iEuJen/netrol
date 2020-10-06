export interface AdaptersRequest {
    headers: Record<string, unknown>;
    method: string;
    url: string;
    data: string | FormData;
    timeout: number;
    name?: string;
}
export interface AdaptersHook {
    start: (xhr: XMLHttpRequest) => void;
    success: () => void;
    timeout: () => void;
    error: () => void;
    abort: () => void;
}
