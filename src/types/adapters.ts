/* global FormData XMLHttpRequest */
export interface AdaptersRequest {
  headers: Record<string, unknown>
  method: string
  url: string
  data: string | FormData
  timeout: number,
  name?: string,
}

export interface AdaptersHook {
  start: (xhr: XMLHttpRequest) => void // 请求开始
  success: () => void // 请求成功
  timeout: () => void // 请求超时
  error: () => void // 请求出错
  abort: () => void // 请求取消
}
