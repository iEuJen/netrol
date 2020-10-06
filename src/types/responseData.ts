/* global  XMLHttpRequest */

// 适配器响应数据
export interface ResponseData {
  body: any,
  xhr: XMLHttpRequest,
  status: number,
  statusText: string,
}
