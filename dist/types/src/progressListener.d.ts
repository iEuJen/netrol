/**
 * 添加进度监听器
 */
export declare const progressListener: {
    upload(apiName: string, exec: (progressEvent: Record<string, any>) => void): void;
    download(apiName: string, exec: (progressEvent: Record<string, any>) => void): void;
};
