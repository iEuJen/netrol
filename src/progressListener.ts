import { progressListener as listener } from './core/progress/listener'

/**
 * 添加进度监听器
 */
export const progressListener = {
  upload (apiName: string, exec: (progressEvent: Record<string, any>) => void) {
    listener.add('upload', apiName, exec)
  },
  download (apiName: string, exec: (progressEvent: Record<string, any>) => void) {
    listener.add('download', apiName, exec)
  }
}
