/*!
 * netrol.js v1.0.0-beta.4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRyb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL25ldHJvbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9yZXF1ZXN0UG9vbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvcmVzcG9uc2VEYXRhQ3JlYXRlLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2NhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvY2FuY2VsUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jb3JlL2hlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvTmV0cm9sLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RvQ2F0Y2gudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL3RpbWVvdXRIYW5kZXIudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NhbmNlbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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QyxrQkFBWCxFQUErQixNQUFNLGdCQUFXLENBQUMsbUNBQUQsRUFBc0MsU0FBUyxDQUFDLElBQWhELENBQWpCO0FBQy9CLGVBQU0sQ0FBQyxrQkFBUCxHQUE0QixRQUE1QjtBQUNELEdBTFk7QUFNYjtBQUNBLFVBUGEsb0JBT0gsUUFQRyxFQU8wQjtBQUNyQyxRQUFJLFdBQU0sQ0FBQyxtQkFBWCxFQUFnQyxNQUFNLGdCQUFXLENBQUMsb0NBQUQsRUFBdUMsU0FBUyxDQUFDLElBQWpELENBQWpCO0FBQ2hDLGVBQU0sQ0FBQyxtQkFBUCxHQUE2QixRQUE3QjtBQUNEO0FBVlksQ0FBZixFOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZTtBQUNiLFFBQU0sRUFBTixNQURhO0FBRWIsU0FBTyxFQUFQLE9BRmE7QUFHYixlQUFhLEVBQWIsYUFIYTtBQUliLFFBQU0sRUFBTixVQUphO0FBS2IsYUFBVyxFQUFYLFdBQVc7QUFMRSxDQUFmIiwiZmlsZSI6Im5ldHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5ldHJvbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZXRyb2xcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsIi8qKlxyXG4gKiDor7fmsYLmsaDvvIznlKjkuo7kv53nlZnlvZPliY3mraPlnKjmiafooYznmoTor7fmsYJcclxuICovXHJcblxyXG5jbGFzcyBSZXF1ZXN0UG9vbCB7XHJcbiAgcG9vbHM6IEFycmF5PHN0cmluZz4gPSBbXVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3or7fmsYLmmK/lkKblrZjlnKhcclxuICAgKiBAcGFyYW0gbmFtZSDor7fmsYLnmoQgYXBpbmFtZVxyXG4gICAqL1xyXG4gIGlzRXhpc3QgKG5hbWU6IHN0cmluZyk6IEJvb2xlYW4ge1xyXG4gICAgaWYgKCB0aGlzLnBvb2xzLmluY2x1ZGVzKG5hbWUpICkgcmV0dXJuIHRydWVcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5bCG6K+35rGC5ZCN5re75Yqg5YiwIHBvb2xzIOS4rVxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgcHVzaCAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIHRoaXMucG9vbHMuaW5jbHVkZXMobmFtZSkgKSByZXR1cm5cclxuICAgIHRoaXMucG9vbHMucHVzaChuYW1lKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yig6Zmk5a+55bqUIGFwaW5hbWVcclxuICAgKiBAcGFyYW0gbmFtZSDor7fmsYLnmoQgYXBpbmFtZVxyXG4gICAqL1xyXG4gIGRlbGV0ZSAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLnBvb2xzLmluZGV4T2YobmFtZSlcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxyXG4gICAgdGhpcy5wb29scy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdFBvb2woKSIsIi8qIGdsb2JhbCBcclxuICAgIEZvcm1EYXRhXHJcbiAgICBBcnJheUJ1ZmZlclxyXG4gICAgRnVuY3Rpb25cclxuICAgIEZpbGVcclxuICAgIEJsb2JcclxuKi9cclxuLyoqXHJcbiAqIOa3seWkjeWItuWvueixoVxyXG4gKiBAcGFyYW0gb2JqIOimgeWkjeWItueahOWvueixoVxyXG4gKiBAcmV0dXJuIOS4gOS4quaWsOeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcENvcHkgKG9iajogT2JqZWN0KTogb2JqZWN0IHtcclxuICByZXR1cm4gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkob2JqKSApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLrlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlKTogQm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuWHveaVsFxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uICh2YWx1ZSk6IEJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uXHJcbn1cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uiBGb3JtZGF0YSDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGb3JtRGF0YSAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gRm9ybURhdGEgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq0gQXJyYXlCdWZmZXIg5a+56LGhXHJcbiAqIEBwYXJhbSB2YWx1ZSDopoHliKTmlq3nmoTlr7nosaFcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIgKHZhbHVlKTogQm9vbGVhbiB7XHJcbiAgcmV0dXJuIEFycmF5QnVmZmVyICYmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IFN0cmVhbVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0cmVhbSAodmFsdWUpOiBCb29sZWFuIHtcclxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIGlzRnVuY3Rpb24odmFsdWUucGlwZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uiDmlofku7ZcclxuICogQHBhcmFtIHZhbHVlIFxyXG4gKi9cclxuZnVuY3Rpb24gaXNGaWxlICh2YWx1ZSkge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLogQmxvYiDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCbG9iICh2YWx1ZSkge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgaW5zdGFuY2VvZiBCbG9iXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lsZ7mgKfmmK/lkKbkuLrnm67moIflr7nosaHoh6rmnInlsZ7mgKdcclxuICogQHBhcmFtIHRhcmdldCDnm67moIflr7nosaFcclxuICogQHBhcmFtIHByb3Ag5Yik5pat55qE5bGe55u4XHJcbiAqL1xyXG5mdW5jdGlvbiBpc093blByb3AgKHRhcmdldDogUmVjb3JkPHN0cmluZywgYW55PiwgcHJvcDogYW55KSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvoB1cmzkuIrmt7vliqDmn6Xor6Llj4LmlbBcclxuICogQHBhcmFtIHVybCDopoHmt7vliqDnmoR1cmxcclxuICogQHBhcmFtIHF1ZXJ5IOWPguaVsOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gYXBwZW5kUXVlcnlUb1VybCAodXJsOiBzdHJpbmcsIHF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogc3RyaW5nIHtcclxuICAvLyDliKTmlq0gdXJsIOS4iuaYr+WQpuW3sue7j+WMheWQq+WTjeW6lOeahOWPguaVsFxyXG4gIGlmICggdXJsLmluY2x1ZGVzKCc/JykgKSB7XHJcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgICB1cmwgKz0gYCYke2tleX09JHt2YWx9YFxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgT2JqZWN0LmVudHJpZXMocXVlcnkpLmZvckVhY2goKFtrZXksIHZhbF0sIGkpID0+IHtcclxuICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICB1cmwgKz0gYD8ke2tleX09JHt2YWx9YFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVybCArPSBgJiR7a2V5fT0ke3ZhbH1gXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiB1cmxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRlZXBDb3B5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNGb3JtRGF0YSxcclxuICBpc0FycmF5QnVmZmVyLFxyXG4gIGlzU3RyZWFtLFxyXG4gIGlzRmlsZSxcclxuICBpc0Jsb2IsXHJcbiAgaXNPd25Qcm9wLFxyXG4gIGFwcGVuZFF1ZXJ5VG9VcmwsXHJcbn0iLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8qKlxyXG4gKiDnlJ/miJDlk43lupTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh4aHI6IFhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgbGV0IGRhdGEgPSAheGhyLnJlc3BvbnNlVHlwZSB8fCB4aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlXHJcbiAgLy8g5bCG5a2X56ym5Liy5ZON5bqU5pWw5o2u77yM6L2s5o2i5Li6IEpTT04gXHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcclxuICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBib2R5OiBkYXRhLFxyXG4gICAgeGhyLFxyXG4gICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxyXG4gICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICB9XHJcbn0iLCIvLyDplJnor6/nsbvlnovnmoTmnprkuL5cclxuZW51bSBFcnJvclR5cGUge1xyXG4gIENBVENIRUQgPSAwLCAvLyDlt7Lnu4/pgJrov4cgdG9DYXRjaCDlh73mlbDvvIjmiJbogIXlhbbku5bmlrnlvI/mi6bmiKrvvIlcclxuICBGQUlMID0gMSwgLy8g5LiA6Iis6ZSZ6K+vXHJcbiAgVEhST1RUTEUgPSAyLCAvLyDop6blj5HoioLmtYFcclxuICBTVEFUVVMgPSAzLCAvLyDmnI3liqHlmajnirbmgIHnoIHplJnor69cclxuICBUSU1FT1VUID0gNCwgLy8g6LaF5pe26ZSZ6K+vXHJcbiAgQ0FOQ0VMRUQgPSA1LCAvLyDor7fmsYLlt7Looqvlj5bmtohcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOS4gOS4qumUmeivr1xyXG4gKiBAcGFyYW0gbWVzc2FnZSDplJnor6/kv6Hmga9cclxuICogQHBhcmFtIHR5cGUg6ZSZ6K+v57G75Z6LXHJcbiAqIEBwYXJhbSBpc1Byb21pc2Ug5piv5ZCm6L+U5ZueIHByb21pc2UucmVqZWN0XHJcbiAqIEBwYXJhbSBleHRyYSDmianlsZXlr7nosaHvvIznlKjkuo7nibnmrorlpITnkIZcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yIChcclxuICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgdHlwZTogRXJyb3JUeXBlLFxyXG4gIGlzUHJvbWlzZTogQm9vbGVhbiA9IGZhbHNlLFxyXG4gIGV4dHJhPzogUmVjb3JkPHN0cmluZywgYW55PixcclxuKTogUHJvbWlzZTxFcnJvcj4gfCBFcnJvciB7XHJcbiAgLy8g5Yib5bu65LiA5Liq6ZSZ6K+vXHJcbiAgbGV0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IobWVzc2FnZSlcclxuXHJcbiAgLy8g5omp5bGVIGVycm9yIOeahOWxnuaAp1xyXG4gIC8vIOW9k+WJjeeahOmUmeivr+exu+Wei1xyXG4gIGVycm9yLnR5cGUgPSB0eXBlIFxyXG4gIC8vIOmUmeivr+exu+Wei+eahOWAvFxyXG4gIGVycm9yLkVycm9yVHlwZSA9IHtcclxuICAgIENBVENIRUQ6IEVycm9yVHlwZS5DQVRDSEVELFxyXG4gICAgRkFJTDogRXJyb3JUeXBlLkZBSUwsXHJcbiAgICBUSFJPVFRMRTogRXJyb3JUeXBlLlRIUk9UVExFLFxyXG4gICAgU1RBVFVTOiBFcnJvclR5cGUuU1RBVFVTLFxyXG4gICAgVElNRU9VVDogRXJyb3JUeXBlLlRJTUVPVVQsXHJcbiAgICBDQU5DRUxFRDogRXJyb3JUeXBlLkNBTkNFTEVEXHJcbiAgfVxyXG5cclxuICAvLyDnirbmgIHnoIHplJnor6/vvIwg6ZyA6KaB6KeB54q25oCB56CB5oyC6L295Yiw6ZSZ6K+v5a+56LGh5LiKXHJcbiAgaWYgKHR5cGUgPT09IEVycm9yVHlwZS5TVEFUVVMpIHtcclxuICAgIGVycm9yLnN0YXR1c0NvZGUgPSBleHRyYS5jb2RlXHJcbiAgfVxyXG5cclxuICAvLyDovawgSlNPTiDnmoTmlrnms5VcclxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge1xyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIEVycm9yVHlwZTogdGhpcy5FcnJvclR5cGUsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0LnN0YXR1c0NvZGUgPSB0aGlzLnN0YXR1c0NvZGVcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIGlmIChpc1Byb21pc2UpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbi8vIOWvvOWHuuWHveaVsFxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFcnJvclxyXG5cclxuLy8g5a+85Ye66ZSZ6K+v57G75Z6LXHJcbmV4cG9ydCB7XHJcbiAgRXJyb3JUeXBlXHJcbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY3JlYXRlRXJyb3InXHJcbi8qKlxyXG4gKiDnirbmgIHmjZXojrflmahcclxuICovXHJcbmNsYXNzIENhdGNoZXIge1xyXG4gIHRhcmdldHM6IFJlY29yZDxudW1iZXIsIEZ1bmN0aW9uPiA9IHt9XHJcbiAgdGltZW91dEhhbmRlcjogRnVuY3Rpb24gLy8g6LaF5pe25aSE55CG5Ye95pWwXHJcbiAgLyoqXHJcbiAgICog5o2V6I6354q25oCB56CBXHJcbiAgICogQHBhcmFtIGNvZGUg6KaB5o2V6I6355qE54q25oCB56CBXHJcbiAgICogQHBhcmFtIGV4ZWMg5omn6KGM5Ye95pWwXHJcbiAgICovXHJcbiAgY2F0Y2ggKGNvZGU6IG51bWJlciwgZXhlYzogRnVuY3Rpb24pIHtcclxuICAgIGNvZGUgPSBOdW1iZXIoY29kZSlcclxuICAgIGlmICggIXV0aWxzLmlzT3duUHJvcCh0aGlzLnRhcmdldHMsIGNvZGUpICkge1xyXG4gICAgICB0aGlzLnRhcmdldHNbY29kZV0gPSBleGVjXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBjcmVhdGVFcnJvcihgVGhlIGNhdGNoZXIgb2Ygc3RhdHVzIGNvZGUgJHtjb2RlfSBhbHJlYWR5IGV4aXN0c2AsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Kem5Y+R5LqL5Lu2XHJcbiAgICogQHBhcmFtIGNvZGUg5Y+v6IO96Kem5Y+R5o2V6I635Ye95pWw55qE54q25oCB56CBXHJcbiAgICovXHJcbiAgdHJpZ2dlciAoY29kZSkge1xyXG4gICAgY29kZSA9IE51bWJlcihjb2RlKVxyXG4gICAgaWYgKCB1dGlscy5pc093blByb3AodGhpcy50YXJnZXRzLCBjb2RlKSApIHtcclxuICAgICAgdGhpcy50YXJnZXRzW2NvZGVdKClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM6LaF5pe25aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJUaW1lb3V0SGFuZGVyIChoYW5kZXI6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnRpbWVvdXRIYW5kZXIgPSBoYW5kZXJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXRjaGVyKCkiLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXHJcbmltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xyXG4vKipcclxuICog5Y+W5raIYWpheOivt+axglxyXG4gKi9cclxuY2xhc3MgQ2FuY2VsUmVxdWVzdCB7XHJcbiAgeGhyUG9vbHM6IFJlY29yZDxzdHJpbmcsIFhNTEh0dHBSZXF1ZXN0PiA9IHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS/neWtmHhocuWvueixoVxyXG4gICAqIEBwYXJhbSBuYW1lIOaOpeWPo+WQjVxyXG4gICAqIEBwYXJhbSB4aHIgeGhy5a+56LGhXHJcbiAgICovXHJcbiAgYWRkIChuYW1lOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgIGlmICggIXV0aWxzLmlzT3duUHJvcCh0aGlzLnhoclBvb2xzLCBuYW1lKSApIHtcclxuICAgICAgdGhpcy54aHJQb29sc1tuYW1lXSA9IHhoclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56e76ZmkeGhy5a+56LGhXHJcbiAgICogQHBhcmFtIG5hbWUg5o6l5Y+j5ZCNXHJcbiAgICovXHJcbiAgcmVtb3ZlIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICggdXRpbHMuaXNPd25Qcm9wKHRoaXMueGhyUG9vbHMsIG5hbWUpICkge1xyXG4gICAgICBkZWxldGUgdGhpcy54aHJQb29sc1tuYW1lXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5omn6KGM5Y+W5raI6K+35rGCXHJcbiAgICogQHBhcmFtIG5hbWUg5o6l5Y+j5ZCNXHJcbiAgICovXHJcbiAgY2FuY2VsIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICggIXV0aWxzLmlzT3duUHJvcCh0aGlzLnhoclBvb2xzLCBuYW1lKSApIHJldHVybiBmYWxzZVxyXG4gICAgdGhpcy54aHJQb29sc1tuYW1lXS5hYm9ydCgpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENhbmNlbFJlcXVlc3QoKSIsIi8qIGdsb2JhbCAgWE1MSHR0cFJlcXVlc3QgKi9cclxuLy8g5byV5YWl6K+35rGC5rGgXHJcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICdAL2NvcmUvcmVxdWVzdFBvb2wnXHJcbi8vIOW8leWFpeW3peWFt+exu1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuLy8g5byV5YWl55Sf5oiQ5ZON5bqU5pWw5o2u55qE5Ye95pWwXHJcbmltcG9ydCByZXNwb25zZURhdGFDcmVhdGUgZnJvbSAnQC9jb3JlL3Jlc3BvbnNlRGF0YUNyZWF0ZSdcclxuLy8g5byV5YWl5Yib5bu65LiA5Liq6ZSZ6K+vXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICdAL2NvcmUvY3JlYXRlRXJyb3InXHJcbi8vIOW8leWFpeaNleiOt+WZqFxyXG5pbXBvcnQgY2F0Y2hlciBmcm9tICdAL2NvcmUvY2F0Y2hlcidcclxuLy8g5byV5YWl5Y+W5raIeGhy6K+35rGC5a+56LGhXHJcbmltcG9ydCBjYW5jZWxSZXF1ZXN0IGZyb20gJ0AvY29yZS9jYW5jZWxSZXF1ZXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgLy8g6Kej5p6E6YWN572u6aG5XHJcbiAgbGV0IHsgaGVhZGVycywgbWV0aG9kLCB1cmwsIGRhdGEsIHRpbWVvdXQsIGFwaU5hbWUgfSA9IGNvbmZpZ1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICBcclxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxyXG5cclxuICAgIC8vIOWmguaenOS8oOe7meWQjuerr+eahOaVsOaNruS4uiBGb3JtRGF0YSDmoLzlvI/vvIzliJnnp7vpmaQgY29udGVudC10eXBl77yM6K6p5rWP6KeI5Zmo6Ieq5bex6K6+572uXHJcbiAgICBpZiAoIGRhdGEgJiYgdXRpbHMuaXNGb3JtRGF0YShkYXRhKSApIHtcclxuICAgICAgZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6+572u6K+35rGC5aS0XHJcbiAgICBPYmplY3QuZW50cmllcyhoZWFkZXJzKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsIGFzIHN0cmluZylcclxuICAgIH0pXHJcblxyXG4gICAgLy8g6K6+572u6LaF5pe2XHJcbiAgICBpZiAodGltZW91dCkge1xyXG4gICAgICB4aHIudGltZW91dCA9IHRpbWVvdXRcclxuICAgIH1cclxuXHJcbiAgICAvLyDor7fmsYLnirbmgIHlj5jljJZcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgheGhyIHx8IHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSByZXR1cm5cclxuICAgICAgaWYgKCB4aHIuc3RhdHVzID09PSAwICYmICEoeGhyLnJlc3BvbnNlVVJMICYmIHhoci5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSApIHJldHVyblxyXG4gICAgICBcclxuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXHJcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxyXG4gICAgICAvLyDnp7vpmaTlr7nlupR4aHJcclxuICAgICAgY2FuY2VsUmVxdWVzdC5yZW1vdmUoYXBpTmFtZSlcclxuXHJcbiAgICAgIHJlc29sdmUoIHJlc3BvbnNlRGF0YUNyZWF0ZSh4aHIpIClcclxuICAgICAgeGhyID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi2heaXtuWkhOeQhlxyXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXHJcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxyXG4gICAgICAvLyDnp7vpmaTlr7nlupR4aHJcclxuICAgICAgY2FuY2VsUmVxdWVzdC5yZW1vdmUoYXBpTmFtZSlcclxuXHJcbiAgICAgIC8vIOaJp+ihjOi2heaXtuWkhOeQhuWZqFxyXG4gICAgICBjYXRjaGVyLnRpbWVvdXRIYW5kZXIgJiYgY2F0Y2hlci50aW1lb3V0SGFuZGVyKHtcclxuICAgICAgICBhcGlOYW1lLFxyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgdGltZW91dCxcclxuICAgICAgICBkYXRhXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZWplY3QoIGNyZWF0ZUVycm9yKGB0aW1lb3V0IG9mICR7dGltZW91dH0gbXMgZXhjZWVkZWRgLCBFcnJvclR5cGUuVElNRU9VVCkgKVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC5oql6ZSZXHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXHJcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxyXG4gICAgICAvLyDnp7vpmaTlr7nlupR4aHJcclxuICAgICAgY2FuY2VsUmVxdWVzdC5yZW1vdmUoYXBpTmFtZSlcclxuXHJcbiAgICAgIHJlamVjdCggY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBFcnJvclR5cGUuRkFJTCkgKVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC6KKr5Y+W5raIXHJcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g56e76Zmk6K+35rGC5rGg5Lit5a+55bqU55qEYXBpXHJcbiAgICAgIHJlcXVlc3RQb29sLmRlbGV0ZShhcGlOYW1lKVxyXG4gICAgICAvLyDnp7vpmaTlr7nlupR4aHJcclxuICAgICAgY2FuY2VsUmVxdWVzdC5yZW1vdmUoYXBpTmFtZSlcclxuXHJcbiAgICAgIHJlamVjdCggY3JlYXRlRXJyb3IoJ1JlcXVlc3QgY2FuY2VsbGVkJywgRXJyb3JUeXBlLkNBTkNFTEVEKSApXHJcbiAgICAgIHhociA9IG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIGRhdGEgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5re75YqgeGhy5a+56LGh5YiwIGNhbmNlbFJlcXVlc3RcclxuICAgIGNhbmNlbFJlcXVlc3QuYWRkKGFwaU5hbWUsIHhocilcclxuXHJcbiAgICB4aHIuc2VuZChkYXRhKVxyXG4gIH0pXHJcbn0iLCIvLyDlr7zlhaXpgILphY3lmahcclxuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJ0AvYWRhcHRlcnMvaW5kZXgnXHJcbi8vIOWvvOWFpeaNleiOt+WZqFxyXG5pbXBvcnQgY2F0Y2hlciBmcm9tICdAL2NvcmUvY2F0Y2hlcidcclxuLy8g5a+85YWl6ZSZ6K+v5Yib5bu6XHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NyZWF0ZUVycm9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIC8vIGNvbnNvbGUubG9nKGNvbmZpZylcclxuICAvLyDosIPnlKjpgILphY3lmahcclxuICByZXR1cm4gYWRhcHRlcnMoY29uZmlnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLScsIHJlcylcclxuICAgIC8vIGh0dHAg54q25oCB56CBIOWcqCAyMDAgLSAzMDAg5LmL6Ze077yMIOi/lOWbnuaVsOaNrlxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGNhdGNoZXIudHJpZ2dlcihyZXMuc3RhdHVzKVxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKGBkb24ndCB3b3JyeSwgZXJyb3IgJHtyZXMuc3RhdHVzfSBBbHJlYWR5IHRvQ2F0Y2hgLCBFcnJvclR5cGUuQ0FUQ0hFRCwgdHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlRXJyb3IoYHJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJHtyZXMuc3RhdHVzfWAsIEVycm9yVHlwZS5TVEFUVVMsIHRydWUsIHsgY29kZTogcmVzLnN0YXR1cyB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG59IiwiLy8g5a+85YWl5o6l5Y+jXHJcbmltcG9ydCB7IFxyXG4gIE5ldHJvbE9wdGlvbnMsXHJcbiAgTW9kdWxlRGV0YWlsLFxyXG4gIE1vZHVsZXMsXHJcbiAgSW50ZXJjZXB0b3JSZXF1ZXN0LFxyXG4gIEludGVyY2VwdG9yUmVzcG9uc2UsXHJcbiAgVHJhbnNmb3JtRGF0YSBcclxufSBmcm9tICdAL2ludGVyZmFjZXMvaW5kZXgnXHJcbi8vIOWvvOWFpeivt+axglxyXG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0J1xyXG4vLyDlr7zlhaXpu5jorqTor7fmsYLlpLRcclxuaW1wb3J0IGRlZmF1bHRIZWFkZXJzIGZyb20gJy4vaGVhZGVycydcclxuLy8g5byV5YWl6K+35rGC5rGgXHJcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICcuL3JlcXVlc3RQb29sJ1xyXG4vLyDlvJXlhaXlt6Xlhbfmlrnms5VcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXHJcbi8vIOW8leWFpemUmeivr+WIm+W7uuW3peWFt1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcclxuXHJcbi8qKlxyXG4gKiBOZXRyb2wg5a+56LGhXHJcbiAqL1xyXG5jbGFzcyBOZXRyb2wge1xyXG4gIC8vIOeuoeeQhuaJgOaciSBhcGlzXHJcbiAgYXBpczogb2JqZWN0XHJcbiAgLy8g5Y+R6YCBIHhocuivt+axgiDmiYDpnIDnmoQgUmVxdWVzdCBIZWFkZXJzXHJcbiAgaGVhZGVyczogb2JqZWN0XHJcbiAgLy8g5ZON5bqU5pWw5o2u6L+H5ruk5Zmo77yM55So5LqO5Zyo6K+35rGC5oiQ5Yqf5ZCO77yM5o6l5Y+X5pyN5Yqh5Zmo5pWw5o2u77yM5bm26L+b6KGM5aSE55CG5ZKM6L+U5ZueXHJcbiAgbGVhY2g6IG9iamVjdFxyXG4gIC8vIOWfuuacrHVybFxyXG4gIGJhc2VVcmw6IHN0cmluZ1xyXG4gIC8vIOaooeWdl1xyXG4gIG1vZHVsZXM6IE1vZHVsZXNcclxuICAvLyDotoXml7bml7bpmZBcclxuICB0aW1lb3V0OiBudW1iZXJcclxuICAvLyDpu5jorqTor7fmsYLmlrnms5VcclxuICBkZWZhdWx0TWV0aG9kOiBzdHJpbmdcclxuXHJcbiAgLy8g5pWw5o2u6L2s5o2i5pa55rOVXHJcbiAgdHJhbnNmb3JtRGF0YTogVHJhbnNmb3JtRGF0YVxyXG5cclxuICAvLyDor7fmsYLmi6bmiKrlmahcclxuICBzdGF0aWMgaW50ZXJjZXB0b3JSZXF1ZXN0OiBJbnRlcmNlcHRvclJlcXVlc3RcclxuICAvLyDlk43lupTmi6bmiKrlmahcclxuICBzdGF0aWMgaW50ZXJjZXB0b3JSZXNwb25zZTogSW50ZXJjZXB0b3JSZXNwb25zZVxyXG5cclxuICAvKipcclxuICAgKiDmnoTpgKDlh73mlbBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBOZXRyb2wg5a6e5L6L55qE6YWN572u6aG5XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IE5ldHJvbE9wdGlvbnMpIHtcclxuICAgIGxldCB7IGFwaXMsIGxlYWNoLCBtb2R1bGUsIHRyYW5zZm9ybURhdGEsIGNvbmZpZyA9IHt9IH0gPSBvcHRpb25zXHJcbiAgICBsZXQgeyBoZWFkZXJzLCBiYXNlVXJsLCB0aW1lb3V0LCBkZWZhdWx0TWV0aG9kIH0gPSBjb25maWdcclxuXHJcbiAgICAvLyDmo4Dmn6UgYXBpcyDmmK/lkKblrZjlnKhcclxuICAgIGlmICghYXBpcykgdGhyb3cgY3JlYXRlRXJyb3IoJ2FwaXMgaXMgcmVxdWlyZWQgaW4gY29uc3RydWN0b3InLCBFcnJvclR5cGUuRkFJTClcclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIHRoaXMuYXBpcyA9IGFwaXNcclxuICAgIHRoaXMuaGVhZGVycyA9IHtcclxuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXHJcbiAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICB9XHJcbiAgICB0aGlzLmxlYWNoID0gbGVhY2hcclxuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwgfHwgJydcclxuICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZVxyXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dCB8fCAwXHJcbiAgICB0aGlzLmRlZmF1bHRNZXRob2QgPSBkZWZhdWx0TWV0aG9kIHx8ICdnZXQnXHJcbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSB0cmFuc2Zvcm1EYXRhXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj5Hotbfor7fmsYLnmoTmlrnms5VcclxuICAgKiBAcGFyYW0gYXBpTmFtZSDosIPnlKjmjIflrpogYXBpcyBcclxuICAgKiBAcGFyYW0gZGF0YSDkvKDpgJLnu5nmnI3liqHlmajnmoTmlbDmja5cclxuICAgKi9cclxuICByZXF1ZXN0IChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgbGV0IHByb21pc2UgPSBudWxsXHJcbiAgICBsZXQgY2hhaW4gPSBudWxsXHJcbiAgICBcclxuICAgIC8vIOWIpOaWreaYr+WQpuivpeivt+axguaYr+WQpuato+WcqOaJp+ihjFxyXG4gICAgaWYgKCByZXF1ZXN0UG9vbC5pc0V4aXN0KGFwaU5hbWUpICkgcmV0dXJuIGNyZWF0ZUVycm9yKCdUcmlnZ2VyZWQgdGhyb3R0bGU7JywgRXJyb3JUeXBlLlRIUk9UVExFLCB0cnVlKVxyXG4gICAgLy8g5bCGIGFwaW5hbWUg5re75Yqg5Yiw6K+35rGC5rGgXHJcbiAgICByZXF1ZXN0UG9vbC5wdXNoKGFwaU5hbWUpXHJcblxyXG4gICAgLy8g5qC55o2u6LCD55SoIGFwae+8jOWQiOW5tumFjee9rumhuVxyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMubWVyZ2VDb25maWcoYXBpTmFtZSwgZGF0YSlcclxuICAgIC8vIOWmguaenOi/lOWbnueahOaYryBQcm9taXNlIOWvueixoe+8jCDliJnnm7TmjqXov5Tlm55cclxuICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gY29uZmlnXHJcblxyXG4gICAgLy8g5ZCI5bm2IHByb21pc2Ug6ZO+XHJcbiAgICBjaGFpbiA9IHRoaXMubWVyZ2VQcm9taXNlQ2hhaW4oY29uZmlnKVxyXG5cclxuICAgIC8vIOi/nuaOpSBwcm9taXNlIOmTvlxyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpXHJcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XHJcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oIGNoYWluLnNoaWZ0KCkgKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCI5bm2IHByb21pc2Ug6ZO+XHJcbiAgICogQHBhcmFtIGNvbmZpZyDor7fmsYLphY3nva7lr7nosaFcclxuICAgKi9cclxuICBtZXJnZVByb21pc2VDaGFpbiAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICAvLyDlsIbor7fmsYLlh73mlbDvvIzmt7vliqDliLAgcHJvbWlzZSDpk77mlbDnu4TkuK1cclxuICAgIGxldCBjaGFpbjogQXJyYXk8RnVuY3Rpb24+ID0gW2Rpc3BhdGNoUmVxdWVzdF1cclxuXHJcbiAgICAvLyDlpoLmnpzlrZjlnKggaW50ZXJjZXB0b3JSZXF1ZXN0IOWImea3u+WKoOWIsCBwcm9taXNlIOmTvueahOacgOWJjemdolxyXG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlcXVlc3QpIHtcclxuICAgICAgY2hhaW4udW5zaGlmdChOZXRyb2wuaW50ZXJjZXB0b3JSZXF1ZXN0KVxyXG4gICAgfVxyXG4gICAgLy8g5aaC5p6c5a2Y5ZyoIGludGVyY2VwdG9yUmVzcG9uc2Ug5YiZ5re75Yqg5YiwIHByb21pc2Ug6L+e5LiKXHJcbiAgICBpZiAoTmV0cm9sLmludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuICAgICAgY2hhaW4ucHVzaChOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSlcclxuXHJcbiAgICAgIC8vIOWQjOaXtua3u+WKoOWQjue7reWkhOeQhuWHveaVsO+8jOW9k+i/lOWbnuWAvOS4uuepuuWAvOeahOaXtuWAme+8jOaKm+WHuuW8guW4uO+8jOe7iOatonByb21pc2VcclxuICAgICAgY2hhaW4ucHVzaCgocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMpIHJldHVybiBjcmVhdGVFcnJvcigndGhlIGludGVyY2VwdG9yUmVzcG9uc2UgcmV0dXJuIHZhbHVlIGlzIHZvaWQsIHRoZSBwcm9taXNlIGhhcyBiZWVuIGNhbmNlbGxlZCcsIEVycm9yVHlwZS5DQVRDSEVELCB0cnVlKVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDlrZjlnKggbGVhY2jvvIzliJnmt7vliqDliLAgcHJvbWlzZSDpk77kuK1cclxuICAgIGlmIChjb25maWcubGVhY2gpIHtcclxuICAgICAgY2hhaW4ucHVzaChjb25maWcubGVhY2gpXHJcbiAgICB9XHJcbiAgICBkZWxldGUgY29uZmlnLmxlYWNoXHJcbiAgICBcclxuICAgIHJldHVybiBjaGFpblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5ZCI5bm26YWN572u6aG5XHJcbiAgICogQHBhcmFtIGFwaU5hbWUg5a+55bqU6LCD55So55qE5o6l5Y+jXHJcbiAgICovXHJcbiAgbWVyZ2VDb25maWcgKGFwaU5hbWU6IHN0cmluZywgZGF0YTogb2JqZWN0KTogUmVjb3JkPHN0cmluZywgYW55PiB7XHJcbiAgICBsZXQgY29uZmlnID0gbnVsbFxyXG4gICAgbGV0IGFwaSA9IG51bGxcclxuICAgIGxldCBsZWFjaCA9IG51bGxcclxuICAgIGxldCBoZWFkZXJzID0gdXRpbHMuZGVlcENvcHkodGhpcy5oZWFkZXJzKVxyXG4gICAgbGV0IGJhc2VVcmwgPSB0aGlzLmJhc2VVcmxcclxuICAgIGxldCB0aW1lb3V0ID0gdGhpcy50aW1lb3V0XHJcbiAgICBsZXQgZGVmYXVsdE1ldGhvZCA9IHRoaXMuZGVmYXVsdE1ldGhvZFxyXG4gICAgLy8g5pWw5o2u6L2s5o2i5Ye95pWwXHJcbiAgICBsZXQgdHJhbnNmb3JtRGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YVxyXG5cclxuICAgIC8vIOWIpOaWreiwg+eUqOeahOaYr+WQpuS4uiBtb2R1bGUg5LitIGFwaVxyXG4gICAgaWYgKCBhcGlOYW1lLmluY2x1ZGVzKCcuJykgKSB7XHJcbiAgICAgIGxldCBbbW9kdWxlLCBuYW1lXSA9IGFwaU5hbWUuc3BsaXQoJy4nKVxyXG4gICAgICBsZXQgdGhlTW9kdWxlOiBNb2R1bGVEZXRhaWwgPSB0aGlzLm1vZHVsZXNbbW9kdWxlXVxyXG5cclxuICAgICAgLy8g5Yik5pat5Lyg6YCS55qEIG1vZHVsZSDmmK/lkKblrZjlnKhcclxuICAgICAgaWYgKCF0aGVNb2R1bGUpIHJldHVybiBjcmVhdGVFcnJvcihgbW9kdWxlICR7bW9kdWxlfSBkb2VzIG5vdCBleGlzdDsg5qih5Z2XICR7bW9kdWxlfSDkuI3lrZjlnKhgLCBFcnJvclR5cGUuRkFJTCwgdHJ1ZSlcclxuXHJcbiAgICAgIC8vIOWmguaenCB0cmFuc2Zvcm1EYXRhIOaWueazleWtmOWcqO+8jOWImemHjeaWsOi1i+WAvFxyXG4gICAgICBpZiAodGhlTW9kdWxlLnRyYW5zZm9ybURhdGEpIHtcclxuICAgICAgICB0cmFuc2Zvcm1EYXRhID0gdGhlTW9kdWxlLnRyYW5zZm9ybURhdGFcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g5Yik5pat5qih5Z2X5LiK5piv5ZCm5a2Y5Zyo6YWN572u6aG5XHJcbiAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnKSB7XHJcbiAgICAgICAgLy8g5qih5Z2X5LiK5aaC5p6c5a2Y5ZyoIGJhc2VVcmzvvIzliJnmm7TmlLkgYmFzZVVybO+8jOWImeabtOaUuVxyXG4gICAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnLmJhc2VVcmwpIHtcclxuICAgICAgICAgIGJhc2VVcmwgPSB0aGVNb2R1bGUuY29uZmlnLmJhc2VVcmxcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5qih5Z2X5LiK5aaC5p6c5a2Y5ZyoIGhlYWRlcnPvvIzliJnlkIjlubZcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgICAgICAuLi51dGlscy5kZWVwQ29weSh0aGVNb2R1bGUuY29uZmlnLmhlYWRlcnMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOaooeWdl+S4iuWtmOWcqCB0aW1lb3V077yM5YiZ6L+b6KGM5pu/5o2iXHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcudGltZW91dCkge1xyXG4gICAgICAgICAgdGltZW91dCA9IHRoZU1vZHVsZS5jb25maWcudGltZW91dFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliKTmlq3mqKHlnZfkuIrmmK/lkKblrZjlnKjpu5jorqTor7fmsYLmlrnms5XvvIzlrZjlnKjliJnmm7/mjaJcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5kZWZhdWx0TWV0aG9kKSB7XHJcbiAgICAgICAgICBkZWZhdWx0TWV0aG9kID0gdGhlTW9kdWxlLmNvbmZpZy5kZWZhdWx0TWV0aG9kXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyDmj5Dlj5YgYXBpIOWSjCBsZWFjaFxyXG4gICAgICBhcGkgPSB0aGVNb2R1bGUuYXBpc1tuYW1lXVxyXG4gICAgICBsZWFjaCA9IHRoZU1vZHVsZS5sZWFjaFtuYW1lXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5o+Q5Y+WIGFwaSDlkowgbGVhY2hcclxuICAgICAgYXBpID0gdGhpcy5hcGlzW2FwaU5hbWVdXHJcbiAgICAgIGxlYWNoID0gdGhpcy5sZWFjaFthcGlOYW1lXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreaYr+WQpuaJvuWIsOWvueW6lCBhcGlcclxuICAgIGlmICghYXBpKSByZXR1cm4gY3JlYXRlRXJyb3IoYGFwaSAke2FwaU5hbWV9IGRvZXMgbm90IGV4aXN0OyDmjqXlj6MgJHthcGlOYW1lfSDkuI3lrZjlnKhgLCBFcnJvclR5cGUuRkFJTCwgdHJ1ZSlcclxuXHJcbiAgICAvLyDliKTmlq1hcGnmmK/lkKbkuLrlr7nosaFcclxuICAgIGlmICggdXRpbHMuaXNPYmplY3QoYXBpKSApIHtcclxuICAgICAgLy8g5rex5aSN5Yi2IGFwaVxyXG4gICAgICBhcGkgPSB1dGlscy5kZWVwQ29weShhcGkpXHJcbiAgICAgIC8vIOWwhiBhcGkubWV0aG9kIOeahOWAvO+8jOi9rOS4uuiLseaWh+Wwj+WGmSwgbWV0aG9kIOWtmOWcqO+8jOm7mOiupOiwg+eUqCBnZXRcclxuICAgICAgYXBpLm1ldGhvZCA9ICFhcGkubWV0aG9kID8gZGVmYXVsdE1ldGhvZCA6IGFwaS5tZXRob2QudG9Mb3dlckNhc2UoKVxyXG4gICAgICAvLyDlkIjlubYgYmFzZVVybCDlkowgYXBpLnVybFxyXG4gICAgICBhcGkudXJsID0gYCR7YmFzZVVybH0ke2FwaS51cmx9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5LiN5piv5a+56LGh77yM5YiZ5L2/55So6buY6K6k55qE5pa55rOVXHJcbiAgICAgIGxldCB1cmwgPSBgJHtiYXNlVXJsfSR7YXBpfWBcclxuICAgICAgYXBpID0ge1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBtZXRob2Q6IGRlZmF1bHRNZXRob2QudG9Mb3dlckNhc2UoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ZCI5bm2IGhlYWRlcnMg5ZKMIGFwaS5oZWFkZXJzXHJcbiAgICBoZWFkZXJzID0ge1xyXG4gICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAuLi5hcGkuaGVhZGVyc1xyXG4gICAgfVxyXG4gICAgLy8g5Yig6ZmkIGFwaS5oZWFkZXJzXHJcbiAgICBkZWxldGUgYXBpLmhlYWRlcnNcclxuXHJcbiAgICAvLyDlkIjlubbphY3nva7poblcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgYXBpTmFtZSxcclxuICAgICAgaGVhZGVycyxcclxuICAgICAgdGltZW91dCxcclxuICAgICAgbGVhY2gsXHJcbiAgICAgIC4uLmFwaSxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGNvbmZpZy5tZXRob2QgIT09ICdnZXQnKSB7XHJcbiAgICAgIC8vIGRhdGEg5a2Y5Zyo77yM5YiZ5bCG5YW26KOF5o2i5ZCO5re75Yqg5YiwIGNvbmZpZyDkuIpcclxuICAgICAgaWYgKGRhdGEgJiYgIXRyYW5zZm9ybURhdGEpIHtcclxuICAgICAgICBjb25maWcuZGF0YSA9IHRoaXMuZGVmYXVsdFRyYW5zZm9ybURhdGEoZGF0YSlcclxuICAgICAgfSBlbHNlIGlmIChkYXRhICYmIHRyYW5zZm9ybURhdGEpIHtcclxuICAgICAgICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbmZpZy51cmwgPSB1dGlscy5hcHBlbmRRdWVyeVRvVXJsKGNvbmZpZy51cmwsIGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+U5ZueXHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpu5jorqTnmoTovazmjaLor7fmsYLmlbDmja7mlrnms5VcclxuICAgKiBAcGFyYW0gZGF0YSBcclxuICAgKi9cclxuICBkZWZhdWx0VHJhbnNmb3JtRGF0YSAoZGF0YSkge1xyXG4gICAgLy8g54m55q6K5a+56LGh77yM55u05o6l6L+U5ZueXHJcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaZrumAmuWvueixoe+8jOi9rOS4uiBKU09OIOWtl+espuS4slxyXG4gICAgaWYgKCB1dGlscy5pc09iamVjdChkYXRhKSApIHtcclxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pyq55+l5oOF5Ya177yM55u05o6l6L+U5ZueXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV0cm9sIiwiaW1wb3J0IE5ldHJvbCBmcm9tICcuL2NvcmUvTmV0cm9sJ1xyXG5pbXBvcnQgeyBOZXRyb2xPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4J1xyXG4vKipcclxuICog5Yib5bu65LiA5LiqIG5ldHJvbCDlrp7kvotcclxuICovXHJcbmxldCBuZXRyb2w6IE5ldHJvbCA9IG51bGxcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnM6IE5ldHJvbE9wdGlvbnMpOiBGdW5jdGlvbiB7XHJcbiAgLy8g5Y+q5YWB6K645Y2V5L6L5a2Y5ZyoXHJcbiAgaWYgKCFuZXRyb2wpIHtcclxuICAgIG5ldHJvbCA9IG5ldyBOZXRyb2wob3B0aW9ucylcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKCduZXRyb2wgaW5zdGFuY2UgaXMgb25seScpXHJcbiAgfVxyXG4gIHJldHVybiAoYXBpTmFtZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBuZXRyb2wucmVxdWVzdChhcGlOYW1lLCBkYXRhKVxyXG4gIH1cclxufSIsImltcG9ydCBjYXRjaGVyIGZyb20gJ0AvY29yZS9jYXRjaGVyJ1xyXG4vKipcclxuICog5a+55aSW5pq06Zyy5o2V6I635pa55rOVXHJcbiAqIEBwYXJhbSBjb2RlIOeKtuaAgeeggVxyXG4gKiBAcGFyYW0gZXhlYyDmiafooYzlh73mlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb2RlOiBudW1iZXIsIGV4ZWM6IEZ1bmN0aW9uKSB7XHJcbiAgY2F0Y2hlci5jYXRjaChjb2RlLCBleGVjKVxyXG59IiwiaW1wb3J0IGNhdGNoZXIgZnJvbSAnLi9jb3JlL2NhdGNoZXInXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NvcmUvY3JlYXRlRXJyb3InXHJcbi8qKlxyXG4gKiDms6jlhozotoXml7blpITnkIblh73mlbBcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaGFuZGVyOiBGdW5jdGlvbikge1xyXG4gIGlmICghY2F0Y2hlci50aW1lb3V0SGFuZGVyKSB7XHJcbiAgICBjYXRjaGVyLnJlZ2lzdGVyVGltZW91dEhhbmRlcihoYW5kZXIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IGNyZWF0ZUVycm9yKCd0aW1lb3V0SGFuZGVyIGFscmVhZHkgZXhpc3RzJywgRXJyb3JUeXBlLkZBSUwpXHJcbiAgfVxyXG59IiwiaW1wb3J0IGNhbmNlbFJlcXVlc3QgZnJvbSAnLi9jb3JlL2NhbmNlbFJlcXVlc3QnXHJcbi8qKlxyXG4gKiDlj5bmtojkuIDkuKror7fmsYJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpOiBCb29sZWFuIHtcclxuICByZXR1cm4gY2FuY2VsUmVxdWVzdC5jYW5jZWwobmFtZSlcclxufSIsImltcG9ydCBOZXRyb2wgZnJvbSAnLi9jb3JlL05ldHJvbCdcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJy4vY29yZS9jcmVhdGVFcnJvcidcclxuaW1wb3J0IHsgSW50ZXJjZXB0b3JSZXNwb25zZSwgSW50ZXJjZXB0b3JSZXF1ZXN0IH0gZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIOe7keWumuivt+axguaLpuaIquWZqFxyXG4gIHJlcXVlc3QgKGNhbGxiYWNrOiBJbnRlcmNlcHRvclJlcXVlc3QpIHtcclxuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXF1ZXN0KSB0aHJvdyBjcmVhdGVFcnJvcignaW50ZXJjZXB0b3JSZXF1ZXN0IGFscmVhZHkgZXhpc3RzJywgRXJyb3JUeXBlLkZBSUwpXHJcbiAgICBOZXRyb2wuaW50ZXJjZXB0b3JSZXF1ZXN0ID0gY2FsbGJhY2tcclxuICB9LFxyXG4gIC8vIOe7keWumuWTjeW6lOaLpuaIquWZqFxyXG4gIHJlc3BvbnNlIChjYWxsYmFjazogSW50ZXJjZXB0b3JSZXNwb25zZSkge1xyXG4gICAgaWYgKE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlKSB0aHJvdyBjcmVhdGVFcnJvcignaW50ZXJjZXB0b3JSZXNwb25zZSBhbHJlYWR5IGV4aXN0cycsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgTmV0cm9sLmludGVyY2VwdG9yUmVzcG9uc2UgPSBjYWxsYmFja1xyXG4gIH1cclxufSIsImltcG9ydCBjcmVhdGUgZnJvbSAnLi9zcmMvY3JlYXRlJ1xyXG5pbXBvcnQgdG9DYXRjaCBmcm9tICcuL3NyYy90b0NhdGNoJ1xyXG5pbXBvcnQgdGltZW91dEhhbmRlciBmcm9tICcuL3NyYy90aW1lb3V0SGFuZGVyJ1xyXG5pbXBvcnQgY2FuY2VsIGZyb20gJy4vc3JjL2NhbmNlbCdcclxuaW1wb3J0IGludGVyY2VwdG9yIGZyb20gJy4vc3JjL2ludGVyY2VwdG9yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZSxcclxuICB0b0NhdGNoLFxyXG4gIHRpbWVvdXRIYW5kZXIsXHJcbiAgY2FuY2VsLFxyXG4gIGludGVyY2VwdG9yLFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHRvQ2F0Y2gsXHJcbiAgdGltZW91dEhhbmRlcixcclxuICBjYW5jZWwsXHJcbiAgaW50ZXJjZXB0b3IsXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9