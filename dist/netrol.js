/*!
 * netrol.js v1.0.0-beta.3
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
/**
 * 往url上添加查询参数
 * @param url 要添加的url
 * @param query 参数对象
 */


function appendQueryToUrl(url, query) {
  // 判断 url 上是否已经包含响应的参数
  if (url.includes('?')) {
    Object.entries(query).forEach(function (_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      url += "&".concat(key, "=").concat(val);
    });
  } else {
    Object.entries(query).forEach(function (_ref3, i) {
      var _ref4 = slicedToArray_default()(_ref3, 2),
          key = _ref4[0],
          val = _ref4[1];

      if (i === 0) {
        url += "?".concat(key, "=").concat(val);
      } else {
        url += "&".concat(key, "=").concat(val);
      }
    });
  }

  return url;
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
  isOwnProp: isOwnProp,
  appendQueryToUrl: appendQueryToUrl
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
          method: defaultMethod.toLowerCase()
        };
      } // 合并 headers 和 api.headers


      headers = _objectSpread(_objectSpread({}, headers), api.headers); // 删除 api.headers

      delete api.headers; // 合并配置项

      config = _objectSpread({
        apiName: apiName,
        headers: headers,
        timeout: timeout,
        leach: leach
      }, api);

      if (config.method !== 'get') {
        // data 存在，则将其装换后添加到 config 上
        if (data && !transformData) {
          config.data = this.defaultTransformData(data);
        } else if (data && transformData) {
          config.data = transformData(data);
        }
      } else if (data) {
        config.url = utils.appendQueryToUrl(config.url, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRyb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL25ldHJvbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9yZXF1ZXN0UG9vbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvcmVzcG9uc2VEYXRhQ3JlYXRlLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvY2FuY2VsUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2hlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvTmV0cm9sLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RvQ2F0Y2gudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RpbWVvdXRIYW5kZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NhbmNlbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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QyxrQkFBWCxFQUErQixNQUFNLGdCQUFXLENBQUMsbUNBQUQsRUFBc0MsU0FBUyxDQUFDLElBQWhELENBQWpCO0FBQy9CLGVBQU0sQ0FBQyxrQkFBUCxHQUE0QixRQUE1QjtBQUNELEdBTFk7QUFNYjtBQUNBLFVBUGEsb0JBT0gsUUFQRyxFQU8wQjtBQUNyQyxRQUFJLFdBQU0sQ0FBQyxtQkFBWCxFQUFnQyxNQUFNLGdCQUFXLENBQUMsb0NBQUQsRUFBdUMsU0FBUyxDQUFDLElBQWpELENBQWpCO0FBQ2hDLGVBQU0sQ0FBQyxtQkFBUCxHQUE2QixRQUE3QjtBQUNEO0FBVlksQ0FBZixFOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZTtBQUNiLFFBQU0sRUFBTixNQURhO0FBRWIsU0FBTyxFQUFQLE9BRmE7QUFHYixlQUFhLEVBQWIsYUFIYTtBQUliLFFBQU0sRUFBTixVQUphO0FBS2IsYUFBVyxFQUFYLFdBQVc7QUFMRSxDQUFmIiwiZmlsZSI6Im5ldHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5ldHJvbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZXRyb2xcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsIi8qKlxuICog6K+35rGC5rGg77yM55So5LqO5L+d55WZ5b2T5YmN5q2j5Zyo5omn6KGM55qE6K+35rGCXG4gKi9cblxuY2xhc3MgUmVxdWVzdFBvb2wge1xuICBwb29sczogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgLyoqXG4gICAqIOWIpOaWreivt+axguaYr+WQpuWtmOWcqFxuICAgKiBAcGFyYW0gbmFtZSDor7fmsYLnmoQgYXBpbmFtZVxuICAgKi9cbiAgaXNFeGlzdCAobmFtZTogc3RyaW5nKTogQm9vbGVhbiB7XG4gICAgaWYgKCB0aGlzLnBvb2xzLmluY2x1ZGVzKG5hbWUpICkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiDlsIbor7fmsYLlkI3mt7vliqDliLAgcG9vbHMg5LitXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXG4gICAqL1xuICBwdXNoIChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIHRoaXMucG9vbHMuaW5jbHVkZXMobmFtZSkgKSByZXR1cm5cbiAgICB0aGlzLnBvb2xzLnB1c2gobmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiDliKDpmaTlr7nlupQgYXBpbmFtZVxuICAgKiBAcGFyYW0gbmFtZSDor7fmsYLnmoQgYXBpbmFtZVxuICAgKi9cbiAgZGVsZXRlIChuYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnBvb2xzLmluZGV4T2YobmFtZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cbiAgICB0aGlzLnBvb2xzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdFBvb2woKSIsIi8qIGdsb2JhbCBcbiAgICBGb3JtRGF0YVxuICAgIEFycmF5QnVmZmVyXG4gICAgRnVuY3Rpb25cbiAgICBGaWxlXG4gICAgQmxvYlxuKi9cbi8qKlxuICog5rex5aSN5Yi25a+56LGhXG4gKiBAcGFyYW0gb2JqIOimgeWkjeWItueahOWvueixoVxuICogQHJldHVybiDkuIDkuKrmlrDnmoTlr7nosaFcbiAqL1xuZnVuY3Rpb24gZGVlcENvcHkgKG9iajogT2JqZWN0KTogb2JqZWN0IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KG9iaikgKVxufVxuXG4vKipcbiAqIOWIpOaWreaYr+WQpuS4uuWvueixoVxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxuICovXG5mdW5jdGlvbiBpc09iamVjdCAodmFsdWUpOiBCb29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiDliKTmlq3mmK/lkKbkuLrlh73mlbBcbiAqIEBwYXJhbSB2YWx1ZSBcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbiAodmFsdWUpOiBCb29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb25cbn1cbi8qKlxuICog5Yik5pat5piv5ZCm5Li6IEZvcm1kYXRhIOWvueixoVxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhICh2YWx1ZSk6IEJvb2xlYW4ge1xuICByZXR1cm4gRm9ybURhdGEgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpXG59XG5cbi8qKlxuICog5Yik5patIEFycmF5QnVmZmVyIOWvueixoVxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyICh2YWx1ZSk6IEJvb2xlYW4ge1xuICByZXR1cm4gQXJyYXlCdWZmZXIgJiYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5Li6IFN0cmVhbVxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSAodmFsdWUpOiBCb29sZWFuIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnBpcGUpXG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5Li6IOaWh+S7tlxuICogQHBhcmFtIHZhbHVlIFxuICovXG5mdW5jdGlvbiBpc0ZpbGUgKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlXG59XG5cbi8qKlxuICog5Yik5pat5piv5ZCm5Li6IEJsb2Ig5a+56LGhXG4gKiBAcGFyYW0gdmFsdWUgXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2Jcbn1cblxuLyoqXG4gKiDliKTmlq3lsZ7mgKfmmK/lkKbkuLrnm67moIflr7nosaHoh6rmnInlsZ7mgKdcbiAqIEBwYXJhbSB0YXJnZXQg55uu5qCH5a+56LGhXG4gKiBAcGFyYW0gcHJvcCDliKTmlq3nmoTlsZ7nm7hcbiAqL1xuZnVuY3Rpb24gaXNPd25Qcm9wICh0YXJnZXQ6IFJlY29yZDxzdHJpbmcsIGFueT4sIHByb3A6IGFueSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcClcbn1cblxuLyoqXG4gKiDlvoB1cmzkuIrmt7vliqDmn6Xor6Llj4LmlbBcbiAqIEBwYXJhbSB1cmwg6KaB5re75Yqg55qEdXJsXG4gKiBAcGFyYW0gcXVlcnkg5Y+C5pWw5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZFF1ZXJ5VG9VcmwgKHVybDogc3RyaW5nLCBxdWVyeTogUmVjb3JkPHN0cmluZywgYW55Pik6IHN0cmluZyB7XG4gIC8vIOWIpOaWrSB1cmwg5LiK5piv5ZCm5bey57uP5YyF5ZCr5ZON5bqU55qE5Y+C5pWwXG4gIGlmICggdXJsLmluY2x1ZGVzKCc/JykgKSB7XG4gICAgT2JqZWN0LmVudHJpZXMocXVlcnkpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgIHVybCArPSBgJiR7a2V5fT0ke3ZhbH1gXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsXSwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdXJsICs9IGA/JHtrZXl9PSR7dmFsfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCArPSBgJiR7a2V5fT0ke3ZhbH1gXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gdXJsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVlcENvcHksXG4gIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyLFxuICBpc1N0cmVhbSxcbiAgaXNGaWxlLFxuICBpc0Jsb2IsXG4gIGlzT3duUHJvcCxcbiAgYXBwZW5kUXVlcnlUb1VybCxcbn0iLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXG4vKipcbiAqIOeUn+aIkOWTjeW6lOaVsOaNrlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xuICBsZXQgZGF0YSA9ICF4aHIucmVzcG9uc2VUeXBlIHx8IHhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2VcbiAgLy8g5bCG5a2X56ym5Liy5ZON5bqU5pWw5o2u77yM6L2s5o2i5Li6IEpTT04gXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvZHk6IGRhdGEsXG4gICAgeGhyLFxuICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxuICB9XG59IiwiLy8g6ZSZ6K+v57G75Z6L55qE5p6a5Li+XG5lbnVtIEVycm9yVHlwZSB7XG4gIENBVENIRUQgPSAwLCAvLyDlt7Lnu4/pgJrov4cgdG9DYXRjaCDlh73mlbDvvIjmiJbogIXlhbbku5bmlrnlvI/mi6bmiKrvvIlcbiAgRkFJTCA9IDEsIC8vIOS4gOiIrOmUmeivr1xuICBUSFJPVFRMRSA9IDIsIC8vIOinpuWPkeiKgua1gVxuICBTVEFUVVMgPSAzLCAvLyDmnI3liqHlmajnirbmgIHnoIHplJnor69cbiAgVElNRU9VVCA9IDQsIC8vIOi2heaXtumUmeivr1xuICBDQU5DRUxFRCA9IDUsIC8vIOivt+axguW3suiiq+WPlua2iFxufVxuXG4vKipcbiAqIOeUn+aIkOS4gOS4qumUmeivr1xuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXG4gKiBAcGFyYW0gdHlwZSDplJnor6/nsbvlnotcbiAqIEBwYXJhbSBpc1Byb21pc2Ug5piv5ZCm6L+U5ZueIHByb21pc2UucmVqZWN0XG4gKiBAcGFyYW0gZXh0cmEg5omp5bGV5a+56LGh77yM55So5LqO54m55q6K5aSE55CGXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yIChcbiAgbWVzc2FnZTogc3RyaW5nLFxuICB0eXBlOiBFcnJvclR5cGUsXG4gIGlzUHJvbWlzZTogQm9vbGVhbiA9IGZhbHNlLFxuICBleHRyYT86IFJlY29yZDxzdHJpbmcsIGFueT4sXG4pOiBQcm9taXNlPEVycm9yPiB8IEVycm9yIHtcbiAgLy8g5Yib5bu65LiA5Liq6ZSZ6K+vXG4gIGxldCBlcnJvcjogYW55ID0gbmV3IEVycm9yKG1lc3NhZ2UpXG5cbiAgLy8g5omp5bGVIGVycm9yIOeahOWxnuaAp1xuICAvLyDlvZPliY3nmoTplJnor6/nsbvlnotcbiAgZXJyb3IudHlwZSA9IHR5cGUgXG4gIC8vIOmUmeivr+exu+Wei+eahOWAvFxuICBlcnJvci5FcnJvclR5cGUgPSB7XG4gICAgQ0FUQ0hFRDogRXJyb3JUeXBlLkNBVENIRUQsXG4gICAgRkFJTDogRXJyb3JUeXBlLkZBSUwsXG4gICAgVEhST1RUTEU6IEVycm9yVHlwZS5USFJPVFRMRSxcbiAgICBTVEFUVVM6IEVycm9yVHlwZS5TVEFUVVMsXG4gICAgVElNRU9VVDogRXJyb3JUeXBlLlRJTUVPVVQsXG4gICAgQ0FOQ0VMRUQ6IEVycm9yVHlwZS5DQU5DRUxFRFxuICB9XG5cbiAgLy8g54q25oCB56CB6ZSZ6K+v77yMIOmcgOimgeingeeKtuaAgeeggeaMgui9veWIsOmUmeivr+WvueixoeS4ilxuICBpZiAodHlwZSA9PT0gRXJyb3JUeXBlLlNUQVRVUykge1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSBleHRyYS5jb2RlXG4gIH1cblxuICAvLyDovawgSlNPTiDnmoTmlrnms5VcbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgRXJyb3JUeXBlOiB0aGlzLkVycm9yVHlwZSxcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHVzQ29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQuc3RhdHVzQ29kZSA9IHRoaXMuc3RhdHVzQ29kZVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBpZiAoaXNQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICB9XG4gIFxuICByZXR1cm4gZXJyb3Jcbn1cblxuLy8g5a+85Ye65Ye95pWwXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFcnJvclxuXG4vLyDlr7zlh7rplJnor6/nsbvlnotcbmV4cG9ydCB7XG4gIEVycm9yVHlwZVxufSIsImltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY3JlYXRlRXJyb3InXG4vKipcbiAqIOeKtuaAgeaNleiOt+WZqFxuICovXG5jbGFzcyBDYXRjaGVyIHtcbiAgdGFyZ2V0czogUmVjb3JkPG51bWJlciwgRnVuY3Rpb24+ID0ge31cbiAgdGltZW91dEhhbmRlcjogRnVuY3Rpb24gLy8g6LaF5pe25aSE55CG5Ye95pWwXG4gIC8qKlxuICAgKiDmjZXojrfnirbmgIHnoIFcbiAgICogQHBhcmFtIGNvZGUg6KaB5o2V6I6355qE54q25oCB56CBXG4gICAqIEBwYXJhbSBleGVjIOaJp+ihjOWHveaVsFxuICAgKi9cbiAgY2F0Y2ggKGNvZGU6IG51bWJlciwgZXhlYzogRnVuY3Rpb24pIHtcbiAgICBjb2RlID0gTnVtYmVyKGNvZGUpXG4gICAgaWYgKCAhdXRpbHMuaXNPd25Qcm9wKHRoaXMudGFyZ2V0cywgY29kZSkgKSB7XG4gICAgICB0aGlzLnRhcmdldHNbY29kZV0gPSBleGVjXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGNyZWF0ZUVycm9yKGBUaGUgY2F0Y2hlciBvZiBzdGF0dXMgY29kZSAke2NvZGV9IGFscmVhZHkgZXhpc3RzYCwgRXJyb3JUeXBlLkZBSUwpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOinpuWPkeS6i+S7tlxuICAgKiBAcGFyYW0gY29kZSDlj6/og73op6blj5HmjZXojrflh73mlbDnmoTnirbmgIHnoIFcbiAgICovXG4gIHRyaWdnZXIgKGNvZGUpIHtcbiAgICBjb2RlID0gTnVtYmVyKGNvZGUpXG4gICAgaWYgKCB1dGlscy5pc093blByb3AodGhpcy50YXJnZXRzLCBjb2RlKSApIHtcbiAgICAgIHRoaXMudGFyZ2V0c1tjb2RlXSgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhozotoXml7blpITnkIblh73mlbBcbiAgICovXG4gIHJlZ2lzdGVyVGltZW91dEhhbmRlciAoaGFuZGVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMudGltZW91dEhhbmRlciA9IGhhbmRlclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXRjaGVyKCkiLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXG5pbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcbi8qKlxuICog5Y+W5raIYWpheOivt+axglxuICovXG5jbGFzcyBDYW5jZWxSZXF1ZXN0IHtcbiAgeGhyUG9vbHM6IFJlY29yZDxzdHJpbmcsIFhNTEh0dHBSZXF1ZXN0PiA9IHt9XG5cbiAgLyoqXG4gICAqIOS/neWtmHhocuWvueixoVxuICAgKiBAcGFyYW0gbmFtZSDmjqXlj6PlkI1cbiAgICogQHBhcmFtIHhociB4aHLlr7nosaFcbiAgICovXG4gIGFkZCAobmFtZTogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgaWYgKCAhdXRpbHMuaXNPd25Qcm9wKHRoaXMueGhyUG9vbHMsIG5hbWUpICkge1xuICAgICAgdGhpcy54aHJQb29sc1tuYW1lXSA9IHhoclxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDnp7vpmaR4aHLlr7nosaFcbiAgICogQHBhcmFtIG5hbWUg5o6l5Y+j5ZCNXG4gICAqL1xuICByZW1vdmUgKG5hbWU6IHN0cmluZykge1xuICAgIGlmICggdXRpbHMuaXNPd25Qcm9wKHRoaXMueGhyUG9vbHMsIG5hbWUpICkge1xuICAgICAgZGVsZXRlIHRoaXMueGhyUG9vbHNbbmFtZV1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5omn6KGM5Y+W5raI6K+35rGCXG4gICAqIEBwYXJhbSBuYW1lIOaOpeWPo+WQjVxuICAgKi9cbiAgY2FuY2VsIChuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoICF1dGlscy5pc093blByb3AodGhpcy54aHJQb29scywgbmFtZSkgKSByZXR1cm4gZmFsc2VcbiAgICB0aGlzLnhoclBvb2xzW25hbWVdLmFib3J0KClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYW5jZWxSZXF1ZXN0KCkiLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXG4vLyDlvJXlhaXor7fmsYLmsaBcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICdAL2NvcmUvcmVxdWVzdFBvb2wnXG4vLyDlvJXlhaXlt6XlhbfnsbtcbmltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xuLy8g5byV5YWl55Sf5oiQ5ZON5bqU5pWw5o2u55qE5Ye95pWwXG5pbXBvcnQgcmVzcG9uc2VEYXRhQ3JlYXRlIGZyb20gJ0AvY29yZS9yZXNwb25zZURhdGFDcmVhdGUnXG4vLyDlvJXlhaXliJvlu7rkuIDkuKrplJnor69cbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICdAL2NvcmUvY3JlYXRlRXJyb3InXG4vLyDlvJXlhaXmjZXojrflmahcbmltcG9ydCBjYXRjaGVyIGZyb20gJ0AvY29yZS9jYXRjaGVyJ1xuLy8g5byV5YWl5Y+W5raIeGhy6K+35rGC5a+56LGhXG5pbXBvcnQgY2FuY2VsUmVxdWVzdCBmcm9tICdAL2NvcmUvY2FuY2VsUmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8YW55PiB7XG4gIC8vIOino+aehOmFjee9rumhuVxuICBsZXQgeyBoZWFkZXJzLCBtZXRob2QsIHVybCwgZGF0YSwgdGltZW91dCwgYXBpTmFtZSB9ID0gY29uZmlnXG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICBcbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcblxuICAgIC8vIOWmguaenOS8oOe7meWQjuerr+eahOaVsOaNruS4uiBGb3JtRGF0YSDmoLzlvI/vvIzliJnnp7vpmaQgY29udGVudC10eXBl77yM6K6p5rWP6KeI5Zmo6Ieq5bex6K6+572uXG4gICAgaWYgKCBkYXRhICYmIHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgKSB7XG4gICAgICBkZWxldGUgaGVhZGVyc1snQ29udGVudC1UeXBlJ11cbiAgICB9XG5cbiAgICAvLyDorr7nva7or7fmsYLlpLRcbiAgICBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCBhcyBzdHJpbmcpXG4gICAgfSlcblxuICAgIC8vIOiuvue9rui2heaXtlxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICB4aHIudGltZW91dCA9IHRpbWVvdXRcbiAgICB9XG5cbiAgICAvLyDor7fmsYLnirbmgIHlj5jljJZcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF4aHIgfHwgeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHJldHVyblxuICAgICAgaWYgKCB4aHIuc3RhdHVzID09PSAwICYmICEoeGhyLnJlc3BvbnNlVVJMICYmIHhoci5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSApIHJldHVyblxuICAgICAgXG4gICAgICAvLyDnp7vpmaTor7fmsYLmsaDkuK3lr7nlupTnmoRhcGlcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXG4gICAgICBjYW5jZWxSZXF1ZXN0LnJlbW92ZShhcGlOYW1lKVxuXG4gICAgICByZXNvbHZlKCByZXNwb25zZURhdGFDcmVhdGUoeGhyKSApXG4gICAgICB4aHIgPSBudWxsXG4gICAgfVxuXG4gICAgLy8g6LaF5pe25aSE55CGXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxuICAgICAgcmVxdWVzdFBvb2wuZGVsZXRlKGFwaU5hbWUpXG4gICAgICAvLyDnp7vpmaTlr7nlupR4aHJcbiAgICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGFwaU5hbWUpXG5cbiAgICAgIC8vIOaJp+ihjOi2heaXtuWkhOeQhuWZqFxuICAgICAgY2F0Y2hlci50aW1lb3V0SGFuZGVyICYmIGNhdGNoZXIudGltZW91dEhhbmRlcih7XG4gICAgICAgIGFwaU5hbWUsXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBkYXRhXG4gICAgICB9KVxuXG4gICAgICByZWplY3QoIGNyZWF0ZUVycm9yKGB0aW1lb3V0IG9mICR7dGltZW91dH0gbXMgZXhjZWVkZWRgLCBFcnJvclR5cGUuVElNRU9VVCkgKVxuICAgICAgeGhyID0gbnVsbFxuICAgIH1cblxuICAgIC8vIOivt+axguaKpemUmVxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXG4gICAgICByZXF1ZXN0UG9vbC5kZWxldGUoYXBpTmFtZSlcbiAgICAgIC8vIOenu+mZpOWvueW6lHhoclxuICAgICAgY2FuY2VsUmVxdWVzdC5yZW1vdmUoYXBpTmFtZSlcblxuICAgICAgcmVqZWN0KCBjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIEVycm9yVHlwZS5GQUlMKSApXG4gICAgICB4aHIgPSBudWxsXG4gICAgfVxuXG4gICAgLy8g6K+35rGC6KKr5Y+W5raIXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyDnp7vpmaTor7fmsYLmsaDkuK3lr7nlupTnmoRhcGlcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxuICAgICAgLy8g56e76Zmk5a+55bqUeGhyXG4gICAgICBjYW5jZWxSZXF1ZXN0LnJlbW92ZShhcGlOYW1lKVxuXG4gICAgICByZWplY3QoIGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGNhbmNlbGxlZCcsIEVycm9yVHlwZS5DQU5DRUxFRCkgKVxuICAgICAgeGhyID0gbnVsbFxuICAgIH1cbiAgICBcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBudWxsXG4gICAgfVxuXG4gICAgLy8g5re75YqgeGhy5a+56LGh5YiwIGNhbmNlbFJlcXVlc3RcbiAgICBjYW5jZWxSZXF1ZXN0LmFkZChhcGlOYW1lLCB4aHIpXG5cbiAgICB4aHIuc2VuZChkYXRhKVxuICB9KVxufSIsIi8vIOWvvOWFpemAgumFjeWZqFxuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJ0AvYWRhcHRlcnMvaW5kZXgnXG4vLyDlr7zlhaXmjZXojrflmahcbmltcG9ydCBjYXRjaGVyIGZyb20gJ0AvY29yZS9jYXRjaGVyJ1xuLy8g5a+85YWl6ZSZ6K+v5Yib5bu6XG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAvLyBjb25zb2xlLmxvZyhjb25maWcpXG4gIC8vIOiwg+eUqOmAgumFjeWZqFxuICByZXR1cm4gYWRhcHRlcnMoY29uZmlnKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0nLCByZXMpXG4gICAgLy8gaHR0cCDnirbmgIHnoIEg5ZyoIDIwMCAtIDMwMCDkuYvpl7TvvIwg6L+U5Zue5pWw5o2uXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc3VsdCA9IGNhdGNoZXIudHJpZ2dlcihyZXMuc3RhdHVzKVxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJyb3IoYGRvbid0IHdvcnJ5LCBlcnJvciAke3Jlcy5zdGF0dXN9IEFscmVhZHkgdG9DYXRjaGAsIEVycm9yVHlwZS5DQVRDSEVELCB0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKGByZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICR7cmVzLnN0YXR1c31gLCBFcnJvclR5cGUuU1RBVFVTLCB0cnVlLCB7IGNvZGU6IHJlcy5zdGF0dXMgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbn0iLCIvLyDlr7zlhaXmjqXlj6NcbmltcG9ydCB7IFxuICBOZXRyb2xPcHRpb25zLFxuICBNb2R1bGVEZXRhaWwsXG4gIE1vZHVsZXMsXG4gIEludGVyY2VwdG9yUmVxdWVzdCxcbiAgSW50ZXJjZXB0b3JSZXNwb25zZSxcbiAgVHJhbnNmb3JtRGF0YSBcbn0gZnJvbSAnQC9pbnRlcmZhY2VzL2luZGV4J1xuLy8g5a+85YWl6K+35rGCXG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0J1xuLy8g5a+85YWl6buY6K6k6K+35rGC5aS0XG5pbXBvcnQgZGVmYXVsdEhlYWRlcnMgZnJvbSAnLi9oZWFkZXJzJ1xuLy8g5byV5YWl6K+35rGC5rGgXG5pbXBvcnQgcmVxdWVzdFBvb2wgZnJvbSAnLi9yZXF1ZXN0UG9vbCdcbi8vIOW8leWFpeW3peWFt+aWueazlVxuaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXG4vLyDlvJXlhaXplJnor6/liJvlu7rlt6XlhbdcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NyZWF0ZUVycm9yJ1xuXG4vKipcbiAqIE5ldHJvbCDlr7nosaFcbiAqL1xuY2xhc3MgTmV0cm9sIHtcbiAgLy8g566h55CG5omA5pyJIGFwaXNcbiAgYXBpczogb2JqZWN0XG4gIC8vIOWPkemAgSB4aHLor7fmsYIg5omA6ZyA55qEIFJlcXVlc3QgSGVhZGVyc1xuICBoZWFkZXJzOiBvYmplY3RcbiAgLy8g5ZON5bqU5pWw5o2u6L+H5ruk5Zmo77yM55So5LqO5Zyo6K+35rGC5oiQ5Yqf5ZCO77yM5o6l5Y+X5pyN5Yqh5Zmo5pWw5o2u77yM5bm26L+b6KGM5aSE55CG5ZKM6L+U5ZueXG4gIGxlYWNoOiBvYmplY3RcbiAgLy8g5Z+65pysdXJsXG4gIGJhc2VVcmw6IHN0cmluZ1xuICAvLyDmqKHlnZdcbiAgbW9kdWxlczogTW9kdWxlc1xuICAvLyDotoXml7bml7bpmZBcbiAgdGltZW91dDogbnVtYmVyXG4gIC8vIOm7mOiupOivt+axguaWueazlVxuICBkZWZhdWx0TWV0aG9kOiBzdHJpbmdcblxuICAvLyDmlbDmja7ovazmjaLmlrnms5VcbiAgdHJhbnNmb3JtRGF0YTogVHJhbnNmb3JtRGF0YVxuXG4gIC8vIOivt+axguaLpuaIquWZqFxuICBzdGF0aWMgaW50ZXJjZXB0b3JSZXF1ZXN0OiBJbnRlcmNlcHRvclJlcXVlc3RcbiAgLy8g5ZON5bqU5oum5oiq5ZmoXG4gIHN0YXRpYyBpbnRlcmNlcHRvclJlc3BvbnNlOiBJbnRlcmNlcHRvclJlc3BvbnNlXG5cbiAgLyoqXG4gICAqIOaehOmAoOWHveaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyBOZXRyb2wg5a6e5L6L55qE6YWN572u6aG5XG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9uczogTmV0cm9sT3B0aW9ucykge1xuICAgIGxldCB7IGFwaXMsIGxlYWNoLCBtb2R1bGUsIHRyYW5zZm9ybURhdGEsIGNvbmZpZyA9IHt9IH0gPSBvcHRpb25zXG4gICAgbGV0IHsgaGVhZGVycywgYmFzZVVybCwgdGltZW91dCwgZGVmYXVsdE1ldGhvZCB9ID0gY29uZmlnXG5cbiAgICAvLyDmo4Dmn6UgYXBpcyDmmK/lkKblrZjlnKhcbiAgICBpZiAoIWFwaXMpIHRocm93IGNyZWF0ZUVycm9yKCdhcGlzIGlzIHJlcXVpcmVkIGluIGNvbnN0cnVjdG9yJywgRXJyb3JUeXBlLkZBSUwpXG5cbiAgICAvLyDliJ3lp4vljJbmlbDmja5cbiAgICB0aGlzLmFwaXMgPSBhcGlzXG4gICAgdGhpcy5oZWFkZXJzID0ge1xuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXG4gICAgICAuLi5oZWFkZXJzLFxuICAgIH1cbiAgICB0aGlzLmxlYWNoID0gbGVhY2hcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsIHx8ICcnXG4gICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dCB8fCAwXG4gICAgdGhpcy5kZWZhdWx0TWV0aG9kID0gZGVmYXVsdE1ldGhvZCB8fCAnZ2V0J1xuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IHRyYW5zZm9ybURhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5Hotbfor7fmsYLnmoTmlrnms5VcbiAgICogQHBhcmFtIGFwaU5hbWUg6LCD55So5oyH5a6aIGFwaXMgXG4gICAqIEBwYXJhbSBkYXRhIOS8oOmAkue7meacjeWKoeWZqOeahOaVsOaNrlxuICAgKi9cbiAgcmVxdWVzdCAoYXBpTmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBsZXQgcHJvbWlzZSA9IG51bGxcbiAgICBsZXQgY2hhaW4gPSBudWxsXG4gICAgXG4gICAgLy8g5Yik5pat5piv5ZCm6K+l6K+35rGC5piv5ZCm5q2j5Zyo5omn6KGMXG4gICAgaWYgKCByZXF1ZXN0UG9vbC5pc0V4aXN0KGFwaU5hbWUpICkgcmV0dXJuIGNyZWF0ZUVycm9yKCdUcmlnZ2VyZWQgdGhyb3R0bGU7JywgRXJyb3JUeXBlLlRIUk9UVExFLCB0cnVlKVxuICAgIC8vIOWwhiBhcGluYW1lIOa3u+WKoOWIsOivt+axguaxoFxuICAgIHJlcXVlc3RQb29sLnB1c2goYXBpTmFtZSlcblxuICAgIC8vIOagueaNruiwg+eUqCBhcGnvvIzlkIjlubbphY3nva7poblcbiAgICBsZXQgY29uZmlnID0gdGhpcy5tZXJnZUNvbmZpZyhhcGlOYW1lLCBkYXRhKVxuICAgIC8vIOWmguaenOi/lOWbnueahOaYryBQcm9taXNlIOWvueixoe+8jCDliJnnm7TmjqXov5Tlm55cbiAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIGNvbmZpZ1xuXG4gICAgLy8g5ZCI5bm2IHByb21pc2Ug6ZO+XG4gICAgY2hhaW4gPSB0aGlzLm1lcmdlUHJvbWlzZUNoYWluKGNvbmZpZylcblxuICAgIC8vIOi/nuaOpSBwcm9taXNlIOmTvlxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKVxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oIGNoYWluLnNoaWZ0KCkgKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgLyoqXG4gICAqIOWQiOW5tiBwcm9taXNlIOmTvlxuICAgKiBAcGFyYW0gY29uZmlnIOivt+axgumFjee9ruWvueixoVxuICAgKi9cbiAgbWVyZ2VQcm9taXNlQ2hhaW4gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIC8vIOWwhuivt+axguWHveaVsO+8jOa3u+WKoOWIsCBwcm9taXNlIOmTvuaVsOe7hOS4rVxuICAgIGxldCBjaGFpbjogQXJyYXk8RnVuY3Rpb24+ID0gW2Rpc3BhdGNoUmVxdWVzdF1cblxuICAgIC8vIOWmguaenOWtmOWcqCBpbnRlcmNlcHRvclJlcXVlc3Qg5YiZ5re75Yqg5YiwIHByb21pc2Ug6ZO+55qE5pyA5YmN6Z2iXG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlcXVlc3QpIHtcbiAgICAgIGNoYWluLnVuc2hpZnQoTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdClcbiAgICB9XG4gICAgLy8g5aaC5p6c5a2Y5ZyoIGludGVyY2VwdG9yUmVzcG9uc2Ug5YiZ5re75Yqg5YiwIHByb21pc2Ug6L+e5LiKXG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlKSB7XG4gICAgICBjaGFpbi5wdXNoKE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlKVxuXG4gICAgICAvLyDlkIzml7bmt7vliqDlkI7nu63lpITnkIblh73mlbDvvIzlvZPov5Tlm57lgLzkuLrnqbrlgLznmoTml7blgJnvvIzmipvlh7rlvILluLjvvIznu4jmraJwcm9taXNlXG4gICAgICBjaGFpbi5wdXNoKChyZXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXMpIHJldHVybiBjcmVhdGVFcnJvcigndGhlIGludGVyY2VwdG9yUmVzcG9uc2UgcmV0dXJuIHZhbHVlIGlzIHZvaWQsIHRoZSBwcm9taXNlIGhhcyBiZWVuIGNhbmNlbGxlZCcsIEVycm9yVHlwZS5DQVRDSEVELCB0cnVlKVxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOWtmOWcqCBsZWFjaO+8jOWImea3u+WKoOWIsCBwcm9taXNlIOmTvuS4rVxuICAgIGlmIChjb25maWcubGVhY2gpIHtcbiAgICAgIGNoYWluLnB1c2goY29uZmlnLmxlYWNoKVxuICAgIH1cbiAgICBkZWxldGUgY29uZmlnLmxlYWNoXG4gICAgXG4gICAgcmV0dXJuIGNoYWluXG4gIH1cblxuICAvKipcbiAgICog5ZCI5bm26YWN572u6aG5XG4gICAqIEBwYXJhbSBhcGlOYW1lIOWvueW6lOiwg+eUqOeahOaOpeWPo1xuICAgKi9cbiAgbWVyZ2VDb25maWcgKGFwaU5hbWU6IHN0cmluZywgZGF0YTogb2JqZWN0KTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgbGV0IGNvbmZpZyA9IG51bGxcbiAgICBsZXQgYXBpID0gbnVsbFxuICAgIGxldCBsZWFjaCA9IG51bGxcbiAgICBsZXQgaGVhZGVycyA9IHV0aWxzLmRlZXBDb3B5KHRoaXMuaGVhZGVycylcbiAgICBsZXQgYmFzZVVybCA9IHRoaXMuYmFzZVVybFxuICAgIGxldCB0aW1lb3V0ID0gdGhpcy50aW1lb3V0XG4gICAgbGV0IGRlZmF1bHRNZXRob2QgPSB0aGlzLmRlZmF1bHRNZXRob2RcbiAgICAvLyDmlbDmja7ovazmjaLlh73mlbBcbiAgICBsZXQgdHJhbnNmb3JtRGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YVxuXG4gICAgLy8g5Yik5pat6LCD55So55qE5piv5ZCm5Li6IG1vZHVsZSDkuK0gYXBpXG4gICAgaWYgKCBhcGlOYW1lLmluY2x1ZGVzKCcuJykgKSB7XG4gICAgICBsZXQgW21vZHVsZSwgbmFtZV0gPSBhcGlOYW1lLnNwbGl0KCcuJylcbiAgICAgIGxldCB0aGVNb2R1bGU6IE1vZHVsZURldGFpbCA9IHRoaXMubW9kdWxlc1ttb2R1bGVdXG5cbiAgICAgIC8vIOWIpOaWreS8oOmAkueahCBtb2R1bGUg5piv5ZCm5a2Y5ZyoXG4gICAgICBpZiAoIXRoZU1vZHVsZSkgcmV0dXJuIGNyZWF0ZUVycm9yKGBtb2R1bGUgJHttb2R1bGV9IGRvZXMgbm90IGV4aXN0OyDmqKHlnZcgJHttb2R1bGV9IOS4jeWtmOWcqGAsIEVycm9yVHlwZS5GQUlMLCB0cnVlKVxuXG4gICAgICAvLyDlpoLmnpwgdHJhbnNmb3JtRGF0YSDmlrnms5XlrZjlnKjvvIzliJnph43mlrDotYvlgLxcbiAgICAgIGlmICh0aGVNb2R1bGUudHJhbnNmb3JtRGF0YSkge1xuICAgICAgICB0cmFuc2Zvcm1EYXRhID0gdGhlTW9kdWxlLnRyYW5zZm9ybURhdGFcbiAgICAgIH1cblxuICAgICAgLy8g5Yik5pat5qih5Z2X5LiK5piv5ZCm5a2Y5Zyo6YWN572u6aG5XG4gICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZykge1xuICAgICAgICAvLyDmqKHlnZfkuIrlpoLmnpzlrZjlnKggYmFzZVVybO+8jOWImeabtOaUuSBiYXNlVXJs77yM5YiZ5pu05pS5XG4gICAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnLmJhc2VVcmwpIHtcbiAgICAgICAgICBiYXNlVXJsID0gdGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsXG4gICAgICAgIH1cbiAgICAgICAgLy8g5qih5Z2X5LiK5aaC5p6c5a2Y5ZyoIGhlYWRlcnPvvIzliJnlkIjlubZcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcuaGVhZGVycykge1xuICAgICAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICAgICAgLi4udXRpbHMuZGVlcENvcHkodGhlTW9kdWxlLmNvbmZpZy5oZWFkZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmqKHlnZfkuIrlrZjlnKggdGltZW91dO+8jOWImei/m+ihjOabv+aNolxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy50aW1lb3V0KSB7XG4gICAgICAgICAgdGltZW91dCA9IHRoZU1vZHVsZS5jb25maWcudGltZW91dFxuICAgICAgICB9XG4gICAgICAgIC8vIOWIpOaWreaooeWdl+S4iuaYr+WQpuWtmOWcqOm7mOiupOivt+axguaWueazle+8jOWtmOWcqOWImeabv+aNolxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5kZWZhdWx0TWV0aG9kKSB7XG4gICAgICAgICAgZGVmYXVsdE1ldGhvZCA9IHRoZU1vZHVsZS5jb25maWcuZGVmYXVsdE1ldGhvZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOaPkOWPliBhcGkg5ZKMIGxlYWNoXG4gICAgICBhcGkgPSB0aGVNb2R1bGUuYXBpc1tuYW1lXVxuICAgICAgbGVhY2ggPSB0aGVNb2R1bGUubGVhY2hbbmFtZV1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5o+Q5Y+WIGFwaSDlkowgbGVhY2hcbiAgICAgIGFwaSA9IHRoaXMuYXBpc1thcGlOYW1lXVxuICAgICAgbGVhY2ggPSB0aGlzLmxlYWNoW2FwaU5hbWVdXG4gICAgfVxuXG4gICAgLy8g5Yik5pat5piv5ZCm5om+5Yiw5a+55bqUIGFwaVxuICAgIGlmICghYXBpKSByZXR1cm4gY3JlYXRlRXJyb3IoYGFwaSAke2FwaU5hbWV9IGRvZXMgbm90IGV4aXN0OyDmjqXlj6MgJHthcGlOYW1lfSDkuI3lrZjlnKhgLCBFcnJvclR5cGUuRkFJTCwgdHJ1ZSlcblxuICAgIC8vIOWIpOaWrWFwaeaYr+WQpuS4uuWvueixoVxuICAgIGlmICggdXRpbHMuaXNPYmplY3QoYXBpKSApIHtcbiAgICAgIC8vIOa3seWkjeWItiBhcGlcbiAgICAgIGFwaSA9IHV0aWxzLmRlZXBDb3B5KGFwaSlcbiAgICAgIC8vIOWwhiBhcGkubWV0aG9kIOeahOWAvO+8jOi9rOS4uuiLseaWh+Wwj+WGmSwgbWV0aG9kIOWtmOWcqO+8jOm7mOiupOiwg+eUqCBnZXRcbiAgICAgIGFwaS5tZXRob2QgPSAhYXBpLm1ldGhvZCA/IGRlZmF1bHRNZXRob2QgOiBhcGkubWV0aG9kLnRvTG93ZXJDYXNlKClcbiAgICAgIC8vIOWQiOW5tiBiYXNlVXJsIOWSjCBhcGkudXJsXG4gICAgICBhcGkudXJsID0gYCR7YmFzZVVybH0ke2FwaS51cmx9YFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDkuI3mmK/lr7nosaHvvIzliJnkvb/nlKjpu5jorqTnmoTmlrnms5VcbiAgICAgIGxldCB1cmwgPSBgJHtiYXNlVXJsfSR7YXBpfWBcbiAgICAgIGFwaSA9IHtcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRob2Q6IGRlZmF1bHRNZXRob2QudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWQiOW5tiBoZWFkZXJzIOWSjCBhcGkuaGVhZGVyc1xuICAgIGhlYWRlcnMgPSB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgLi4uYXBpLmhlYWRlcnNcbiAgICB9XG4gICAgLy8g5Yig6ZmkIGFwaS5oZWFkZXJzXG4gICAgZGVsZXRlIGFwaS5oZWFkZXJzXG5cbiAgICAvLyDlkIjlubbphY3nva7poblcbiAgICBjb25maWcgPSB7XG4gICAgICBhcGlOYW1lLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHRpbWVvdXQsXG4gICAgICBsZWFjaCxcbiAgICAgIC4uLmFwaSxcbiAgICB9XG4gICAgXG4gICAgaWYgKGNvbmZpZy5tZXRob2QgIT09ICdnZXQnKSB7XG4gICAgICAvLyBkYXRhIOWtmOWcqO+8jOWImeWwhuWFtuijheaNouWQjua3u+WKoOWIsCBjb25maWcg5LiKXG4gICAgICBpZiAoZGF0YSAmJiAhdHJhbnNmb3JtRGF0YSkge1xuICAgICAgICBjb25maWcuZGF0YSA9IHRoaXMuZGVmYXVsdFRyYW5zZm9ybURhdGEoZGF0YSlcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiB0cmFuc2Zvcm1EYXRhKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShkYXRhKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YSkge1xuICAgICAgY29uZmlnLnVybCA9IHV0aWxzLmFwcGVuZFF1ZXJ5VG9VcmwoY29uZmlnLnVybCwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyDov5Tlm55cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvKipcbiAgICog6buY6K6k55qE6L2s5o2i6K+35rGC5pWw5o2u5pa55rOVXG4gICAqIEBwYXJhbSBkYXRhIFxuICAgKi9cbiAgZGVmYXVsdFRyYW5zZm9ybURhdGEgKGRhdGEpIHtcbiAgICAvLyDnibnmrorlr7nosaHvvIznm7TmjqXov5Tlm55cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8vIOaZrumAmuWvueixoe+8jOi9rOS4uiBKU09OIOWtl+espuS4slxuICAgIGlmICggdXRpbHMuaXNPYmplY3QoZGF0YSkgKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9XG5cbiAgICAvLyDmnKrnn6Xmg4XlhrXvvIznm7TmjqXov5Tlm55cbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ldHJvbCIsImltcG9ydCBOZXRyb2wgZnJvbSAnLi9jb3JlL05ldHJvbCdcbmltcG9ydCB7IE5ldHJvbE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvaW5kZXgnXG4vKipcbiAqIOWIm+W7uuS4gOS4qiBuZXRyb2wg5a6e5L6LXG4gKi9cbmxldCBuZXRyb2w6IE5ldHJvbCA9IG51bGxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRpb25zOiBOZXRyb2xPcHRpb25zKTogRnVuY3Rpb24ge1xuICAvLyDlj6rlhYHorrjljZXkvovlrZjlnKhcbiAgaWYgKCFuZXRyb2wpIHtcbiAgICBuZXRyb2wgPSBuZXcgTmV0cm9sKG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCduZXRyb2wgaW5zdGFuY2UgaXMgb25seScpXG4gIH1cbiAgcmV0dXJuIChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiBuZXRyb2wucmVxdWVzdChhcGlOYW1lLCBkYXRhKVxuICB9XG59IiwiaW1wb3J0IGNhdGNoZXIgZnJvbSAnQC9jb3JlL2NhdGNoZXInXG4vKipcbiAqIOWvueWkluaatOmcsuaNleiOt+aWueazlVxuICogQHBhcmFtIGNvZGUg54q25oCB56CBXG4gKiBAcGFyYW0gZXhlYyDmiafooYzlh73mlbBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvZGU6IG51bWJlciwgZXhlYzogRnVuY3Rpb24pIHtcbiAgY2F0Y2hlci5jYXRjaChjb2RlLCBleGVjKVxufSIsImltcG9ydCBjYXRjaGVyIGZyb20gJy4vY29yZS9jYXRjaGVyJ1xuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY29yZS9jcmVhdGVFcnJvcidcbi8qKlxuICog5rOo5YaM6LaF5pe25aSE55CG5Ye95pWwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGhhbmRlcjogRnVuY3Rpb24pIHtcbiAgaWYgKCFjYXRjaGVyLnRpbWVvdXRIYW5kZXIpIHtcbiAgICBjYXRjaGVyLnJlZ2lzdGVyVGltZW91dEhhbmRlcihoYW5kZXIpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgY3JlYXRlRXJyb3IoJ3RpbWVvdXRIYW5kZXIgYWxyZWFkeSBleGlzdHMnLCBFcnJvclR5cGUuRkFJTClcbiAgfVxufSIsImltcG9ydCBjYW5jZWxSZXF1ZXN0IGZyb20gJy4vY29yZS9jYW5jZWxSZXF1ZXN0J1xuLyoqXG4gKiDlj5bmtojkuIDkuKror7fmsYJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWU6IHN0cmluZyk6IEJvb2xlYW4ge1xuICByZXR1cm4gY2FuY2VsUmVxdWVzdC5jYW5jZWwobmFtZSlcbn0iLCJpbXBvcnQgTmV0cm9sIGZyb20gJy4vY29yZS9OZXRyb2wnXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jb3JlL2NyZWF0ZUVycm9yJ1xuaW1wb3J0IHsgSW50ZXJjZXB0b3JSZXNwb25zZSwgSW50ZXJjZXB0b3JSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIOe7keWumuivt+axguaLpuaIquWZqFxuICByZXF1ZXN0IChjYWxsYmFjazogSW50ZXJjZXB0b3JSZXF1ZXN0KSB7XG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlcXVlc3QpIHRocm93IGNyZWF0ZUVycm9yKCdpbnRlcmNlcHRvclJlcXVlc3QgYWxyZWFkeSBleGlzdHMnLCBFcnJvclR5cGUuRkFJTClcbiAgICBOZXRyb2wuaW50ZXJjZXB0b3JSZXF1ZXN0ID0gY2FsbGJhY2tcbiAgfSxcbiAgLy8g57uR5a6a5ZON5bqU5oum5oiq5ZmoXG4gIHJlc3BvbnNlIChjYWxsYmFjazogSW50ZXJjZXB0b3JSZXNwb25zZSkge1xuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSkgdGhyb3cgY3JlYXRlRXJyb3IoJ2ludGVyY2VwdG9yUmVzcG9uc2UgYWxyZWFkeSBleGlzdHMnLCBFcnJvclR5cGUuRkFJTClcbiAgICBOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSA9IGNhbGxiYWNrXG4gIH1cbn0iLCJpbXBvcnQgY3JlYXRlIGZyb20gJy4vc3JjL2NyZWF0ZSdcbmltcG9ydCB0b0NhdGNoIGZyb20gJy4vc3JjL3RvQ2F0Y2gnXG5pbXBvcnQgdGltZW91dEhhbmRlciBmcm9tICcuL3NyYy90aW1lb3V0SGFuZGVyJ1xuaW1wb3J0IGNhbmNlbCBmcm9tICcuL3NyYy9jYW5jZWwnXG5pbXBvcnQgaW50ZXJjZXB0b3IgZnJvbSAnLi9zcmMvaW50ZXJjZXB0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlLFxuICB0b0NhdGNoLFxuICB0aW1lb3V0SGFuZGVyLFxuICBjYW5jZWwsXG4gIGludGVyY2VwdG9yLFxufVxuXG5leHBvcnQge1xuICB0b0NhdGNoLFxuICB0aW1lb3V0SGFuZGVyLFxuICBjYW5jZWwsXG4gIGludGVyY2VwdG9yLFxufSJdLCJzb3VyY2VSb290IjoiIn0=