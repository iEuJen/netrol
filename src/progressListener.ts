import progressListener from './helpers/progressListener'
/**
 * 添加进度监听器
 */
export default {
  upload (apiName: string, exec: (progressEvent: Record<string, any>) => void) {
    progressListener.add('upload', apiName, exec)
  },
  download (apiName: string, exec: (progressEvent: Record<string, any>) => void) {
    progressListener.add('download', apiName, exec)
  }
}