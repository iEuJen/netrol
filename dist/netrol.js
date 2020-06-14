/*!
 * netrol.js v1.0.0-beta.2
 * © 2020-~ EuZen Chen
 * Released under the Anti 996 License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["netrol"] = factory();
	else
		root["netrol"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(5);

var iterableToArrayLimit = __webpack_require__(6);

var unsupportedIterableToArray = __webpack_require__(7);

var nonIterableRest = __webpack_require__(9);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "toCatch", function() { return /* reexport */ toCatch; });
__webpack_require__.d(__webpack_exports__, "timeoutHander", function() { return /* reexport */ timeoutHander; });
__webpack_require__.d(__webpack_exports__, "cancel", function() { return /* reexport */ src_cancel; });
__webpack_require__.d(__webpack_exports__, "interceptor", function() { return /* reexport */ interceptor; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/core/requestPool.ts



/**
 * 请求池，用于保留当前正在执行的请求
 */
var requestPool_RequestPool = /*#__PURE__*/function () {
  function RequestPool() {
    classCallCheck_default()(this, RequestPool);

    this.pools = [];
  }
  /**
   * 判断请求是否存在
   * @param name 请求的 apiname
   */


  createClass_default()(RequestPool, [{
    key: "isExist",
    value: function isExist(name) {
      if (this.pools.includes(name)) return true;
      return false;
    }
    /**
     * 将请求名添加到 pools 中
     * @param name 请求的 apiname
     */

  }, {
    key: "push",
    value: function push(name) {
      if (this.pools.includes(name)) return;
      this.pools.push(name);
    }
    /**
     * 删除对应 apiname
     * @param name 请求的 apiname
     */

  }, {
    key: "delete",
    value: function _delete(name) {
      var index = this.pools.indexOf(name);
      if (index === -1) return;
      this.pools.splice(index, 1);
    }
  }]);

  return RequestPool;
}();

/* harmony default export */ var requestPool = (new requestPool_RequestPool());
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(4);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils/index.ts


/* global
    FormData
    ArrayBuffer
    Function
    File
    Blob
*/

/**
 * 深复制对象
 * @param obj 要复制的对象
 * @return 一个新的对象
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
/**
 * 判断是否为对象
 * @param value 要判断的对象
 */


function isObject(value) {
  return value !== null && typeof_default()(value) === 'object';
}
/**
 * 判断是否为函数
 * @param value
 */


function isFunction(value) {
  return value && value instanceof Function;
}
/**
 * 判断是否为 Formdata 对象
 * @param value 要判断的对象
 */


function isFormData(value) {
  return FormData && value instanceof FormData;
}
/**
 * 判断 ArrayBuffer 对象
 * @param value 要判断的对象
 */


function isArrayBuffer(value) {
  return ArrayBuffer && value instanceof ArrayBuffer;
}
/**
 * 判断是否为 Stream
 * @param value 要判断的对象
 */


function isStream(value) {
  return isObject(value) && isFunction(value.pipe);
}
/**
 * 判断是否为 文件
 * @param value
 */


function isFile(value) {
  return isObject(value) && value instanceof File;
}
/**
 * 判断是否为 Blob 对象
 * @param value
 */


function isBlob(value) {
  return isObject(value) && value instanceof Blob;
}
/**
 * 判断属性是否为目标对象自有属性
 * @param target 目标对象
 * @param prop 判断的属相
 */


function isOwnProp(target, prop) {
  return Object.prototype.hasOwnProperty.call(target, prop);
}

/* harmony default export */ var utils = ({
  deepCopy: deepCopy,
  isObject: isObject,
  isFunction: isFunction,
  isFormData: isFormData,
  isArrayBuffer: isArrayBuffer,
  isStream: isStream,
  isFile: isFile,
  isBlob: isBlob,
  isOwnProp: isOwnProp
});
// CONCATENATED MODULE: ./src/core/responseDataCreate.ts
/* global  XMLHttpRequest */

/**
 * 生成响应数据
 */
/* harmony default export */ var responseDataCreate = (function (xhr) {
  var data = !xhr.responseType || xhr.responseType === 'text' ? xhr.responseText : xhr.response; // 将字符串响应数据，转换为 JSON 

  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      /* Ignore */
    }
  }

  return {
    body: data,
    xhr: xhr,
    status: xhr.status,
    statusText: xhr.statusText
  };
});
// CONCATENATED MODULE: ./src/core/createError.ts
// 错误类型的枚举
var ErrorType;

(function (ErrorType) {
  ErrorType[ErrorType["CATCHED"] = 0] = "CATCHED";
  ErrorType[ErrorType["FAIL"] = 1] = "FAIL";
  ErrorType[ErrorType["THROTTLE"] = 2] = "THROTTLE";
  ErrorType[ErrorType["STATUS"] = 3] = "STATUS";
  ErrorType[ErrorType["TIMEOUT"] = 4] = "TIMEOUT";
  ErrorType[ErrorType["CANCELED"] = 5] = "CANCELED";
})(ErrorType || (ErrorType = {}));
/**
 * 生成一个错误
 * @param message 错误信息
 * @param type 错误类型
 * @param isPromise 是否返回 promise.reject
 * @param extra 扩展对象，用于特殊处理
 */


function createError(message, type) {
  var isPromise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var extra = arguments.length > 3 ? arguments[3] : undefined;
  // 创建一个错误
  var error = new Error(message); // 扩展 error 的属性
  // 当前的错误类型

  error.type = type; // 错误类型的值

  error.ErrorType = {
    CATCHED: ErrorType.CATCHED,
    FAIL: ErrorType.FAIL,
    THROTTLE: ErrorType.THROTTLE,
    STATUS: ErrorType.STATUS,
    TIMEOUT: ErrorType.TIMEOUT,
    CANCELED: ErrorType.CANCELED
  }; // 状态码错误， 需要见状态码挂载到错误对象上

  if (type === ErrorType.STATUS) {
    error.statusCode = extra.code;
  } // 转 JSON 的方法


  error.toJSON = function () {
    var result = {
      type: this.type,
      message: message,
      ErrorType: this.ErrorType
    };

    if (this.statusCode !== undefined) {
      result.statusCode = this.statusCode;
    }

    return result;
  };

  if (isPromise) {
    return Promise.reject(error);
  }

  return error;
} // 导出函数


/* harmony default export */ var core_createError = (createError); // 导出错误类型


// CONCATENATED MODULE: ./src/core/catcher.ts




/**
 * 状态捕获器
 */

var catcher_Catcher = /*#__PURE__*/function () {
  function Catcher() {
    classCallCheck_default()(this, Catcher);

    this.targets = {};
  }
  /**
   * 捕获状态码
   * @param code 要捕获的状态码
   * @param exec 执行函数
   */


  createClass_default()(Catcher, [{
    key: "catch",
    value: function _catch(code, exec) {
      code = Number(code);

      if (!utils.isOwnProp(this.targets, code)) {
        this.targets[code] = exec;
      } else {
        throw core_createError("The catcher of status code ".concat(code, " already exists"), ErrorType.FAIL);
      }
    }
    /**
     * 触发事件
     * @param code 可能触发捕获函数的状态码
     */

  }, {
    key: "trigger",
    value: function trigger(code) {
      code = Number(code);

      if (utils.isOwnProp(this.targets, code)) {
        this.targets[code]();
        return true;
      }

      return false;
    }
    /**
     * 注册超时处理函数
     */

  }, {
    key: "registerTimeoutHander",
    value: function registerTimeoutHander(hander) {
      this.timeoutHander = hander;
    }
  }]);

  return Catcher;
}();

/* harmony default export */ var catcher = (new catcher_Catcher());
// CONCATENATED MODULE: ./src/core/cancelRequest.ts



/* global  XMLHttpRequest */

/**
 * 取消ajax请求
 */

var cancelRequest_CancelRequest = /*#__PURE__*/function () {
  function CancelRequest() {
    classCallCheck_default()(this, CancelRequest);

    this.xhrPools = {};
  }
  /**
   * 保存xhr对象
   * @param name 接口名
   * @param xhr xhr对象
   */


  createClass_default()(CancelRequest, [{
    key: "add",
    value: function add(name, xhr) {
      if (!utils.isOwnProp(this.xhrPools, name)) {
        this.xhrPools[name] = xhr;
      }
    }
    /**
     * 移除xhr对象
     * @param name 接口名
     */

  }, {
    key: "remove",
    value: function remove(name) {
      if (utils.isOwnProp(this.xhrPools, name)) {
        delete this.xhrPools[name];
      }
    }
    /**
     * 执行取消请求
     * @param name 接口名
     */

  }, {
    key: "cancel",
    value: function cancel(name) {
      if (!utils.isOwnProp(this.xhrPools, name)) return false;
      this.xhrPools[name].abort();
      return true;
    }
  }]);

  return CancelRequest;
}();

/* harmony default export */ var cancelRequest = (new cancelRequest_CancelRequest());
// CONCATENATED MODULE: ./src/adapters/index.ts


/* global  XMLHttpRequest */
// 引入请求池
 // 引入工具类

 // 引入生成响应数据的函数

 // 引入创建一个错误

 // 引入捕获器

 // 引入取消xhr请求对象


/* harmony default export */ var adapters = (function (config) {
  // 解构配置项
  var headers = config.headers,
      method = config.method,
      url = config.url,
      data = config.data,
      timeout = config.timeout,
      apiName = config.apiName;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true); // 如果传给后端的数据为 FormData 格式，则移除 content-type，让浏览器自己设置

    if (data && utils.isFormData(data)) {
      delete headers['Content-Type'];
    } // 设置请求头


    Object.entries(headers).forEach(function (_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      xhr.setRequestHeader(key, val);
    }); // 设置超时

    if (timeout) {
      xhr.timeout = timeout;
    } // 请求状态变化


    xhr.onreadystatechange = function () {
      if (!xhr || xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) return; // 移除请求池中对应的api

      requestPool["delete"](apiName); // 移除对应xhr

      cancelRequest.remove(apiName);
      resolve(responseDataCreate(xhr));
      xhr = null;
    }; // 超时处理


    xhr.ontimeout = function () {
      // 移除请求池中对应的api
      requestPool["delete"](apiName); // 移除对应xhr

      cancelRequest.remove(apiName); // 执行超时处理器

      catcher.timeoutHander && catcher.timeoutHander({
        apiName: apiName,
        method: method,
        url: url,
        timeout: timeout,
        data: data
      });
      reject(core_createError("timeout of ".concat(timeout, " ms exceeded"), ErrorType.TIMEOUT));
      xhr = null;
    }; // 请求报错


    xhr.onerror = function () {
      // 移除请求池中对应的api
      requestPool["delete"](apiName); // 移除对应xhr

      cancelRequest.remove(apiName);
      reject(core_createError('Network Error', ErrorType.FAIL));
      xhr = null;
    }; // 请求被取消


    xhr.onabort = function () {
      // 移除请求池中对应的api
      requestPool["delete"](apiName); // 移除对应xhr

      cancelRequest.remove(apiName);
      reject(core_createError('Request cancelled', ErrorType.CANCELED));
      xhr = null;
    };

    if (!data) {
      data = null;
    } // 添加xhr对象到 cancelRequest


    cancelRequest.add(apiName, xhr);
    xhr.send(data);
  });
});
// CONCATENATED MODULE: ./src/core/dispatchRequest.ts
// 导入适配器
 // 导入捕获器

 // 导入错误创建


/* harmony default export */ var dispatchRequest = (function (config) {
  // console.log(config)
  // 调用适配器
  return adapters(config).then(function (res) {
    // console.log('-------', res)
    // http 状态码 在 200 - 300 之间， 返回数据
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      var result = catcher.trigger(res.status);

      if (result) {
        return core_createError("don't worry, error ".concat(res.status, " Already toCatch"), ErrorType.CATCHED, true);
      } else {
        return core_createError("request failed with status code ".concat(res.status), ErrorType.STATUS, true, {
          code: res.status
        });
      }
    }
  });
});
// CONCATENATED MODULE: ./src/core/headers.ts
/* harmony default export */ var core_headers = ({
  'Content-Type': 'application/json;charset=utf-8',
  'Accept': 'application/json, text/plain, */*'
});
// CONCATENATED MODULE: ./src/core/Netrol.ts





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 导入请求
 // 导入默认请求头

 // 引入请求池

 // 引入工具方法

 // 引入错误创建工具


/**
 * Netrol 对象
 */

var Netrol_Netrol = /*#__PURE__*/function () {
  /**
   * 构造函数
   * @param options Netrol 实例的配置项
   */
  function Netrol(options) {
    classCallCheck_default()(this, Netrol);

    var apis = options.apis,
        leach = options.leach,
        module = options.module,
        transformData = options.transformData,
        _options$config = options.config,
        config = _options$config === void 0 ? {} : _options$config;
    var headers = config.headers,
        baseUrl = config.baseUrl,
        timeout = config.timeout,
        defaultMethod = config.defaultMethod; // 检查 apis 是否存在

    if (!apis) throw core_createError('apis is required in constructor', ErrorType.FAIL); // 初始化数据

    this.apis = apis;
    this.headers = _objectSpread(_objectSpread({}, core_headers), headers);
    this.leach = leach;
    this.baseUrl = baseUrl || '';
    this.modules = module;
    this.timeout = timeout || 0;
    this.defaultMethod = defaultMethod || 'get';
    this.transformData = transformData;
  }
  /**
   * 发起请求的方法
   * @param apiName 调用指定 apis
   * @param data 传递给服务器的数据
   */


  createClass_default()(Netrol, [{
    key: "request",
    value: function request(apiName, data) {
      var promise = null;
      var chain = null; // 判断是否该请求是否正在执行

      if (requestPool.isExist(apiName)) return core_createError('Triggered throttle;', ErrorType.THROTTLE, true); // 将 apiname 添加到请求池

      requestPool.push(apiName); // 根据调用 api，合并配置项

      var config = this.mergeConfig(apiName, data); // 如果返回的是 Promise 对象， 则直接返回

      if (config instanceof Promise) return config; // 合并 promise 链

      chain = this.mergePromiseChain(config); // 连接 promise 链

      promise = Promise.resolve(config);

      while (chain.length) {
        promise = promise.then(chain.shift());
      }

      return promise;
    }
    /**
     * 合并 promise 链
     * @param config 请求配置对象
     */

  }, {
    key: "mergePromiseChain",
    value: function mergePromiseChain(config) {
      // 将请求函数，添加到 promise 链数组中
      var chain = [dispatchRequest]; // 如果存在 interceptorRequest 则添加到 promise 链的最前面

      if (Netrol.interceptorRequest) {
        chain.unshift(Netrol.interceptorRequest);
      } // 如果存在 interceptorResponse 则添加到 promise 连上


      if (Netrol.interceptorResponse) {
        chain.push(Netrol.interceptorResponse); // 同时添加后续处理函数，当返回值为空值的时候，抛出异常，终止promise

        chain.push(function (res) {
          if (!res) return core_createError('the interceptorResponse return value is void, the promise has been cancelled', ErrorType.CATCHED, true);
          return res;
        });
      } // 存在 leach，则添加到 promise 链中


      if (config.leach) {
        chain.push(config.leach);
      }

      delete config.leach;
      return chain;
    }
    /**
     * 合并配置项
     * @param apiName 对应调用的接口
     */

  }, {
    key: "mergeConfig",
    value: function mergeConfig(apiName, data) {
      var config = null;
      var api = null;
      var leach = null;
      var headers = utils.deepCopy(this.headers);
      var baseUrl = this.baseUrl;
      var timeout = this.timeout;
      var defaultMethod = this.defaultMethod; // 数据转换函数

      var transformData = this.transformData; // 判断调用的是否为 module 中 api

      if (apiName.includes('.')) {
        var _apiName$split = apiName.split('.'),
            _apiName$split2 = slicedToArray_default()(_apiName$split, 2),
            module = _apiName$split2[0],
            name = _apiName$split2[1];

        var theModule = this.modules[module]; // 判断传递的 module 是否存在

        if (!theModule) return core_createError("module ".concat(module, " does not exist; \u6A21\u5757 ").concat(module, " \u4E0D\u5B58\u5728"), ErrorType.FAIL, true); // 如果 transformData 方法存在，则重新赋值

        if (theModule.transformData) {
          transformData = theModule.transformData;
        } // 判断模块上是否存在配置项


        if (theModule.config) {
          // 模块上如果存在 baseUrl，则更改 baseUrl，则更改
          if (theModule.config.baseUrl) {
            baseUrl = theModule.config.baseUrl;
          } // 模块上如果存在 headers，则合并


          if (theModule.config.headers) {
            headers = _objectSpread(_objectSpread({}, headers), utils.deepCopy(theModule.config.headers));
          } // 如果模块上存在 timeout，则进行替换


          if (theModule.config.timeout) {
            timeout = theModule.config.timeout;
          } // 判断模块上是否存在默认请求方法，存在则替换


          if (theModule.config.defaultMethod) {
            defaultMethod = theModule.config.defaultMethod;
          }
        } // 提取 api 和 leach


        api = theModule.apis[name];
        leach = theModule.leach[name];
      } else {
        // 提取 api 和 leach
        api = this.apis[apiName];
        leach = this.leach[apiName];
      } // 判断是否找到对应 api


      if (!api) return core_createError("api ".concat(apiName, " does not exist; \u63A5\u53E3 ").concat(apiName, " \u4E0D\u5B58\u5728"), ErrorType.FAIL, true); // 判断api是否为对象

      if (utils.isObject(api)) {
        // 深复制 api
        api = utils.deepCopy(api); // 将 api.method 的值，转为英文小写, method 存在，默认调用 get

        api.method = !api.method ? defaultMethod : api.method.toLowerCase(); // 合并 baseUrl 和 api.url

        api.url = "".concat(baseUrl).concat(api.url);
      } else {
        // 不是对象，则使用默认的方法
        var url = "".concat(baseUrl).concat(api);
        api = {
          url: url,
          method: defaultMethod
        };
      } // 合并 headers 和 api.headers


      headers = _objectSpread(_objectSpread({}, headers), api.headers); // 删除 api.headers

      delete api.headers; // 合并配置项

      config = _objectSpread({
        apiName: apiName,
        headers: headers,
        timeout: timeout,
        leach: leach
      }, api); // data 存在，则将其装换后添加到 config 上

      if (data && !transformData) {
        config.data = this.defaultTransformData(data);
      } else if (data && transformData) {
        config.data = transformData(data);
      } // 返回


      return config;
    }
    /**
     * 默认的转换请求数据方法
     * @param data
     */

  }, {
    key: "defaultTransformData",
    value: function defaultTransformData(data) {
      // 特殊对象，直接返回
      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      } // 普通对象，转为 JSON 字符串


      if (utils.isObject(data)) {
        return JSON.stringify(data);
      } // 未知情况，直接返回


      return data;
    }
  }]);

  return Netrol;
}();

/* harmony default export */ var core_Netrol = (Netrol_Netrol);
// CONCATENATED MODULE: ./src/create.ts

/**
 * 创建一个 netrol 实例
 */

var netrol = null;
/* harmony default export */ var create = (function (options) {
  // 只允许单例存在
  if (!netrol) {
    netrol = new core_Netrol(options);
  } else {
    console.warn('netrol instance is only');
  }

  return function (apiName, data) {
    return netrol.request(apiName, data);
  };
});
// CONCATENATED MODULE: ./src/toCatch.ts

/**
 * 对外暴露捕获方法
 * @param code 状态码
 * @param exec 执行函数
 */

/* harmony default export */ var toCatch = (function (code, exec) {
  catcher["catch"](code, exec);
});
// CONCATENATED MODULE: ./src/timeoutHander.ts


/**
 * 注册超时处理函数
 */

/* harmony default export */ var timeoutHander = (function (hander) {
  if (!catcher.timeoutHander) {
    catcher.registerTimeoutHander(hander);
  } else {
    throw core_createError('timeoutHander already exists', ErrorType.FAIL);
  }
});
// CONCATENATED MODULE: ./src/cancel.ts

/**
 * 取消一个请求
 */

/* harmony default export */ var src_cancel = (function (name) {
  return cancelRequest.cancel(name);
});
// CONCATENATED MODULE: ./src/interceptor.ts


/* harmony default export */ var interceptor = ({
  // 绑定请求拦截器
  request: function request(callback) {
    if (core_Netrol.interceptorRequest) throw core_createError('interceptorRequest already exists', ErrorType.FAIL);
    core_Netrol.interceptorRequest = callback;
  },
  // 绑定响应拦截器
  response: function response(callback) {
    if (core_Netrol.interceptorResponse) throw core_createError('interceptorResponse already exists', ErrorType.FAIL);
    core_Netrol.interceptorResponse = callback;
  }
});
// CONCATENATED MODULE: ./index.ts





/* harmony default export */ var index = __webpack_exports__["default"] = ({
  create: create,
  toCatch: toCatch,
  timeoutHander: timeoutHander,
  cancel: src_cancel,
  interceptor: interceptor
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRyb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL25ldHJvbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9yZXF1ZXN0UG9vbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvcmVzcG9uc2VEYXRhQ3JlYXRlLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvY2FuY2VsUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2hlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvTmV0cm9sLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RvQ2F0Y2gudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RpbWVvdXRIYW5kZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NhbmNlbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7O0FDaEJBLHFCQUFxQixtQkFBTyxDQUFDLENBQWtCOztBQUUvQywyQkFBMkIsbUJBQU8sQ0FBQyxDQUF3Qjs7QUFFM0QsaUNBQWlDLG1CQUFPLENBQUMsQ0FBOEI7O0FBRXZFLHNCQUFzQixtQkFBTyxDQUFDLENBQW1COztBQUVqRDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Qzs7Ozs7O0FDM0JBLHVCQUF1QixtQkFBTyxDQUFDLENBQW9COztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDOzs7Ozs7QUNYQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7O0lBSU0sdUI7QUFBTjtBQUFBOztBQUNFLGlCQUF1QixFQUF2QjtBQTZCRDtBQTNCQzs7Ozs7Ozs7NEJBSVMsSSxFQUFZO0FBQ25CLFVBQUssS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixJQUFwQixDQUFMLEVBQWlDLE9BQU8sSUFBUDtBQUNqQyxhQUFPLEtBQVA7QUFDRDtBQUVEOzs7Ozs7O3lCQUlNLEksRUFBWTtBQUNoQixVQUFLLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBTCxFQUFpQztBQUNqQyxXQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs0QkFJUSxJLEVBQVk7QUFDbEIsVUFBSSxLQUFLLEdBQUcsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUFaO0FBQ0EsVUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2xCLFdBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDs7Ozs7O0FBR1ksb0RBQUksdUJBQUosRUFBZixFOzs7Ozs7OztBQ3BDQTs7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSxTQUFTLFFBQVQsQ0FBbUIsR0FBbkIsRUFBOEI7QUFDNUIsU0FBTyxJQUFJLENBQUMsS0FBTCxDQUFZLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7QUFJQSxTQUFTLFFBQVQsQ0FBbUIsS0FBbkIsRUFBd0I7QUFDdEIsU0FBTyxLQUFLLEtBQUssSUFBVixJQUFrQixpQkFBTyxLQUFQLE1BQWlCLFFBQTFDO0FBQ0Q7QUFFRDs7Ozs7O0FBSUEsU0FBUyxVQUFULENBQXFCLEtBQXJCLEVBQTBCO0FBQ3hCLFNBQU8sS0FBSyxJQUFJLEtBQUssWUFBWSxRQUFqQztBQUNEO0FBQ0Q7Ozs7OztBQUlBLFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUEwQjtBQUN4QixTQUFPLFFBQVEsSUFBSyxLQUFLLFlBQVksUUFBckM7QUFDRDtBQUVEOzs7Ozs7QUFJQSxTQUFTLGFBQVQsQ0FBd0IsS0FBeEIsRUFBNkI7QUFDM0IsU0FBTyxXQUFXLElBQUssS0FBSyxZQUFZLFdBQXhDO0FBQ0Q7QUFFRDs7Ozs7O0FBSUEsU0FBUyxRQUFULENBQW1CLEtBQW5CLEVBQXdCO0FBQ3RCLFNBQU8sUUFBUSxDQUFDLEtBQUQsQ0FBUixJQUFtQixVQUFVLENBQUMsS0FBSyxDQUFDLElBQVAsQ0FBcEM7QUFDRDtBQUVEOzs7Ozs7QUFJQSxTQUFTLE1BQVQsQ0FBaUIsS0FBakIsRUFBc0I7QUFDcEIsU0FBTyxRQUFRLENBQUMsS0FBRCxDQUFSLElBQW1CLEtBQUssWUFBWSxJQUEzQztBQUNEO0FBRUQ7Ozs7OztBQUlBLFNBQVMsTUFBVCxDQUFpQixLQUFqQixFQUFzQjtBQUNwQixTQUFPLFFBQVEsQ0FBQyxLQUFELENBQVIsSUFBbUIsS0FBSyxZQUFZLElBQTNDO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQVMsU0FBVCxDQUFvQixNQUFwQixFQUFpRCxJQUFqRCxFQUEwRDtBQUN4RCxTQUFPLE1BQU0sQ0FBQyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLE1BQXJDLEVBQTZDLElBQTdDLENBQVA7QUFDRDs7QUFFYztBQUNiLFVBQVEsRUFBUixRQURhO0FBRWIsVUFBUSxFQUFSLFFBRmE7QUFHYixZQUFVLEVBQVYsVUFIYTtBQUliLFlBQVUsRUFBVixVQUphO0FBS2IsZUFBYSxFQUFiLGFBTGE7QUFNYixVQUFRLEVBQVIsUUFOYTtBQU9iLFFBQU0sRUFBTixNQVBhO0FBUWIsUUFBTSxFQUFOLE1BUmE7QUFTYixXQUFTLEVBQVQ7QUFUYSxDQUFmLEU7O0FDaEZBOztBQUNBOzs7QUFHYyxpRUFBVyxHQUFYLEVBQThCO0FBQzFDLE1BQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQUwsSUFBcUIsR0FBRyxDQUFDLFlBQUosS0FBcUIsTUFBMUMsR0FBbUQsR0FBRyxDQUFDLFlBQXZELEdBQXNFLEdBQUcsQ0FBQyxRQUFyRixDQUQwQyxDQUUxQzs7QUFDQSxNQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixRQUFJO0FBQ0YsVUFBSSxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBWCxDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQUU7QUFBYztBQUM3Qjs7QUFFRCxTQUFPO0FBQ0wsUUFBSSxFQUFFLElBREQ7QUFFTCxPQUFHLEVBQUgsR0FGSztBQUdMLFVBQU0sRUFBRSxHQUFHLENBQUMsTUFIUDtBQUlMLGNBQVUsRUFBRSxHQUFHLENBQUM7QUFKWCxHQUFQO0FBTUQsQzs7QUNuQkQ7QUFDQSxJQUFLLFNBQUw7O0FBQUEsV0FBSyxTQUFMLEVBQWM7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQVBELEVBQUssU0FBUyxLQUFULFNBQVMsTUFBZDtBQVNBOzs7Ozs7Ozs7QUFPQSxTQUFTLFdBQVQsQ0FDRSxPQURGLEVBRUUsSUFGRixFQUk2QjtBQUFBLE1BRDNCLFNBQzJCLHVFQUROLEtBQ007QUFBQSxNQUEzQixLQUEyQjtBQUUzQjtBQUNBLE1BQUksS0FBSyxHQUFRLElBQUksS0FBSixDQUFVLE9BQVYsQ0FBakIsQ0FIMkIsQ0FLM0I7QUFDQTs7QUFDQSxPQUFLLENBQUMsSUFBTixHQUFhLElBQWIsQ0FQMkIsQ0FRM0I7O0FBQ0EsT0FBSyxDQUFDLFNBQU4sR0FBa0I7QUFDaEIsV0FBTyxFQUFFLFNBQVMsQ0FBQyxPQURIO0FBRWhCLFFBQUksRUFBRSxTQUFTLENBQUMsSUFGQTtBQUdoQixZQUFRLEVBQUUsU0FBUyxDQUFDLFFBSEo7QUFJaEIsVUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUpGO0FBS2hCLFdBQU8sRUFBRSxTQUFTLENBQUMsT0FMSDtBQU1oQixZQUFRLEVBQUUsU0FBUyxDQUFDO0FBTkosR0FBbEIsQ0FUMkIsQ0FrQjNCOztBQUNBLE1BQUksSUFBSSxLQUFLLFNBQVMsQ0FBQyxNQUF2QixFQUErQjtBQUM3QixTQUFLLENBQUMsVUFBTixHQUFtQixLQUFLLENBQUMsSUFBekI7QUFDRCxHQXJCMEIsQ0F1QjNCOzs7QUFDQSxPQUFLLENBQUMsTUFBTixHQUFlO0FBQ2IsUUFBSSxNQUFNLEdBQXdCO0FBQ2hDLFVBQUksRUFBRSxLQUFLLElBRHFCO0FBRWhDLGFBQU8sRUFBUCxPQUZnQztBQUdoQyxlQUFTLEVBQUUsS0FBSztBQUhnQixLQUFsQzs7QUFLQSxRQUFJLEtBQUssVUFBTCxLQUFvQixTQUF4QixFQUFtQztBQUNqQyxZQUFNLENBQUMsVUFBUCxHQUFvQixLQUFLLFVBQXpCO0FBQ0Q7O0FBQ0QsV0FBTyxNQUFQO0FBQ0QsR0FWRDs7QUFZQSxNQUFJLFNBQUosRUFBZTtBQUNiLFdBQU8sT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDLENBRUQ7OztBQUNlLGdFQUFmLEUsQ0FFQTs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTs7OztJQUdNLGU7QUFBTjtBQUFBOztBQUNFLG1CQUFvQyxFQUFwQztBQW1DRDtBQWpDQzs7Ozs7Ozs7OzJCQUtPLEksRUFBYyxJLEVBQWM7QUFDakMsVUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFELENBQWI7O0FBQ0EsVUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFOLENBQWdCLEtBQUssT0FBckIsRUFBOEIsSUFBOUIsQ0FBTixFQUE0QztBQUMxQyxhQUFLLE9BQUwsQ0FBYSxJQUFiLElBQXFCLElBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSxnQkFBVyxzQ0FBK0IsSUFBL0Isc0JBQXNELFNBQVMsQ0FBQyxJQUFoRSxDQUFqQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs0QkFJUyxJLEVBQUk7QUFDWCxVQUFJLEdBQUcsTUFBTSxDQUFDLElBQUQsQ0FBYjs7QUFDQSxVQUFLLEtBQUssQ0FBQyxTQUFOLENBQWdCLEtBQUssT0FBckIsRUFBOEIsSUFBOUIsQ0FBTCxFQUEyQztBQUN6QyxhQUFLLE9BQUwsQ0FBYSxJQUFiO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7OzBDQUd1QixNLEVBQWdCO0FBQ3JDLFdBQUssYUFBTCxHQUFxQixNQUFyQjtBQUNEOzs7Ozs7QUFHWSxnREFBSSxlQUFKLEVBQWYsRTs7Ozs7QUMzQ0E7QUFDQTtBQUNBOzs7O0lBR00sMkI7QUFBTjtBQUFBOztBQUNFLG9CQUEyQyxFQUEzQztBQWdDRDtBQTlCQzs7Ozs7Ozs7O3dCQUtLLEksRUFBYyxHLEVBQW1CO0FBQ3BDLFVBQUssQ0FBQyxLQUFLLENBQUMsU0FBTixDQUFnQixLQUFLLFFBQXJCLEVBQStCLElBQS9CLENBQU4sRUFBNkM7QUFDM0MsYUFBSyxRQUFMLENBQWMsSUFBZCxJQUFzQixHQUF0QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7OzsyQkFJUSxJLEVBQVk7QUFDbEIsVUFBSyxLQUFLLENBQUMsU0FBTixDQUFnQixLQUFLLFFBQXJCLEVBQStCLElBQS9CLENBQUwsRUFBNEM7QUFDMUMsZUFBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7MkJBSVEsSSxFQUFZO0FBQ2xCLFVBQUssQ0FBQyxLQUFLLENBQUMsU0FBTixDQUFnQixLQUFLLFFBQXJCLEVBQStCLElBQS9CLENBQU4sRUFBNkMsT0FBTyxLQUFQO0FBQzdDLFdBQUssUUFBTCxDQUFjLElBQWQsRUFBb0IsS0FBcEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7Ozs7O0FBR1ksc0RBQUksMkJBQUosRUFBZixFOzs7O0FDeENBO0FBQ0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUVjLHVEQUFXLE1BQVgsRUFBc0M7QUFDbEQ7QUFEa0QsTUFFNUMsT0FGNEMsR0FFSyxNQUZMLENBRTVDLE9BRjRDO0FBQUEsTUFFbkMsTUFGbUMsR0FFSyxNQUZMLENBRW5DLE1BRm1DO0FBQUEsTUFFM0IsR0FGMkIsR0FFSyxNQUZMLENBRTNCLEdBRjJCO0FBQUEsTUFFdEIsSUFGc0IsR0FFSyxNQUZMLENBRXRCLElBRnNCO0FBQUEsTUFFaEIsT0FGZ0IsR0FFSyxNQUZMLENBRWhCLE9BRmdCO0FBQUEsTUFFUCxPQUZPLEdBRUssTUFGTCxDQUVQLE9BRk87QUFJbEQsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQW9CO0FBQ3JDLFFBQUksR0FBRyxHQUFHLElBQUksY0FBSixFQUFWO0FBRUEsT0FBRyxDQUFDLElBQUosQ0FBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLElBQXRCLEVBSHFDLENBS3JDOztBQUNBLFFBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFOLENBQWlCLElBQWpCLENBQWIsRUFBc0M7QUFDcEMsYUFBTyxPQUFPLENBQUMsY0FBRCxDQUFkO0FBQ0QsS0FSb0MsQ0FVckM7OztBQUNBLFVBQU0sQ0FBQyxPQUFQLENBQWUsT0FBZixFQUF3QixPQUF4QixDQUFnQyxnQkFBZTtBQUFBO0FBQUEsVUFBYixHQUFhO0FBQUEsVUFBUixHQUFROztBQUM3QyxTQUFHLENBQUMsZ0JBQUosQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUI7QUFDRCxLQUZELEVBWHFDLENBZXJDOztBQUNBLFFBQUksT0FBSixFQUFhO0FBQ1gsU0FBRyxDQUFDLE9BQUosR0FBYyxPQUFkO0FBQ0QsS0FsQm9DLENBb0JyQzs7O0FBQ0EsT0FBRyxDQUFDLGtCQUFKLEdBQXlCO0FBQ3ZCLFVBQUksQ0FBQyxHQUFELElBQVEsR0FBRyxDQUFDLFVBQUosS0FBbUIsY0FBYyxDQUFDLElBQTlDLEVBQW9EO0FBQ3BELFVBQUssR0FBRyxDQUFDLE1BQUosS0FBZSxDQUFmLElBQW9CLEVBQUUsR0FBRyxDQUFDLFdBQUosSUFBbUIsR0FBRyxDQUFDLFdBQUosQ0FBZ0IsT0FBaEIsQ0FBd0IsT0FBeEIsTUFBcUMsQ0FBMUQsQ0FBekIsRUFBd0YsT0FGakUsQ0FJdkI7O0FBQ0EsaUJBQVcsVUFBWCxDQUFtQixPQUFuQixFQUx1QixDQU12Qjs7QUFDQSxtQkFBYSxDQUFDLE1BQWQsQ0FBcUIsT0FBckI7QUFFQSxhQUFPLENBQUUsa0JBQWtCLENBQUMsR0FBRCxDQUFwQixDQUFQO0FBQ0EsU0FBRyxHQUFHLElBQU47QUFDRCxLQVhELENBckJxQyxDQWtDckM7OztBQUNBLE9BQUcsQ0FBQyxTQUFKLEdBQWdCO0FBQ2Q7QUFDQSxpQkFBVyxVQUFYLENBQW1CLE9BQW5CLEVBRmMsQ0FHZDs7QUFDQSxtQkFBYSxDQUFDLE1BQWQsQ0FBcUIsT0FBckIsRUFKYyxDQU1kOztBQUNBLGFBQU8sQ0FBQyxhQUFSLElBQXlCLE9BQU8sQ0FBQyxhQUFSLENBQXNCO0FBQzdDLGVBQU8sRUFBUCxPQUQ2QztBQUU3QyxjQUFNLEVBQU4sTUFGNkM7QUFHN0MsV0FBRyxFQUFILEdBSDZDO0FBSTdDLGVBQU8sRUFBUCxPQUo2QztBQUs3QyxZQUFJLEVBQUo7QUFMNkMsT0FBdEIsQ0FBekI7QUFRQSxZQUFNLENBQUUsZ0JBQVcsc0JBQWUsT0FBZixtQkFBc0MsU0FBUyxDQUFDLE9BQWhELENBQWIsQ0FBTjtBQUNBLFNBQUcsR0FBRyxJQUFOO0FBQ0QsS0FqQkQsQ0FuQ3FDLENBc0RyQzs7O0FBQ0EsT0FBRyxDQUFDLE9BQUosR0FBYztBQUNaO0FBQ0EsaUJBQVcsVUFBWCxDQUFtQixPQUFuQixFQUZZLENBR1o7O0FBQ0EsbUJBQWEsQ0FBQyxNQUFkLENBQXFCLE9BQXJCO0FBRUEsWUFBTSxDQUFFLGdCQUFXLENBQUMsZUFBRCxFQUFrQixTQUFTLENBQUMsSUFBNUIsQ0FBYixDQUFOO0FBQ0EsU0FBRyxHQUFHLElBQU47QUFDRCxLQVJELENBdkRxQyxDQWlFckM7OztBQUNBLE9BQUcsQ0FBQyxPQUFKLEdBQWM7QUFDWjtBQUNBLGlCQUFXLFVBQVgsQ0FBbUIsT0FBbkIsRUFGWSxDQUdaOztBQUNBLG1CQUFhLENBQUMsTUFBZCxDQUFxQixPQUFyQjtBQUVBLFlBQU0sQ0FBRSxnQkFBVyxDQUFDLG1CQUFELEVBQXNCLFNBQVMsQ0FBQyxRQUFoQyxDQUFiLENBQU47QUFDQSxTQUFHLEdBQUcsSUFBTjtBQUNELEtBUkQ7O0FBVUEsUUFBSSxDQUFDLElBQUwsRUFBVztBQUNULFVBQUksR0FBRyxJQUFQO0FBQ0QsS0E5RW9DLENBZ0ZyQzs7O0FBQ0EsaUJBQWEsQ0FBQyxHQUFkLENBQWtCLE9BQWxCLEVBQTJCLEdBQTNCO0FBRUEsT0FBRyxDQUFDLElBQUosQ0FBUyxJQUFUO0FBQ0QsR0FwRk0sQ0FBUDtBQXFGRCxDOztBQ3ZHRDtDQUVBOztDQUVBOztBQUNBO0FBRWMsOERBQVcsTUFBWCxFQUFzQztBQUNsRDtBQUNBO0FBQ0EsU0FBTyxRQUFRLENBQUMsTUFBRCxDQUFSLENBQWlCLElBQWpCLENBQXNCLGFBQUcsRUFBRztBQUNqQztBQUNBO0FBQ0EsUUFBSSxHQUFHLENBQUMsTUFBSixJQUFjLEdBQWQsSUFBcUIsR0FBRyxDQUFDLE1BQUosR0FBYSxHQUF0QyxFQUEyQztBQUN6QyxhQUFPLEdBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBUixDQUFnQixHQUFHLENBQUMsTUFBcEIsQ0FBYjs7QUFDQSxVQUFJLE1BQUosRUFBWTtBQUNWLGVBQU8sZ0JBQVcsOEJBQXVCLEdBQUcsQ0FBQyxNQUEzQix1QkFBcUQsU0FBUyxDQUFDLE9BQS9ELEVBQXdFLElBQXhFLENBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxnQkFBVywyQ0FBb0MsR0FBRyxDQUFDLE1BQXhDLEdBQWtELFNBQVMsQ0FBQyxNQUE1RCxFQUFvRSxJQUFwRSxFQUEwRTtBQUFFLGNBQUksRUFBRSxHQUFHLENBQUM7QUFBWixTQUExRSxDQUFsQjtBQUNEO0FBQ0Y7QUFDRixHQWJNLENBQVA7QUFjRCxDOztBQ3hCYztBQUNiLGtCQUFnQixnQ0FESDtBQUViLFlBQVU7QUFGRyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDU0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUVBOzs7O0lBR00sYTtBQXdCSjs7OztBQUlBLGtCQUFhLE9BQWIsRUFBbUM7QUFBQTs7QUFBQSxRQUMzQixJQUQyQixHQUN5QixPQUR6QixDQUMzQixJQUQyQjtBQUFBLFFBQ3JCLEtBRHFCLEdBQ3lCLE9BRHpCLENBQ3JCLEtBRHFCO0FBQUEsUUFDZCxNQURjLEdBQ3lCLE9BRHpCLENBQ2QsTUFEYztBQUFBLFFBQ04sYUFETSxHQUN5QixPQUR6QixDQUNOLGFBRE07QUFBQSwwQkFDeUIsT0FEekIsQ0FDUyxNQURUO0FBQUEsUUFDUyxNQURULGdDQUNrQixFQURsQjtBQUFBLFFBRTNCLE9BRjJCLEdBRWtCLE1BRmxCLENBRTNCLE9BRjJCO0FBQUEsUUFFbEIsT0FGa0IsR0FFa0IsTUFGbEIsQ0FFbEIsT0FGa0I7QUFBQSxRQUVULE9BRlMsR0FFa0IsTUFGbEIsQ0FFVCxPQUZTO0FBQUEsUUFFQSxhQUZBLEdBRWtCLE1BRmxCLENBRUEsYUFGQSxFQUlqQzs7QUFDQSxRQUFJLENBQUMsSUFBTCxFQUFXLE1BQU0sZ0JBQVcsQ0FBQyxpQ0FBRCxFQUFvQyxTQUFTLENBQUMsSUFBOUMsQ0FBakIsQ0FMc0IsQ0FPakM7O0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssT0FBTCxtQ0FDSyxZQURMLEdBRUssT0FGTDtBQUlBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFPLElBQUksRUFBMUI7QUFDQSxTQUFLLE9BQUwsR0FBZSxNQUFmO0FBQ0EsU0FBSyxPQUFMLEdBQWUsT0FBTyxJQUFJLENBQTFCO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLGFBQWEsSUFBSSxLQUF0QztBQUNBLFNBQUssYUFBTCxHQUFxQixhQUFyQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs0QkFLUyxPLEVBQWlCLEksRUFBUztBQUNqQyxVQUFJLE9BQU8sR0FBRyxJQUFkO0FBQ0EsVUFBSSxLQUFLLEdBQUcsSUFBWixDQUZpQyxDQUlqQzs7QUFDQSxVQUFLLFdBQVcsQ0FBQyxPQUFaLENBQW9CLE9BQXBCLENBQUwsRUFBb0MsT0FBTyxnQkFBVyxDQUFDLHFCQUFELEVBQXdCLFNBQVMsQ0FBQyxRQUFsQyxFQUE0QyxJQUE1QyxDQUFsQixDQUxILENBTWpDOztBQUNBLGlCQUFXLENBQUMsSUFBWixDQUFpQixPQUFqQixFQVBpQyxDQVNqQzs7QUFDQSxVQUFJLE1BQU0sR0FBRyxLQUFLLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEIsSUFBMUIsQ0FBYixDQVZpQyxDQVdqQzs7QUFDQSxVQUFJLE1BQU0sWUFBWSxPQUF0QixFQUErQixPQUFPLE1BQVAsQ0FaRSxDQWNqQzs7QUFDQSxXQUFLLEdBQUcsS0FBSyxpQkFBTCxDQUF1QixNQUF2QixDQUFSLENBZmlDLENBaUJqQzs7QUFDQSxhQUFPLEdBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsTUFBaEIsQ0FBVjs7QUFDQSxhQUFPLEtBQUssQ0FBQyxNQUFiLEVBQXFCO0FBQ25CLGVBQU8sR0FBRyxPQUFPLENBQUMsSUFBUixDQUFjLEtBQUssQ0FBQyxLQUFOLEVBQWQsQ0FBVjtBQUNEOztBQUVELGFBQU8sT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7c0NBSW1CLE0sRUFBMkI7QUFDNUM7QUFDQSxVQUFJLEtBQUssR0FBb0IsQ0FBQyxlQUFELENBQTdCLENBRjRDLENBSTVDOztBQUNBLFVBQUksTUFBTSxDQUFDLGtCQUFYLEVBQStCO0FBQzdCLGFBQUssQ0FBQyxPQUFOLENBQWMsTUFBTSxDQUFDLGtCQUFyQjtBQUNELE9BUDJDLENBUTVDOzs7QUFDQSxVQUFJLE1BQU0sQ0FBQyxtQkFBWCxFQUFnQztBQUM5QixhQUFLLENBQUMsSUFBTixDQUFXLE1BQU0sQ0FBQyxtQkFBbEIsRUFEOEIsQ0FHOUI7O0FBQ0EsYUFBSyxDQUFDLElBQU4sQ0FBVyxVQUFDLEdBQUQsRUFBUTtBQUNqQixjQUFJLENBQUMsR0FBTCxFQUFVLE9BQU8sZ0JBQVcsQ0FBQyw4RUFBRCxFQUFpRixTQUFTLENBQUMsT0FBM0YsRUFBb0csSUFBcEcsQ0FBbEI7QUFDVixpQkFBTyxHQUFQO0FBQ0QsU0FIRDtBQUlELE9BakIyQyxDQW1CNUM7OztBQUNBLFVBQUksTUFBTSxDQUFDLEtBQVgsRUFBa0I7QUFDaEIsYUFBSyxDQUFDLElBQU4sQ0FBVyxNQUFNLENBQUMsS0FBbEI7QUFDRDs7QUFDRCxhQUFPLE1BQU0sQ0FBQyxLQUFkO0FBRUEsYUFBTyxLQUFQO0FBQ0Q7QUFFRDs7Ozs7OztnQ0FJYSxPLEVBQWlCLEksRUFBWTtBQUN4QyxVQUFJLE1BQU0sR0FBRyxJQUFiO0FBQ0EsVUFBSSxHQUFHLEdBQUcsSUFBVjtBQUNBLFVBQUksS0FBSyxHQUFHLElBQVo7QUFDQSxVQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBTixDQUFlLEtBQUssT0FBcEIsQ0FBZDtBQUNBLFVBQUksT0FBTyxHQUFHLEtBQUssT0FBbkI7QUFDQSxVQUFJLE9BQU8sR0FBRyxLQUFLLE9BQW5CO0FBQ0EsVUFBSSxhQUFhLEdBQUcsS0FBSyxhQUF6QixDQVB3QyxDQVF4Qzs7QUFDQSxVQUFJLGFBQWEsR0FBRyxLQUFLLGFBQXpCLENBVHdDLENBV3hDOztBQUNBLFVBQUssT0FBTyxDQUFDLFFBQVIsQ0FBaUIsR0FBakIsQ0FBTCxFQUE2QjtBQUFBLDZCQUNOLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQURNO0FBQUE7QUFBQSxZQUN0QixNQURzQjtBQUFBLFlBQ2QsSUFEYzs7QUFFM0IsWUFBSSxTQUFTLEdBQWlCLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBOUIsQ0FGMkIsQ0FJM0I7O0FBQ0EsWUFBSSxDQUFDLFNBQUwsRUFBZ0IsT0FBTyxnQkFBVyxrQkFBVyxNQUFYLDJDQUF3QyxNQUF4QywwQkFBc0QsU0FBUyxDQUFDLElBQWhFLEVBQXNFLElBQXRFLENBQWxCLENBTFcsQ0FPM0I7O0FBQ0EsWUFBSSxTQUFTLENBQUMsYUFBZCxFQUE2QjtBQUMzQix1QkFBYSxHQUFHLFNBQVMsQ0FBQyxhQUExQjtBQUNELFNBVjBCLENBWTNCOzs7QUFDQSxZQUFJLFNBQVMsQ0FBQyxNQUFkLEVBQXNCO0FBQ3BCO0FBQ0EsY0FBSSxTQUFTLENBQUMsTUFBVixDQUFpQixPQUFyQixFQUE4QjtBQUM1QixtQkFBTyxHQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLE9BQTNCO0FBQ0QsV0FKbUIsQ0FLcEI7OztBQUNBLGNBQUksU0FBUyxDQUFDLE1BQVYsQ0FBaUIsT0FBckIsRUFBOEI7QUFDNUIsbUJBQU8sbUNBQ0YsT0FERSxHQUVGLEtBQUssQ0FBQyxRQUFOLENBQWUsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsT0FBaEMsQ0FGRSxDQUFQO0FBSUQsV0FYbUIsQ0FZcEI7OztBQUNBLGNBQUksU0FBUyxDQUFDLE1BQVYsQ0FBaUIsT0FBckIsRUFBOEI7QUFDNUIsbUJBQU8sR0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixPQUEzQjtBQUNELFdBZm1CLENBZ0JwQjs7O0FBQ0EsY0FBSSxTQUFTLENBQUMsTUFBVixDQUFpQixhQUFyQixFQUFvQztBQUNsQyx5QkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLGFBQWpDO0FBQ0Q7QUFDRixTQWpDMEIsQ0FtQzNCOzs7QUFDQSxXQUFHLEdBQUcsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFmLENBQU47QUFDQSxhQUFLLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBUjtBQUNELE9BdENELE1Bc0NPO0FBQ0w7QUFDQSxXQUFHLEdBQUcsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFOO0FBQ0EsYUFBSyxHQUFHLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBUjtBQUNELE9BdER1QyxDQXdEeEM7OztBQUNBLFVBQUksQ0FBQyxHQUFMLEVBQVUsT0FBTyxnQkFBVyxlQUFRLE9BQVIsMkNBQXNDLE9BQXRDLDBCQUFxRCxTQUFTLENBQUMsSUFBL0QsRUFBcUUsSUFBckUsQ0FBbEIsQ0F6RDhCLENBMkR4Qzs7QUFDQSxVQUFLLEtBQUssQ0FBQyxRQUFOLENBQWUsR0FBZixDQUFMLEVBQTJCO0FBQ3pCO0FBQ0EsV0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFOLENBQWUsR0FBZixDQUFOLENBRnlCLENBR3pCOztBQUNBLFdBQUcsQ0FBQyxNQUFKLEdBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTCxHQUFjLGFBQWQsR0FBOEIsR0FBRyxDQUFDLE1BQUosQ0FBVyxXQUFYLEVBQTNDLENBSnlCLENBS3pCOztBQUNBLFdBQUcsQ0FBQyxHQUFKLGFBQWEsT0FBYixTQUF1QixHQUFHLENBQUMsR0FBM0I7QUFDRCxPQVBELE1BT087QUFDTDtBQUNBLFlBQUksR0FBRyxhQUFNLE9BQU4sU0FBZ0IsR0FBaEIsQ0FBUDtBQUNBLFdBQUcsR0FBRztBQUNKLGFBQUcsRUFBSCxHQURJO0FBRUosZ0JBQU0sRUFBRTtBQUZKLFNBQU47QUFJRCxPQTFFdUMsQ0E0RXhDOzs7QUFDQSxhQUFPLG1DQUNGLE9BREUsR0FFRixHQUFHLENBQUMsT0FGRixDQUFQLENBN0V3QyxDQWlGeEM7O0FBQ0EsYUFBTyxHQUFHLENBQUMsT0FBWCxDQWxGd0MsQ0FvRnhDOztBQUNBLFlBQU07QUFDSixlQUFPLEVBQVAsT0FESTtBQUVKLGVBQU8sRUFBUCxPQUZJO0FBR0osZUFBTyxFQUFQLE9BSEk7QUFJSixhQUFLLEVBQUw7QUFKSSxTQUtELEdBTEMsQ0FBTixDQXJGd0MsQ0E2RnhDOztBQUNBLFVBQUksSUFBSSxJQUFJLENBQUMsYUFBYixFQUE0QjtBQUMxQixjQUFNLENBQUMsSUFBUCxHQUFjLEtBQUssb0JBQUwsQ0FBMEIsSUFBMUIsQ0FBZDtBQUNELE9BRkQsTUFFTyxJQUFJLElBQUksSUFBSSxhQUFaLEVBQTJCO0FBQ2hDLGNBQU0sQ0FBQyxJQUFQLEdBQWMsYUFBYSxDQUFDLElBQUQsQ0FBM0I7QUFDRCxPQWxHdUMsQ0FvR3hDOzs7QUFDQSxhQUFPLE1BQVA7QUFDRDtBQUVEOzs7Ozs7O3lDQUlzQixJLEVBQUk7QUFDeEI7QUFDQSxVQUFJLEtBQUssQ0FBQyxVQUFOLENBQWlCLElBQWpCLEtBQ0YsS0FBSyxDQUFDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FERSxJQUVGLEtBQUssQ0FBQyxRQUFOLENBQWUsSUFBZixDQUZFLElBR0YsS0FBSyxDQUFDLE1BQU4sQ0FBYSxJQUFiLENBSEUsSUFJRixLQUFLLENBQUMsTUFBTixDQUFhLElBQWIsQ0FKRixFQUtFO0FBQ0EsZUFBTyxJQUFQO0FBQ0QsT0FUdUIsQ0FXeEI7OztBQUNBLFVBQUssS0FBSyxDQUFDLFFBQU4sQ0FBZSxJQUFmLENBQUwsRUFBNEI7QUFDMUIsZUFBTyxJQUFJLENBQUMsU0FBTCxDQUFlLElBQWYsQ0FBUDtBQUNELE9BZHVCLENBZ0J4Qjs7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztBQUdZLDZEQUFmLEU7O0FDNVFBO0FBRUE7Ozs7QUFHQSxJQUFJLE1BQU0sR0FBVyxJQUFyQjtBQUNjLHFEQUFXLE9BQVgsRUFBaUM7QUFDN0M7QUFDQSxNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsVUFBTSxHQUFHLElBQUksV0FBSixDQUFXLE9BQVgsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sQ0FBQyxJQUFSLENBQWEseUJBQWI7QUFDRDs7QUFDRCxTQUFPLFVBQUMsT0FBRCxFQUFrQixJQUFsQixFQUErQjtBQUNwQyxXQUFPLE1BQU0sQ0FBQyxPQUFQLENBQWUsT0FBZixFQUF3QixJQUF4QixDQUFQO0FBQ0QsR0FGRDtBQUdELEM7O0FDaEJEO0FBQ0E7Ozs7OztBQUtjLHNEQUFXLElBQVgsRUFBeUIsSUFBekIsRUFBdUM7QUFDbkQsU0FBTyxTQUFQLENBQWMsSUFBZCxFQUFvQixJQUFwQjtBQUNELEM7O0FDUkQ7QUFDQTtBQUNBOzs7O0FBSWMsNERBQVcsTUFBWCxFQUEyQjtBQUN2QyxNQUFJLENBQUMsT0FBTyxDQUFDLGFBQWIsRUFBNEI7QUFDMUIsV0FBTyxDQUFDLHFCQUFSLENBQThCLE1BQTlCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTSxnQkFBVyxDQUFDLDhCQUFELEVBQWlDLFNBQVMsQ0FBQyxJQUEzQyxDQUFqQjtBQUNEO0FBQ0YsQzs7QUNaRDtBQUNBOzs7O0FBR2MseURBQVcsSUFBWCxFQUF1QjtBQUNuQyxTQUFPLGFBQWEsQ0FBQyxNQUFkLENBQXFCLElBQXJCLENBQVA7QUFDRCxDOztBQ05EO0FBQ0E7QUFHZTtBQUNiO0FBQ0EsU0FGYSxtQkFFSixRQUZJLEVBRXdCO0FBQ25DLFFBQUksV0FBTSxDQUFDLGtCQUFYLEVBQStCLE1BQU0sZ0JBQVcsQ0FBQyxtQ0FBRCxFQUFzQyxTQUFTLENBQUMsSUFBaEQsQ0FBakI7QUFDL0IsZUFBTSxDQUFDLGtCQUFQLEdBQTRCLFFBQTVCO0FBQ0QsR0FMWTtBQU1iO0FBQ0EsVUFQYSxvQkFPSCxRQVBHLEVBTzBCO0FBQ3JDLFFBQUksV0FBTSxDQUFDLG1CQUFYLEVBQWdDLE1BQU0sZ0JBQVcsQ0FBQyxvQ0FBRCxFQUF1QyxTQUFTLENBQUMsSUFBakQsQ0FBakI7QUFDaEMsZUFBTSxDQUFDLG1CQUFQLEdBQTZCLFFBQTdCO0FBQ0Q7QUFWWSxDQUFmLEU7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQ2IsUUFBTSxFQUFOLE1BRGE7QUFFYixTQUFPLEVBQVAsT0FGYTtBQUdiLGVBQWEsRUFBYixhQUhhO0FBSWIsUUFBTSxFQUFOLFVBSmE7QUFLYixhQUFXLEVBQVgsV0FBVztBQUxFLENBQWYiLCJmaWxlIjoibmV0cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmV0cm9sXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5ldHJvbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiLyoqXHJcbiAqIOivt+axguaxoO+8jOeUqOS6juS/neeVmeW9k+WJjeato+WcqOaJp+ihjOeahOivt+axglxyXG4gKi9cclxuXHJcbmNsYXNzIFJlcXVlc3RQb29sIHtcclxuICBwb29sczogQXJyYXk8c3RyaW5nPiA9IFtdXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreivt+axguaYr+WQpuWtmOWcqFxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgaXNFeGlzdCAobmFtZTogc3RyaW5nKTogQm9vbGVhbiB7XHJcbiAgICBpZiAoIHRoaXMucG9vbHMuaW5jbHVkZXMobmFtZSkgKSByZXR1cm4gdHJ1ZVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlsIbor7fmsYLlkI3mt7vliqDliLAgcG9vbHMg5LitXHJcbiAgICogQHBhcmFtIG5hbWUg6K+35rGC55qEIGFwaW5hbWVcclxuICAgKi9cclxuICBwdXNoIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICggdGhpcy5wb29scy5pbmNsdWRlcyhuYW1lKSApIHJldHVyblxyXG4gICAgdGhpcy5wb29scy5wdXNoKG5hbWUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKDpmaTlr7nlupQgYXBpbmFtZVxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgZGVsZXRlIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucG9vbHMuaW5kZXhPZihuYW1lKVxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICB0aGlzLnBvb2xzLnNwbGljZShpbmRleCwgMSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXF1ZXN0UG9vbCgpIiwiLyogZ2xvYmFsIFxyXG4gICAgRm9ybURhdGFcclxuICAgIEFycmF5QnVmZmVyXHJcbiAgICBGdW5jdGlvblxyXG4gICAgRmlsZVxyXG4gICAgQmxvYlxyXG4qL1xyXG4vKipcclxuICog5rex5aSN5Yi25a+56LGhXHJcbiAqIEBwYXJhbSBvYmog6KaB5aSN5Yi255qE5a+56LGhXHJcbiAqIEByZXR1cm4g5LiA5Liq5paw55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSAob2JqOiBPYmplY3QpOiBvYmplY3Qge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeShvYmopIClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdCAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li65Ye95pWwXHJcbiAqIEBwYXJhbSB2YWx1ZSBcclxuICovXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKHZhbHVlKTogQm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb25cclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IEZvcm1kYXRhIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhICh2YWx1ZSk6IEJvb2xlYW4ge1xyXG4gIHJldHVybiBGb3JtRGF0YSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrSBBcnJheUJ1ZmZlciDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gQXJyYXlCdWZmZXIgJiYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLogU3RyZWFtXHJcbiAqIEBwYXJhbSB2YWx1ZSDopoHliKTmlq3nmoTlr7nosaFcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyZWFtICh2YWx1ZSk6IEJvb2xlYW4ge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5waXBlKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IOaWh+S7tlxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uiBCbG9iIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jsb2IgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2JcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWxnuaAp+aYr+WQpuS4uuebruagh+WvueixoeiHquacieWxnuaAp1xyXG4gKiBAcGFyYW0gdGFyZ2V0IOebruagh+WvueixoVxyXG4gKiBAcGFyYW0gcHJvcCDliKTmlq3nmoTlsZ7nm7hcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duUHJvcCAodGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwcm9wOiBhbnkpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRlZXBDb3B5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNGb3JtRGF0YSxcclxuICBpc0FycmF5QnVmZmVyLFxyXG4gIGlzU3RyZWFtLFxyXG4gIGlzRmlsZSxcclxuICBpc0Jsb2IsXHJcbiAgaXNPd25Qcm9wLFxyXG59IiwiLyogZ2xvYmFsICBYTUxIdHRwUmVxdWVzdCAqL1xyXG4vKipcclxuICog55Sf5oiQ5ZON5bqU5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gIGxldCBkYXRhID0gIXhoci5yZXNwb25zZVR5cGUgfHwgeGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8geGhyLnJlc3BvbnNlVGV4dCA6IHhoci5yZXNwb25zZVxyXG4gIC8vIOWwhuWtl+espuS4suWTjeW6lOaVsOaNru+8jOi9rOaNouS4uiBKU09OIFxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9keTogZGF0YSxcclxuICAgIHhocixcclxuICAgIHN0YXR1czogeGhyLnN0YXR1cyxcclxuICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XHJcbiAgfVxyXG59IiwiLy8g6ZSZ6K+v57G75Z6L55qE5p6a5Li+XHJcbmVudW0gRXJyb3JUeXBlIHtcclxuICBDQVRDSEVEID0gMCwgLy8g5bey57uP6YCa6L+HIHRvQ2F0Y2gg5Ye95pWw77yI5oiW6ICF5YW25LuW5pa55byP5oum5oiq77yJXHJcbiAgRkFJTCA9IDEsIC8vIOS4gOiIrOmUmeivr1xyXG4gIFRIUk9UVExFID0gMiwgLy8g6Kem5Y+R6IqC5rWBXHJcbiAgU1RBVFVTID0gMywgLy8g5pyN5Yqh5Zmo54q25oCB56CB6ZSZ6K+vXHJcbiAgVElNRU9VVCA9IDQsIC8vIOi2heaXtumUmeivr1xyXG4gIENBTkNFTEVEID0gNSwgLy8g6K+35rGC5bey6KKr5Y+W5raIXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDkuIDkuKrplJnor69cclxuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXHJcbiAqIEBwYXJhbSB0eXBlIOmUmeivr+exu+Wei1xyXG4gKiBAcGFyYW0gaXNQcm9taXNlIOaYr+WQpui/lOWbniBwcm9taXNlLnJlamVjdFxyXG4gKiBAcGFyYW0gZXh0cmEg5omp5bGV5a+56LGh77yM55So5LqO54m55q6K5aSE55CGXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoXHJcbiAgbWVzc2FnZTogc3RyaW5nLFxyXG4gIHR5cGU6IEVycm9yVHlwZSxcclxuICBpc1Byb21pc2U6IEJvb2xlYW4gPSBmYWxzZSxcclxuICBleHRyYT86IFJlY29yZDxzdHJpbmcsIGFueT4sXHJcbik6IFByb21pc2U8RXJyb3I+IHwgRXJyb3Ige1xyXG4gIC8vIOWIm+W7uuS4gOS4qumUmeivr1xyXG4gIGxldCBlcnJvcjogYW55ID0gbmV3IEVycm9yKG1lc3NhZ2UpXHJcblxyXG4gIC8vIOaJqeWxlSBlcnJvciDnmoTlsZ7mgKdcclxuICAvLyDlvZPliY3nmoTplJnor6/nsbvlnotcclxuICBlcnJvci50eXBlID0gdHlwZSBcclxuICAvLyDplJnor6/nsbvlnovnmoTlgLxcclxuICBlcnJvci5FcnJvclR5cGUgPSB7XHJcbiAgICBDQVRDSEVEOiBFcnJvclR5cGUuQ0FUQ0hFRCxcclxuICAgIEZBSUw6IEVycm9yVHlwZS5GQUlMLFxyXG4gICAgVEhST1RUTEU6IEVycm9yVHlwZS5USFJPVFRMRSxcclxuICAgIFNUQVRVUzogRXJyb3JUeXBlLlNUQVRVUyxcclxuICAgIFRJTUVPVVQ6IEVycm9yVHlwZS5USU1FT1VULFxyXG4gICAgQ0FOQ0VMRUQ6IEVycm9yVHlwZS5DQU5DRUxFRFxyXG4gIH1cclxuXHJcbiAgLy8g54q25oCB56CB6ZSZ6K+v77yMIOmcgOimgeingeeKtuaAgeeggeaMgui9veWIsOmUmeivr+WvueixoeS4ilxyXG4gIGlmICh0eXBlID09PSBFcnJvclR5cGUuU1RBVFVTKSB7XHJcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gZXh0cmEuY29kZVxyXG4gIH1cclxuXHJcbiAgLy8g6L2sIEpTT04g55qE5pa55rOVXHJcbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55PiA9IHtcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBFcnJvclR5cGU6IHRoaXMuRXJyb3JUeXBlLFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdHVzQ29kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJlc3VsdC5zdGF0dXNDb2RlID0gdGhpcy5zdGF0dXNDb2RlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQcm9taXNlKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG4vLyDlr7zlh7rlh73mlbBcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRXJyb3JcclxuXHJcbi8vIOWvvOWHuumUmeivr+exu+Wei1xyXG5leHBvcnQge1xyXG4gIEVycm9yVHlwZVxyXG59IiwiaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NyZWF0ZUVycm9yJ1xyXG4vKipcclxuICog54q25oCB5o2V6I635ZmoXHJcbiAqL1xyXG5jbGFzcyBDYXRjaGVyIHtcclxuICB0YXJnZXRzOiBSZWNvcmQ8bnVtYmVyLCBGdW5jdGlvbj4gPSB7fVxyXG4gIHRpbWVvdXRIYW5kZXI6IEZ1bmN0aW9uIC8vIOi2heaXtuWkhOeQhuWHveaVsFxyXG4gIC8qKlxyXG4gICAqIOaNleiOt+eKtuaAgeeggVxyXG4gICAqIEBwYXJhbSBjb2RlIOimgeaNleiOt+eahOeKtuaAgeeggVxyXG4gICAqIEBwYXJhbSBleGVjIOaJp+ihjOWHveaVsFxyXG4gICAqL1xyXG4gIGNhdGNoIChjb2RlOiBudW1iZXIsIGV4ZWM6IEZ1bmN0aW9uKSB7XHJcbiAgICBjb2RlID0gTnVtYmVyKGNvZGUpXHJcbiAgICBpZiAoICF1dGlscy5pc093blByb3AodGhpcy50YXJnZXRzLCBjb2RlKSApIHtcclxuICAgICAgdGhpcy50YXJnZXRzW2NvZGVdID0gZXhlY1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoYFRoZSBjYXRjaGVyIG9mIHN0YXR1cyBjb2RlICR7Y29kZX0gYWxyZWFkeSBleGlzdHNgLCBFcnJvclR5cGUuRkFJTClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOinpuWPkeS6i+S7tlxyXG4gICAqIEBwYXJhbSBjb2RlIOWPr+iDveinpuWPkeaNleiOt+WHveaVsOeahOeKtuaAgeeggVxyXG4gICAqL1xyXG4gIHRyaWdnZXIgKGNvZGUpIHtcclxuICAgIGNvZGUgPSBOdW1iZXIoY29kZSlcclxuICAgIGlmICggdXRpbHMuaXNPd25Qcm9wKHRoaXMudGFyZ2V0cywgY29kZSkgKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0c1tjb2RlXSgpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOi2heaXtuWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyVGltZW91dEhhbmRlciAoaGFuZGVyOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy50aW1lb3V0SGFuZGVyID0gaGFuZGVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F0Y2hlcigpIiwiLyogZ2xvYmFsICBYTUxIdHRwUmVxdWVzdCAqL1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuLyoqXHJcbiAqIOWPlua2iGFqYXjor7fmsYJcclxuICovXHJcbmNsYXNzIENhbmNlbFJlcXVlc3Qge1xyXG4gIHhoclBvb2xzOiBSZWNvcmQ8c3RyaW5nLCBYTUxIdHRwUmVxdWVzdD4gPSB7fVxyXG5cclxuICAvKipcclxuICAgKiDkv53lrZh4aHLlr7nosaFcclxuICAgKiBAcGFyYW0gbmFtZSDmjqXlj6PlkI1cclxuICAgKiBAcGFyYW0geGhyIHhocuWvueixoVxyXG4gICAqL1xyXG4gIGFkZCAobmFtZTogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICBpZiAoICF1dGlscy5pc093blByb3AodGhpcy54aHJQb29scywgbmFtZSkgKSB7XHJcbiAgICAgIHRoaXMueGhyUG9vbHNbbmFtZV0gPSB4aHJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOenu+mZpHhocuWvueixoVxyXG4gICAqIEBwYXJhbSBuYW1lIOaOpeWPo+WQjVxyXG4gICAqL1xyXG4gIHJlbW92ZSAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIHV0aWxzLmlzT3duUHJvcCh0aGlzLnhoclBvb2xzLCBuYW1lKSApIHtcclxuICAgICAgZGVsZXRlIHRoaXMueGhyUG9vbHNbbmFtZV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaJp+ihjOWPlua2iOivt+axglxyXG4gICAqIEBwYXJhbSBuYW1lIOaOpeWPo+WQjVxyXG4gICAqL1xyXG4gIGNhbmNlbCAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoICF1dGlscy5pc093blByb3AodGhpcy54aHJQb29scywgbmFtZSkgKSByZXR1cm4gZmFsc2VcclxuICAgIHRoaXMueGhyUG9vbHNbbmFtZV0uYWJvcnQoKVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDYW5jZWxSZXF1ZXN0KCkiLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8vIOW8leWFpeivt+axguaxoFxyXG5pbXBvcnQgcmVxdWVzdFBvb2wgZnJvbSAnQC9jb3JlL3JlcXVlc3RQb29sJ1xyXG4vLyDlvJXlhaXlt6XlhbfnsbtcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXHJcbi8vIOW8leWFpeeUn+aIkOWTjeW6lOaVsOaNrueahOWHveaVsFxyXG5pbXBvcnQgcmVzcG9uc2VEYXRhQ3JlYXRlIGZyb20gJ0AvY29yZS9yZXNwb25zZURhdGFDcmVhdGUnXHJcbi8vIOW8leWFpeWIm+W7uuS4gOS4qumUmeivr1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnQC9jb3JlL2NyZWF0ZUVycm9yJ1xyXG4vLyDlvJXlhaXmjZXojrflmahcclxuaW1wb3J0IGNhdGNoZXIgZnJvbSAnQC9jb3JlL2NhdGNoZXInXHJcbi8vIOW8leWFpeWPlua2iHhocuivt+axguWvueixoVxyXG5pbXBvcnQgY2FuY2VsUmVxdWVzdCBmcm9tICdAL2NvcmUvY2FuY2VsUmVxdWVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb25maWc6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xyXG4gIC8vIOino+aehOmFjee9rumhuVxyXG4gIGxldCB7IGhlYWRlcnMsIG1ldGhvZCwgdXJsLCBkYXRhLCB0aW1lb3V0LCBhcGlOYW1lIH0gPSBjb25maWdcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgXHJcbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcclxuXHJcbiAgICAvLyDlpoLmnpzkvKDnu5nlkI7nq6/nmoTmlbDmja7kuLogRm9ybURhdGEg5qC85byP77yM5YiZ56e76ZmkIGNvbnRlbnQtdHlwZe+8jOiuqea1j+iniOWZqOiHquW3seiuvue9rlxyXG4gICAgaWYgKCBkYXRhICYmIHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgKSB7XHJcbiAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuvue9ruivt+axguWktFxyXG4gICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCBhcyBzdHJpbmcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOiuvue9rui2heaXtlxyXG4gICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC54q25oCB5Y+Y5YyWXHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIXhociB8fCB4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkgcmV0dXJuXHJcbiAgICAgIGlmICggeGhyLnN0YXR1cyA9PT0gMCAmJiAhKHhoci5yZXNwb25zZVVSTCAmJiB4aHIucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkgKSByZXR1cm5cclxuICAgICAgXHJcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoYXBpTmFtZSlcclxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXHJcbiAgICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGFwaU5hbWUpXHJcblxyXG4gICAgICByZXNvbHZlKCByZXNwb25zZURhdGFDcmVhdGUoeGhyKSApXHJcbiAgICAgIHhociA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyDotoXml7blpITnkIZcclxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoYXBpTmFtZSlcclxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXHJcbiAgICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGFwaU5hbWUpXHJcblxyXG4gICAgICAvLyDmiafooYzotoXml7blpITnkIblmahcclxuICAgICAgY2F0Y2hlci50aW1lb3V0SGFuZGVyICYmIGNhdGNoZXIudGltZW91dEhhbmRlcih7XHJcbiAgICAgICAgYXBpTmFtZSxcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmVqZWN0KCBjcmVhdGVFcnJvcihgdGltZW91dCBvZiAke3RpbWVvdXR9IG1zIGV4Y2VlZGVkYCwgRXJyb3JUeXBlLlRJTUVPVVQpIClcclxuICAgICAgeGhyID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOivt+axguaKpemUmVxyXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoYXBpTmFtZSlcclxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXHJcbiAgICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGFwaU5hbWUpXHJcblxyXG4gICAgICByZWplY3QoIGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgRXJyb3JUeXBlLkZBSUwpIClcclxuICAgICAgeGhyID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOivt+axguiiq+WPlua2iFxyXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoYXBpTmFtZSlcclxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXHJcbiAgICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGFwaU5hbWUpXHJcblxyXG4gICAgICByZWplY3QoIGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGNhbmNlbGxlZCcsIEVycm9yVHlwZS5DQU5DRUxFRCkgKVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBkYXRhID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa3u+WKoHhocuWvueixoeWIsCBjYW5jZWxSZXF1ZXN0XHJcbiAgICBjYW5jZWxSZXF1ZXN0LmFkZChhcGlOYW1lLCB4aHIpXHJcblxyXG4gICAgeGhyLnNlbmQoZGF0YSlcclxuICB9KVxyXG59IiwiLy8g5a+85YWl6YCC6YWN5ZmoXHJcbmltcG9ydCBhZGFwdGVycyBmcm9tICdAL2FkYXB0ZXJzL2luZGV4J1xyXG4vLyDlr7zlhaXmjZXojrflmahcclxuaW1wb3J0IGNhdGNoZXIgZnJvbSAnQC9jb3JlL2NhdGNoZXInXHJcbi8vIOWvvOWFpemUmeivr+WIm+W7ulxyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb25maWc6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICAvLyBjb25zb2xlLmxvZyhjb25maWcpXHJcbiAgLy8g6LCD55So6YCC6YWN5ZmoXHJcbiAgcmV0dXJuIGFkYXB0ZXJzKGNvbmZpZykudGhlbihyZXMgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0nLCByZXMpXHJcbiAgICAvLyBodHRwIOeKtuaAgeeggSDlnKggMjAwIC0gMzAwIOS5i+mXtO+8jCDov5Tlm57mlbDmja5cclxuICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBjYXRjaGVyLnRyaWdnZXIocmVzLnN0YXR1cylcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVFcnJvcihgZG9uJ3Qgd29ycnksIGVycm9yICR7cmVzLnN0YXR1c30gQWxyZWFkeSB0b0NhdGNoYCwgRXJyb3JUeXBlLkNBVENIRUQsIHRydWUpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKGByZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICR7cmVzLnN0YXR1c31gLCBFcnJvclR5cGUuU1RBVFVTLCB0cnVlLCB7IGNvZGU6IHJlcy5zdGF0dXMgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxyXG4gICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxufSIsIi8vIOWvvOWFpeaOpeWPo1xyXG5pbXBvcnQgeyBcclxuICBOZXRyb2xPcHRpb25zLFxyXG4gIE1vZHVsZURldGFpbCxcclxuICBNb2R1bGVzLFxyXG4gIEludGVyY2VwdG9yUmVxdWVzdCxcclxuICBJbnRlcmNlcHRvclJlc3BvbnNlLFxyXG4gIFRyYW5zZm9ybURhdGEgXHJcbn0gZnJvbSAnQC9pbnRlcmZhY2VzL2luZGV4J1xyXG4vLyDlr7zlhaXor7fmsYJcclxuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdCdcclxuLy8g5a+85YWl6buY6K6k6K+35rGC5aS0XHJcbmltcG9ydCBkZWZhdWx0SGVhZGVycyBmcm9tICcuL2hlYWRlcnMnXHJcbi8vIOW8leWFpeivt+axguaxoFxyXG5pbXBvcnQgcmVxdWVzdFBvb2wgZnJvbSAnLi9yZXF1ZXN0UG9vbCdcclxuLy8g5byV5YWl5bel5YW35pa55rOVXHJcbmltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xyXG4vLyDlvJXlhaXplJnor6/liJvlu7rlt6XlhbdcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY3JlYXRlRXJyb3InXHJcblxyXG4vKipcclxuICogTmV0cm9sIOWvueixoVxyXG4gKi9cclxuY2xhc3MgTmV0cm9sIHtcclxuICAvLyDnrqHnkIbmiYDmnIkgYXBpc1xyXG4gIGFwaXM6IG9iamVjdFxyXG4gIC8vIOWPkemAgSB4aHLor7fmsYIg5omA6ZyA55qEIFJlcXVlc3QgSGVhZGVyc1xyXG4gIGhlYWRlcnM6IG9iamVjdFxyXG4gIC8vIOWTjeW6lOaVsOaNrui/h+a7pOWZqO+8jOeUqOS6juWcqOivt+axguaIkOWKn+WQju+8jOaOpeWPl+acjeWKoeWZqOaVsOaNru+8jOW5tui/m+ihjOWkhOeQhuWSjOi/lOWbnlxyXG4gIGxlYWNoOiBvYmplY3RcclxuICAvLyDln7rmnKx1cmxcclxuICBiYXNlVXJsOiBzdHJpbmdcclxuICAvLyDmqKHlnZdcclxuICBtb2R1bGVzOiBNb2R1bGVzXHJcbiAgLy8g6LaF5pe25pe26ZmQXHJcbiAgdGltZW91dDogbnVtYmVyXHJcbiAgLy8g6buY6K6k6K+35rGC5pa55rOVXHJcbiAgZGVmYXVsdE1ldGhvZDogc3RyaW5nXHJcblxyXG4gIC8vIOaVsOaNrui9rOaNouaWueazlVxyXG4gIHRyYW5zZm9ybURhdGE6IFRyYW5zZm9ybURhdGFcclxuXHJcbiAgLy8g6K+35rGC5oum5oiq5ZmoXHJcbiAgc3RhdGljIGludGVyY2VwdG9yUmVxdWVzdDogSW50ZXJjZXB0b3JSZXF1ZXN0XHJcbiAgLy8g5ZON5bqU5oum5oiq5ZmoXHJcbiAgc3RhdGljIGludGVyY2VwdG9yUmVzcG9uc2U6IEludGVyY2VwdG9yUmVzcG9uc2VcclxuXHJcbiAgLyoqXHJcbiAgICog5p6E6YCg5Ye95pWwXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgTmV0cm9sIOWunuS+i+eahOmFjee9rumhuVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zOiBOZXRyb2xPcHRpb25zKSB7XHJcbiAgICBsZXQgeyBhcGlzLCBsZWFjaCwgbW9kdWxlLCB0cmFuc2Zvcm1EYXRhLCBjb25maWcgPSB7fSB9ID0gb3B0aW9uc1xyXG4gICAgbGV0IHsgaGVhZGVycywgYmFzZVVybCwgdGltZW91dCwgZGVmYXVsdE1ldGhvZCB9ID0gY29uZmlnXHJcblxyXG4gICAgLy8g5qOA5p+lIGFwaXMg5piv5ZCm5a2Y5ZyoXHJcbiAgICBpZiAoIWFwaXMpIHRocm93IGNyZWF0ZUVycm9yKCdhcGlzIGlzIHJlcXVpcmVkIGluIGNvbnN0cnVjdG9yJywgRXJyb3JUeXBlLkZBSUwpXHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5pWw5o2uXHJcbiAgICB0aGlzLmFwaXMgPSBhcGlzXHJcbiAgICB0aGlzLmhlYWRlcnMgPSB7XHJcbiAgICAgIC4uLmRlZmF1bHRIZWFkZXJzLFxyXG4gICAgICAuLi5oZWFkZXJzLFxyXG4gICAgfVxyXG4gICAgdGhpcy5sZWFjaCA9IGxlYWNoXHJcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsIHx8ICcnXHJcbiAgICB0aGlzLm1vZHVsZXMgPSBtb2R1bGVcclxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQgfHwgMFxyXG4gICAgdGhpcy5kZWZhdWx0TWV0aG9kID0gZGVmYXVsdE1ldGhvZCB8fCAnZ2V0J1xyXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gdHJhbnNmb3JtRGF0YVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Y+R6LW36K+35rGC55qE5pa55rOVXHJcbiAgICogQHBhcmFtIGFwaU5hbWUg6LCD55So5oyH5a6aIGFwaXMgXHJcbiAgICogQHBhcmFtIGRhdGEg5Lyg6YCS57uZ5pyN5Yqh5Zmo55qE5pWw5o2uXHJcbiAgICovXHJcbiAgcmVxdWVzdCAoYXBpTmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGxldCBwcm9taXNlID0gbnVsbFxyXG4gICAgbGV0IGNoYWluID0gbnVsbFxyXG4gICAgXHJcbiAgICAvLyDliKTmlq3mmK/lkKbor6Xor7fmsYLmmK/lkKbmraPlnKjmiafooYxcclxuICAgIGlmICggcmVxdWVzdFBvb2wuaXNFeGlzdChhcGlOYW1lKSApIHJldHVybiBjcmVhdGVFcnJvcignVHJpZ2dlcmVkIHRocm90dGxlOycsIEVycm9yVHlwZS5USFJPVFRMRSwgdHJ1ZSlcclxuICAgIC8vIOWwhiBhcGluYW1lIOa3u+WKoOWIsOivt+axguaxoFxyXG4gICAgcmVxdWVzdFBvb2wucHVzaChhcGlOYW1lKVxyXG5cclxuICAgIC8vIOagueaNruiwg+eUqCBhcGnvvIzlkIjlubbphY3nva7poblcclxuICAgIGxldCBjb25maWcgPSB0aGlzLm1lcmdlQ29uZmlnKGFwaU5hbWUsIGRhdGEpXHJcbiAgICAvLyDlpoLmnpzov5Tlm57nmoTmmK8gUHJvbWlzZSDlr7nosaHvvIwg5YiZ55u05o6l6L+U5ZueXHJcbiAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIGNvbmZpZ1xyXG5cclxuICAgIC8vIOWQiOW5tiBwcm9taXNlIOmTvlxyXG4gICAgY2hhaW4gPSB0aGlzLm1lcmdlUHJvbWlzZUNoYWluKGNvbmZpZylcclxuXHJcbiAgICAvLyDov57mjqUgcHJvbWlzZSDpk75cclxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKVxyXG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xyXG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCBjaGFpbi5zaGlmdCgpIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHByb21pc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQiOW5tiBwcm9taXNlIOmTvlxyXG4gICAqIEBwYXJhbSBjb25maWcg6K+35rGC6YWN572u5a+56LGhXHJcbiAgICovXHJcbiAgbWVyZ2VQcm9taXNlQ2hhaW4gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gICAgLy8g5bCG6K+35rGC5Ye95pWw77yM5re75Yqg5YiwIHByb21pc2Ug6ZO+5pWw57uE5LitXHJcbiAgICBsZXQgY2hhaW46IEFycmF5PEZ1bmN0aW9uPiA9IFtkaXNwYXRjaFJlcXVlc3RdXHJcblxyXG4gICAgLy8g5aaC5p6c5a2Y5ZyoIGludGVyY2VwdG9yUmVxdWVzdCDliJnmt7vliqDliLAgcHJvbWlzZSDpk77nmoTmnIDliY3pnaJcclxuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXF1ZXN0KSB7XHJcbiAgICAgIGNoYWluLnVuc2hpZnQoTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdClcclxuICAgIH1cclxuICAgIC8vIOWmguaenOWtmOWcqCBpbnRlcmNlcHRvclJlc3BvbnNlIOWImea3u+WKoOWIsCBwcm9taXNlIOi/nuS4ilxyXG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlKSB7XHJcbiAgICAgIGNoYWluLnB1c2goTmV0cm9sLmludGVyY2VwdG9yUmVzcG9uc2UpXHJcblxyXG4gICAgICAvLyDlkIzml7bmt7vliqDlkI7nu63lpITnkIblh73mlbDvvIzlvZPov5Tlm57lgLzkuLrnqbrlgLznmoTml7blgJnvvIzmipvlh7rlvILluLjvvIznu4jmraJwcm9taXNlXHJcbiAgICAgIGNoYWluLnB1c2goKHJlcykgPT4ge1xyXG4gICAgICAgIGlmICghcmVzKSByZXR1cm4gY3JlYXRlRXJyb3IoJ3RoZSBpbnRlcmNlcHRvclJlc3BvbnNlIHJldHVybiB2YWx1ZSBpcyB2b2lkLCB0aGUgcHJvbWlzZSBoYXMgYmVlbiBjYW5jZWxsZWQnLCBFcnJvclR5cGUuQ0FUQ0hFRCwgdHJ1ZSlcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5a2Y5ZyoIGxlYWNo77yM5YiZ5re75Yqg5YiwIHByb21pc2Ug6ZO+5LitXHJcbiAgICBpZiAoY29uZmlnLmxlYWNoKSB7XHJcbiAgICAgIGNoYWluLnB1c2goY29uZmlnLmxlYWNoKVxyXG4gICAgfVxyXG4gICAgZGVsZXRlIGNvbmZpZy5sZWFjaFxyXG4gICAgXHJcbiAgICByZXR1cm4gY2hhaW5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQiOW5tumFjee9rumhuVxyXG4gICAqIEBwYXJhbSBhcGlOYW1lIOWvueW6lOiwg+eUqOeahOaOpeWPo1xyXG4gICAqL1xyXG4gIG1lcmdlQ29uZmlnIChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xyXG4gICAgbGV0IGNvbmZpZyA9IG51bGxcclxuICAgIGxldCBhcGkgPSBudWxsXHJcbiAgICBsZXQgbGVhY2ggPSBudWxsXHJcbiAgICBsZXQgaGVhZGVycyA9IHV0aWxzLmRlZXBDb3B5KHRoaXMuaGVhZGVycylcclxuICAgIGxldCBiYXNlVXJsID0gdGhpcy5iYXNlVXJsXHJcbiAgICBsZXQgdGltZW91dCA9IHRoaXMudGltZW91dFxyXG4gICAgbGV0IGRlZmF1bHRNZXRob2QgPSB0aGlzLmRlZmF1bHRNZXRob2RcclxuICAgIC8vIOaVsOaNrui9rOaNouWHveaVsFxyXG4gICAgbGV0IHRyYW5zZm9ybURhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGFcclxuXHJcbiAgICAvLyDliKTmlq3osIPnlKjnmoTmmK/lkKbkuLogbW9kdWxlIOS4rSBhcGlcclxuICAgIGlmICggYXBpTmFtZS5pbmNsdWRlcygnLicpICkge1xyXG4gICAgICBsZXQgW21vZHVsZSwgbmFtZV0gPSBhcGlOYW1lLnNwbGl0KCcuJylcclxuICAgICAgbGV0IHRoZU1vZHVsZTogTW9kdWxlRGV0YWlsID0gdGhpcy5tb2R1bGVzW21vZHVsZV1cclxuXHJcbiAgICAgIC8vIOWIpOaWreS8oOmAkueahCBtb2R1bGUg5piv5ZCm5a2Y5ZyoXHJcbiAgICAgIGlmICghdGhlTW9kdWxlKSByZXR1cm4gY3JlYXRlRXJyb3IoYG1vZHVsZSAke21vZHVsZX0gZG9lcyBub3QgZXhpc3Q7IOaooeWdlyAke21vZHVsZX0g5LiN5a2Y5ZyoYCwgRXJyb3JUeXBlLkZBSUwsIHRydWUpXHJcblxyXG4gICAgICAvLyDlpoLmnpwgdHJhbnNmb3JtRGF0YSDmlrnms5XlrZjlnKjvvIzliJnph43mlrDotYvlgLxcclxuICAgICAgaWYgKHRoZU1vZHVsZS50cmFuc2Zvcm1EYXRhKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtRGF0YSA9IHRoZU1vZHVsZS50cmFuc2Zvcm1EYXRhXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWIpOaWreaooeWdl+S4iuaYr+WQpuWtmOWcqOmFjee9rumhuVxyXG4gICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZykge1xyXG4gICAgICAgIC8vIOaooeWdl+S4iuWmguaenOWtmOWcqCBiYXNlVXJs77yM5YiZ5pu05pS5IGJhc2VVcmzvvIzliJnmm7TmlLlcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsKSB7XHJcbiAgICAgICAgICBiYXNlVXJsID0gdGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaooeWdl+S4iuWmguaenOWtmOWcqCBoZWFkZXJz77yM5YiZ5ZCI5bm2XHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcuaGVhZGVycykge1xyXG4gICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgLi4udXRpbHMuZGVlcENvcHkodGhlTW9kdWxlLmNvbmZpZy5oZWFkZXJzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmqKHlnZfkuIrlrZjlnKggdGltZW91dO+8jOWImei/m+ihjOabv+aNolxyXG4gICAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnLnRpbWVvdXQpIHtcclxuICAgICAgICAgIHRpbWVvdXQgPSB0aGVNb2R1bGUuY29uZmlnLnRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yik5pat5qih5Z2X5LiK5piv5ZCm5a2Y5Zyo6buY6K6k6K+35rGC5pa55rOV77yM5a2Y5Zyo5YiZ5pu/5o2iXHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcuZGVmYXVsdE1ldGhvZCkge1xyXG4gICAgICAgICAgZGVmYXVsdE1ldGhvZCA9IHRoZU1vZHVsZS5jb25maWcuZGVmYXVsdE1ldGhvZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8g5o+Q5Y+WIGFwaSDlkowgbGVhY2hcclxuICAgICAgYXBpID0gdGhlTW9kdWxlLmFwaXNbbmFtZV1cclxuICAgICAgbGVhY2ggPSB0aGVNb2R1bGUubGVhY2hbbmFtZV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOaPkOWPliBhcGkg5ZKMIGxlYWNoXHJcbiAgICAgIGFwaSA9IHRoaXMuYXBpc1thcGlOYW1lXVxyXG4gICAgICBsZWFjaCA9IHRoaXMubGVhY2hbYXBpTmFtZV1cclxuICAgIH1cclxuXHJcbiAgICAvLyDliKTmlq3mmK/lkKbmib7liLDlr7nlupQgYXBpXHJcbiAgICBpZiAoIWFwaSkgcmV0dXJuIGNyZWF0ZUVycm9yKGBhcGkgJHthcGlOYW1lfSBkb2VzIG5vdCBleGlzdDsg5o6l5Y+jICR7YXBpTmFtZX0g5LiN5a2Y5ZyoYCwgRXJyb3JUeXBlLkZBSUwsIHRydWUpXHJcblxyXG4gICAgLy8g5Yik5patYXBp5piv5ZCm5Li65a+56LGhXHJcbiAgICBpZiAoIHV0aWxzLmlzT2JqZWN0KGFwaSkgKSB7XHJcbiAgICAgIC8vIOa3seWkjeWItiBhcGlcclxuICAgICAgYXBpID0gdXRpbHMuZGVlcENvcHkoYXBpKVxyXG4gICAgICAvLyDlsIYgYXBpLm1ldGhvZCDnmoTlgLzvvIzovazkuLroi7HmloflsI/lhpksIG1ldGhvZCDlrZjlnKjvvIzpu5jorqTosIPnlKggZ2V0XHJcbiAgICAgIGFwaS5tZXRob2QgPSAhYXBpLm1ldGhvZCA/IGRlZmF1bHRNZXRob2QgOiBhcGkubWV0aG9kLnRvTG93ZXJDYXNlKClcclxuICAgICAgLy8g5ZCI5bm2IGJhc2VVcmwg5ZKMIGFwaS51cmxcclxuICAgICAgYXBpLnVybCA9IGAke2Jhc2VVcmx9JHthcGkudXJsfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOS4jeaYr+Wvueixoe+8jOWImeS9v+eUqOm7mOiupOeahOaWueazlVxyXG4gICAgICBsZXQgdXJsID0gYCR7YmFzZVVybH0ke2FwaX1gXHJcbiAgICAgIGFwaSA9IHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBkZWZhdWx0TWV0aG9kXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDlkIjlubYgaGVhZGVycyDlkowgYXBpLmhlYWRlcnNcclxuICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgIC4uLmFwaS5oZWFkZXJzXHJcbiAgICB9XHJcbiAgICAvLyDliKDpmaQgYXBpLmhlYWRlcnNcclxuICAgIGRlbGV0ZSBhcGkuaGVhZGVyc1xyXG5cclxuICAgIC8vIOWQiOW5tumFjee9rumhuVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBhcGlOYW1lLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICB0aW1lb3V0LFxyXG4gICAgICBsZWFjaCxcclxuICAgICAgLi4uYXBpLFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBkYXRhIOWtmOWcqO+8jOWImeWwhuWFtuijheaNouWQjua3u+WKoOWIsCBjb25maWcg5LiKXHJcbiAgICBpZiAoZGF0YSAmJiAhdHJhbnNmb3JtRGF0YSkge1xyXG4gICAgICBjb25maWcuZGF0YSA9IHRoaXMuZGVmYXVsdFRyYW5zZm9ybURhdGEoZGF0YSlcclxuICAgIH0gZWxzZSBpZiAoZGF0YSAmJiB0cmFuc2Zvcm1EYXRhKSB7XHJcbiAgICAgIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/lOWbnlxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6buY6K6k55qE6L2s5o2i6K+35rGC5pWw5o2u5pa55rOVXHJcbiAgICogQHBhcmFtIGRhdGEgXHJcbiAgICovXHJcbiAgZGVmYXVsdFRyYW5zZm9ybURhdGEgKGRhdGEpIHtcclxuICAgIC8vIOeJueauiuWvueixoe+8jOebtOaOpei/lOWbnlxyXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICAvLyDmma7pgJrlr7nosaHvvIzovazkuLogSlNPTiDlrZfnrKbkuLJcclxuICAgIGlmICggdXRpbHMuaXNPYmplY3QoZGF0YSkgKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOacquefpeaDheWGte+8jOebtOaOpei/lOWbnlxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ldHJvbCIsImltcG9ydCBOZXRyb2wgZnJvbSAnLi9jb3JlL05ldHJvbCdcclxuaW1wb3J0IHsgTmV0cm9sT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCdcclxuLyoqXHJcbiAqIOWIm+W7uuS4gOS4qiBuZXRyb2wg5a6e5L6LXHJcbiAqL1xyXG5sZXQgbmV0cm9sOiBOZXRyb2wgPSBudWxsXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRpb25zOiBOZXRyb2xPcHRpb25zKTogRnVuY3Rpb24ge1xyXG4gIC8vIOWPquWFgeiuuOWNleS+i+WtmOWcqFxyXG4gIGlmICghbmV0cm9sKSB7XHJcbiAgICBuZXRyb2wgPSBuZXcgTmV0cm9sKG9wdGlvbnMpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybignbmV0cm9sIGluc3RhbmNlIGlzIG9ubHknKVxyXG4gIH1cclxuICByZXR1cm4gKGFwaU5hbWU6IHN0cmluZywgZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV0cm9sLnJlcXVlc3QoYXBpTmFtZSwgZGF0YSlcclxuICB9XHJcbn0iLCJpbXBvcnQgY2F0Y2hlciBmcm9tICdAL2NvcmUvY2F0Y2hlcidcclxuLyoqXHJcbiAqIOWvueWkluaatOmcsuaNleiOt+aWueazlVxyXG4gKiBAcGFyYW0gY29kZSDnirbmgIHnoIFcclxuICogQHBhcmFtIGV4ZWMg5omn6KGM5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29kZTogbnVtYmVyLCBleGVjOiBGdW5jdGlvbikge1xyXG4gIGNhdGNoZXIuY2F0Y2goY29kZSwgZXhlYylcclxufSIsImltcG9ydCBjYXRjaGVyIGZyb20gJy4vY29yZS9jYXRjaGVyJ1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jb3JlL2NyZWF0ZUVycm9yJ1xyXG4vKipcclxuICog5rOo5YaM6LaF5pe25aSE55CG5Ye95pWwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGhhbmRlcjogRnVuY3Rpb24pIHtcclxuICBpZiAoIWNhdGNoZXIudGltZW91dEhhbmRlcikge1xyXG4gICAgY2F0Y2hlci5yZWdpc3RlclRpbWVvdXRIYW5kZXIoaGFuZGVyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBjcmVhdGVFcnJvcigndGltZW91dEhhbmRlciBhbHJlYWR5IGV4aXN0cycsIEVycm9yVHlwZS5GQUlMKVxyXG4gIH1cclxufSIsImltcG9ydCBjYW5jZWxSZXF1ZXN0IGZyb20gJy4vY29yZS9jYW5jZWxSZXF1ZXN0J1xyXG4vKipcclxuICog5Y+W5raI5LiA5Liq6K+35rGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZTogc3RyaW5nKTogQm9vbGVhbiB7XHJcbiAgcmV0dXJuIGNhbmNlbFJlcXVlc3QuY2FuY2VsKG5hbWUpXHJcbn0iLCJpbXBvcnQgTmV0cm9sIGZyb20gJy4vY29yZS9OZXRyb2wnXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NvcmUvY3JlYXRlRXJyb3InXHJcbmltcG9ydCB7IEludGVyY2VwdG9yUmVzcG9uc2UsIEludGVyY2VwdG9yUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyDnu5Hlrpror7fmsYLmi6bmiKrlmahcclxuICByZXF1ZXN0IChjYWxsYmFjazogSW50ZXJjZXB0b3JSZXF1ZXN0KSB7XHJcbiAgICBpZiAoTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdCkgdGhyb3cgY3JlYXRlRXJyb3IoJ2ludGVyY2VwdG9yUmVxdWVzdCBhbHJlYWR5IGV4aXN0cycsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdCA9IGNhbGxiYWNrXHJcbiAgfSxcclxuICAvLyDnu5Hlrprlk43lupTmi6bmiKrlmahcclxuICByZXNwb25zZSAoY2FsbGJhY2s6IEludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSkgdGhyb3cgY3JlYXRlRXJyb3IoJ2ludGVyY2VwdG9yUmVzcG9uc2UgYWxyZWFkeSBleGlzdHMnLCBFcnJvclR5cGUuRkFJTClcclxuICAgIE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlID0gY2FsbGJhY2tcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlIGZyb20gJy4vc3JjL2NyZWF0ZSdcclxuaW1wb3J0IHRvQ2F0Y2ggZnJvbSAnLi9zcmMvdG9DYXRjaCdcclxuaW1wb3J0IHRpbWVvdXRIYW5kZXIgZnJvbSAnLi9zcmMvdGltZW91dEhhbmRlcidcclxuaW1wb3J0IGNhbmNlbCBmcm9tICcuL3NyYy9jYW5jZWwnXHJcbmltcG9ydCBpbnRlcmNlcHRvciBmcm9tICcuL3NyYy9pbnRlcmNlcHRvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbiAgdG9DYXRjaCxcclxuICB0aW1lb3V0SGFuZGVyLFxyXG4gIGNhbmNlbCxcclxuICBpbnRlcmNlcHRvcixcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICB0b0NhdGNoLFxyXG4gIHRpbWVvdXRIYW5kZXIsXHJcbiAgY2FuY2VsLFxyXG4gIGludGVyY2VwdG9yLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==