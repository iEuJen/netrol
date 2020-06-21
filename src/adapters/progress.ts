/* global  XMLHttpRequest */
// 引入 进度监听器
import progressListener from '@/core/progressListener'
/**
 * 绑定 xhr 一系列上传/下载事件
 * @param type upload/download
 * @param xhr xhr对象
 */
export default function (type: string, apiName: string, xhr: XMLHttpRequest) {
  // 获取上传/下载对象
  let target = type === 'upload' ? xhr.upload : xhr
  xhr = null // 回收 xhr 内存

  // 进度状态
  enum ProgressStatus {
    FAIL = 0,
    SUCCESS = 1,
    PROGRESS = 2,
    START = 3,
    CANCEL = 4,
    TIMEOUT = 5
  }
  // 进度状态对象
  const progressStatus = {
    FAIL: ProgressStatus.FAIL,
    SUCCESS: ProgressStatus.SUCCESS,
    PROGRESS: ProgressStatus.PROGRESS,
    START: ProgressStatus.START,
    CANCEL: ProgressStatus.CANCEL,
    TIMEOUT: ProgressStatus.TIMEOUT
  }

  // 事件处理函数
  // 开始
  function onStart (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.START,
      statusText: 'start',
      ProgressStatus: progressStatus
    })
  }
  // 进度
  function onProgress (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.PROGRESS,
      statusText: 'progress',
      ProgressStatus: progressStatus,
      total: evt.total,
      loaded: evt.loaded
    })
  }
  // 取消
  function onCancel (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.CANCEL,
      statusText: 'cancel',
      ProgressStatus: progressStatus
    })
    unbind()
  }
  // 失败
  function onFail (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.FAIL,
      statusText: 'fail',
      ProgressStatus: progressStatus
    })
    unbind()
  }
  // 成功
  function onSuccess (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.SUCCESS,
      statusText: 'success',
      ProgressStatus: progressStatus
    })
    unbind()
  }
  // 超时
  function onTimeout (evt) {
    progressListener.trigger(type, apiName, {
      type,
      event: evt,
      status: ProgressStatus.TIMEOUT,
      statusText: 'timeout',
      ProgressStatus: progressStatus
    })
    unbind()
  }

  // 绑定事件
  target.addEventListener('loadstart', onStart)
  target.addEventListener('progress', onProgress)
  target.addEventListener('abort', onCancel)
  target.addEventListener('error', onFail)
  target.addEventListener('load', onSuccess)
  target.addEventListener('timeout', onTimeout)

  // 解绑事件
  function unbind () {
    target.removeEventListener('loadstart', onStart)
    target.removeEventListener('progress', onProgress)
    target.removeEventListener('abort', onCancel)
    target.removeEventListener('error', onFail)
    target.removeEventListener('load', onSuccess)
    target.removeEventListener('timeout', onTimeout)
    target = null
  }
}