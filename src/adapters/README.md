# 适配器

- 之所以将 XMLHttpRequest 单独放在此文件，并叫此名字，是受 axios 的影响
- 后续可能考虑使用 fetch，假如它变得更加好用
- 也许不考虑适配 node 端，仅用于前端开发


## XMLHttpRequest 状态码
 * 0：尚未初始化 对应 XMLHttpRequest.UNSENT
 * 1：正在加载 对应 XMLHttpRequest.OPENED
 * 2：加载完毕 对应 XMLHttpRequest.HEADERS_RECEIVED
 * 3：正在处理  对应 XMLHttpRequest.LOADING
 * 4：处理完毕  对应 XMLHttpRequest.DONE