/*!
 * netrol.js v1.0.0-beta.10
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

var arrayWithHoles = __webpack_require__(7);

var iterableToArrayLimit = __webpack_require__(8);

var unsupportedIterableToArray = __webpack_require__(9);

var nonIterableRest = __webpack_require__(11);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(10);

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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "toCatch", function() { return /* reexport */ toCatch; });
__webpack_require__.d(__webpack_exports__, "timeoutHander", function() { return /* reexport */ timeoutHander; });
__webpack_require__.d(__webpack_exports__, "cancel", function() { return /* reexport */ src_cancel; });
__webpack_require__.d(__webpack_exports__, "interceptor", function() { return /* reexport */ interceptor; });
__webpack_require__.d(__webpack_exports__, "progressListener", function() { return /* reexport */ src_progressListener; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(2);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(6);
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
// CONCATENATED MODULE: ./src/helpers/responseDataCreate.ts
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
// CONCATENATED MODULE: ./src/helpers/cancelRequest.ts



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
// CONCATENATED MODULE: ./src/core/createError.ts
// 错误类型的枚举
var ErrorType;

(function (ErrorType) {
  ErrorType[ErrorType["STOP"] = 0] = "STOP";
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
    STOP: ErrorType.STOP,
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


// CONCATENATED MODULE: ./src/helpers/progressListener.ts




/**
 * 进度监听器
 */

var progressListener_ProgressListener = /*#__PURE__*/function () {
  function ProgressListener() {
    classCallCheck_default()(this, ProgressListener);

    this.upload = {};
    this.download = {};
  }
  /**
   * 添加监听器
   * @param type 监听的类型，upload/download
   * @param name 监听的 apiname
   * @param exec 执行方法
   */


  createClass_default()(ProgressListener, [{
    key: "add",
    value: function add(type, name, exec) {
      if (!utils.isOwnProp(this[type], name)) {
        this[type][name] = exec;
      } else {
        throw core_createError("The listener ".concat(name, " already exists"), ErrorType.FAIL);
      }
    }
    /**
     * 触发监听器
     * @param type 监听的类型，upload/download
     * @param name 监听的 apiname
     */

  }, {
    key: "trigger",
    value: function trigger(type, name, progressEvent) {
      utils.isFunction(this[type][name]) && this[type][name](progressEvent);
    }
    /**
     * 判断存在
     * @param type 监听的类型，upload/download
     * @param name 监听的 apiname
     */

  }, {
    key: "isExist",
    value: function isExist(type, name) {
      if (utils.isOwnProp(this[type], name)) return true;
      return false;
    }
  }]);

  return ProgressListener;
}();

/* harmony default export */ var progressListener = (new progressListener_ProgressListener());
// CONCATENATED MODULE: ./src/adapters/progress.ts
/* global  XMLHttpRequest */
// 引入 进度监听器

/**
 * 绑定 xhr 一系列上传/下载事件
 * @param type upload/download
 * @param xhr xhr对象
 */

/* harmony default export */ var progress = (function (type, apiName, xhr) {
  // 获取上传/下载对象
  var target = type === 'upload' ? xhr.upload : xhr;
  xhr = null; // 回收 xhr 内存
  // 进度状态

  var ProgressStatus;

  (function (ProgressStatus) {
    ProgressStatus[ProgressStatus["FAIL"] = 0] = "FAIL";
    ProgressStatus[ProgressStatus["SUCCESS"] = 1] = "SUCCESS";
    ProgressStatus[ProgressStatus["PROGRESS"] = 2] = "PROGRESS";
    ProgressStatus[ProgressStatus["START"] = 3] = "START";
    ProgressStatus[ProgressStatus["CANCEL"] = 4] = "CANCEL";
    ProgressStatus[ProgressStatus["TIMEOUT"] = 5] = "TIMEOUT";
  })(ProgressStatus || (ProgressStatus = {})); // 进度状态对象


  var progressStatus = {
    FAIL: ProgressStatus.FAIL,
    SUCCESS: ProgressStatus.SUCCESS,
    PROGRESS: ProgressStatus.PROGRESS,
    START: ProgressStatus.START,
    CANCEL: ProgressStatus.CANCEL,
    TIMEOUT: ProgressStatus.TIMEOUT
  }; // 事件处理函数
  // 开始

  function onStart(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.START,
      statusText: 'start',
      ProgressStatus: progressStatus
    });
  } // 进度


  function onProgress(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.PROGRESS,
      statusText: 'progress',
      ProgressStatus: progressStatus,
      total: evt.total,
      loaded: evt.loaded
    });
  } // 取消


  function onCancel(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.CANCEL,
      statusText: 'cancel',
      ProgressStatus: progressStatus
    });
    unbind();
  } // 失败


  function onFail(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.FAIL,
      statusText: 'fail',
      ProgressStatus: progressStatus
    });
    unbind();
  } // 成功


  function onSuccess(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.SUCCESS,
      statusText: 'success',
      ProgressStatus: progressStatus
    });
    unbind();
  } // 超时


  function onTimeout(evt) {
    progressListener.trigger(type, apiName, {
      type: type,
      event: evt,
      status: ProgressStatus.TIMEOUT,
      statusText: 'timeout',
      ProgressStatus: progressStatus
    });
    unbind();
  } // 绑定事件


  target.addEventListener('loadstart', onStart);
  target.addEventListener('progress', onProgress);
  target.addEventListener('abort', onCancel);
  target.addEventListener('error', onFail);
  target.addEventListener('load', onSuccess);
  target.addEventListener('timeout', onTimeout); // 解绑事件

  function unbind() {
    target.removeEventListener('loadstart', onStart);
    target.removeEventListener('progress', onProgress);
    target.removeEventListener('abort', onCancel);
    target.removeEventListener('error', onFail);
    target.removeEventListener('load', onSuccess);
    target.removeEventListener('timeout', onTimeout);
    target = null;
  }
});
// CONCATENATED MODULE: ./src/adapters/index.ts


/* global  XMLHttpRequest */
// 引入工具类
 // 引入生成响应数据的函数

 // // 引入取消xhr请求对象

 // 引入 进度监听器

 // 引入 进度事件处理

 // adapter 结果状态

var STATUS;

(function (STATUS) {
  STATUS[STATUS["response"] = 0] = "response";
  STATUS[STATUS["timeout"] = 1] = "timeout";
  STATUS[STATUS["fail"] = 2] = "fail";
  STATUS[STATUS["cancell"] = 3] = "cancell";
})(STATUS || (STATUS = {}));


/* harmony default export */ var adapters = (function (config) {
  // 解构配置项
  var headers = config.headers,
      method = config.method,
      url = config.url,
      data = config.data,
      timeout = config.timeout,
      apiName = config.apiName;
  return new Promise(function (resolve) {
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
      if (xhr.status === 0 && !(xhr.responseURL && xhr.responseURL.indexOf('file:') === 0)) return;
      resolve({
        status: STATUS.response,
        data: responseDataCreate(xhr),
        extra: {
          apiName: apiName
        }
      });
      xhr = null;
    }; // 超时处理


    xhr.ontimeout = function () {
      resolve({
        status: STATUS.timeout,
        timeout: timeout,
        extra: {
          apiName: apiName,
          method: method,
          url: url,
          timeout: timeout,
          data: data
        }
      });
      xhr = null;
    }; // 请求报错


    xhr.onerror = function () {
      resolve({
        status: STATUS.fail,
        extra: {
          apiName: apiName
        }
      });
      xhr = null;
    }; // 请求被取消


    xhr.onabort = function () {
      resolve({
        status: STATUS.cancell,
        extra: {
          apiName: apiName
        }
      });
      xhr = null;
    }; // 判断当前 apiName 是否存在进度监听器，存在则绑定对应事件


    if (progressListener.isExist('upload', apiName)) {
      progress('upload', apiName, xhr);
    }

    if (progressListener.isExist('download', apiName)) {
      progress('download', apiName, xhr);
    } // data 为空，则置为 null


    if (!data) {
      data = null;
    } // 添加xhr对象到 cancelRequest


    cancelRequest.add(apiName, xhr);
    xhr.send(data);
  });
});
// CONCATENATED MODULE: ./src/helpers/catcher.ts




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
// CONCATENATED MODULE: ./src/core/dispatchRequest.ts


// 导入适配器
 // 导入捕获器

 // 导入错误创建

 // 引入请求池

 // 引入取消xhr请求对象

 // 响应状态流程控制

var processControl = {
  response: function response(_ref) {
    var data = _ref.data;
    if (data.status >= 200 && data.status < 300) return data;
    var result = catcher.trigger(data.status);

    if (result) {
      return core_createError("Not an error; promise stop; https status ".concat(data.status, " be catched"), ErrorType.STOP, true);
    } else {
      return core_createError("request failed with status code ".concat(data.status), ErrorType.STATUS, true, {
        code: data.status
      });
    }
  },
  timeout: function timeout(_ref2) {
    var extra = _ref2.extra;
    var apiName = extra.apiName,
        method = extra.method,
        url = extra.url,
        timeout = extra.timeout,
        data = extra.data; // 执行超时处理器

    catcher.timeoutHander && catcher.timeoutHander({
      apiName: apiName,
      method: method,
      url: url,
      timeout: timeout,
      data: data
    });
    return core_createError("timeout of ".concat(timeout, " ms exceeded"), ErrorType.TIMEOUT);
  },
  fail: function fail() {
    return core_createError('Network Error', ErrorType.FAIL);
  },
  cancell: function cancell() {
    return core_createError('Request cancelled', ErrorType.CANCELED);
  }
};
/* harmony default export */ var dispatchRequest = (function (_x) {
  return dispatchRequest_ref3.apply(this, arguments);
});

function dispatchRequest_ref3() {
  dispatchRequest_ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(config) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", adapters(config).then(function (res) {
              var name = STATUS[res.status]; // 状态名

              var extra = res.extra; // 移除请求池中对应的api

              requestPool["delete"](extra.apiName); // 移除对应xhr

              cancelRequest.remove(extra.apiName); // 执行对应流程

              return processControl[name](res);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return dispatchRequest_ref3.apply(this, arguments);
}
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

      if (requestPool.isExist(apiName)) return core_createError('Not an error; Triggered throttle;', ErrorType.THROTTLE, true); // 将 apiname 添加到请求池

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
          if (!res) return core_createError('Not an error; promise stop;', ErrorType.STOP, true);
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
        leach = theModule.leach ? theModule.leach[name] : null;
      } else {
        // 提取 api 和 leach
        api = this.apis[apiName];
        leach = this.leach ? this.leach[apiName] : null;
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
// CONCATENATED MODULE: ./src/progressListener.ts

/**
 * 添加进度监听器
 */

/* harmony default export */ var src_progressListener = ({
  upload: function upload(apiName, exec) {
    progressListener.add('upload', apiName, exec);
  },
  download: function download(apiName, exec) {
    progressListener.add('download', apiName, exec);
  }
});
// CONCATENATED MODULE: ./index.ts






/* harmony default export */ var index = __webpack_exports__["default"] = ({
  create: create,
  toCatch: toCatch,
  timeoutHander: timeoutHander,
  cancel: src_cancel,
  interceptor: interceptor,
  progressListener: src_progressListener
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXRyb2wvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL25ldHJvbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL25ldHJvbC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvaGVscGVycy9yZXNwb25zZURhdGFDcmVhdGUudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2hlbHBlcnMvY2FuY2VsUmVxdWVzdC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9jcmVhdGVFcnJvci50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvaGVscGVycy9wcm9ncmVzc0xpc3RlbmVyLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9hZGFwdGVycy9wcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2hlbHBlcnMvY2F0Y2hlci50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9yZXF1ZXN0UG9vbC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9kaXNwYXRjaFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NvcmUvaGVhZGVycy50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY29yZS9OZXRyb2wudHMiLCJ3ZWJwYWNrOi8vbmV0cm9sLy4vc3JjL2NyZWF0ZS50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdG9DYXRjaC50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvdGltZW91dEhhbmRlci50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvY2FuY2VsLnRzIiwid2VicGFjazovL25ldHJvbC8uL3NyYy9pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9zcmMvcHJvZ3Jlc3NMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9uZXRyb2wvLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7QUNoQkEscUJBQXFCLG1CQUFPLENBQUMsQ0FBa0I7O0FBRS9DLDJCQUEyQixtQkFBTyxDQUFDLENBQXdCOztBQUUzRCxpQ0FBaUMsbUJBQU8sQ0FBQyxDQUE4Qjs7QUFFdkUsc0JBQXNCLG1CQUFPLENBQUMsRUFBbUI7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDWkEsaUJBQWlCLG1CQUFPLENBQUMsRUFBcUI7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUM7Ozs7OztBQzNCQSx1QkFBdUIsbUJBQU8sQ0FBQyxFQUFvQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qzs7Ozs7O0FDWEE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztB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cUIsUUFBckIsRUFBK0IsT0FBL0IsRUFBd0MsSUFBeEM7QUFDRCxHQUhZO0FBSWIsVUFKYSxvQkFJSCxPQUpHLEVBSWMsSUFKZCxFQUlnRTtBQUMzRSxvQkFBZ0IsQ0FBQyxHQUFqQixDQUFxQixVQUFyQixFQUFpQyxPQUFqQyxFQUEwQyxJQUExQztBQUNEO0FBTlksQ0FBZixFOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQ2IsUUFBTSxFQUFOLE1BRGE7QUFFYixTQUFPLEVBQVAsT0FGYTtBQUdiLGVBQWEsRUFBYixhQUhhO0FBSWIsUUFBTSxFQUFOLFVBSmE7QUFLYixhQUFXLEVBQVgsV0FMYTtBQU1iLGtCQUFnQixFQUFoQixvQkFBZ0I7QUFOSCxDQUFmIiwiZmlsZSI6Im5ldHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5ldHJvbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZXRyb2xcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIFxyXG4gICAgRm9ybURhdGFcclxuICAgIEFycmF5QnVmZmVyXHJcbiAgICBGdW5jdGlvblxyXG4gICAgRmlsZVxyXG4gICAgQmxvYlxyXG4qL1xyXG4vKipcclxuICog5rex5aSN5Yi25a+56LGhXHJcbiAqIEBwYXJhbSBvYmog6KaB5aSN5Yi255qE5a+56LGhXHJcbiAqIEByZXR1cm4g5LiA5Liq5paw55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwQ29weSAob2JqOiBPYmplY3QpOiBvYmplY3Qge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeShvYmopIClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uuWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdCAodmFsdWUpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li65Ye95pWwXHJcbiAqIEBwYXJhbSB2YWx1ZSBcclxuICovXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24gKHZhbHVlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb25cclxufVxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IEZvcm1kYXRhIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhICh2YWx1ZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBGb3JtRGF0YSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrSBBcnJheUJ1ZmZlciDlr7nosaFcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAodmFsdWUpOiBib29sZWFuIHtcclxuICByZXR1cm4gQXJyYXlCdWZmZXIgJiYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbkuLogU3RyZWFtXHJcbiAqIEBwYXJhbSB2YWx1ZSDopoHliKTmlq3nmoTlr7nosaFcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyZWFtICh2YWx1ZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5waXBlKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Li6IOaWh+S7tlxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uiBCbG9iIOWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jsb2IgKHZhbHVlKSB7XHJcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2JcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWxnuaAp+aYr+WQpuS4uuebruagh+WvueixoeiHquacieWxnuaAp1xyXG4gKiBAcGFyYW0gdGFyZ2V0IOebruagh+WvueixoVxyXG4gKiBAcGFyYW0gcHJvcCDliKTmlq3nmoTlsZ7nm7hcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duUHJvcCAodGFyZ2V0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBwcm9wOiBhbnkpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcClcclxufVxyXG5cclxuLyoqXHJcbiAqIOW+gHVybOS4iua3u+WKoOafpeivouWPguaVsFxyXG4gKiBAcGFyYW0gdXJsIOimgea3u+WKoOeahHVybFxyXG4gKiBAcGFyYW0gcXVlcnkg5Y+C5pWw5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBlbmRRdWVyeVRvVXJsICh1cmw6IHN0cmluZywgcXVlcnk6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xyXG4gIC8vIOWIpOaWrSB1cmwg5LiK5piv5ZCm5bey57uP5YyF5ZCr5ZON5bqU55qE5Y+C5pWwXHJcbiAgaWYgKCB1cmwuaW5jbHVkZXMoJz8nKSApIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XHJcbiAgICAgIHVybCArPSBgJiR7a2V5fT0ke3ZhbH1gXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBPYmplY3QuZW50cmllcyhxdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsXSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIHVybCArPSBgPyR7a2V5fT0ke3ZhbH1gXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsICs9IGAmJHtrZXl9PSR7dmFsfWBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIHVybFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVlcENvcHksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbixcclxuICBpc0Zvcm1EYXRhLFxyXG4gIGlzQXJyYXlCdWZmZXIsXHJcbiAgaXNTdHJlYW0sXHJcbiAgaXNGaWxlLFxyXG4gIGlzQmxvYixcclxuICBpc093blByb3AsXHJcbiAgYXBwZW5kUXVlcnlUb1VybCxcclxufSIsIi8qIGdsb2JhbCAgWE1MSHR0cFJlcXVlc3QgKi9cclxuaW1wb3J0IHsgQWRhcHRlclJlc3BvbnNlRGF0YSB9IGZyb20gJ0AvaW50ZXJmYWNlcy9pbmRleCdcclxuLyoqXHJcbiAqIOeUn+aIkOWTjeW6lOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHhocjogWE1MSHR0cFJlcXVlc3QpOiBBZGFwdGVyUmVzcG9uc2VEYXRhIHtcclxuICBsZXQgZGF0YSA9ICF4aHIucmVzcG9uc2VUeXBlIHx8IHhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2VcclxuICAvLyDlsIblrZfnrKbkuLLlk43lupTmlbDmja7vvIzovazmjaLkuLogSlNPTiBcclxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxyXG4gICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJvZHk6IGRhdGEsXHJcbiAgICB4aHIsXHJcbiAgICBzdGF0dXM6IHhoci5zdGF0dXMsXHJcbiAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gIH1cclxufSIsIi8qIGdsb2JhbCAgWE1MSHR0cFJlcXVlc3QgKi9cclxuaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXHJcbi8qKlxyXG4gKiDlj5bmtohhamF46K+35rGCXHJcbiAqL1xyXG5jbGFzcyBDYW5jZWxSZXF1ZXN0IHtcclxuICB4aHJQb29sczogUmVjb3JkPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0ge31cclxuXHJcbiAgLyoqXHJcbiAgICog5L+d5a2YeGhy5a+56LGhXHJcbiAgICogQHBhcmFtIG5hbWUg5o6l5Y+j5ZCNXHJcbiAgICogQHBhcmFtIHhociB4aHLlr7nosaFcclxuICAgKi9cclxuICBhZGQgKG5hbWU6IHN0cmluZywgeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgaWYgKCAhdXRpbHMuaXNPd25Qcm9wKHRoaXMueGhyUG9vbHMsIG5hbWUpICkge1xyXG4gICAgICB0aGlzLnhoclBvb2xzW25hbWVdID0geGhyXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnp7vpmaR4aHLlr7nosaFcclxuICAgKiBAcGFyYW0gbmFtZSDmjqXlj6PlkI1cclxuICAgKi9cclxuICByZW1vdmUgKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCB1dGlscy5pc093blByb3AodGhpcy54aHJQb29scywgbmFtZSkgKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLnhoclBvb2xzW25hbWVdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmiafooYzlj5bmtojor7fmsYJcclxuICAgKiBAcGFyYW0gbmFtZSDmjqXlj6PlkI1cclxuICAgKi9cclxuICBjYW5jZWwgKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCAhdXRpbHMuaXNPd25Qcm9wKHRoaXMueGhyUG9vbHMsIG5hbWUpICkgcmV0dXJuIGZhbHNlXHJcbiAgICB0aGlzLnhoclBvb2xzW25hbWVdLmFib3J0KClcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2FuY2VsUmVxdWVzdCgpIiwiLy8g6ZSZ6K+v57G75Z6L55qE5p6a5Li+XHJcbmVudW0gRXJyb3JUeXBlIHtcclxuICBTVE9QID0gMCwgLy8gcHJvbWlzZemTvue7iOatou+8jOS4uuS6huS4jeaJp+ihjCB0aGVuIOaWueazleS4reaIluiAhSBhd2FpdCDlkI7nmoTnqIvluo9cclxuICBGQUlMID0gMSwgLy8g5LiA6Iis6ZSZ6K+vXHJcbiAgVEhST1RUTEUgPSAyLCAvLyDop6blj5HoioLmtYFcclxuICBTVEFUVVMgPSAzLCAvLyDmnI3liqHlmajnirbmgIHnoIHplJnor69cclxuICBUSU1FT1VUID0gNCwgLy8g6LaF5pe26ZSZ6K+vXHJcbiAgQ0FOQ0VMRUQgPSA1LCAvLyDor7fmsYLlt7Looqvlj5bmtohcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOS4gOS4qumUmeivr1xyXG4gKiBAcGFyYW0gbWVzc2FnZSDplJnor6/kv6Hmga9cclxuICogQHBhcmFtIHR5cGUg6ZSZ6K+v57G75Z6LXHJcbiAqIEBwYXJhbSBpc1Byb21pc2Ug5piv5ZCm6L+U5ZueIHByb21pc2UucmVqZWN0XHJcbiAqIEBwYXJhbSBleHRyYSDmianlsZXlr7nosaHvvIznlKjkuo7nibnmrorlpITnkIZcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yIChcclxuICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgdHlwZTogRXJyb3JUeXBlLFxyXG4gIGlzUHJvbWlzZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGV4dHJhPzogUmVjb3JkPHN0cmluZywgYW55PixcclxuKTogUHJvbWlzZTxFcnJvcj4gfCBFcnJvciB7XHJcbiAgLy8g5Yib5bu65LiA5Liq6ZSZ6K+vXHJcbiAgbGV0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IobWVzc2FnZSlcclxuXHJcbiAgLy8g5omp5bGVIGVycm9yIOeahOWxnuaAp1xyXG4gIC8vIOW9k+WJjeeahOmUmeivr+exu+Wei1xyXG4gIGVycm9yLnR5cGUgPSB0eXBlIFxyXG4gIC8vIOmUmeivr+exu+Wei+eahOWAvFxyXG4gIGVycm9yLkVycm9yVHlwZSA9IHtcclxuICAgIFNUT1A6IEVycm9yVHlwZS5TVE9QLFxyXG4gICAgRkFJTDogRXJyb3JUeXBlLkZBSUwsXHJcbiAgICBUSFJPVFRMRTogRXJyb3JUeXBlLlRIUk9UVExFLFxyXG4gICAgU1RBVFVTOiBFcnJvclR5cGUuU1RBVFVTLFxyXG4gICAgVElNRU9VVDogRXJyb3JUeXBlLlRJTUVPVVQsXHJcbiAgICBDQU5DRUxFRDogRXJyb3JUeXBlLkNBTkNFTEVEXHJcbiAgfVxyXG5cclxuICAvLyDnirbmgIHnoIHplJnor6/vvIwg6ZyA6KaB6KeB54q25oCB56CB5oyC6L295Yiw6ZSZ6K+v5a+56LGh5LiKXHJcbiAgaWYgKHR5cGUgPT09IEVycm9yVHlwZS5TVEFUVVMpIHtcclxuICAgIGVycm9yLnN0YXR1c0NvZGUgPSBleHRyYS5jb2RlXHJcbiAgfVxyXG5cclxuICAvLyDovawgSlNPTiDnmoTmlrnms5VcclxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge1xyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIEVycm9yVHlwZTogdGhpcy5FcnJvclR5cGUsXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0dXNDb2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0LnN0YXR1c0NvZGUgPSB0aGlzLnN0YXR1c0NvZGVcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIGlmIChpc1Byb21pc2UpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbi8vIOWvvOWHuuWHveaVsFxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFcnJvclxyXG5cclxuLy8g5a+85Ye66ZSZ6K+v57G75Z6LXHJcbmV4cG9ydCB7XHJcbiAgRXJyb3JUeXBlXHJcbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuaW1wb3J0IGNyZWF0ZUVycm9yLCB7IEVycm9yVHlwZSB9IGZyb20gJ0AvY29yZS9jcmVhdGVFcnJvcidcclxuXHJcbi8qKlxyXG4gKiDov5vluqbnm5HlkKzlmahcclxuICovXHJcblxyXG5jbGFzcyBQcm9ncmVzc0xpc3RlbmVyIHtcclxuICB1cGxvYWQ6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9XHJcbiAgZG93bmxvYWQ6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiA9IHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOebkeWQrOWZqFxyXG4gICAqIEBwYXJhbSB0eXBlIOebkeWQrOeahOexu+Wei++8jHVwbG9hZC9kb3dubG9hZFxyXG4gICAqIEBwYXJhbSBuYW1lIOebkeWQrOeahCBhcGluYW1lXHJcbiAgICogQHBhcmFtIGV4ZWMg5omn6KGM5pa55rOVXHJcbiAgICovXHJcbiAgYWRkICh0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZXhlYzogRnVuY3Rpb24pIHtcclxuICAgIGlmICggIXV0aWxzLmlzT3duUHJvcCh0aGlzW3R5cGVdLCBuYW1lKSApIHtcclxuICAgICAgdGhpc1t0eXBlXVtuYW1lXSA9IGV4ZWNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZUVycm9yKGBUaGUgbGlzdGVuZXIgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2AsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Kem5Y+R55uR5ZCs5ZmoXHJcbiAgICogQHBhcmFtIHR5cGUg55uR5ZCs55qE57G75Z6L77yMdXBsb2FkL2Rvd25sb2FkXHJcbiAgICogQHBhcmFtIG5hbWUg55uR5ZCs55qEIGFwaW5hbWVcclxuICAgKi9cclxuICB0cmlnZ2VyICh0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcHJvZ3Jlc3NFdmVudDogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gICAgdXRpbHMuaXNGdW5jdGlvbih0aGlzW3R5cGVdW25hbWVdKSAmJiB0aGlzW3R5cGVdW25hbWVdKHByb2dyZXNzRXZlbnQpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3lrZjlnKhcclxuICAgKiBAcGFyYW0gdHlwZSDnm5HlkKznmoTnsbvlnovvvIx1cGxvYWQvZG93bmxvYWRcclxuICAgKiBAcGFyYW0gbmFtZSDnm5HlkKznmoQgYXBpbmFtZVxyXG4gICAqL1xyXG4gIGlzRXhpc3QgKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIHV0aWxzLmlzT3duUHJvcCh0aGlzW3R5cGVdLCBuYW1lKSApIHJldHVybiB0cnVlXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9ncmVzc0xpc3RlbmVyKCkiLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8vIOW8leWFpSDov5vluqbnm5HlkKzlmahcclxuaW1wb3J0IHByb2dyZXNzTGlzdGVuZXIgZnJvbSAnQC9oZWxwZXJzL3Byb2dyZXNzTGlzdGVuZXInXHJcbi8qKlxyXG4gKiDnu5HlrpogeGhyIOS4gOezu+WIl+S4iuS8oC/kuIvovb3kuovku7ZcclxuICogQHBhcmFtIHR5cGUgdXBsb2FkL2Rvd25sb2FkXHJcbiAqIEBwYXJhbSB4aHIgeGhy5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZTogc3RyaW5nLCBhcGlOYW1lOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAvLyDojrflj5bkuIrkvKAv5LiL6L295a+56LGhXHJcbiAgbGV0IHRhcmdldCA9IHR5cGUgPT09ICd1cGxvYWQnID8geGhyLnVwbG9hZCA6IHhoclxyXG4gIHhociA9IG51bGwgLy8g5Zue5pS2IHhociDlhoXlrZhcclxuXHJcbiAgLy8g6L+b5bqm54q25oCBXHJcbiAgZW51bSBQcm9ncmVzc1N0YXR1cyB7XHJcbiAgICBGQUlMID0gMCxcclxuICAgIFNVQ0NFU1MgPSAxLFxyXG4gICAgUFJPR1JFU1MgPSAyLFxyXG4gICAgU1RBUlQgPSAzLFxyXG4gICAgQ0FOQ0VMID0gNCxcclxuICAgIFRJTUVPVVQgPSA1XHJcbiAgfVxyXG4gIC8vIOi/m+W6pueKtuaAgeWvueixoVxyXG4gIGNvbnN0IHByb2dyZXNzU3RhdHVzID0ge1xyXG4gICAgRkFJTDogUHJvZ3Jlc3NTdGF0dXMuRkFJTCxcclxuICAgIFNVQ0NFU1M6IFByb2dyZXNzU3RhdHVzLlNVQ0NFU1MsXHJcbiAgICBQUk9HUkVTUzogUHJvZ3Jlc3NTdGF0dXMuUFJPR1JFU1MsXHJcbiAgICBTVEFSVDogUHJvZ3Jlc3NTdGF0dXMuU1RBUlQsXHJcbiAgICBDQU5DRUw6IFByb2dyZXNzU3RhdHVzLkNBTkNFTCxcclxuICAgIFRJTUVPVVQ6IFByb2dyZXNzU3RhdHVzLlRJTUVPVVRcclxuICB9XHJcblxyXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxyXG4gIC8vIOW8gOWni1xyXG4gIGZ1bmN0aW9uIG9uU3RhcnQgKGV2dCkge1xyXG4gICAgcHJvZ3Jlc3NMaXN0ZW5lci50cmlnZ2VyKHR5cGUsIGFwaU5hbWUsIHtcclxuICAgICAgdHlwZSxcclxuICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgc3RhdHVzOiBQcm9ncmVzc1N0YXR1cy5TVEFSVCxcclxuICAgICAgc3RhdHVzVGV4dDogJ3N0YXJ0JyxcclxuICAgICAgUHJvZ3Jlc3NTdGF0dXM6IHByb2dyZXNzU3RhdHVzXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyDov5vluqZcclxuICBmdW5jdGlvbiBvblByb2dyZXNzIChldnQpIHtcclxuICAgIHByb2dyZXNzTGlzdGVuZXIudHJpZ2dlcih0eXBlLCBhcGlOYW1lLCB7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgIHN0YXR1czogUHJvZ3Jlc3NTdGF0dXMuUFJPR1JFU1MsXHJcbiAgICAgIHN0YXR1c1RleHQ6ICdwcm9ncmVzcycsXHJcbiAgICAgIFByb2dyZXNzU3RhdHVzOiBwcm9ncmVzc1N0YXR1cyxcclxuICAgICAgdG90YWw6IGV2dC50b3RhbCxcclxuICAgICAgbG9hZGVkOiBldnQubG9hZGVkXHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyDlj5bmtohcclxuICBmdW5jdGlvbiBvbkNhbmNlbCAoZXZ0KSB7XHJcbiAgICBwcm9ncmVzc0xpc3RlbmVyLnRyaWdnZXIodHlwZSwgYXBpTmFtZSwge1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBldmVudDogZXZ0LFxyXG4gICAgICBzdGF0dXM6IFByb2dyZXNzU3RhdHVzLkNBTkNFTCxcclxuICAgICAgc3RhdHVzVGV4dDogJ2NhbmNlbCcsXHJcbiAgICAgIFByb2dyZXNzU3RhdHVzOiBwcm9ncmVzc1N0YXR1c1xyXG4gICAgfSlcclxuICAgIHVuYmluZCgpXHJcbiAgfVxyXG4gIC8vIOWksei0pVxyXG4gIGZ1bmN0aW9uIG9uRmFpbCAoZXZ0KSB7XHJcbiAgICBwcm9ncmVzc0xpc3RlbmVyLnRyaWdnZXIodHlwZSwgYXBpTmFtZSwge1xyXG4gICAgICB0eXBlLFxyXG4gICAgICBldmVudDogZXZ0LFxyXG4gICAgICBzdGF0dXM6IFByb2dyZXNzU3RhdHVzLkZBSUwsXHJcbiAgICAgIHN0YXR1c1RleHQ6ICdmYWlsJyxcclxuICAgICAgUHJvZ3Jlc3NTdGF0dXM6IHByb2dyZXNzU3RhdHVzXHJcbiAgICB9KVxyXG4gICAgdW5iaW5kKClcclxuICB9XHJcbiAgLy8g5oiQ5YqfXHJcbiAgZnVuY3Rpb24gb25TdWNjZXNzIChldnQpIHtcclxuICAgIHByb2dyZXNzTGlzdGVuZXIudHJpZ2dlcih0eXBlLCBhcGlOYW1lLCB7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIGV2ZW50OiBldnQsXHJcbiAgICAgIHN0YXR1czogUHJvZ3Jlc3NTdGF0dXMuU1VDQ0VTUyxcclxuICAgICAgc3RhdHVzVGV4dDogJ3N1Y2Nlc3MnLFxyXG4gICAgICBQcm9ncmVzc1N0YXR1czogcHJvZ3Jlc3NTdGF0dXNcclxuICAgIH0pXHJcbiAgICB1bmJpbmQoKVxyXG4gIH1cclxuICAvLyDotoXml7ZcclxuICBmdW5jdGlvbiBvblRpbWVvdXQgKGV2dCkge1xyXG4gICAgcHJvZ3Jlc3NMaXN0ZW5lci50cmlnZ2VyKHR5cGUsIGFwaU5hbWUsIHtcclxuICAgICAgdHlwZSxcclxuICAgICAgZXZlbnQ6IGV2dCxcclxuICAgICAgc3RhdHVzOiBQcm9ncmVzc1N0YXR1cy5USU1FT1VULFxyXG4gICAgICBzdGF0dXNUZXh0OiAndGltZW91dCcsXHJcbiAgICAgIFByb2dyZXNzU3RhdHVzOiBwcm9ncmVzc1N0YXR1c1xyXG4gICAgfSlcclxuICAgIHVuYmluZCgpXHJcbiAgfVxyXG5cclxuICAvLyDnu5Hlrprkuovku7ZcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0Jywgb25TdGFydClcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvblByb2dyZXNzKVxyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsKVxyXG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRmFpbClcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU3VjY2VzcylcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndGltZW91dCcsIG9uVGltZW91dClcclxuXHJcbiAgLy8g6Kej57uR5LqL5Lu2XHJcbiAgZnVuY3Rpb24gdW5iaW5kICgpIHtcclxuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2Fkc3RhcnQnLCBvblN0YXJ0KVxyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcylcclxuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsKVxyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25GYWlsKVxyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblN1Y2Nlc3MpXHJcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZW91dCcsIG9uVGltZW91dClcclxuICAgIHRhcmdldCA9IG51bGxcclxuICB9XHJcbn0iLCIvKiBnbG9iYWwgIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8vIOW8leWFpeW3peWFt+exu1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQC91dGlscy9pbmRleCdcclxuLy8g5byV5YWl55Sf5oiQ5ZON5bqU5pWw5o2u55qE5Ye95pWwXHJcbmltcG9ydCByZXNwb25zZURhdGFDcmVhdGUgZnJvbSAnQC9oZWxwZXJzL3Jlc3BvbnNlRGF0YUNyZWF0ZSdcclxuLy8gLy8g5byV5YWl5Y+W5raIeGhy6K+35rGC5a+56LGhXHJcbmltcG9ydCBjYW5jZWxSZXF1ZXN0IGZyb20gJ0AvaGVscGVycy9jYW5jZWxSZXF1ZXN0J1xyXG4vLyDlvJXlhaUg6L+b5bqm55uR5ZCs5ZmoXHJcbmltcG9ydCBwcm9ncmVzc0xpc3RlbmVyIGZyb20gJ0AvaGVscGVycy9wcm9ncmVzc0xpc3RlbmVyJ1xyXG4vLyDlvJXlhaUg6L+b5bqm5LqL5Lu25aSE55CGXHJcbmltcG9ydCBwcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzJ1xyXG5cclxuLy8gYWRhcHRlciDnu5PmnpznirbmgIFcclxuZW51bSBTVEFUVVMge1xyXG4gIHJlc3BvbnNlID0gMCxcclxuICB0aW1lb3V0ID0gMSxcclxuICBmYWlsID0gMixcclxuICBjYW5jZWxsID0gM1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFNUQVRVU1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlnOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAvLyDop6PmnoTphY3nva7poblcclxuICBsZXQgeyBoZWFkZXJzLCBtZXRob2QsIHVybCwgZGF0YSwgdGltZW91dCwgYXBpTmFtZSB9ID0gY29uZmlnXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgXHJcbiAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSlcclxuXHJcbiAgICAvLyDlpoLmnpzkvKDnu5nlkI7nq6/nmoTmlbDmja7kuLogRm9ybURhdGEg5qC85byP77yM5YiZ56e76ZmkIGNvbnRlbnQtdHlwZe+8jOiuqea1j+iniOWZqOiHquW3seiuvue9rlxyXG4gICAgaWYgKCBkYXRhICYmIHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgKSB7XHJcbiAgICAgIGRlbGV0ZSBoZWFkZXJzWydDb250ZW50LVR5cGUnXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuvue9ruivt+axguWktFxyXG4gICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCBhcyBzdHJpbmcpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOiuvue9rui2heaXtlxyXG4gICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC54q25oCB5Y+Y5YyWXHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIXhociB8fCB4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkgcmV0dXJuXHJcbiAgICAgIGlmICggeGhyLnN0YXR1cyA9PT0gMCAmJiAhKHhoci5yZXNwb25zZVVSTCAmJiB4aHIucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkgKSByZXR1cm5cclxuICAgICAgXHJcbiAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgIHN0YXR1czogU1RBVFVTLnJlc3BvbnNlLFxyXG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YUNyZWF0ZSh4aHIpLFxyXG4gICAgICAgIGV4dHJhOiB7XHJcbiAgICAgICAgICBhcGlOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6LaF5pe25aSE55CGXHJcbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXNvbHZlKHsgXHJcbiAgICAgICAgc3RhdHVzOiBTVEFUVVMudGltZW91dCwgXHJcbiAgICAgICAgdGltZW91dCxcclxuICAgICAgICBleHRyYToge1xyXG4gICAgICAgICAgYXBpTmFtZSxcclxuICAgICAgICAgIG1ldGhvZCxcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHRpbWVvdXQsXHJcbiAgICAgICAgICBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC5oql6ZSZXHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVzb2x2ZSh7IFxyXG4gICAgICAgIHN0YXR1czogU1RBVFVTLmZhaWwsXHJcbiAgICAgICAgZXh0cmE6IHtcclxuICAgICAgICAgIGFwaU5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+35rGC6KKr5Y+W5raIXHJcbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVzb2x2ZSh7IFxyXG4gICAgICAgIHN0YXR1czogU1RBVFVTLmNhbmNlbGwsXHJcbiAgICAgICAgZXh0cmE6IHtcclxuICAgICAgICAgIGFwaU5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB4aHIgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yik5pat5b2T5YmNIGFwaU5hbWUg5piv5ZCm5a2Y5Zyo6L+b5bqm55uR5ZCs5Zmo77yM5a2Y5Zyo5YiZ57uR5a6a5a+55bqU5LqL5Lu2XHJcbiAgICBpZiAoIHByb2dyZXNzTGlzdGVuZXIuaXNFeGlzdCgndXBsb2FkJywgYXBpTmFtZSkgKSB7XHJcbiAgICAgIHByb2dyZXNzKCd1cGxvYWQnLCBhcGlOYW1lLCB4aHIpXHJcbiAgICB9XHJcbiAgICBpZiAoIHByb2dyZXNzTGlzdGVuZXIuaXNFeGlzdCgnZG93bmxvYWQnLCBhcGlOYW1lKSApIHtcclxuICAgICAgcHJvZ3Jlc3MoJ2Rvd25sb2FkJywgYXBpTmFtZSwgeGhyKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBkYXRhIOS4uuepuu+8jOWImee9ruS4uiBudWxsXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgZGF0YSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyDmt7vliqB4aHLlr7nosaHliLAgY2FuY2VsUmVxdWVzdFxyXG4gICAgY2FuY2VsUmVxdWVzdC5hZGQoYXBpTmFtZSwgeGhyKVxyXG5cclxuICAgIHhoci5zZW5kKGRhdGEpXHJcbiAgfSlcclxufSIsImltcG9ydCB1dGlscyBmcm9tICdAL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnQC9jb3JlL2NyZWF0ZUVycm9yJ1xyXG4vKipcclxuICog54q25oCB5o2V6I635ZmoXHJcbiAqL1xyXG5jbGFzcyBDYXRjaGVyIHtcclxuICB0YXJnZXRzOiBSZWNvcmQ8bnVtYmVyLCBGdW5jdGlvbj4gPSB7fVxyXG4gIHRpbWVvdXRIYW5kZXI6IEZ1bmN0aW9uIC8vIOi2heaXtuWkhOeQhuWHveaVsFxyXG4gIC8qKlxyXG4gICAqIOaNleiOt+eKtuaAgeeggVxyXG4gICAqIEBwYXJhbSBjb2RlIOimgeaNleiOt+eahOeKtuaAgeeggVxyXG4gICAqIEBwYXJhbSBleGVjIOaJp+ihjOWHveaVsFxyXG4gICAqL1xyXG4gIGNhdGNoIChjb2RlOiBudW1iZXIsIGV4ZWM6IEZ1bmN0aW9uKSB7XHJcbiAgICBjb2RlID0gTnVtYmVyKGNvZGUpXHJcbiAgICBpZiAoICF1dGlscy5pc093blByb3AodGhpcy50YXJnZXRzLCBjb2RlKSApIHtcclxuICAgICAgdGhpcy50YXJnZXRzW2NvZGVdID0gZXhlY1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoYFRoZSBjYXRjaGVyIG9mIHN0YXR1cyBjb2RlICR7Y29kZX0gYWxyZWFkeSBleGlzdHNgLCBFcnJvclR5cGUuRkFJTClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOinpuWPkeS6i+S7tlxyXG4gICAqIEBwYXJhbSBjb2RlIOWPr+iDveinpuWPkeaNleiOt+WHveaVsOeahOeKtuaAgeeggVxyXG4gICAqL1xyXG4gIHRyaWdnZXIgKGNvZGUpIHtcclxuICAgIGNvZGUgPSBOdW1iZXIoY29kZSlcclxuICAgIGlmICggdXRpbHMuaXNPd25Qcm9wKHRoaXMudGFyZ2V0cywgY29kZSkgKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0c1tjb2RlXSgpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOazqOWGjOi2heaXtuWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyVGltZW91dEhhbmRlciAoaGFuZGVyOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy50aW1lb3V0SGFuZGVyID0gaGFuZGVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F0Y2hlcigpIiwiLyoqXHJcbiAqIOivt+axguaxoO+8jOeUqOS6juS/neeVmeW9k+WJjeato+WcqOaJp+ihjOeahOivt+axglxyXG4gKi9cclxuXHJcbmNsYXNzIFJlcXVlc3RQb29sIHtcclxuICBwb29sczogQXJyYXk8c3RyaW5nPiA9IFtdXHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreivt+axguaYr+WQpuWtmOWcqFxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgaXNFeGlzdCAobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIHRoaXMucG9vbHMuaW5jbHVkZXMobmFtZSkgKSByZXR1cm4gdHJ1ZVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlsIbor7fmsYLlkI3mt7vliqDliLAgcG9vbHMg5LitXHJcbiAgICogQHBhcmFtIG5hbWUg6K+35rGC55qEIGFwaW5hbWVcclxuICAgKi9cclxuICBwdXNoIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICggdGhpcy5wb29scy5pbmNsdWRlcyhuYW1lKSApIHJldHVyblxyXG4gICAgdGhpcy5wb29scy5wdXNoKG5hbWUpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKDpmaTlr7nlupQgYXBpbmFtZVxyXG4gICAqIEBwYXJhbSBuYW1lIOivt+axgueahCBhcGluYW1lXHJcbiAgICovXHJcbiAgZGVsZXRlIChuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCBpbmRleCA9IHRoaXMucG9vbHMuaW5kZXhPZihuYW1lKVxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXHJcbiAgICB0aGlzLnBvb2xzLnNwbGljZShpbmRleCwgMSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXF1ZXN0UG9vbCgpIiwiLy8g5a+85YWl6YCC6YWN5ZmoXHJcbmltcG9ydCBhZGFwdGVycywgeyBTVEFUVVMgfSBmcm9tICdAL2FkYXB0ZXJzL2luZGV4J1xyXG4vLyDlr7zlhaXmjZXojrflmahcclxuaW1wb3J0IGNhdGNoZXIgZnJvbSAnQC9oZWxwZXJzL2NhdGNoZXInXHJcbi8vIOWvvOWFpemUmeivr+WIm+W7ulxyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcclxuLy8g5byV5YWl6K+35rGC5rGgXHJcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICdAL2NvcmUvcmVxdWVzdFBvb2wnXHJcbi8vIOW8leWFpeWPlua2iHhocuivt+axguWvueixoVxyXG5pbXBvcnQgY2FuY2VsUmVxdWVzdCBmcm9tICdAL2hlbHBlcnMvY2FuY2VsUmVxdWVzdCdcclxuXHJcbi8vIOWTjeW6lOeKtuaAgea1geeoi+aOp+WItlxyXG5jb25zdCBwcm9jZXNzQ29udHJvbCA9IHtcclxuICByZXNwb25zZSAoeyBkYXRhIH0pIHtcclxuICAgIGlmIChkYXRhLnN0YXR1cyA+PSAyMDAgJiYgZGF0YS5zdGF0dXMgPCAzMDApIHJldHVybiBkYXRhXHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IGNhdGNoZXIudHJpZ2dlcihkYXRhLnN0YXR1cylcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUVycm9yKGBOb3QgYW4gZXJyb3I7IHByb21pc2Ugc3RvcDsgaHR0cHMgc3RhdHVzICR7ZGF0YS5zdGF0dXN9IGJlIGNhdGNoZWRgLCBFcnJvclR5cGUuU1RPUCwgdHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVFcnJvcihgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAke2RhdGEuc3RhdHVzfWAsIEVycm9yVHlwZS5TVEFUVVMsIHRydWUsIHsgY29kZTogZGF0YS5zdGF0dXMgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIHRpbWVvdXQgKHsgZXh0cmEgfSkge1xyXG4gICAgbGV0IHsgYXBpTmFtZSwgbWV0aG9kLCB1cmwsIHRpbWVvdXQsIGRhdGEgfSA9IGV4dHJhXHJcbiAgICAvLyDmiafooYzotoXml7blpITnkIblmahcclxuICAgIGNhdGNoZXIudGltZW91dEhhbmRlciAmJiBjYXRjaGVyLnRpbWVvdXRIYW5kZXIoe1xyXG4gICAgICBhcGlOYW1lLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIHVybCxcclxuICAgICAgdGltZW91dCxcclxuICAgICAgZGF0YVxyXG4gICAgfSlcclxuICAgIHJldHVybiBjcmVhdGVFcnJvcihgdGltZW91dCBvZiAke3RpbWVvdXR9IG1zIGV4Y2VlZGVkYCwgRXJyb3JUeXBlLlRJTUVPVVQpXHJcbiAgfSxcclxuICBmYWlsICgpIHtcclxuICAgIHJldHVybiBjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIEVycm9yVHlwZS5GQUlMKVxyXG4gIH0sXHJcbiAgY2FuY2VsbCAoKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRXJyb3IoJ1JlcXVlc3QgY2FuY2VsbGVkJywgRXJyb3JUeXBlLkNBTkNFTEVEKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGNvbmZpZzogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gIC8vIGNvbnNvbGUubG9nKGNvbmZpZylcclxuICAvLyDosIPnlKjpgILphY3lmahcclxuICByZXR1cm4gYWRhcHRlcnMoY29uZmlnKS50aGVuKHJlcyA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IFNUQVRVU1tyZXMuc3RhdHVzXSAvLyDnirbmgIHlkI1cclxuICAgIGxldCB7IGV4dHJhIH0gPSByZXNcclxuICAgIC8vIOenu+mZpOivt+axguaxoOS4reWvueW6lOeahGFwaVxyXG4gICAgcmVxdWVzdFBvb2wuZGVsZXRlKGV4dHJhLmFwaU5hbWUpXHJcbiAgICAvLyDnp7vpmaTlr7nlupR4aHJcclxuICAgIGNhbmNlbFJlcXVlc3QucmVtb3ZlKGV4dHJhLmFwaU5hbWUpXHJcbiAgICAvLyDmiafooYzlr7nlupTmtYHnqItcclxuICAgIHJldHVybiBwcm9jZXNzQ29udHJvbFtuYW1lXShyZXMpXHJcbiAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG59IiwiLy8g5a+85YWl5o6l5Y+jXHJcbmltcG9ydCB7IFxyXG4gIE5ldHJvbE9wdGlvbnMsXHJcbiAgTW9kdWxlRGV0YWlsLFxyXG4gIE1vZHVsZXMsXHJcbiAgSW50ZXJjZXB0b3JSZXF1ZXN0LFxyXG4gIEludGVyY2VwdG9yUmVzcG9uc2UsXHJcbiAgVHJhbnNmb3JtRGF0YSBcclxufSBmcm9tICdAL2ludGVyZmFjZXMvaW5kZXgnXHJcbi8vIOWvvOWFpeivt+axglxyXG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0J1xyXG4vLyDlr7zlhaXpu5jorqTor7fmsYLlpLRcclxuaW1wb3J0IGRlZmF1bHRIZWFkZXJzIGZyb20gJy4vaGVhZGVycydcclxuLy8g5byV5YWl6K+35rGC5rGgXHJcbmltcG9ydCByZXF1ZXN0UG9vbCBmcm9tICcuL3JlcXVlc3RQb29sJ1xyXG4vLyDlvJXlhaXlt6Xlhbfmlrnms5VcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0AvdXRpbHMvaW5kZXgnXHJcbi8vIOW8leWFpemUmeivr+WIm+W7uuW3peWFt1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jcmVhdGVFcnJvcidcclxuXHJcbi8qKlxyXG4gKiBOZXRyb2wg5a+56LGhXHJcbiAqL1xyXG5jbGFzcyBOZXRyb2wge1xyXG4gIC8vIOeuoeeQhuaJgOaciSBhcGlzXHJcbiAgYXBpczogb2JqZWN0XHJcbiAgLy8g5Y+R6YCBIHhocuivt+axgiDmiYDpnIDnmoQgUmVxdWVzdCBIZWFkZXJzXHJcbiAgaGVhZGVyczogb2JqZWN0XHJcbiAgLy8g5ZON5bqU5pWw5o2u6L+H5ruk5Zmo77yM55So5LqO5Zyo6K+35rGC5oiQ5Yqf5ZCO77yM5o6l5Y+X5pyN5Yqh5Zmo5pWw5o2u77yM5bm26L+b6KGM5aSE55CG5ZKM6L+U5ZueXHJcbiAgbGVhY2g6IG9iamVjdFxyXG4gIC8vIOWfuuacrHVybFxyXG4gIGJhc2VVcmw6IHN0cmluZ1xyXG4gIC8vIOaooeWdl1xyXG4gIG1vZHVsZXM6IE1vZHVsZXNcclxuICAvLyDotoXml7bml7bpmZBcclxuICB0aW1lb3V0OiBudW1iZXJcclxuICAvLyDpu5jorqTor7fmsYLmlrnms5VcclxuICBkZWZhdWx0TWV0aG9kOiBzdHJpbmdcclxuXHJcbiAgLy8g5pWw5o2u6L2s5o2i5pa55rOVXHJcbiAgdHJhbnNmb3JtRGF0YTogVHJhbnNmb3JtRGF0YVxyXG5cclxuICAvLyDor7fmsYLmi6bmiKrlmahcclxuICBzdGF0aWMgaW50ZXJjZXB0b3JSZXF1ZXN0OiBJbnRlcmNlcHRvclJlcXVlc3RcclxuICAvLyDlk43lupTmi6bmiKrlmahcclxuICBzdGF0aWMgaW50ZXJjZXB0b3JSZXNwb25zZTogSW50ZXJjZXB0b3JSZXNwb25zZVxyXG5cclxuICAvKipcclxuICAgKiDmnoTpgKDlh73mlbBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBOZXRyb2wg5a6e5L6L55qE6YWN572u6aG5XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IE5ldHJvbE9wdGlvbnMpIHtcclxuICAgIGxldCB7IGFwaXMsIGxlYWNoLCBtb2R1bGUsIHRyYW5zZm9ybURhdGEsIGNvbmZpZyA9IHt9IH0gPSBvcHRpb25zXHJcbiAgICBsZXQgeyBoZWFkZXJzLCBiYXNlVXJsLCB0aW1lb3V0LCBkZWZhdWx0TWV0aG9kIH0gPSBjb25maWdcclxuXHJcbiAgICAvLyDmo4Dmn6UgYXBpcyDmmK/lkKblrZjlnKhcclxuICAgIGlmICghYXBpcykgdGhyb3cgY3JlYXRlRXJyb3IoJ2FwaXMgaXMgcmVxdWlyZWQgaW4gY29uc3RydWN0b3InLCBFcnJvclR5cGUuRkFJTClcclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIHRoaXMuYXBpcyA9IGFwaXNcclxuICAgIHRoaXMuaGVhZGVycyA9IHtcclxuICAgICAgLi4uZGVmYXVsdEhlYWRlcnMsXHJcbiAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICB9XHJcbiAgICB0aGlzLmxlYWNoID0gbGVhY2hcclxuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmwgfHwgJydcclxuICAgIHRoaXMubW9kdWxlcyA9IG1vZHVsZVxyXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dCB8fCAwXHJcbiAgICB0aGlzLmRlZmF1bHRNZXRob2QgPSBkZWZhdWx0TWV0aG9kIHx8ICdnZXQnXHJcbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSB0cmFuc2Zvcm1EYXRhXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlj5Hotbfor7fmsYLnmoTmlrnms5VcclxuICAgKiBAcGFyYW0gYXBpTmFtZSDosIPnlKjmjIflrpogYXBpcyBcclxuICAgKiBAcGFyYW0gZGF0YSDkvKDpgJLnu5nmnI3liqHlmajnmoTmlbDmja5cclxuICAgKi9cclxuICByZXF1ZXN0IChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgbGV0IHByb21pc2UgPSBudWxsXHJcbiAgICBsZXQgY2hhaW4gPSBudWxsXHJcbiAgICBcclxuICAgIC8vIOWIpOaWreaYr+WQpuivpeivt+axguaYr+WQpuato+WcqOaJp+ihjFxyXG4gICAgaWYgKCByZXF1ZXN0UG9vbC5pc0V4aXN0KGFwaU5hbWUpICkgcmV0dXJuIGNyZWF0ZUVycm9yKCdOb3QgYW4gZXJyb3I7IFRyaWdnZXJlZCB0aHJvdHRsZTsnLCBFcnJvclR5cGUuVEhST1RUTEUsIHRydWUpXHJcbiAgICAvLyDlsIYgYXBpbmFtZSDmt7vliqDliLDor7fmsYLmsaBcclxuICAgIHJlcXVlc3RQb29sLnB1c2goYXBpTmFtZSlcclxuXHJcbiAgICAvLyDmoLnmja7osIPnlKggYXBp77yM5ZCI5bm26YWN572u6aG5XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5tZXJnZUNvbmZpZyhhcGlOYW1lLCBkYXRhKVxyXG4gICAgLy8g5aaC5p6c6L+U5Zue55qE5pivIFByb21pc2Ug5a+56LGh77yMIOWImeebtOaOpei/lOWbnlxyXG4gICAgaWYgKGNvbmZpZyBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBjb25maWdcclxuXHJcbiAgICAvLyDlkIjlubYgcHJvbWlzZSDpk75cclxuICAgIGNoYWluID0gdGhpcy5tZXJnZVByb21pc2VDaGFpbihjb25maWcpXHJcblxyXG4gICAgLy8g6L+e5o6lIHByb21pc2Ug6ZO+XHJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZylcclxuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcclxuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbiggY2hhaW4uc2hpZnQoKSApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwcm9taXNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlkIjlubYgcHJvbWlzZSDpk75cclxuICAgKiBAcGFyYW0gY29uZmlnIOivt+axgumFjee9ruWvueixoVxyXG4gICAqL1xyXG4gIG1lcmdlUHJvbWlzZUNoYWluIChjb25maWc6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICAgIC8vIOWwhuivt+axguWHveaVsO+8jOa3u+WKoOWIsCBwcm9taXNlIOmTvuaVsOe7hOS4rVxyXG4gICAgbGV0IGNoYWluOiBBcnJheTxGdW5jdGlvbj4gPSBbZGlzcGF0Y2hSZXF1ZXN0XVxyXG5cclxuICAgIC8vIOWmguaenOWtmOWcqCBpbnRlcmNlcHRvclJlcXVlc3Qg5YiZ5re75Yqg5YiwIHByb21pc2Ug6ZO+55qE5pyA5YmN6Z2iXHJcbiAgICBpZiAoTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdCkge1xyXG4gICAgICBjaGFpbi51bnNoaWZ0KE5ldHJvbC5pbnRlcmNlcHRvclJlcXVlc3QpXHJcbiAgICB9XHJcbiAgICAvLyDlpoLmnpzlrZjlnKggaW50ZXJjZXB0b3JSZXNwb25zZSDliJnmt7vliqDliLAgcHJvbWlzZSDov57kuIpcclxuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSkge1xyXG4gICAgICBjaGFpbi5wdXNoKE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlKVxyXG5cclxuICAgICAgLy8g5ZCM5pe25re75Yqg5ZCO57ut5aSE55CG5Ye95pWw77yM5b2T6L+U5Zue5YC85Li656m65YC855qE5pe25YCZ77yM5oqb5Ye65byC5bi477yM57uI5q2icHJvbWlzZVxyXG4gICAgICBjaGFpbi5wdXNoKChyZXMpID0+IHtcclxuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIGNyZWF0ZUVycm9yKCdOb3QgYW4gZXJyb3I7IHByb21pc2Ugc3RvcDsnLCBFcnJvclR5cGUuU1RPUCwgdHJ1ZSlcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5a2Y5ZyoIGxlYWNo77yM5YiZ5re75Yqg5YiwIHByb21pc2Ug6ZO+5LitXHJcbiAgICBpZiAoY29uZmlnLmxlYWNoKSB7XHJcbiAgICAgIGNoYWluLnB1c2goY29uZmlnLmxlYWNoKVxyXG4gICAgfVxyXG4gICAgZGVsZXRlIGNvbmZpZy5sZWFjaFxyXG4gICAgXHJcbiAgICByZXR1cm4gY2hhaW5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWQiOW5tumFjee9rumhuVxyXG4gICAqIEBwYXJhbSBhcGlOYW1lIOWvueW6lOiwg+eUqOeahOaOpeWPo1xyXG4gICAqL1xyXG4gIG1lcmdlQ29uZmlnIChhcGlOYW1lOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xyXG4gICAgbGV0IGNvbmZpZyA9IG51bGxcclxuICAgIGxldCBhcGkgPSBudWxsXHJcbiAgICBsZXQgbGVhY2ggPSBudWxsXHJcbiAgICBsZXQgaGVhZGVycyA9IHV0aWxzLmRlZXBDb3B5KHRoaXMuaGVhZGVycylcclxuICAgIGxldCBiYXNlVXJsID0gdGhpcy5iYXNlVXJsXHJcbiAgICBsZXQgdGltZW91dCA9IHRoaXMudGltZW91dFxyXG4gICAgbGV0IGRlZmF1bHRNZXRob2QgPSB0aGlzLmRlZmF1bHRNZXRob2RcclxuICAgIC8vIOaVsOaNrui9rOaNouWHveaVsFxyXG4gICAgbGV0IHRyYW5zZm9ybURhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGFcclxuXHJcbiAgICAvLyDliKTmlq3osIPnlKjnmoTmmK/lkKbkuLogbW9kdWxlIOS4rSBhcGlcclxuICAgIGlmICggYXBpTmFtZS5pbmNsdWRlcygnLicpICkge1xyXG4gICAgICBsZXQgW21vZHVsZSwgbmFtZV0gPSBhcGlOYW1lLnNwbGl0KCcuJylcclxuICAgICAgbGV0IHRoZU1vZHVsZTogTW9kdWxlRGV0YWlsID0gdGhpcy5tb2R1bGVzW21vZHVsZV1cclxuXHJcbiAgICAgIC8vIOWIpOaWreS8oOmAkueahCBtb2R1bGUg5piv5ZCm5a2Y5ZyoXHJcbiAgICAgIGlmICghdGhlTW9kdWxlKSByZXR1cm4gY3JlYXRlRXJyb3IoYG1vZHVsZSAke21vZHVsZX0gZG9lcyBub3QgZXhpc3Q7IOaooeWdlyAke21vZHVsZX0g5LiN5a2Y5ZyoYCwgRXJyb3JUeXBlLkZBSUwsIHRydWUpXHJcblxyXG4gICAgICAvLyDlpoLmnpwgdHJhbnNmb3JtRGF0YSDmlrnms5XlrZjlnKjvvIzliJnph43mlrDotYvlgLxcclxuICAgICAgaWYgKHRoZU1vZHVsZS50cmFuc2Zvcm1EYXRhKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtRGF0YSA9IHRoZU1vZHVsZS50cmFuc2Zvcm1EYXRhXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWIpOaWreaooeWdl+S4iuaYr+WQpuWtmOWcqOmFjee9rumhuVxyXG4gICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZykge1xyXG4gICAgICAgIC8vIOaooeWdl+S4iuWmguaenOWtmOWcqCBiYXNlVXJs77yM5YiZ5pu05pS5IGJhc2VVcmzvvIzliJnmm7TmlLlcclxuICAgICAgICBpZiAodGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsKSB7XHJcbiAgICAgICAgICBiYXNlVXJsID0gdGhlTW9kdWxlLmNvbmZpZy5iYXNlVXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaooeWdl+S4iuWmguaenOWtmOWcqCBoZWFkZXJz77yM5YiZ5ZCI5bm2XHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcuaGVhZGVycykge1xyXG4gICAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgLi4udXRpbHMuZGVlcENvcHkodGhlTW9kdWxlLmNvbmZpZy5oZWFkZXJzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzmqKHlnZfkuIrlrZjlnKggdGltZW91dO+8jOWImei/m+ihjOabv+aNolxyXG4gICAgICAgIGlmICh0aGVNb2R1bGUuY29uZmlnLnRpbWVvdXQpIHtcclxuICAgICAgICAgIHRpbWVvdXQgPSB0aGVNb2R1bGUuY29uZmlnLnRpbWVvdXRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yik5pat5qih5Z2X5LiK5piv5ZCm5a2Y5Zyo6buY6K6k6K+35rGC5pa55rOV77yM5a2Y5Zyo5YiZ5pu/5o2iXHJcbiAgICAgICAgaWYgKHRoZU1vZHVsZS5jb25maWcuZGVmYXVsdE1ldGhvZCkge1xyXG4gICAgICAgICAgZGVmYXVsdE1ldGhvZCA9IHRoZU1vZHVsZS5jb25maWcuZGVmYXVsdE1ldGhvZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8g5o+Q5Y+WIGFwaSDlkowgbGVhY2hcclxuICAgICAgYXBpID0gdGhlTW9kdWxlLmFwaXNbbmFtZV1cclxuICAgICAgbGVhY2ggPSB0aGVNb2R1bGUubGVhY2ggPyB0aGVNb2R1bGUubGVhY2hbbmFtZV0gOiBudWxsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDmj5Dlj5YgYXBpIOWSjCBsZWFjaFxyXG4gICAgICBhcGkgPSB0aGlzLmFwaXNbYXBpTmFtZV1cclxuICAgICAgbGVhY2ggPSB0aGlzLmxlYWNoID8gdGhpcy5sZWFjaFthcGlOYW1lXSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyDliKTmlq3mmK/lkKbmib7liLDlr7nlupQgYXBpXHJcbiAgICBpZiAoIWFwaSkgcmV0dXJuIGNyZWF0ZUVycm9yKGBhcGkgJHthcGlOYW1lfSBkb2VzIG5vdCBleGlzdDsg5o6l5Y+jICR7YXBpTmFtZX0g5LiN5a2Y5ZyoYCwgRXJyb3JUeXBlLkZBSUwsIHRydWUpXHJcblxyXG4gICAgLy8g5Yik5patYXBp5piv5ZCm5Li65a+56LGhXHJcbiAgICBpZiAoIHV0aWxzLmlzT2JqZWN0KGFwaSkgKSB7XHJcbiAgICAgIC8vIOa3seWkjeWItiBhcGlcclxuICAgICAgYXBpID0gdXRpbHMuZGVlcENvcHkoYXBpKVxyXG4gICAgICAvLyDlsIYgYXBpLm1ldGhvZCDnmoTlgLzvvIzovazkuLroi7HmloflsI/lhpksIG1ldGhvZCDlrZjlnKjvvIzpu5jorqTosIPnlKggZ2V0XHJcbiAgICAgIGFwaS5tZXRob2QgPSAhYXBpLm1ldGhvZCA/IGRlZmF1bHRNZXRob2QgOiBhcGkubWV0aG9kLnRvTG93ZXJDYXNlKClcclxuICAgICAgLy8g5ZCI5bm2IGJhc2VVcmwg5ZKMIGFwaS51cmxcclxuICAgICAgYXBpLnVybCA9IGAke2Jhc2VVcmx9JHthcGkudXJsfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOS4jeaYr+Wvueixoe+8jOWImeS9v+eUqOm7mOiupOeahOaWueazlVxyXG4gICAgICBsZXQgdXJsID0gYCR7YmFzZVVybH0ke2FwaX1gXHJcbiAgICAgIGFwaSA9IHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBkZWZhdWx0TWV0aG9kLnRvTG93ZXJDYXNlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWQiOW5tiBoZWFkZXJzIOWSjCBhcGkuaGVhZGVyc1xyXG4gICAgaGVhZGVycyA9IHtcclxuICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgLi4uYXBpLmhlYWRlcnNcclxuICAgIH1cclxuICAgIC8vIOWIoOmZpCBhcGkuaGVhZGVyc1xyXG4gICAgZGVsZXRlIGFwaS5oZWFkZXJzXHJcblxyXG4gICAgLy8g5ZCI5bm26YWN572u6aG5XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIGFwaU5hbWUsXHJcbiAgICAgIGhlYWRlcnMsXHJcbiAgICAgIHRpbWVvdXQsXHJcbiAgICAgIGxlYWNoLFxyXG4gICAgICAuLi5hcGksXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChjb25maWcubWV0aG9kICE9PSAnZ2V0Jykge1xyXG4gICAgICAvLyBkYXRhIOWtmOWcqO+8jOWImeWwhuWFtuijheaNouWQjua3u+WKoOWIsCBjb25maWcg5LiKXHJcbiAgICAgIGlmIChkYXRhICYmICF0cmFuc2Zvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uZmlnLmRhdGEgPSB0aGlzLmRlZmF1bHRUcmFuc2Zvcm1EYXRhKGRhdGEpXHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiB0cmFuc2Zvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICBjb25maWcudXJsID0gdXRpbHMuYXBwZW5kUXVlcnlUb1VybChjb25maWcudXJsLCBkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/lOWbnlxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6buY6K6k55qE6L2s5o2i6K+35rGC5pWw5o2u5pa55rOVXHJcbiAgICogQHBhcmFtIGRhdGEgXHJcbiAgICovXHJcbiAgZGVmYXVsdFRyYW5zZm9ybURhdGEgKGRhdGEpIHtcclxuICAgIC8vIOeJueauiuWvueixoe+8jOebtOaOpei/lOWbnlxyXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcclxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICAvLyDmma7pgJrlr7nosaHvvIzovazkuLogSlNPTiDlrZfnrKbkuLJcclxuICAgIGlmICggdXRpbHMuaXNPYmplY3QoZGF0YSkgKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOacquefpeaDheWGte+8jOebtOaOpei/lOWbnlxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ldHJvbCIsImltcG9ydCBOZXRyb2wgZnJvbSAnLi9jb3JlL05ldHJvbCdcclxuaW1wb3J0IHsgTmV0cm9sT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCdcclxuLyoqXHJcbiAqIOWIm+W7uuS4gOS4qiBuZXRyb2wg5a6e5L6LXHJcbiAqL1xyXG5sZXQgbmV0cm9sOiBOZXRyb2wgPSBudWxsXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRpb25zOiBOZXRyb2xPcHRpb25zKTogRnVuY3Rpb24ge1xyXG4gIC8vIOWPquWFgeiuuOWNleS+i+WtmOWcqFxyXG4gIGlmICghbmV0cm9sKSB7XHJcbiAgICBuZXRyb2wgPSBuZXcgTmV0cm9sKG9wdGlvbnMpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybignbmV0cm9sIGluc3RhbmNlIGlzIG9ubHknKVxyXG4gIH1cclxuICByZXR1cm4gKGFwaU5hbWU6IHN0cmluZywgZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV0cm9sLnJlcXVlc3QoYXBpTmFtZSwgZGF0YSlcclxuICB9XHJcbn0iLCJpbXBvcnQgY2F0Y2hlciBmcm9tICdAL2hlbHBlcnMvY2F0Y2hlcidcclxuLyoqXHJcbiAqIOWvueWkluaatOmcsuaNleiOt+aWueazlVxyXG4gKiBAcGFyYW0gY29kZSDnirbmgIHnoIFcclxuICogQHBhcmFtIGV4ZWMg5omn6KGM5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29kZTogbnVtYmVyLCBleGVjOiBGdW5jdGlvbikge1xyXG4gIGNhdGNoZXIuY2F0Y2goY29kZSwgZXhlYylcclxufSIsImltcG9ydCBjYXRjaGVyIGZyb20gJy4vaGVscGVycy9jYXRjaGVyJ1xyXG5pbXBvcnQgY3JlYXRlRXJyb3IsIHsgRXJyb3JUeXBlIH0gZnJvbSAnLi9jb3JlL2NyZWF0ZUVycm9yJ1xyXG4vKipcclxuICog5rOo5YaM6LaF5pe25aSE55CG5Ye95pWwXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGhhbmRlcjogRnVuY3Rpb24pIHtcclxuICBpZiAoIWNhdGNoZXIudGltZW91dEhhbmRlcikge1xyXG4gICAgY2F0Y2hlci5yZWdpc3RlclRpbWVvdXRIYW5kZXIoaGFuZGVyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBjcmVhdGVFcnJvcigndGltZW91dEhhbmRlciBhbHJlYWR5IGV4aXN0cycsIEVycm9yVHlwZS5GQUlMKVxyXG4gIH1cclxufSIsImltcG9ydCBjYW5jZWxSZXF1ZXN0IGZyb20gJy4vaGVscGVycy9jYW5jZWxSZXF1ZXN0J1xyXG4vKipcclxuICog5Y+W5raI5LiA5Liq6K+35rGCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGNhbmNlbFJlcXVlc3QuY2FuY2VsKG5hbWUpXHJcbn0iLCJpbXBvcnQgTmV0cm9sIGZyb20gJy4vY29yZS9OZXRyb2wnXHJcbmltcG9ydCBjcmVhdGVFcnJvciwgeyBFcnJvclR5cGUgfSBmcm9tICcuL2NvcmUvY3JlYXRlRXJyb3InXHJcbmltcG9ydCB7IEludGVyY2VwdG9yUmVzcG9uc2UsIEludGVyY2VwdG9yUmVxdWVzdCB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyDnu5Hlrpror7fmsYLmi6bmiKrlmahcclxuICByZXF1ZXN0IChjYWxsYmFjazogSW50ZXJjZXB0b3JSZXF1ZXN0KSB7XHJcbiAgICBpZiAoTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdCkgdGhyb3cgY3JlYXRlRXJyb3IoJ2ludGVyY2VwdG9yUmVxdWVzdCBhbHJlYWR5IGV4aXN0cycsIEVycm9yVHlwZS5GQUlMKVxyXG4gICAgTmV0cm9sLmludGVyY2VwdG9yUmVxdWVzdCA9IGNhbGxiYWNrXHJcbiAgfSxcclxuICAvLyDnu5Hlrprlk43lupTmi6bmiKrlmahcclxuICByZXNwb25zZSAoY2FsbGJhY2s6IEludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuICAgIGlmIChOZXRyb2wuaW50ZXJjZXB0b3JSZXNwb25zZSkgdGhyb3cgY3JlYXRlRXJyb3IoJ2ludGVyY2VwdG9yUmVzcG9uc2UgYWxyZWFkeSBleGlzdHMnLCBFcnJvclR5cGUuRkFJTClcclxuICAgIE5ldHJvbC5pbnRlcmNlcHRvclJlc3BvbnNlID0gY2FsbGJhY2tcclxuICB9XHJcbn0iLCJpbXBvcnQgcHJvZ3Jlc3NMaXN0ZW5lciBmcm9tICcuL2hlbHBlcnMvcHJvZ3Jlc3NMaXN0ZW5lcidcclxuLyoqXHJcbiAqIOa3u+WKoOi/m+W6puebkeWQrOWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHVwbG9hZCAoYXBpTmFtZTogc3RyaW5nLCBleGVjOiAocHJvZ3Jlc3NFdmVudDogUmVjb3JkPHN0cmluZywgYW55PikgPT4gdm9pZCkge1xyXG4gICAgcHJvZ3Jlc3NMaXN0ZW5lci5hZGQoJ3VwbG9hZCcsIGFwaU5hbWUsIGV4ZWMpXHJcbiAgfSxcclxuICBkb3dubG9hZCAoYXBpTmFtZTogc3RyaW5nLCBleGVjOiAocHJvZ3Jlc3NFdmVudDogUmVjb3JkPHN0cmluZywgYW55PikgPT4gdm9pZCkge1xyXG4gICAgcHJvZ3Jlc3NMaXN0ZW5lci5hZGQoJ2Rvd25sb2FkJywgYXBpTmFtZSwgZXhlYylcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlIGZyb20gJy4vc3JjL2NyZWF0ZSdcclxuaW1wb3J0IHRvQ2F0Y2ggZnJvbSAnLi9zcmMvdG9DYXRjaCdcclxuaW1wb3J0IHRpbWVvdXRIYW5kZXIgZnJvbSAnLi9zcmMvdGltZW91dEhhbmRlcidcclxuaW1wb3J0IGNhbmNlbCBmcm9tICcuL3NyYy9jYW5jZWwnXHJcbmltcG9ydCBpbnRlcmNlcHRvciBmcm9tICcuL3NyYy9pbnRlcmNlcHRvcidcclxuaW1wb3J0IHByb2dyZXNzTGlzdGVuZXIgZnJvbSAnLi9zcmMvcHJvZ3Jlc3NMaXN0ZW5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGUsXHJcbiAgdG9DYXRjaCxcclxuICB0aW1lb3V0SGFuZGVyLFxyXG4gIGNhbmNlbCxcclxuICBpbnRlcmNlcHRvcixcclxuICBwcm9ncmVzc0xpc3RlbmVyLFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHRvQ2F0Y2gsXHJcbiAgdGltZW91dEhhbmRlcixcclxuICBjYW5jZWwsXHJcbiAgaW50ZXJjZXB0b3IsXHJcbiAgcHJvZ3Jlc3NMaXN0ZW5lcixcclxufSJdLCJzb3VyY2VSb290IjoiIn0=