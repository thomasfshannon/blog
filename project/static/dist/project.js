/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(12);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _NavWrapper = __webpack_require__(7);

var _NavWrapper2 = _interopRequireDefault(_NavWrapper);

var _ContactForm = __webpack_require__(8);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _veeValidate = __webpack_require__(9);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _vueFaqs = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_veeValidate2.default);

if (checkDom('faq')) {
    var faq = new _vue2.default({
        el: '#faq',
        components: {
            FaqContainer: _vueFaqs.FaqContainer,
            SearchForm: _vueFaqs.SearchForm,
            Category: _vueFaqs.Category,
            CategorySelect: _vueFaqs.CategorySelect,
            Question: _vueFaqs.Question,
            Suggestion: _vueFaqs.Suggestion
        }
    });
}

if (checkDom('nav')) {
    var nav = new _vue2.default({
        el: '#nav',
        components: {
            NavWrapper: _NavWrapper2.default
        }
    });
}
if (checkDom('contact')) {
    var contact = new _vue2.default({
        el: '#contact',
        components: {
            ContactForm: _ContactForm2.default
        }
    });
}

function checkDom(id) {
    return document.getElementById(id);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.5.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining

  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value e.g. [object Object]
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if a attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind, faster than native
   */
  function bind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  var emptyObject = Object.freeze({});

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0;
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.functionalContext = undefined;
    this.functionalOptions = undefined;
    this.functionalScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode, deep) {
    var componentOptions = vnode.componentOptions;
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.isCloned = true;
    if (deep) {
      if (vnode.children) {
        cloned.children = cloneVNodes(vnode.children, true);
      }
      if (componentOptions && componentOptions.children) {
        componentOptions.children = cloneVNodes(componentOptions.children, true);
      }
    }
    return cloned;
  }

  function cloneVNodes(vnodes, deep) {
    var len = vnodes.length;
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i], deep);
    }
    return res;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true
  };

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this) : childVal, typeof parentVal === 'function' ? parentVal.call(this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      "development" !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else if ("development" !== 'production' && inject) {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
    /* istanbul ignore next */
    return false;
  }

  /*  */

  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */
  /* globals MessageChannel */

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both micro and macro tasks.
  // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
  // micro tasks have too high a priority and fires in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using macro tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use micro task by default, but expose a way to force macro task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) Task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = function macroTimerFunc() {
      setImmediate(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]')) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function macroTimerFunc() {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function macroTimerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine MicroTask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function microTimerFunc() {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a Task instead of a MicroTask.
   */
  function withMacroTask(fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      var res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    });
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function forceRender() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$off(event[i], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break;
          }
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, "event handler for \"" + event + "\"");
          }
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.functionalContext === context) && data && data.slot != null) {
        var name = child.data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
        // no need for the ref nodes after initial patch
        // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    vm._watcher = new Watcher(vm, updateComponent, noop);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options) {
    this.vm = vm;
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  var seenObjects = new _Set();
  function traverse(val) {
    seenObjects.clear();
    _traverse(val, seenObjects);
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || !Object.isExtensible(val)) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive(props, key, value, function () {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if ("development" !== 'production' && getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (methods[key] == null) {
          warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, keyOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(keyOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      observerState.shouldConvert = false;
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      observerState.shouldConvert = true;
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable;
      }) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if ("development" !== 'production' && !isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes) {
        if ("development" !== 'production' && slotNodes._rendered) {
          warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        }
        slotNodes._rendered = true;
      }
      nodes = slotNodes || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInAlias, eventKeyName) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (keyCodes) {
      if (Array.isArray(keyCodes)) {
        return keyCodes.indexOf(eventKeyCode) === -1;
      } else {
        return keyCodes !== eventKeyCode;
      }
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    // static trees can be rendered once and cached on the contructor options
    // so every instance shares the same cached trees
    var options = this.$options;
    var cached = options.cached || (options.cached = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = options.staticRenderFns[index].call(this._renderProxy, null, this);
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        "development" !== 'production' && warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var options = Ctor.options;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      return resolveSlots(children, parent);
    };

    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm = Object.create(parent);
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode) {
          vnode.functionalScopeId = options._scopeId;
          vnode.functionalContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      vnode.functionalContext = contextVm;
      vnode.functionalOptions = options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }

    return vnode;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function (a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // if the parent didn't update, the slot nodes will be the ones from
        // last render. They need to be cloned to ensure "freshness" for this render.
        for (var key in vm.$slots) {
          var slot = vm.$slots[key];
          if (slot._rendered) {
            vm.$slots[key] = cloneVNodes(slot, true /* deep */);
          }
        }
      }

      vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  var uid$1 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$1++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue$3(options) {
    if ("development" !== 'production' && !(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
        }
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          {
            if (type === 'component' && config.isReservedTag(id)) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && cached$$1 !== current) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache, key, this$1.keys);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this, function (name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this, function (name) {
          return !matches(val, name);
        });
      }
    },

    render: function render() {
      var vnode = getFirstComponentChild(this.$slots.default);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        if (name && (this.exclude && matches(this.exclude, name) || this.include && !matches(this.include, name))) {
          return vnode;
        }

        var ref = this;
        var cache = ref.cache;
        var keys = ref.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode;
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  Vue$3.version = '2.5.3';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }

  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove() {
        if (--remove.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove.listeners = listeners;
      return remove;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    var inPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            inPre++;
          }
          if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore) ? ignore.test(tag) : ignore === tag;
          })) && config.isUnknownElement(tag)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          inPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.functionalScopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '');
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.functionalContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          } else {
            vnodeToMove = oldCh[idxInOld];
            /* istanbul ignore if */
            if ("development" !== 'production' && !vnodeToMove) {
              warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
            }
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var bailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue) {
      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.elm = elm;
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      {
        if (!assertNodeMatch(elm, vnode)) {
          return false;
        }
      }
      vnode.elm = elm;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
                  bailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !bailed) {
                  bailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          for (var key in data) {
            if (!isRenderedModule(key)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + "," + args;
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }
    // check capture modifier
    if (modifiers && modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers && modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers && modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }
    var events;
    if (modifiers && modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }
    var newHandler = { value: value, modifiers: modifiers };
    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;
    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler(handler, event, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  function add$1(event, handler, once$$1, capture, passive) {
    handler = withMacroTask(handler);
    if (once$$1) {
      handler = createOnceHandler(handler, event, capture);
    }
    target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
  }

  function isDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isInputChanged(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers) && modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (isDef(modifiers) && modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def) {
    if (!def) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def === 'undefined' ? 'undefined' : _typeof(def)) === 'object') {
      var res = {};
      if (def.css !== false) {
        extend(res, autoCssTransition(def.name || 'v'));
      }
      extend(res, def);
      return res;
    } else if (typeof def === 'string') {
      return autoCssTransition(def);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$options._renderChildren;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag || isAsyncPlaceholder(c);
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  Vue$3.nextTick(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ("development" !== 'production' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if ("development" !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+');
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(lastTag, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function endPre(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          endPre(element);
        }
        // apply post-transforms
        for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
          postTransforms[i$1](element, options);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        endPre(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: expression,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        "development" !== 'production' && warn$2("Invalid v-for expression: " + exp);
        return;
      }
      el.for = inMatch[2].trim();
      var alias = inMatch[1].trim();
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias;
      }
    }
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ("development" !== 'production' && slotScope) {
          warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var expression = parseText(value, delimiters);
          if (expression) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, JSON.stringify(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  /**
   * Expand input[v-model] with dyanmic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
        var typeBinding = getBindingAttr(el, 'type');
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  function addRawAttr(el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  var model$2 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$2];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      var handler = events[name];
      // #5330: warn click.right, since right clicks do not actually fire click events.
      if ("development" !== 'production' && name === 'click' && handler && handler.modifiers && handler.modifiers.right) {
        warn("Use \"contextmenu\" instead of \"click.right\" since right clicks " + "do not actually fire \"click\" events.");
      }
      res += "\"" + name + "\":" + genHandler(name, handler) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var code = keyCodes[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";
  }

  /*  */

  function on(el, dir) {
    if ("development" !== 'production' && dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data = el.plain ? undefined : genData$2(el, state);

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, state.warn) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, state.warn) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots, state) {
    return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el, state) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    return "{key:" + key + ",fn:" + fn + "}";
  }

  function genForScopedSlot(key, el, state) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return (altGenElement || genElement)(el$1, state);
      }
      var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // check valid identifier for v-for
  var identRE = /[A-Za-z_$][\w$]*/;

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string' && !identRE.test(ident)) {
      errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
      } else {
        errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
      }
    }
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    optimize(ast, options);
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(5);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// a wrapper around navigation for mobile sidebar
exports.default = {
    data: function data() {
        return {
            sidebar: false,
            currentOverlay: ''
        };
    },
    methods: {
        toggleSideBar: function toggleSideBar() {
            this.sidebar = !this.sidebar;
        },
        changeOverlay: function changeOverlay(target) {
            this.currentOverlay = target;
        },
        cancelOverlay: function cancelOverlay() {
            this.currentOverlay = '';
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// contact form
exports.default = {
    data: function data() {
        return {
            name: '',
            email: '',
            message: '',
            alert: {
                success: false
            },
            pending: false
        };
    },
    methods: {
        clearForm: function clearForm(e) {
            var _this = this;

            this.name = '';
            this.email = '';
            this.message = '';
            this.$validator.reset();
            Object.keys(this.fields).map(function (key) {
                return _this.fields[key].pristine = true;
            });
            e.target.reset();
        },
        simulated: function simulated(cb) {
            var _this2 = this;

            this.pending = true;
            setTimeout(function () {
                _this2.alert.success = true;
                _this2.pending = false;
            }, 1000);
        },
        submit: function submit(e) {
            this.simulated();
            // $.ajax({
            //     url: '//formspree.io/thomasshannon1117@yahoo.com', 
            //     method: 'POST',
            //     data: {
            //         name: this.name,
            //         email: this.email,
            //         message: this.message
            //     },
            //     dataType: 'json',
            //     success: () => {
            //         this.alert.success = true;
            //         this.pending = true;
            //     }
            // });

            this.clearForm(e);
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * vee-validate v2.0.0-rc.21
 * (c) 2017 Abdelrahman Awad
 * @license MIT
 */
// 

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function getDataAttribute(el, name) {
  return el.getAttribute("data-vv-" + name);
};

/**
 * Checks if the value is either null or undefined.
 */
var isNullOrUndefined = function isNullOrUndefined(value) {
  return value === null || value === undefined;
};

/**
 * Sets the data attribute.
 */
var setDataAttribute = function setDataAttribute(el, name, value) {
  return el.setAttribute("data-vv-" + name, value);
};

/**
 * Creates a proxy object if available in the environment.
 */
var createProxy = function createProxy(target, handler) {
  if (typeof Proxy === 'undefined') {
    return target;
  }

  return new Proxy(target, handler);
};

/**
 * Creates the default flags object.
 */
var createFlags = function createFlags() {
  return {
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: null,
    invalid: null,
    validated: false,
    pending: false,
    required: false
  };
};

/**
 * Shallow object comparison.
 */
var isEqual = function isEqual(lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
  }

  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) {
      return false;
    }

    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) {
        return false;
      }
    }

    return true;
  }

  // if both are objects, compare each key recursively.
  if (isObject(lhs) && isObject(rhs)) {
    return Object.keys(lhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function (key) {
      return isEqual(lhs[key], rhs[key]);
    });
  }

  return lhs === rhs;
};

/**
 * Determines the input field scope.
 */
var getScope = function getScope(el) {
  var scope = getDataAttribute(el, 'scope');
  if (isNullOrUndefined(scope) && el.form) {
    scope = getDataAttribute(el.form, 'scope');
  }

  return !isNullOrUndefined(scope) ? scope : null;
};

/**
 * Gets the value in an object safely.
 */
var getPath = function getPath(path, target, def) {
  if (def === void 0) def = undefined;

  if (!path || !target) {
    return def;
  }

  var value = target;
  path.split('.').every(function (prop) {
    if (!Object.prototype.hasOwnProperty.call(value, prop) && value[prop] === undefined) {
      value = def;

      return false;
    }

    value = value[prop];

    return true;
  });

  return value;
};

/**
 * Checks if path exists within an object.
 */
var hasPath = function hasPath(path, target) {
  var obj = target;
  return path.split('.').every(function (prop) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }

    obj = obj[prop];

    return true;
  });
};

/**
 * Parses a rule string expression.
 */
var parseRule = function parseRule(rule) {
  var params = [];
  var name = rule.split(':')[0];

  if (~rule.indexOf(':')) {
    params = rule.split(':').slice(1).join(':').split(',');
  }

  return { name: name, params: params };
};

/**
 * Debounces a function.
 */
var debounce = function debounce(fn, wait, immediate) {
  if (wait === void 0) wait = 0;
  if (immediate === void 0) immediate = false;

  if (wait === 0) {
    return fn;
  }

  var timeout;

  return function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }var later = function later() {
      timeout = null;
      if (!immediate) {
        fn.apply(void 0, args);
      }
    };
    /* istanbul ignore next */
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    /* istanbul ignore next */
    if (callNow) {
      fn.apply(void 0, args);
    }
  };
};

/**
 * Normalizes the given rules expression.
 */
var normalizeRules = function normalizeRules(rules) {
  // if falsy value return an empty object.
  if (!rules) {
    return {};
  }

  if (isObject(rules)) {
    // $FlowFixMe
    return Object.keys(rules).reduce(function (prev, curr) {
      var params = [];
      // $FlowFixMe
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }

      // $FlowFixMe
      if (rules[curr] !== false) {
        prev[curr] = params;
      }

      return prev;
    }, {});
  }

  if (typeof rules !== 'string') {
    warn('rules must be either a string or an object.');
    return {};
  }

  return rules.split('|').reduce(function (prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }

    prev[parsedRule.name] = parsedRule.params;
    return prev;
  }, {});
};

/**
 * Emits a warning to the console.
 */
var warn = function warn(message) {
  console.warn("[vee-validate] " + message); // eslint-disable-line
};

/**
 * Creates a branded error object.
 */
var createError = function createError(message) {
  return new Error("[vee-validate] " + message);
};

/**
 * Checks if the value is an object.
 */
var isObject = function isObject(obj) {
  return obj !== null && obj && (typeof obj === "undefined" ? "undefined" : _typeof2(obj)) === 'object' && !Array.isArray(obj);
};

/**
 * Checks if a function is callable.
 */
var isCallable = function isCallable(func) {
  return typeof func === 'function';
};

/**
 * Check if element has the css class on it.
 */
var hasClass = function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }

  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};

/**
 * Adds the provided css className to the element.
 */
var addClass = function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }

  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

/**
 * Remove the provided css className from the element.
 */
var removeClass = function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }

  if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, ' ');
  }
};

/**
 * Adds or removes a class name on the input depending on the status flag.
 */
var toggleClass = function toggleClass(el, className, status) {
  if (!el || !className) {
    return;
  }

  if (status) {
    return addClass(el, className);
  }

  removeClass(el, className);
};

/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
var toArray = function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  var array = [];
  var length = arrayLike.length;
  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
};

/**
 * Assign polyfill from the mdn.
 */
var assign = function assign(target) {
  var others = [],
      len = arguments.length - 1;
  while (len-- > 0) {
    others[len] = arguments[len + 1];
  } /* istanbul ignore else */
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [target].concat(others));
  }

  /* istanbul ignore next */
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  /* istanbul ignore next */
  var to = Object(target);
  /* istanbul ignore next */
  others.forEach(function (arg) {
    // Skip over if undefined or null
    if (arg != null) {
      Object.keys(arg).forEach(function (key) {
        to[key] = arg[key];
      });
    }
  });
  /* istanbul ignore next */
  return to;
};

/**
 * Generates a unique id.
 */
var uniqId = function uniqId() {
  return "_" + Math.random().toString(36).substr(2, 9);
};

/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
var find = function find(arrayLike, predicate) {
  var array = toArray(arrayLike);

  if (isCallable(array.find)) {
    return array.find(predicate);
  }

  var result;
  array.some(function (item) {
    if (predicate(item)) {
      result = item;
      return true;
    }

    return false;
  });

  return result;
};

/**
 * Returns a suitable event name for the input element.
 */
var getInputEventName = function getInputEventName(el) {
  if (el && (el.tagName === 'SELECT' || ~['radio', 'checkbox', 'file'].indexOf(el.type))) {
    return 'change';
  }

  return 'input';
};

var isBuiltInComponent = function isBuiltInComponent(vnode) {
  if (!vnode) {
    return false;
  }

  var tag = vnode.componentOptions.tag;

  return (/keep-alive|transition|transition-group/.test(tag)
  );
};

// 

var ErrorBag = function ErrorBag() {
  this.items = [];
};

/**
 * Adds an error to the internal array.
 */
ErrorBag.prototype.add = function add(error) {
  // handle old signature.
  if (arguments.length > 1) {
    error = {
      field: arguments[0],
      msg: arguments[1],
      rule: arguments[2],
      scope: !isNullOrUndefined(arguments[3]) ? arguments[3] : null
    };
  }

  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  this.items.push(error);
};

/**
 * Updates a field error with the new field scope.
 */
ErrorBag.prototype.update = function update(id, error) {
  var item = find(this.items, function (i) {
    return i.id === id;
  });
  if (!item) {
    return;
  }

  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};

/**
 * Gets all error messages from the internal array.
 */
ErrorBag.prototype.all = function all(scope) {
  if (isNullOrUndefined(scope)) {
    return this.items.map(function (e) {
      return e.msg;
    });
  }

  return this.items.filter(function (e) {
    return e.scope === scope;
  }).map(function (e) {
    return e.msg;
  });
};

/**
 * Checks if there are any errors in the internal array.
 */
ErrorBag.prototype.any = function any(scope) {
  if (isNullOrUndefined(scope)) {
    return !!this.items.length;
  }

  return !!this.items.filter(function (e) {
    return e.scope === scope;
  }).length;
};

/**
 * Removes all items from the internal array.
 */
ErrorBag.prototype.clear = function clear(scope) {
  var this$1 = this;

  if (isNullOrUndefined(scope)) {
    scope = null;
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].scope === scope) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Collects errors into groups or for a specific field.
 */
ErrorBag.prototype.collect = function collect(field, scope, map) {
  if (map === void 0) map = true;

  if (!field) {
    var collection = {};
    this.items.forEach(function (e) {
      if (!collection[e.field]) {
        collection[e.field] = [];
      }

      collection[e.field].push(map ? e.msg : e);
    });

    return collection;
  }

  field = !isNullOrUndefined(field) ? String(field) : field;
  if (isNullOrUndefined(scope)) {
    return this.items.filter(function (e) {
      return e.field === field;
    }).map(function (e) {
      return map ? e.msg : e;
    });
  }

  return this.items.filter(function (e) {
    return e.field === field && e.scope === scope;
  }).map(function (e) {
    return map ? e.msg : e;
  });
};
/**
 * Gets the internal array length.
 */
ErrorBag.prototype.count = function count() {
  return this.items.length;
};

/**
 * Finds and fetches the first error message for the specified field id.
 */
ErrorBag.prototype.firstById = function firstById(id) {
  var error = find(this.items, function (i) {
    return i.id === id;
  });

  return error ? error.msg : null;
};

/**
 * Gets the first error message for a specific field.
 */
ErrorBag.prototype.first = function first(field, scope) {
  var this$1 = this;
  if (scope === void 0) scope = null;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var selector = this._selector(field);
  var scoped = this._scope(field);

  if (scoped) {
    var result = this.first(scoped.name, scoped.scope);
    // if such result exist, return it. otherwise it could be a field.
    // with dot in its name.
    if (result) {
      return result;
    }
  }

  if (selector) {
    return this.firstByRule(selector.name, selector.rule, scope);
  }

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].field === field && this$1.items[i].scope === scope) {
      return this$1.items[i].msg;
    }
  }

  return null;
};

/**
 * Returns the first error rule for the specified field
 */
ErrorBag.prototype.firstRule = function firstRule(field, scope) {
  var errors = this.collect(field, scope, false);

  return errors.length && errors[0].rule || null;
};

/**
 * Checks if the internal array has at least one error for the specified field.
 */
ErrorBag.prototype.has = function has(field, scope) {
  if (scope === void 0) scope = null;

  return !!this.first(field, scope);
};

/**
 * Gets the first error message for a specific field and a rule.
 */
ErrorBag.prototype.firstByRule = function firstByRule(name, rule, scope) {
  if (scope === void 0) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) {
    return e.rule === rule;
  })[0];

  return error && error.msg || null;
};

/**
 * Gets the first error message for a specific field that not match the rule.
 */
ErrorBag.prototype.firstNot = function firstNot(name, rule, scope) {
  if (rule === void 0) rule = 'required';
  if (scope === void 0) scope = null;

  var error = this.collect(name, scope, false).filter(function (e) {
    return e.rule !== rule;
  })[0];

  return error && error.msg || null;
};

/**
 * Removes errors by matching against the id.
 */
ErrorBag.prototype.removeById = function removeById(id) {
  var this$1 = this;

  for (var i = 0; i < this.items.length; ++i) {
    if (this$1.items[i].id === id) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Removes all error messages associated with a specific field.
 */
ErrorBag.prototype.remove = function remove(field, scope, id) {
  var this$1 = this;

  field = !isNullOrUndefined(field) ? String(field) : field;
  var removeCondition = function removeCondition(e) {
    if (e.id && id) {
      return e.id === id;
    }

    if (!isNullOrUndefined(scope)) {
      return e.field === field && e.scope === scope;
    }

    return e.field === field && e.scope === null;
  };

  for (var i = 0; i < this.items.length; ++i) {
    if (removeCondition(this$1.items[i])) {
      this$1.items.splice(i, 1);
      --i;
    }
  }
};

/**
 * Get the field attributes if there's a rule selector.
 */
ErrorBag.prototype._selector = function _selector(field) {
  if (field.indexOf(':') > -1) {
    var ref = field.split(':');
    var name = ref[0];
    var rule = ref[1];

    return { name: name, rule: rule };
  }

  return null;
};

/**
 * Get the field scope if specified using dot notation.
 */
ErrorBag.prototype._scope = function _scope(field) {
  if (field.indexOf('.') > -1) {
    var ref = field.split('.');
    var scope = ref[0];
    var name = ref.slice(1);

    return { name: name.join('.'), scope: scope };
  }

  return null;
};

// 

var Dictionary = function Dictionary(dictionary) {
  if (dictionary === void 0) dictionary = {};

  this.container = {};
  this.merge(dictionary);
};

Dictionary.prototype.hasLocale = function hasLocale(locale) {
  return !!this.container[locale];
};

Dictionary.prototype.setDateFormat = function setDateFormat(locale, format) {
  if (!this.container[locale]) {
    this.container[locale] = {};
  }

  this.container[locale].dateFormat = format;
};

Dictionary.prototype.getDateFormat = function getDateFormat(locale) {
  if (!this.container[locale]) {
    return undefined;
  }

  return this.container[locale].dateFormat;
};

Dictionary.prototype.getMessage = function getMessage(locale, key, fallback) {
  if (!this.hasMessage(locale, key)) {
    return fallback || this._getDefaultMessage(locale);
  }

  return this.container[locale].messages[key];
};

/**
 * Gets a specific message for field. falls back to the rule message.
 */
Dictionary.prototype.getFieldMessage = function getFieldMessage(locale, field, key) {
  if (!this.hasLocale(locale)) {
    return this.getMessage(locale, key);
  }

  var dict = this.container[locale].custom && this.container[locale].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale, key);
  }

  return dict[key];
};

Dictionary.prototype._getDefaultMessage = function _getDefaultMessage(locale) {
  if (this.hasMessage(locale, '_default')) {
    return this.container[locale].messages._default;
  }

  return this.container.en.messages._default;
};

Dictionary.prototype.getAttribute = function getAttribute(locale, key, fallback) {
  if (fallback === void 0) fallback = '';

  if (!this.hasAttribute(locale, key)) {
    return fallback;
  }

  return this.container[locale].attributes[key];
};

Dictionary.prototype.hasMessage = function hasMessage(locale, key) {
  return !!(this.hasLocale(locale) && this.container[locale].messages && this.container[locale].messages[key]);
};

Dictionary.prototype.hasAttribute = function hasAttribute(locale, key) {
  return !!(this.hasLocale(locale) && this.container[locale].attributes && this.container[locale].attributes[key]);
};

Dictionary.prototype.merge = function merge(dictionary) {
  this._merge(this.container, dictionary);
};

Dictionary.prototype.setMessage = function setMessage(locale, key, message) {
  if (!this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].messages[key] = message;
};

Dictionary.prototype.setAttribute = function setAttribute(locale, key, attribute) {
  if (!this.hasLocale(locale)) {
    this.container[locale] = {
      messages: {},
      attributes: {}
    };
  }

  this.container[locale].attributes[key] = attribute;
};

Dictionary.prototype._merge = function _merge(target, source) {
  var this$1 = this;

  if (!(isObject(target) && isObject(source))) {
    return target;
  }

  Object.keys(source).forEach(function (key) {
    if (isObject(source[key])) {
      if (!target[key]) {
        assign(target, (obj = {}, obj[key] = {}, obj));
        var obj;
      }

      this$1._merge(target[key], source[key]);
      return;
    }

    assign(target, (obj$1 = {}, obj$1[key] = source[key], obj$1));
    var obj$1;
  });

  return target;
};

// 

var defaultConfig = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: null,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false
};

var currentConfig = assign({}, defaultConfig);

var Config = function Config() {};

var staticAccessors$1 = { default: {}, current: {} };

staticAccessors$1.default.get = function () {
  return defaultConfig;
};

staticAccessors$1.current.get = function () {
  return currentConfig;
};

/**
 * Merges the config with a new one.
 */
Config.merge = function merge(config) {
  currentConfig = assign({}, currentConfig, config);
};

/**
 * Resolves the working config from a Vue instance.
 */
Config.resolve = function resolve(context) {
  var selfConfig = getPath('$options.$_veeValidate', context, {});

  return assign({}, Config.current, selfConfig);
};

Object.defineProperties(Config, staticAccessors$1);

/**
 * Generates the options required to construct a field.
 */
var Generator = function Generator() {};

Generator.generate = function generate(el, binding, vnode) {
  var model = Generator.resolveModel(binding, vnode);
  var options = Config.resolve(vnode.context);

  return {
    name: Generator.resolveName(el, vnode),
    el: el,
    listen: !binding.modifiers.disable,
    scope: Generator.resolveScope(el, binding, vnode),
    vm: Generator.makeVM(vnode.context),
    expression: binding.value,
    component: vnode.child,
    classes: options.classes,
    classNames: options.classNames,
    getter: Generator.resolveGetter(el, vnode, model),
    events: Generator.resolveEvents(el, vnode) || options.events,
    model: model,
    delay: Generator.resolveDelay(el, vnode, options),
    rules: Generator.resolveRules(el, binding),
    initial: !!binding.modifiers.initial,
    alias: Generator.resolveAlias(el, vnode),
    validity: options.validity,
    aria: options.aria,
    initialValue: Generator.resolveInitialValue(vnode)
  };
};

Generator.getCtorConfig = function getCtorConfig(vnode) {
  if (!vnode.child) {
    return null;
  }

  var config = getPath('child.$options.$_veeValidate', vnode);

  return config;
};

/**
 *
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveRules = function resolveRules(el, binding) {
  if (!binding || !binding.expression) {
    return getDataAttribute(el, 'rules');
  }

  if (typeof binding.value === 'string') {
    return binding.value;
  }

  if (~['string', 'object'].indexOf(_typeof2(binding.value.rules))) {
    return binding.value.rules;
  }

  return binding.value;
};

/**
 * @param {*} vnode
 */
Generator.resolveInitialValue = function resolveInitialValue(vnode) {
  var model = vnode.data.model || find(vnode.data.directives, function (d) {
    return d.name === 'model';
  });

  return model && model.value;
};

/**
 * Creates a non-circular partial VM instance from a Vue instance.
 * @param {*} vm
 */
Generator.makeVM = function makeVM(vm) {
  return {
    get $el() {
      return vm.$el;
    },
    get $refs() {
      return vm.$refs;
    },
    $watch: vm.$watch ? vm.$watch.bind(vm) : function () {},
    $validator: vm.$validator ? {
      errors: vm.$validator.errors,
      validate: vm.$validator.validate.bind(vm.$validator),
      update: vm.$validator.update.bind(vm.$validator)
    } : null
  };
};

/**
 * Resolves the delay value.
 * @param {*} el
 * @param {*} vnode
 * @param {Object} options
 */
Generator.resolveDelay = function resolveDelay(el, vnode, options) {
  if (options === void 0) options = {};

  return getDataAttribute(el, 'delay') || vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-delay'] || options.delay;
};

/**
 * Resolves the alias for the field.
 * @param {*} el
 * @param {*} vnode
 * @return {Function} alias getter
 */
Generator.resolveAlias = function resolveAlias(el, vnode) {
  return function () {
    return getDataAttribute(el, 'as') || vnode.child && vnode.child.$attrs && vnode.child.$attrs['data-vv-as'] || el.title || null;
  };
};

/**
 * Resolves the events to validate in response to.
 * @param {*} el
 * @param {*} vnode
 */
Generator.resolveEvents = function resolveEvents(el, vnode) {
  var events = getDataAttribute(el, 'validate-on');

  if (!events && vnode.child && vnode.child.$attrs) {
    events = vnode.child.$attrs['data-vv-validate-on'];
  }

  if (!events && vnode.child) {
    var config = Generator.getCtorConfig(vnode);
    events = config && config.events;
  }

  return events;
};

/**
 * Resolves the scope for the field.
 * @param {*} el
 * @param {*} binding
 */
Generator.resolveScope = function resolveScope(el, binding, vnode) {
  if (vnode === void 0) vnode = {};

  var scope = null;
  if (isObject(binding.value)) {
    scope = binding.value.scope;
  }

  if (vnode.child && isNullOrUndefined(scope)) {
    scope = vnode.child.$attrs && vnode.child.$attrs['data-vv-scope'];
  }

  return !isNullOrUndefined(scope) ? scope : getScope(el);
};

/**
 * Checks if the node directives contains a v-model or a specified arg.
 * Args take priority over models.
 *
 * @return {Object}
 */
Generator.resolveModel = function resolveModel(binding, vnode) {
  if (binding.arg) {
    return binding.arg;
  }

  if (isObject(binding.value) && binding.value.arg) {
    return binding.value.arg;
  }

  var model = vnode.data.model || find(vnode.data.directives, function (d) {
    return d.name === 'model';
  });
  if (!model) {
    return null;
  }

  var watchable = /^[a-z_]+[0-9]*(\w*\.[a-z_]\w*)*$/i.test(model.expression) && hasPath(model.expression, vnode.context);

  if (!watchable) {
    return null;
  }

  return model.expression;
};

/**
   * Resolves the field name to trigger validations.
   * @return {String} The field name.
   */
Generator.resolveName = function resolveName(el, vnode) {
  var name = getDataAttribute(el, 'name');

  if (!name && !vnode.child) {
    return el.name;
  }

  if (!name && vnode.child && vnode.child.$attrs) {
    name = vnode.child.$attrs['data-vv-name'] || vnode.child.$attrs['name'];
  }

  if (!name && vnode.child) {
    var config = Generator.getCtorConfig(vnode);
    if (config && isCallable(config.name)) {
      var boundGetter = config.name.bind(vnode.child);

      return boundGetter();
    }

    return vnode.child.name;
  }

  return name;
};

/**
 * Returns a value getter input type.
 */
Generator.resolveGetter = function resolveGetter(el, vnode, model) {
  if (model) {
    return function () {
      return getPath(model, vnode.context);
    };
  }

  if (vnode.child) {
    var path = getDataAttribute(el, 'value-path') || vnode.child.$attrs && vnode.child.$attrs['data-vv-value-path'];
    if (path) {
      return function () {
        return getPath(path, vnode.child);
      };
    }

    var config = Generator.getCtorConfig(vnode);
    if (config && isCallable(config.value)) {
      var boundGetter = config.value.bind(vnode.child);

      return function () {
        return boundGetter();
      };
    }

    return function () {
      return vnode.child.value;
    };
  }

  switch (el.type) {
    case 'checkbox':
      return function () {
        var els = document.querySelectorAll("input[name=\"" + el.name + "\"]");

        els = toArray(els).filter(function (el) {
          return el.checked;
        });
        if (!els.length) {
          return undefined;
        }

        return els.map(function (checkbox) {
          return checkbox.value;
        });
      };
    case 'radio':
      return function () {
        var els = document.querySelectorAll("input[name=\"" + el.name + "\"]");
        var elm = find(els, function (el) {
          return el.checked;
        });

        return elm && elm.value;
      };
    case 'file':
      return function (context) {
        return toArray(el.files);
      };
    case 'select-multiple':
      return function () {
        return toArray(el.options).filter(function (opt) {
          return opt.selected;
        }).map(function (opt) {
          return opt.value;
        });
      };
    default:
      return function () {
        return el && el.value;
      };
  }
};

// 

var DEFAULT_OPTIONS = {
  targetOf: null,
  initial: false,
  scope: null,
  listen: true,
  name: null,
  active: true,
  required: false,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: 'input|blur',
  delay: 0,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
};

var Field = function Field(el, options) {
  if (options === void 0) options = {};

  this.id = uniqId();
  this.el = el;
  this.updated = false;
  this.dependencies = [];
  this.watchers = [];
  this.events = [];
  this.rules = {};
  if (!this.isHeadless && !options.targetOf) {
    setDataAttribute(this.el, 'id', this.id); // cache field id if it is independent and has a root element.
  }
  options = assign({}, DEFAULT_OPTIONS, options);
  this.validity = options.validity;
  this.aria = options.aria;
  this.flags = createFlags();
  this.vm = options.vm;
  this.component = options.component;
  this.ctorConfig = this.component ? getPath('$options.$_veeValidate', this.component) : undefined;
  this.update(options);
  this.updated = false;
};

var prototypeAccessors$1 = { isVue: {}, validator: {}, isRequired: {}, isDisabled: {}, isHeadless: {}, displayName: {}, value: {}, rejectsFalse: {} };

prototypeAccessors$1.isVue.get = function () {
  return !!this.component;
};

prototypeAccessors$1.validator.get = function () {
  if (!this.vm || !this.vm.$validator) {
    warn('No validator instance detected.');
    return { validate: function validate() {} };
  }

  return this.vm.$validator;
};

prototypeAccessors$1.isRequired.get = function () {
  return !!this.rules.required;
};

prototypeAccessors$1.isDisabled.get = function () {
  return !!(this.component && this.component.disabled) || !!(this.el && this.el.disabled);
};

prototypeAccessors$1.isHeadless.get = function () {
  return !this.el;
};

/**
 * Gets the display name (user-friendly name).
 */

prototypeAccessors$1.displayName.get = function () {
  return isCallable(this.alias) ? this.alias() : this.alias;
};

/**
 * Gets the input value.
 */

prototypeAccessors$1.value.get = function () {
  if (!isCallable(this.getter)) {
    return undefined;
  }

  return this.getter();
};

/**
 * If the field rejects false as a valid value for the required rule.
 */

prototypeAccessors$1.rejectsFalse.get = function () {
  if (this.isVue && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse;
  }

  if (this.isHeadless) {
    return false;
  }

  return this.el.type === 'checkbox';
};

/**
 * Determines if the instance matches the options provided.
 */
Field.prototype.matches = function matches(options) {
  if (options.id) {
    return this.id === options.id;
  }

  if (options.name === undefined && options.scope === undefined) {
    return true;
  }

  if (options.scope === undefined) {
    return this.name === options.name;
  }

  if (options.name === undefined) {
    return this.scope === options.scope;
  }

  return options.name === this.name && options.scope === this.scope;
};

/**
 * Updates the field with changed data.
 */
Field.prototype.update = function update(options) {
  this.targetOf = options.targetOf || null;
  this.initial = options.initial || this.initial || false;

  // update errors scope if the field scope was changed.
  if (this.updated && !isNullOrUndefined(options.scope) && options.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options.scope });
  }
  this.scope = !isNullOrUndefined(options.scope) ? options.scope : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options.name) ? String(options.name) : options.name) || this.name || null;
  this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules;
  this.model = options.model || this.model;
  this.listen = options.listen !== undefined ? options.listen : this.listen;
  this.classes = options.classes || this.classes || false;
  this.classNames = options.classNames || this.classNames || DEFAULT_OPTIONS.classNames;
  this.alias = options.alias || this.alias;
  this.getter = isCallable(options.getter) ? options.getter : this.getter;
  this.delay = options.delay || this.delay || 0;
  this.events = typeof options.events === 'string' && options.events.length ? options.events.split('|') : this.events;
  this.updateDependencies();
  this.addActionListeners();

  // update required flag flags
  if (options.rules !== undefined) {
    this.flags.required = this.isRequired;
  }

  // validate if it was validated before and field was updated and there was a rules mutation.
  if (this.flags.validated && options.rules !== undefined && this.updated) {
    this.validator.validate("#" + this.id);
  }

  this.updated = true;

  // no need to continue.
  if (this.isHeadless) {
    return;
  }

  this.updateClasses();
  this.addValueListeners();
  this.updateAriaAttrs();
};

/**
 * Resets field flags and errors.
 */
Field.prototype.reset = function reset() {
  var this$1 = this;

  var def = createFlags();
  Object.keys(this.flags).forEach(function (flag) {
    this$1.flags[flag] = def[flag];
  });

  this.addActionListeners();
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Sets the flags and their negated counterparts, and updates the classes and re-adds action listeners.
 */
Field.prototype.setFlags = function setFlags(flags) {
  var this$1 = this;

  var negated = {
    pristine: 'dirty',
    dirty: 'pristine',
    valid: 'invalid',
    invalid: 'valid',
    touched: 'untouched',
    untouched: 'touched'
  };

  Object.keys(flags).forEach(function (flag) {
    this$1.flags[flag] = flags[flag];
    // if it has a negation and was not specified, set it as well.
    if (negated[flag] && flags[negated[flag]] === undefined) {
      this$1.flags[negated[flag]] = !flags[flag];
    }
  });

  if (flags.untouched !== undefined || flags.touched !== undefined || flags.dirty !== undefined || flags.pristine !== undefined) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};

/**
 * Determines if the field requires references to target fields.
*/
Field.prototype.updateDependencies = function updateDependencies() {
  var this$1 = this;

  // reset dependencies.
  this.dependencies.forEach(function (d) {
    return d.field.destroy();
  });
  this.dependencies = [];

  // we get the selectors for each field.
  var fields = Object.keys(this.rules).reduce(function (prev, r) {
    if (r === 'confirmed') {
      prev.push({ selector: this$1.rules[r][0] || this$1.name + "_confirmation", name: r });
    } else if (/after|before/.test(r)) {
      prev.push({ selector: this$1.rules[r][0], name: r });
    }

    return prev;
  }, []);

  if (!fields.length || !this.vm || !this.vm.$el) {
    return;
  }

  // must be contained within the same component, so we use the vm root element constrain our dom search.
  fields.forEach(function (ref) {
    var selector = ref.selector;
    var name = ref.name;

    var el = null;
    // vue ref selector.
    if (selector[0] === '$') {
      el = this$1.vm.$refs[selector.slice(1)];
    } else {
      try {
        // try query selector
        el = this$1.vm.$el.querySelector(selector);
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      try {
        el = this$1.vm.$el.querySelector("input[name=\"" + selector + "\"]");
      } catch (err) {
        el = null;
      }
    }

    if (!el) {
      return;
    }

    var options = {
      vm: this$1.vm,
      classes: this$1.classes,
      classNames: this$1.classNames,
      delay: this$1.delay,
      scope: this$1.scope,
      events: this$1.events.join('|'),
      initial: this$1.initial,
      targetOf: this$1.id
    };

    // probably a component.
    if (isCallable(el.$watch)) {
      options.component = el;
      options.el = el.$el;
      options.alias = Generator.resolveAlias(el.$el, { child: el });
      options.getter = Generator.resolveGetter(el.$el, { child: el });
    } else {
      options.el = el;
      options.alias = Generator.resolveAlias(el, {});
      options.getter = Generator.resolveGetter(el, {});
    }

    this$1.dependencies.push({ name: name, field: new Field(options.el, options) });
  });
};

/**
 * Removes listeners.
 */
Field.prototype.unwatch = function unwatch(tag) {
  if (tag === void 0) tag = null;

  if (!tag) {
    this.watchers.forEach(function (w) {
      return w.unwatch();
    });
    this.watchers = [];
    return;
  }

  this.watchers.filter(function (w) {
    return tag.test(w.tag);
  }).forEach(function (w) {
    return w.unwatch();
  });
  this.watchers = this.watchers.filter(function (w) {
    return !tag.test(w.tag);
  });
};

/**
 * Updates the element classes depending on each field flag status.
 */
Field.prototype.updateClasses = function updateClasses() {
  if (!this.classes) {
    return;
  }

  toggleClass(this.el, this.classNames.dirty, this.flags.dirty);
  toggleClass(this.el, this.classNames.pristine, this.flags.pristine);
  toggleClass(this.el, this.classNames.valid, !!this.flags.valid);
  toggleClass(this.el, this.classNames.invalid, !!this.flags.invalid);
  toggleClass(this.el, this.classNames.touched, this.flags.touched);
  toggleClass(this.el, this.classNames.untouched, this.flags.untouched);
};

/**
 * Adds the listeners required for automatic classes and some flags.
 */
Field.prototype.addActionListeners = function addActionListeners() {
  var this$1 = this;

  // remove previous listeners.
  this.unwatch(/class/);

  var onBlur = function onBlur() {
    this$1.flags.touched = true;
    this$1.flags.untouched = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.touched, true);
      toggleClass(this$1.el, this$1.classNames.untouched, false);
    }

    // only needed once.
    this$1.unwatch(/^class_blur$/);
  };

  var inputEvent = getInputEventName(this.el);
  var onInput = function onInput() {
    this$1.flags.dirty = true;
    this$1.flags.pristine = false;
    if (this$1.classes) {
      toggleClass(this$1.el, this$1.classNames.pristine, false);
      toggleClass(this$1.el, this$1.classNames.dirty, true);
    }

    // only needed once.
    this$1.unwatch(/^class_input$/);
  };

  if (this.isVue && isCallable(this.component.$once)) {
    this.component.$once('input', onInput);
    this.component.$once('blur', onBlur);
    this.watchers.push({
      tag: 'class_input',
      unwatch: function unwatch() {
        this$1.component.$off('input', onInput);
      }
    });
    this.watchers.push({
      tag: 'class_blur',
      unwatch: function unwatch() {
        this$1.component.$off('blur', onBlur);
      }
    });
    return;
  }

  if (this.isHeadless) {
    return;
  }

  this.el.addEventListener(inputEvent, onInput);
  // Checkboxes and radio buttons on Mac don't emit blur naturally, so we listen on click instead.
  var blurEvent = ['radio', 'checkbox'].indexOf(this.el.type) === -1 ? 'blur' : 'click';
  this.el.addEventListener(blurEvent, onBlur);
  this.watchers.push({
    tag: 'class_input',
    unwatch: function unwatch() {
      this$1.el.removeEventListener(inputEvent, onInput);
    }
  });

  this.watchers.push({
    tag: 'class_blur',
    unwatch: function unwatch() {
      this$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};

/**
 * Adds the listeners required for validation.
 */
Field.prototype.addValueListeners = function addValueListeners() {
  var this$1 = this;

  this.unwatch(/^input_.+/);
  if (!this.listen) {
    return;
  }

  var fn = this.targetOf ? function () {
    this$1.validator.validate("#" + this$1.targetOf);
  } : function () {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    } // if its a DOM event, resolve the value, otherwise use the first parameter as the value.
    if (args.length === 0 || isCallable(Event) && args[0] instanceof Event || args[0] && args[0].srcElement) {
      args[0] = this$1.value;
    }
    this$1.validator.validate("#" + this$1.id, args[0]);
  };

  var validate = debounce(fn, this.delay);
  var inputEvent = getInputEventName(this.el);
  // replace input event with suitable one.
  var events = this.events.map(function (e) {
    return e === 'input' ? inputEvent : e;
  });

  // if there is a watchable model and an on input validation is requested.
  if (this.model && events.indexOf(inputEvent) !== -1) {
    var unwatch = this.vm.$watch(this.model, validate);
    this.watchers.push({
      tag: 'input_model',
      unwatch: unwatch
    });
    // filter out input event as it is already handled by the watcher API.
    events = events.filter(function (e) {
      return e !== inputEvent;
    });
  }

  // Add events.
  events.forEach(function (e) {
    if (this$1.isVue) {
      this$1.component.$on(e, validate);
      this$1.watchers.push({
        tag: 'input_vue',
        unwatch: function unwatch() {
          this$1.component.$off(e, validate);
        }
      });
      return;
    }

    if (~['radio', 'checkbox'].indexOf(this$1.el.type)) {
      var els = document.querySelectorAll("input[name=\"" + this$1.el.name + "\"]");
      toArray(els).forEach(function (el) {
        el.addEventListener(e, validate);
        this$1.watchers.push({
          tag: 'input_native',
          unwatch: function unwatch() {
            el.removeEventListener(e, validate);
          }
        });
      });

      return;
    }

    this$1.el.addEventListener(e, validate);
    this$1.watchers.push({
      tag: 'input_native',
      unwatch: function unwatch() {
        this$1.el.removeEventListener(e, validate);
      }
    });
  });
};

/**
 * Updates aria attributes on the element.
 */
Field.prototype.updateAriaAttrs = function updateAriaAttrs() {
  if (!this.aria || this.isHeadless || !isCallable(this.el.setAttribute)) {
    return;
  }

  this.el.setAttribute('aria-required', this.isRequired ? 'true' : 'false');
  this.el.setAttribute('aria-invalid', this.flags.invalid ? 'true' : 'false');
};

/**
 * Updates the custom validity for the field.
 */
Field.prototype.updateCustomValidity = function updateCustomValidity() {
  if (!this.validity || this.isHeadless || !isCallable(this.el.setCustomValidity)) {
    return;
  }

  this.el.setCustomValidity(this.flags.valid ? '' : this.validator.errors.firstById(this.id) || '');
};

/**
 * Removes all listeners.
 */
Field.prototype.destroy = function destroy() {
  this.watchers.forEach(function (w) {
    return w.unwatch();
  });
  this.watchers = [];
  this.dependencies.forEach(function (d) {
    return d.field.destroy();
  });
  this.dependencies = [];
};

Object.defineProperties(Field.prototype, prototypeAccessors$1);

// 

var FieldBag = function FieldBag() {
  this.items = [];
};

var prototypeAccessors$2 = { length: {} };

/**
 * Gets the current items length.
 */

prototypeAccessors$2.length.get = function () {
  return this.items.length;
};

/**
 * Finds the first field that matches the provided matcher object.
 */
FieldBag.prototype.find = function find$1(matcher) {
  return find(this.items, function (item) {
    return item.matches(matcher);
  });
};

/**
 * Filters the items down to the matched fields.
 */
FieldBag.prototype.filter = function filter(matcher) {
  // multiple matchers to be tried.
  if (Array.isArray(matcher)) {
    return this.items.filter(function (item) {
      return matcher.some(function (m) {
        return item.matches(m);
      });
    });
  }

  return this.items.filter(function (item) {
    return item.matches(matcher);
  });
};

/**
 * Maps the field items using the mapping function.
 */
FieldBag.prototype.map = function map(mapper) {
  return this.items.map(mapper);
};

/**
 * Finds and removes the first field that matches the provided matcher object, returns the removed item.
 */
FieldBag.prototype.remove = function remove(matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }

  if (!item) {
    return null;
  }

  var index = this.items.indexOf(item);
  this.items.splice(index, 1);

  return item;
};

/**
 * Adds a field item to the list.
 */
FieldBag.prototype.push = function push(item) {
  if (!(item instanceof Field)) {
    throw createError('FieldBag only accepts instances of Field that has an id defined.');
  }

  if (!item.id) {
    throw createError('Field id must be defined.');
  }

  if (this.find({ id: item.id })) {
    throw createError("Field with id " + item.id + " is already added.");
  }

  this.items.push(item);
};

Object.defineProperties(FieldBag.prototype, prototypeAccessors$2);

// 

var RULES = {};
var LOCALE = 'en';
var STRICT_MODE = true;
var DICTIONARY = new Dictionary({
  en: {
    messages: {},
    attributes: {},
    custom: {}
  }
});

var Validator = function Validator(validations, options) {
  var this$1 = this;
  if (options === void 0) options = { vm: null, fastExit: true };

  this.strict = STRICT_MODE;
  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this.flags = {};
  this._createFields(validations);
  this.paused = false;
  this.fastExit = options.fastExit || false;
  this.ownerId = options.vm && options.vm._uid;
  // create it statically since we don't need constant access to the vm.
  this.reset = options.vm && isCallable(options.vm.$nextTick) ? function () {
    return new Promise(function (resolve, reject) {
      options.vm.$nextTick(function () {
        this$1.fields.items.forEach(function (i) {
          return i.reset();
        });
        this$1.errors.clear();
        resolve();
      });
    });
  } : function () {
    return new Promise(function (resolve, reject) {
      this$1.fields.items.forEach(function (i) {
        return i.reset();
      });
      this$1.errors.clear();
      resolve();
    });
  };
  /* istanbul ignore next */
  this.clean = function () {
    warn('validator.clean is marked for deprecation, please use validator.reset instead.');
    this$1.reset();
  };
};

var prototypeAccessors = { dictionary: {}, locale: {}, rules: {} };
var staticAccessors = { dictionary: {}, locale: {}, rules: {} };

/**
 * Getter for the dictionary.
 */
prototypeAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * Static Getter for the dictionary.
 */
staticAccessors.dictionary.get = function () {
  return DICTIONARY;
};

/**
 * Getter for the current locale.
 */
prototypeAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * Setter for the validator locale.
 */
prototypeAccessors.locale.set = function (value) {
  Validator.locale = value;
};

/**
* Static getter for the validator locale.
*/
staticAccessors.locale.get = function () {
  return LOCALE;
};

/**
 * Static setter for the validator locale.
 */
staticAccessors.locale.set = function (value) {
  /* istanbul ignore if */
  if (!DICTIONARY.hasLocale(value)) {
    // eslint-disable-next-line
    warn('You are setting the validator locale to a locale that is not defined in the dictionary. English messages may still be generated.');
  }

  LOCALE = value;
};

/**
 * Getter for the rules object.
 */
prototypeAccessors.rules.get = function () {
  return RULES;
};

/**
 * Static Getter for the rules object.
 */
staticAccessors.rules.get = function () {
  return RULES;
};

/**
 * Static constructor.
 */
Validator.create = function create(validations, options) {
  return new Validator(validations, options);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.extend = function extend(name, validator) {
  Validator._guardExtend(name, validator);
  Validator._merge(name, validator);
};

/**
 * Removes a rule from the list of validators.
 */
Validator.remove = function remove(name) {
  delete RULES[name];
};

/**
 * Sets the default locale for all validators.
 * @deprecated
 */
Validator.setLocale = function setLocale(language) {
  if (language === void 0) language = 'en';

  Validator.locale = language;
};

/**
 * @deprecated
 */
Validator.installDateTimeValidators = function installDateTimeValidators() {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * @deprecated
 */
Validator.prototype.installDateTimeValidators = function installDateTimeValidators() {
  /* istanbul ignore next */
  warn('Date validations are now installed by default, you no longer need to install it.');
};

/**
 * Sets the operating mode for all newly created validators.
 * strictMode = true: Values without a rule are invalid and cause failure.
 * strictMode = false: Values without a rule are valid and are skipped.
 */
Validator.setStrictMode = function setStrictMode(strictMode) {
  if (strictMode === void 0) strictMode = true;

  STRICT_MODE = strictMode;
};

/**
 * Updates the dictionary, overwriting existing values and adding new ones.
 * @deprecated
 */
Validator.updateDictionary = function updateDictionary(data) {
  DICTIONARY.merge(data);
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 */
Validator.addLocale = function addLocale(locale) {
  if (!locale.name) {
    warn('Your locale must have a name property');
    return;
  }

  this.updateDictionary((obj = {}, obj[locale.name] = locale, obj));
  var obj;
};

/**
 * Adds a locale object to the dictionary.
 * @deprecated
 * @param {Object} locale
 */
Validator.prototype.addLocale = function addLocale(locale) {
  Validator.addLocale(locale);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.prototype.localize = function localize(lang, dictionary) {
  Validator.localize(lang, dictionary);
};

/**
 * Adds and sets the current locale for the validator.
 */
Validator.localize = function localize(lang, dictionary) {
  // merge the dictionary.
  if (dictionary) {
    dictionary = assign({}, dictionary, { name: lang });
    Validator.addLocale(dictionary);
  }

  // set the locale.
  Validator.locale = lang;
};

/**
 * Registers a field to be validated.
 */
Validator.prototype.attach = function attach(field) {
  // deprecate: handle old signature.
  if (arguments.length > 1) {
    field = assign({}, {
      name: arguments[0],
      rules: arguments[1]
    }, arguments[2] || { vm: { $validator: this } });
  }

  // fixes initial value detection with v-model and select elements.
  var value = field.initialValue;
  if (!(field instanceof Field)) {
    field = new Field(field.el || null, field);
  }

  this.fields.push(field);

  // validate the field initially
  if (field.initial) {
    this.validate("#" + field.id, value || field.value);
  } else {
    this._validate(field, value || field.value, true).then(function (valid) {
      field.flags.valid = valid;
      field.flags.invalid = !valid;
    });
  }

  this._addFlag(field, field.scope);
  return field;
};

/**
 * Sets the flags on a field.
 */
Validator.prototype.flag = function flag(name, flags) {
  var field = this._resolveField(name);
  if (!field || !flags) {
    return;
  }

  field.setFlags(flags);
};

/**
 * Removes a field from the validator.
 */
Validator.prototype.detach = function detach(name, scope) {
  var field = name instanceof Field ? name : this._resolveField(name, scope);
  if (!field) {
    return;
  }

  field.destroy();
  this.errors.remove(field.name, field.scope, field.id);
  this.fields.remove(field);
  var flags = this.flags;
  if (!isNullOrUndefined(field.scope) && flags["$" + field.scope]) {
    delete flags["$" + field.scope][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete flags[field.name];
  }

  this.flags = assign({}, flags);
};

/**
 * Adds a custom validator to the list of validation rules.
 */
Validator.prototype.extend = function extend(name, validator) {
  Validator.extend(name, validator);
};

/**
 * Updates a field, updating both errors and flags.
 */
Validator.prototype.update = function update(id, ref) {
  var scope = ref.scope;

  var field = this._resolveField("#" + id);
  this.errors.update(id, { scope: scope });

  // remove old scope.
  if (!isNullOrUndefined(field.scope) && this.flags["$" + field.scope]) {
    delete this.flags["$" + field.scope][field.name];
  } else if (isNullOrUndefined(field.scope)) {
    delete this.flags[field.name];
  }

  this._addFlag(field, scope);
};

/**
 * Removes a rule from the list of validators.
 */
Validator.prototype.remove = function remove(name) {
  Validator.remove(name);
};

/**
 * Sets the validator current language.
 * @deprecated
 */
Validator.prototype.setLocale = function setLocale(language) {
  this.locale = language;
};

/**
 * Updates the messages dictionary, overwriting existing values and adding new ones.
 * @deprecated
 */
Validator.prototype.updateDictionary = function updateDictionary(data) {
  Validator.updateDictionary(data);
};

/**
 * Validates a value against a registered field validations.
 */
Validator.prototype.validate = function validate(name, value, scope) {
  if (scope === void 0) scope = null;

  if (this.paused) {
    return Promise.resolve(true);
  }

  // overload to validate all.
  if (arguments.length === 0) {
    return this.validateScopes();
  }

  // overload to validate scope-less fields.
  if (arguments.length === 1 && arguments[0] === '*') {
    return this.validateAll();
  }

  // overload to validate a scope.
  if (arguments.length === 1 && typeof arguments[0] === 'string' && /^(.+)\.\*$/.test(arguments[0])) {
    var matched = arguments[0].match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }

  var field = this._resolveField(name, scope);
  if (!field) {
    return this._handleFieldNotFound(name, scope);
  }

  this.errors.remove(field.name, field.scope, field.id);
  field.flags.pending = true;
  if (arguments.length === 1) {
    value = field.value;
  }

  var silentRun = field.isDisabled;

  return this._validate(field, value, silentRun).then(function (result) {
    field.setFlags({
      pending: false,
      valid: result,
      validated: true
    });

    if (silentRun) {
      return Promise.resolve(true);
    }

    return result;
  });
};

/**
 * Pauses the validator.
 */
Validator.prototype.pause = function pause() {
  this.paused = true;

  return this;
};

/**
 * Resumes the validator.
 */
Validator.prototype.resume = function resume() {
  this.paused = false;

  return this;
};

/**
 * Validates each value against the corresponding field validations.
 */
Validator.prototype.validateAll = function validateAll(values) {
  var arguments$1 = arguments;
  var this$1 = this;

  if (this.paused) {
    return Promise.resolve(true);
  }

  var matcher = null;
  var providedValues = false;

  if (typeof values === 'string') {
    matcher = { scope: values };
  } else if (isObject(values)) {
    matcher = Object.keys(values).map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
    providedValues = true;
  } else if (arguments.length === 0) {
    matcher = { scope: null }; // global scope.
  } else if (Array.isArray(values)) {
    matcher = values.map(function (key) {
      return { name: key, scope: arguments$1[1] || null };
    });
  }

  var promises = this.fields.filter(matcher).map(function (field) {
    return this$1.validate("#" + field.id, providedValues ? values[field.name] : field.value);
  });

  return Promise.all(promises).then(function (results) {
    return results.every(function (t) {
      return t;
    });
  });
};

/**
 * Validates all scopes.
 */
Validator.prototype.validateScopes = function validateScopes() {
  var this$1 = this;

  if (this.paused) {
    return Promise.resolve(true);
  }

  var promises = this.fields.map(function (field) {
    return this$1.validate("#" + field.id, field.value);
  });

  return Promise.all(promises).then(function (results) {
    return results.every(function (t) {
      return t;
    });
  });
};

/**
 * Creates the fields to be validated.
 */
Validator.prototype._createFields = function _createFields(validations) {
  var this$1 = this;

  if (!validations) {
    return;
  }

  Object.keys(validations).forEach(function (field) {
    var options = assign({}, { name: field, rules: validations[field] });
    this$1.attach(options);
  });
};

/**
 * Date rules need the existence of a format, so date_format must be supplied.
 */
Validator.prototype._getDateFormat = function _getDateFormat(validations) {
  var format = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format = validations.date_format[0];
  }

  return format || this.dictionary.getDateFormat(this.locale);
};

/**
 * Checks if the passed rule is a date rule.
 */
Validator.prototype._isADateRule = function _isADateRule(rule) {
  return !!~['after', 'before', 'date_between', 'date_format'].indexOf(rule);
};

/**
 * Formats an error message for field and a rule.
 */
Validator.prototype._formatErrorMessage = function _formatErrorMessage(field, rule, data, targetName) {
  if (data === void 0) data = {};
  if (targetName === void 0) targetName = null;

  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);
  // Defaults to english message.
  if (!this.dictionary.hasLocale(LOCALE)) {
    var msg$1 = this.dictionary.getFieldMessage('en', field.name, rule.name);

    return isCallable(msg$1) ? msg$1(name, params, data) : msg$1;
  }

  var msg = this.dictionary.getFieldMessage(LOCALE, field.name, rule.name);

  return isCallable(msg) ? msg(name, params, data) : msg;
};

/**
 * Translates the parameters passed to the rule (mainly for target fields).
 */
Validator.prototype._getLocalizedParams = function _getLocalizedParams(rule, targetName) {
  if (targetName === void 0) targetName = null;

  if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
    var localizedName = targetName || this.dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0]);
    return [localizedName].concat(rule.params.slice(1));
  }

  return rule.params;
};

/**
 * Resolves an appropriate display name, first checking 'data-as' or the registered 'prettyName'
 */
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName(field) {
  return field.displayName || this.dictionary.getAttribute(LOCALE, field.name, field.name);
};

/**
 * Adds a field flags to the flags collection.
 */
Validator.prototype._addFlag = function _addFlag(field, scope) {
  if (scope === void 0) scope = null;

  if (isNullOrUndefined(scope)) {
    this.flags = assign({}, this.flags, (obj = {}, obj["" + field.name] = field.flags, obj));
    var obj;
    return;
  }

  var scopeObj = assign({}, this.flags["$" + scope] || {}, (obj$1 = {}, obj$1["" + field.name] = field.flags, obj$1));
  var obj$1;
  this.flags = assign({}, this.flags, (obj$2 = {}, obj$2["$" + scope] = scopeObj, obj$2));
  var obj$2;
};

/**
 * Tests a single input value against a rule.
 */
Validator.prototype._test = function _test(field, value, rule, silent) {
  var this$1 = this;

  var validator = RULES[rule.name];
  var params = Array.isArray(rule.params) ? toArray(rule.params) : [];
  var targetName = null;
  if (!validator || typeof validator !== 'function') {
    throw createError("No such validator '" + rule.name + "' exists.");
  }

  // has field dependencies.
  if (/(confirmed|after|before)/.test(rule.name)) {
    var target = find(field.dependencies, function (d) {
      return d.name === rule.name;
    });
    if (target) {
      targetName = target.field.displayName;
      params = [target.field.value].concat(params.slice(1));
    }
  } else if (rule.name === 'required' && field.rejectsFalse) {
    // invalidate false if no args were specified and the field rejects false by default.
    params = params.length ? params : [true];
  }

  if (this._isADateRule(rule.name)) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== 'date_format') {
      params.push(dateFormat);
    }
  }

  var result = validator(value, params);

  // If it is a promise.
  if (isCallable(result.then)) {
    return result.then(function (values) {
      var allValid = true;
      var data = {};
      if (Array.isArray(values)) {
        allValid = values.every(function (t) {
          return isObject(t) ? t.valid : t;
        });
      } else {
        // Is a single object/boolean.
        allValid = isObject(values) ? values.valid : values;
        data = values.data;
      }

      if (!allValid && !silent) {
        this$1.errors.add({
          id: field.id,
          field: field.name,
          msg: this$1._formatErrorMessage(field, rule, data, targetName),
          rule: rule.name,
          scope: field.scope
        });
      }

      return allValid;
    });
  }

  if (!isObject(result)) {
    result = { valid: result, data: {} };
  }

  if (!result.valid && !silent) {
    this.errors.add({
      id: field.id,
      field: field.name,
      msg: this._formatErrorMessage(field, rule, result.data, targetName),
      rule: rule.name,
      scope: field.scope
    });
  }

  return result.valid;
};

/**
 * Merges a validator object into the RULES and Messages.
 */
Validator._merge = function _merge(name, validator) {
  if (isCallable(validator)) {
    RULES[name] = validator;
    return;
  }

  RULES[name] = validator.validate;
  if (isCallable(validator.getMessage)) {
    DICTIONARY.setMessage(LOCALE, name, validator.getMessage);
  }

  if (validator.messages) {
    DICTIONARY.merge(Object.keys(validator.messages).reduce(function (prev, curr) {
      var dict = prev;
      dict[curr] = {
        messages: (obj = {}, obj[name] = validator.messages[curr], obj)
      };
      var obj;

      return dict;
    }, {}));
  }
};

/**
 * Guards from extension violations.
 */
Validator._guardExtend = function _guardExtend(name, validator) {
  if (isCallable(validator)) {
    return;
  }

  if (!isCallable(validator.validate)) {
    throw createError(
    // eslint-disable-next-line
    "Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
  }

  if (!isCallable(validator.getMessage) && !isObject(validator.messages)) {
    throw createError(
    // eslint-disable-next-line
    "Extension Error: The validator '" + name + "' must have a 'getMessage' method or have a 'messages' object.");
  }
};

/**
 * Tries different strategies to find a field.
 */
Validator.prototype._resolveField = function _resolveField(name, scope) {
  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name: name, scope: scope });
  }

  if (name[0] === '#') {
    return this.fields.find({ id: name.slice(1) });
  }

  if (name.indexOf('.') > -1) {
    var ref = name.split('.');
    var fieldScope = ref[0];
    var fieldName = ref.slice(1);
    var field = this.fields.find({ name: fieldName.join('.'), scope: fieldScope });
    if (field) {
      return field;
    }
  }

  return this.fields.find({ name: name, scope: null });
};

/**
 * Handles when a field is not found depending on the strict flag.
 */
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound(name, scope) {
  if (!this.strict) {
    return Promise.resolve(true);
  }

  var fullName = isNullOrUndefined(scope) ? name : "" + (!isNullOrUndefined(scope) ? scope + '.' : '') + name;
  throw createError("Validating a non-existent field: \"" + fullName + "\". Use \"attach()\" first.");
};

/**
 * Starts the validation process.
 */
Validator.prototype._validate = function _validate(field, value, silent) {
  var this$1 = this;
  if (silent === void 0) silent = false;

  if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
    return Promise.resolve(true);
  }

  var promises = [];
  var isExitEarly = false;
  // use of '.some()' is to break iteration in middle by returning true
  Object.keys(field.rules).some(function (rule) {
    var result = this$1._test(field, value, { name: rule, params: field.rules[rule] }, silent);

    if (isCallable(result.then)) {
      promises.push(result);
    } else if (this$1.fastExit && !result) {
      isExitEarly = true;
    } else {
      var resultAsPromise = new Promise(function (resolve) {
        resolve(result);
      });
      promises.push(resultAsPromise);
    }

    return isExitEarly;
  });

  if (isExitEarly) {
    return Promise.resolve(false);
  }

  return Promise.all(promises).then(function (values) {
    return values.every(function (t) {
      return t;
    });
  });
};

Object.defineProperties(Validator.prototype, prototypeAccessors);
Object.defineProperties(Validator, staticAccessors);

// 

/* istanbul ignore next */
var fakeFlags = createProxy({}, {
  get: function get(target, key) {
    // is a scope
    if (String(key).indexOf('$') === 0) {
      return fakeFlags;
    }

    return createFlags();
  }
});

/**
 * Checks if a parent validator instance was requested.
 */
var requestsValidator = function requestsValidator(injections) {
  if (!injections) {
    return false;
  }

  /* istanbul ignore next */
  if (Array.isArray(injections) && ~injections.indexOf('$validator')) {
    return true;
  }

  if (isObject(injections) && injections.$validator) {
    return true;
  }

  return false;
};

/**
 * Creates a validator instance.
 */
var createValidator = function createValidator(vm, options) {
  return new Validator(null, { vm: vm, fastExit: options.fastExit });
};

var mixin = {
  provide: function provide() {
    if (this.$validator && !isBuiltInComponent(this.$vnode)) {
      return {
        $validator: this.$validator
      };
    }

    return {};
  },
  beforeCreate: function beforeCreate() {
    // if built in do nothing.
    if (isBuiltInComponent(this.$vnode)) {
      return;
    }

    // if its a root instance set the config if it exists.
    if (!this.$parent) {
      Config.merge(this.$options.$_veeValidate || {});
    }

    var options = Config.resolve(this);
    var Vue = this.$options._base; // the vue constructor.
    // TODO: Deprecate
    /* istanbul ignore next */
    if (this.$options.$validates) {
      warn('The ctor $validates option has been deprecated please set the $_veeValidate.validator option to "new" instead');
      this.$validator = createValidator(this, options);
    }

    // if its a root instance, inject anyways, or if it requested a new instance.
    if (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) {
      this.$validator = createValidator(this, options);
    }

    var requested = requestsValidator(this.$options.inject);

    // if automatic injection is enabled and no instance was requested.
    if (!this.$validator && options.inject && !requested) {
      this.$validator = createValidator(this, options);
    }

    // don't inject errors or fieldBag as no validator was resolved.
    if (!requested && !this.$validator) {
      return;
    }

    // There is a validator but it isn't injected, mark as reactive.
    if (!requested && this.$validator) {
      Vue.util.defineReactive(this.$validator, 'errors', this.$validator.errors);
      Vue.util.defineReactive(this.$validator, 'flags', this.$validator.flags);
    }

    if (!this.$options.computed) {
      this.$options.computed = {};
    }

    this.$options.computed[options.errorBagName || 'errors'] = function errorBagGetter() {
      return this.$validator.errors;
    };
    this.$options.computed[options.fieldsBagName || 'fields'] = function fieldBagGetter() {
      if (!Object.keys(this.$validator.flags).length) {
        return fakeFlags;
      }

      return this.$validator.flags;
    };
  },

  beforeDestroy: function beforeDestroy() {
    if (isBuiltInComponent(this.$vnode)) {
      return;
    }

    // mark the validator paused to prevent delayed validation.
    if (this.$validator && this.$validator.ownerId === this._uid && isCallable(this.$validator.pause)) {
      this.$validator.pause();
    }
  }
};

// 

/**
 * Finds the requested field by id from the context object.
 */
var findField = function findField(el, context) {
  if (!context || !context.$validator) {
    return null;
  }

  return context.$validator.fields.find({ id: getDataAttribute(el, 'id') });
};

var directive = {
  bind: function bind(el, binding, vnode) {
    var validator = vnode.context.$validator;
    if (!validator) {
      warn("No validator instance is present on vm, did you forget to inject '$validator'?");
      return;
    }

    var fieldOptions = Generator.generate(el, binding, vnode);
    validator.attach(fieldOptions);
  },
  inserted: function inserted(el, binding, vnode) {
    var field = findField(el, vnode.context);
    var scope = Generator.resolveScope(el, binding, vnode);

    // skip if scope hasn't changed.
    if (!field || scope === field.scope) {
      return;
    }

    // only update scope.
    field.update({ scope: scope });

    // allows the field to re-evaluated once more in the update hook.
    field.updated = false;
  },
  update: function update(el, binding, vnode) {
    var field = findField(el, vnode.context);

    // make sure we don't do unneccasary work if no important change was done.
    if (!field || field.updated && isEqual(binding.value, binding.oldValue)) {
      return;
    }
    var scope = Generator.resolveScope(el, binding, vnode);
    var rules = Generator.resolveRules(el, binding);

    field.update({
      scope: scope,
      rules: rules
    });
  },
  unbind: function unbind(el, binding, ref) {
    var context = ref.context;

    var field = findField(el, context);
    if (!field) {
      return;
    }

    context.$validator.detach(field);
  }
};

var Vue;

function install(_Vue, options) {
  if (options === void 0) options = {};

  if (Vue) {
    warn('already installed, Vue.use(VeeValidate) should only be called once.');
    return;
  }

  Vue = _Vue;
  Config.merge(options);
  if (Config.current.dictionary) {
    Validator.updateDictionary(Config.current.dictionary);
  }

  if (options) {
    if (options.locale) {
      Validator.locale = options.locale;
    }

    if (options.strict) {
      Validator.setStrictMode(Config.current.strict);
    }
  }

  Vue.mixin(mixin);
  Vue.directive('validate', directive);
}

/**
 * Formates file size.
 *
 * @param {Number|String} size
 */
var formatFileSize = function formatFileSize(size) {
  var units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var threshold = 1024;
  size = Number(size) * threshold;
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (size / Math.pow(threshold, i)).toFixed(2) * 1 + " " + units[i];
};

/**
 * Checks if vee-validate is defined globally.
 */
var isDefinedGlobally = function isDefinedGlobally() {
  return typeof VeeValidate !== 'undefined';
};

var messages = {
  _default: function _default(field) {
    return "The " + field + " value is not valid.";
  },
  after: function after(field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return "The " + field + " must be after " + (inclusion ? 'or equal to ' : '') + target + ".";
  },
  alpha_dash: function alpha_dash(field) {
    return "The " + field + " field may contain alpha-numeric characters as well as dashes and underscores.";
  },
  alpha_num: function alpha_num(field) {
    return "The " + field + " field may only contain alpha-numeric characters.";
  },
  alpha_spaces: function alpha_spaces(field) {
    return "The " + field + " field may only contain alphabetic characters as well as spaces.";
  },
  alpha: function alpha(field) {
    return "The " + field + " field may only contain alphabetic characters.";
  },
  before: function before(field, ref) {
    var target = ref[0];
    var inclusion = ref[1];

    return "The " + field + " must be before " + (inclusion ? 'or equal to ' : '') + target + ".";
  },
  between: function between(field, ref) {
    var min = ref[0];
    var max = ref[1];

    return "The " + field + " field must be between " + min + " and " + max + ".";
  },
  confirmed: function confirmed(field) {
    return "The " + field + " confirmation does not match.";
  },
  credit_card: function credit_card(field) {
    return "The " + field + " field is invalid.";
  },
  date_between: function date_between(field, ref) {
    var min = ref[0];
    var max = ref[1];

    return "The " + field + " must be between " + min + " and " + max + ".";
  },
  date_format: function date_format(field, ref) {
    var format = ref[0];

    return "The " + field + " must be in the format " + format + ".";
  },
  decimal: function decimal(field, ref) {
    if (ref === void 0) ref = [];
    var decimals = ref[0];if (decimals === void 0) decimals = '*';

    return "The " + field + " field must be numeric and may contain " + (!decimals || decimals === '*' ? '' : decimals) + " decimal points.";
  },
  digits: function digits(field, ref) {
    var length = ref[0];

    return "The " + field + " field must be numeric and exactly contain " + length + " digits.";
  },
  dimensions: function dimensions(field, ref) {
    var width = ref[0];
    var height = ref[1];

    return "The " + field + " field must be " + width + " pixels by " + height + " pixels.";
  },
  email: function email(field) {
    return "The " + field + " field must be a valid email.";
  },
  ext: function ext(field) {
    return "The " + field + " field must be a valid file.";
  },
  image: function image(field) {
    return "The " + field + " field must be an image.";
  },
  in: function _in(field) {
    return "The " + field + " field must be a valid value.";
  },
  integer: function integer(field) {
    return "The " + field + " field must be an integer.";
  },
  ip: function ip(field) {
    return "The " + field + " field must be a valid ip address.";
  },
  length: function length(field, ref) {
    var length = ref[0];
    var max = ref[1];

    if (max) {
      return "The " + field + " length be between " + length + " and " + max + ".";
    }

    return "The " + field + " length must be " + length + ".";
  },
  max: function max(field, ref) {
    var length = ref[0];

    return "The " + field + " field may not be greater than " + length + " characters.";
  },
  max_value: function max_value(field, ref) {
    var max = ref[0];

    return "The " + field + " field must be " + max + " or less.";
  },
  mimes: function mimes(field) {
    return "The " + field + " field must have a valid file type.";
  },
  min: function min(field, ref) {
    var length = ref[0];

    return "The " + field + " field must be at least " + length + " characters.";
  },
  min_value: function min_value(field, ref) {
    var min = ref[0];

    return "The " + field + " field must be " + min + " or more.";
  },
  not_in: function not_in(field) {
    return "The " + field + " field must be a valid value.";
  },
  numeric: function numeric(field) {
    return "The " + field + " field may only contain numeric characters.";
  },
  regex: function regex(field) {
    return "The " + field + " field format is invalid.";
  },
  required: function required(field) {
    return "The " + field + " field is required.";
  },
  size: function size(field, ref) {
    var size = ref[0];

    return "The " + field + " size must be less than " + formatFileSize(size) + ".";
  },
  url: function url(field) {
    return "The " + field + " field is not a valid URL.";
  }
};

var locale = {
  name: 'en',
  messages: messages,
  attributes: {}
};

if (isDefinedGlobally()) {
  // eslint-disable-next-line
  VeeValidate.Validator.addLocale(locale);
}

// 

function use(plugin, options) {
  if (options === void 0) options = {};

  if (!isCallable(plugin)) {
    return warn('The plugin must be a callable function');
  }

  plugin({ Validator: Validator, ErrorBag: ErrorBag, Rules: Validator.rules }, options);
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument is null, it is treated as an invalid date.
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {*} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  if (argument === null) {
    return new Date(NaN);
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits === undefined ? DEFAULT_ADDITIONAL_DIGITS : Number(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  // Clone the date
  if (argument instanceof Date) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument !== 'string') {
    return new Date(argument);
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset();
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
  } else {
    return new Date(argument);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }

  // Invalid ISO-formatted year
  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date;
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date;
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week);
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek);
  }

  // Invalid ISO-formatted date
  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  }

  // Invalid ISO-formatted time
  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOYear(isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = Number(dirtyAmount);
  return new Date(timestamp + amount);
}

function cloneObject(dirtyObject) {
  dirtyObject = dirtyObject || {};
  var object = {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object;
}

var MILLISECONDS_IN_MINUTE$2 = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = Number(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions);
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date);
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance(token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

var tokensToBeShortedPattern = /MMMM|MM|DD|dddd/g;

function buildShortLongFormat(format) {
  return format.replace(tokensToBeShortedPattern, function (token) {
    return token.slice(1);
  });
}

/**
 * @name buildFormatLongFn
 * @category Locale Helpers
 * @summary Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 *
 * @description
 * Build `formatLong` property for locale used by `format`, `formatRelative` and `parse` functions.
 * Returns a function which takes one of the following tokens as the argument:
 * `'LTS'`, `'LT'`, `'L'`, `'LL'`, `'LLL'`, `'l'`, `'ll'`, `'lll'`, `'llll'`
 * and returns a long format string written as `format` token strings.
 * See [format]{@link https://date-fns.org/docs/format}
 *
 * `'l'`, `'ll'`, `'lll'` and `'llll'` formats are built automatically
 * by shortening some of the tokens from corresponding unshortened formats
 * (e.g., if `LL` is `'MMMM DD YYYY'` then `ll` will be `MMM D YYYY`)
 *
 * @param {Object} obj - the object with long formats written as `format` token strings
 * @param {String} obj.LT - time format: hours and minutes
 * @param {String} obj.LTS - time format: hours, minutes and seconds
 * @param {String} obj.L - short date format: numeric day, month and year
 * @param {String} [obj.l] - short date format: numeric day, month and year (shortened)
 * @param {String} obj.LL - long date format: day, month in words, and year
 * @param {String} [obj.ll] - long date format: day, month in words, and year (shortened)
 * @param {String} obj.LLL - long date and time format
 * @param {String} [obj.lll] - long date and time format (shortened)
 * @param {String} obj.LLLL - long date, time and weekday format
 * @param {String} [obj.llll] - long date, time and weekday format (shortened)
 * @returns {Function} `formatLong` property of the locale
 *
 * @example
 * // For `en-US` locale:
 * locale.formatLong = buildFormatLongFn({
 *   LT: 'h:mm aa',
 *   LTS: 'h:mm:ss aa',
 *   L: 'MM/DD/YYYY',
 *   LL: 'MMMM D YYYY',
 *   LLL: 'MMMM D YYYY h:mm aa',
 *   LLLL: 'dddd, MMMM D YYYY h:mm aa'
 * })
 */
function buildFormatLongFn(obj) {
  var formatLongLocale = {
    LTS: obj.LTS,
    LT: obj.LT,
    L: obj.L,
    LL: obj.LL,
    LLL: obj.LLL,
    LLLL: obj.LLLL,
    l: obj.l || buildShortLongFormat(obj.L),
    ll: obj.ll || buildShortLongFormat(obj.LL),
    lll: obj.lll || buildShortLongFormat(obj.LLL),
    llll: obj.llll || buildShortLongFormat(obj.LLLL)
  };

  return function (token) {
    return formatLongLocale[token];
  };
}

var formatLong = buildFormatLongFn({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
});

var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] LT',
  yesterday: '[yesterday at] LT',
  today: '[today at] LT',
  tomorrow: '[tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}

/**
 * @name buildLocalizeFn
 * @category Locale Helpers
 * @summary Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekday`, `localize.month` and `localize.timeOfDay` properties for the locale
 * used by `format` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * `localize.weekday` function takes the weekday index as argument (0 - Sunday).
 * `localize.month` takes the month index (0 - January).
 * `localize.timeOfDay` takes the hours. Use `indexCallback` to convert them to an array index (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @param {Function} [indexCallback] - the callback which takes the resulting function argument
 *   and converts it into value array index
 * @returns {Function} the resulting function
 *
 * @example
 * var timeOfDayValues = {
 *   uppercase: ['AM', 'PM'],
 *   lowercase: ['am', 'pm'],
 *   long: ['a.m.', 'p.m.']
 * }
 * locale.localize.timeOfDay = buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
 *   // 0 is a.m. array index, 1 is p.m. array index
 *   return (hours / 12) >= 1 ? 1 : 0
 * })
 * locale.localize.timeOfDay(16, {type: 'uppercase'}) //=> 'PM'
 * locale.localize.timeOfDay(5) //=> 'a.m.'
 */
function buildLocalizeFn(values, defaultType, indexCallback) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var valuesArray = values[type] || values[defaultType];
    var index = indexCallback ? indexCallback(Number(dirtyIndex)) : Number(dirtyIndex);
    return valuesArray[index];
  };
}

/**
 * @name buildLocalizeArrayFn
 * @category Locale Helpers
 * @summary Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 *
 * @description
 * Build `localize.weekdays`, `localize.months` and `localize.timesOfDay` properties for the locale.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 *
 * @param {Object} values - the object with arrays of values
 * @param {String} defaultType - the default type for the localize function
 * @returns {Function} the resulting function
 *
 * @example
 * var weekdayValues = {
 *   narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 *   short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
 *   long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
 * }
 * locale.localize.weekdays = buildLocalizeArrayFn(weekdayValues, 'long')
 * locale.localize.weekdays({type: 'narrow'}) //=> ['Su', 'Mo', ...]
 * locale.localize.weekdays() //=> ['Sunday', 'Monday', ...]
 */
function buildLocalizeArrayFn(values, defaultType) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    return values[type] || values[defaultType];
  };
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var weekdayValues = {
  narrow: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var monthValues = {
  short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var timeOfDayValues = {
//     any: ['in the night', 'in the morning', 'in the afternoon', 'in the evening']
//   }
//
// And later:
//
//   var localize = {
//     // The callback takes the hours as the argument and returns the array index
//     timeOfDay: buildLocalizeFn(timeOfDayValues, 'any', function (hours) {
//       if (hours >= 17) {
//         return 3
//       } else if (hours >= 12) {
//         return 2
//       } else if (hours >= 4) {
//         return 1
//       } else {
//         return 0
//       }
//     }),
//     timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'any')
//   }
var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['a.m.', 'p.m.']
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'month', 'quarter', 'week', 'isoWeek', 'dayOfYear',
  // 'dayOfMonth' or 'dayOfWeek'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return hours / 12 >= 1 ? 1 : 0;
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
};

/**
 * @name buildMatchFn
 * @category Locale Helpers
 * @summary Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekdays`, `match.months` and `match.timesOfDay` properties for the locale used by `parse` function.
 * If no `type` is supplied to the options of the resulting function, `defaultType` will be used (see example).
 * The result of the match function will be passed into corresponding parser function
 * (`match.weekday`, `match.month` or `match.timeOfDay` respectively. See `buildParseFn`).
 *
 * @param {Object} values - the object with RegExps
 * @param {String} defaultType - the default type for the match function
 * @returns {Function} the resulting function
 *
 * @example
 * var matchWeekdaysPatterns = {
 *   narrow: /^(su|mo|tu|we|th|fr|sa)/i,
 *   short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
 *   long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
 * }
 * locale.match.weekdays = buildMatchFn(matchWeekdaysPatterns, 'long')
 * locale.match.weekdays('Sunday', {type: 'narrow'}) //=> ['Su', 'Su', ...]
 * locale.match.weekdays('Sunday') //=> ['Sunday', 'Sunday', ...]
 */
function buildMatchFn(patterns, defaultType) {
  return function (dirtyString, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var pattern = patterns[type] || patterns[defaultType];
    var string = String(dirtyString);
    return string.match(pattern);
  };
}

/**
 * @name buildParseFn
 * @category Locale Helpers
 * @summary Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale.
 *
 * @description
 * Build `match.weekday`, `match.month` and `match.timeOfDay` properties for the locale used by `parse` function.
 * The argument of the resulting function is the result of the corresponding match function
 * (`match.weekdays`, `match.months` or `match.timesOfDay` respectively. See `buildMatchFn`).
 *
 * @param {Object} values - the object with arrays of RegExps
 * @param {String} defaultType - the default type for the parser function
 * @returns {Function} the resulting function
 *
 * @example
 * var parseWeekdayPatterns = {
 *   any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
 * }
 * locale.match.weekday = buildParseFn(matchWeekdaysPatterns, 'long')
 * var matchResult = locale.match.weekdays('Friday')
 * locale.match.weekday(matchResult) //=> 5
 */
function buildParseFn(patterns, defaultType) {
  return function (matchResult, dirtyOptions) {
    var options = dirtyOptions || {};
    var type = options.type ? String(options.type) : defaultType;
    var patternsArray = patterns[type] || patterns[defaultType];
    var string = matchResult[1];

    return patternsArray.findIndex(function (pattern) {
      return pattern.test(string);
    });
  };
}

/**
 * @name buildMatchPatternFn
 * @category Locale Helpers
 * @summary Build match function from a single RegExp.
 *
 * @description
 * Build match function from a single RegExp.
 * Usually used for building `match.ordinalNumbers` property of the locale.
 *
 * @param {Object} pattern - the RegExp
 * @returns {Function} the resulting function
 *
 * @example
 * locale.match.ordinalNumbers = buildMatchPatternFn(/^(\d+)(th|st|nd|rd)?/i)
 * locale.match.ordinalNumbers('3rd') //=> ['3rd', '3', 'rd', ...]
 */
function buildMatchPatternFn(pattern) {
  return function (dirtyString) {
    var string = String(dirtyString);
    return string.match(pattern);
  };
}

/**
 * @name parseDecimal
 * @category Locale Helpers
 * @summary Parses the match result into decimal number.
 *
 * @description
 * Parses the match result into decimal number.
 * Uses the string matched with the first set of parentheses of match RegExp.
 *
 * @param {Array} matchResult - the object returned by matching function
 * @returns {Number} the parsed value
 *
 * @example
 * locale.match = {
 *   ordinalNumbers: (dirtyString) {
 *     return String(dirtyString).match(/^(\d+)(th|st|nd|rd)?/i)
 *   },
 *   ordinalNumber: parseDecimal
 * }
 */
function parseDecimal(matchResult) {
  return parseInt(matchResult[1], 10);
}

var matchOrdinalNumbersPattern = /^(\d+)(th|st|nd|rd)?/i;

var matchWeekdaysPatterns = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};

var parseWeekdayPatterns = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchMonthsPatterns = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};

var parseMonthPatterns = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
};

var parseTimeOfDayPatterns = {
  any: [/^a/i, /^p/i]
};

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 */
var locale$1 = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */
    , firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY$1 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$2 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek(dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function M(date) {
    return date.getUTCMonth() + 1;
  },

  // Month: 1st, 2nd, ..., 12th
  'Mo': function Mo(date, options) {
    var month = date.getUTCMonth() + 1;
    return options.locale.localize.ordinalNumber(month, { unit: 'month' });
  },

  // Month: 01, 02, ..., 12
  'MM': function MM(date) {
    return addLeadingZeros(date.getUTCMonth() + 1, 2);
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function MMM(date, options) {
    return options.locale.localize.month(date.getUTCMonth(), { type: 'short' });
  },

  // Month: January, February, ..., December
  'MMMM': function MMMM(date, options) {
    return options.locale.localize.month(date.getUTCMonth(), { type: 'long' });
  },

  // Quarter: 1, 2, 3, 4
  'Q': function Q(date) {
    return Math.ceil((date.getUTCMonth() + 1) / 3);
  },

  // Quarter: 1st, 2nd, 3rd, 4th
  'Qo': function Qo(date, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    return options.locale.localize.ordinalNumber(quarter, { unit: 'quarter' });
  },

  // Day of month: 1, 2, ..., 31
  'D': function D(date) {
    return date.getUTCDate();
  },

  // Day of month: 1st, 2nd, ..., 31st
  'Do': function Do(date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDate(), { unit: 'dayOfMonth' });
  },

  // Day of month: 01, 02, ..., 31
  'DD': function DD(date) {
    return addLeadingZeros(date.getUTCDate(), 2);
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function DDD(date) {
    return getUTCDayOfYear(date);
  },

  // Day of year: 1st, 2nd, ..., 366th
  'DDDo': function DDDo(date, options) {
    return options.locale.localize.ordinalNumber(getUTCDayOfYear(date), { unit: 'dayOfYear' });
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function DDDD(date) {
    return addLeadingZeros(getUTCDayOfYear(date), 3);
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function dd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'narrow' });
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function ddd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'short' });
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function dddd(date, options) {
    return options.locale.localize.weekday(date.getUTCDay(), { type: 'long' });
  },

  // Day of week: 0, 1, ..., 6
  'd': function d(date) {
    return date.getUTCDay();
  },

  // Day of week: 0th, 1st, 2nd, ..., 6th
  'do': function _do(date, options) {
    return options.locale.localize.ordinalNumber(date.getUTCDay(), { unit: 'dayOfWeek' });
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function E(date) {
    return date.getUTCDay() || 7;
  },

  // ISO week: 1, 2, ..., 53
  'W': function W(date) {
    return getUTCISOWeek(date);
  },

  // ISO week: 1st, 2nd, ..., 53th
  'Wo': function Wo(date, options) {
    return options.locale.localize.ordinalNumber(getUTCISOWeek(date), { unit: 'isoWeek' });
  },

  // ISO week: 01, 02, ..., 53
  'WW': function WW(date) {
    return addLeadingZeros(getUTCISOWeek(date), 2);
  },

  // Year: 00, 01, ..., 99
  'YY': function YY(date) {
    return addLeadingZeros(date.getUTCFullYear(), 4).substr(2);
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function YYYY(date) {
    return addLeadingZeros(date.getUTCFullYear(), 4);
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function GG(date) {
    return String(getUTCISOWeekYear(date)).substr(2);
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function GGGG(date) {
    return getUTCISOWeekYear(date);
  },

  // Hour: 0, 1, ... 23
  'H': function H(date) {
    return date.getUTCHours();
  },

  // Hour: 00, 01, ..., 23
  'HH': function HH(date) {
    return addLeadingZeros(date.getUTCHours(), 2);
  },

  // Hour: 1, 2, ..., 12
  'h': function h(date) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      return 12;
    } else if (hours > 12) {
      return hours % 12;
    } else {
      return hours;
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function hh(date) {
    return addLeadingZeros(formatters['h'](date), 2);
  },

  // Minute: 0, 1, ..., 59
  'm': function m(date) {
    return date.getUTCMinutes();
  },

  // Minute: 00, 01, ..., 59
  'mm': function mm(date) {
    return addLeadingZeros(date.getUTCMinutes(), 2);
  },

  // Second: 0, 1, ..., 59
  's': function s(date) {
    return date.getUTCSeconds();
  },

  // Second: 00, 01, ..., 59
  'ss': function ss(date) {
    return addLeadingZeros(date.getUTCSeconds(), 2);
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function S(date) {
    return Math.floor(date.getUTCMilliseconds() / 100);
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function SS(date) {
    return addLeadingZeros(Math.floor(date.getUTCMilliseconds() / 10), 2);
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function SSS(date) {
    return addLeadingZeros(date.getUTCMilliseconds(), 3);
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function Z(date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset(), ':');
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function ZZ(date, options) {
    var originalDate = options._originalDate || date;
    return formatTimezone(originalDate.getTimezoneOffset());
  },

  // Seconds timestamp: 512969520
  'X': function X(date, options) {
    var originalDate = options._originalDate || date;
    return Math.floor(originalDate.getTime() / 1000);
  },

  // Milliseconds timestamp: 512969520900
  'x': function x(date, options) {
    var originalDate = options._originalDate || date;
    return originalDate.getTime();
  },

  // AM, PM
  'A': function A(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'uppercase' });
  },

  // am, pm
  'a': function a(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'lowercase' });
  },

  // a.m., p.m.
  'aa': function aa(date, options) {
    return options.locale.localize.timeOfDay(date.getUTCHours(), { type: 'long' });
  }
};

function formatTimezone(offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function addUTCMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var amount = Number(dirtyAmount);
  date.setUTCMinutes(date.getUTCMinutes() + amount);
  return date;
}

var longFormattingTokensRegExp = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultFormattingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 * | Long format             | LT    | 05:30 a.m.                       |
 * |                         | LTS   | 05:30:15 a.m.                    |
 * |                         | L     | 07/02/1995                       |
 * |                         | l     | 7/2/1995                         |
 * |                         | LL    | July 2 1995                      |
 * |                         | ll    | Jul 2 1995                       |
 * |                         | LLL   | July 2 1995 05:30 a.m.           |
 * |                         | lll   | Jul 2 1995 05:30 a.m.            |
 * |                         | LLLL  | Sunday, July 2 1995 05:30 a.m.   |
 * |                         | llll  | Sun, Jul 2 1995 05:30 a.m.       |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale = options.locale || locale$1;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var localeFormatters = locale.formatters || {};
  var formattingTokensRegExp = locale.formattingTokensRegExp || defaultFormattingTokensRegExp;
  var formatLong = locale.formatLong;

  var originalDate = toDate(dirtyDate, options);

  if (!isValid(originalDate, options)) {
    return 'Invalid Date';
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = originalDate.getTimezoneOffset();
  var utcDate = addUTCMinutes(originalDate, -timezoneOffset, options);

  var formatterOptions = cloneObject(options);
  formatterOptions.locale = locale;
  formatterOptions.formatters = formatters;

  // When UTC functions will be implemented, options._originalDate will likely be a part of public API.
  // Right now, please don't use it in locales. If you have to use an original date,
  // please restore it from `date`, adding a timezone offset to it.
  formatterOptions._originalDate = originalDate;

  var result = formatStr.replace(longFormattingTokensRegExp, function (substring) {
    if (substring[0] === '[') {
      return substring;
    }

    if (substring[0] === '\\') {
      return cleanEscapedString(substring);
    }

    return formatLong(substring);
  }).replace(formattingTokensRegExp, function (substring) {
    var formatter = localeFormatters[substring] || formatters[substring];

    if (formatter) {
      return formatter(utcDate, formatterOptions);
    } else {
      return cleanEscapedString(substring);
    }
  });

  return result;
}

function cleanEscapedString(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '');
  }
  return input.replace(/\\/g, '');
}

/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the mintues subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = Number(dirtyAmount);
  return addMinutes(dirtyDate, -amount, dirtyOptions);
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime();
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime();
}

var patterns$1 = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
};

function parseDecimal$1(matchResult) {
  return parseInt(matchResult[1], 10);
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns$1.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult);
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns$1.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) + 1900;
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns$1.YYYY,
    parse: parseDecimal$1
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'quarter' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'quarter' });
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns$1.M,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) - 1;
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'month' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'month' }) - 1;
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns$1.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) - 1;
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.months(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.month(matchResult, { type: 'short' });
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function match(string, options) {
      return options.locale.match.months(string, { type: 'long' }) || options.locale.match.months(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, { type: 'short' });
      }

      return parseResult;
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns$1.W,
    parse: parseDecimal$1
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'isoWeek' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'isoWeek' });
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns$1.singleDigit,
    parse: parseDecimal$1
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfWeek' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfWeek' });
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.weekday(matchResult, { type: 'narrow' });
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
      }

      return parseResult;
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function match(string, options) {
      return options.locale.match.weekdays(string, { type: 'long' }) || options.locale.match.weekdays(string, { type: 'short' }) || options.locale.match.weekdays(string, { type: 'narrow' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, { type: 'short' });

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, { type: 'narrow' });
        }
      }

      return parseResult;
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns$1.singleDigit,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult);
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns$1.D,
    parse: parseDecimal$1
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfMonth' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfMonth' });
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns$1.DDD,
    parse: parseDecimal$1
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function match(string, options) {
      return options.locale.match.ordinalNumbers(string, { unit: 'dayOfYear' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, { unit: 'dayOfYear' });
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function match(string, options) {
      return options.locale.match.timesOfDay(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, { type: 'short' });
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function match(string, options) {
      return options.locale.match.timesOfDay(string, { type: 'long' }) || options.locale.match.timesOfDay(string, { type: 'short' });
    },
    parse: function parse(matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, { type: 'long' });

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, { type: 'short' });
      }

      return parseResult;
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns$1.H,
    parse: parseDecimal$1
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns$1.M,
    parse: parseDecimal$1
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns$1.m,
    parse: parseDecimal$1
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns$1.twoDigits,
    parse: parseDecimal$1
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns$1.singleDigit,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) * 100;
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns$1.twoDigits,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) * 10;
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns$1.threeDigits,
    parse: parseDecimal$1
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns$1.Z,
    parse: function parse(matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return sign === '+' ? absoluteOffset : -absoluteOffset;
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns$1.ZZ,
    parse: function parse(matchResult) {
      var sign = matchResult[1];
      var hours = parseInt(matchResult[2], 10);
      var minutes = parseInt(matchResult[3], 10);
      var absoluteOffset = hours * 60 + minutes;
      return sign === '+' ? absoluteOffset : -absoluteOffset;
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: function parse(matchResult) {
      return parseDecimal$1(matchResult) * 1000;
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns$1.anyDigits,
    parse: parseDecimal$1
  }
};

parsers['a'] = parsers['A'];

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn === undefined ? 0 : Number(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn === undefined ? defaultWeekStartsOn : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = Number(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
  var day = Number(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = Number(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_DAY$3 = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeekYear(dirtyDate, dirtyISOYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions);
  var isoYear = Number(dirtyISOYear);
  var dateStartOfYear = startOfUTCISOWeekYear(date, dirtyOptions);
  var diff = Math.floor((date.getTime() - dateStartOfYear.getTime()) / MILLISECONDS_IN_DAY$3);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(isoYear, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  date = startOfUTCISOWeekYear(fourthOfJanuary, dirtyOptions);
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

var MILLISECONDS_IN_MINUTE$7 = 60000;

function setTimeOfDay(hours, timeOfDay) {
  var isAM = timeOfDay === 0;

  if (isAM) {
    if (hours === 12) {
      return 0;
    }
  } else {
    if (hours !== 12) {
      return 12 + hours;
    }
  }

  return hours;
}

var units = {
  twoDigitYear: {
    priority: 10,
    set: function set(dateValues, value) {
      var century = Math.floor(dateValues.date.getUTCFullYear() / 100);
      var year = century * 100 + value;
      dateValues.date.setUTCFullYear(year, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  year: {
    priority: 10,
    set: function set(dateValues, value) {
      dateValues.date.setUTCFullYear(value, 0, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  isoYear: {
    priority: 10,
    set: function set(dateValues, value, options) {
      dateValues.date = startOfUTCISOWeekYear(setUTCISOWeekYear(dateValues.date, value, options), options);
      return dateValues;
    }
  },

  quarter: {
    priority: 20,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth((value - 1) * 3, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  month: {
    priority: 30,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth(value, 1);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  isoWeek: {
    priority: 40,
    set: function set(dateValues, value, options) {
      dateValues.date = startOfUTCISOWeek(setUTCISOWeek(dateValues.date, value, options), options);
      return dateValues;
    }
  },

  dayOfWeek: {
    priority: 50,
    set: function set(dateValues, value, options) {
      dateValues.date = setUTCDay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfISOWeek: {
    priority: 50,
    set: function set(dateValues, value, options) {
      dateValues.date = setUTCISODay(dateValues.date, value, options);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfMonth: {
    priority: 50,
    set: function set(dateValues, value) {
      dateValues.date.setUTCDate(value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  dayOfYear: {
    priority: 50,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMonth(0, value);
      dateValues.date.setUTCHours(0, 0, 0, 0);
      return dateValues;
    }
  },

  timeOfDay: {
    priority: 60,
    set: function set(dateValues, value, options) {
      dateValues.timeOfDay = value;
      return dateValues;
    }
  },

  hours: {
    priority: 70,
    set: function set(dateValues, value, options) {
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues;
    }
  },

  timeOfDayHours: {
    priority: 70,
    set: function set(dateValues, value, options) {
      var timeOfDay = dateValues.timeOfDay;
      if (timeOfDay != null) {
        value = setTimeOfDay(value, timeOfDay);
      }
      dateValues.date.setUTCHours(value, 0, 0, 0);
      return dateValues;
    }
  },

  minutes: {
    priority: 80,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMinutes(value, 0, 0);
      return dateValues;
    }
  },

  seconds: {
    priority: 90,
    set: function set(dateValues, value) {
      dateValues.date.setUTCSeconds(value, 0);
      return dateValues;
    }
  },

  milliseconds: {
    priority: 100,
    set: function set(dateValues, value) {
      dateValues.date.setUTCMilliseconds(value);
      return dateValues;
    }
  },

  timezone: {
    priority: 110,
    set: function set(dateValues, value) {
      dateValues.date = new Date(dateValues.date.getTime() - value * MILLISECONDS_IN_MINUTE$7);
      return dateValues;
    }
  },

  timestamp: {
    priority: 120,
    set: function set(dateValues, value) {
      dateValues.date = new Date(value);
      return dateValues;
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 110;
var MILLISECONDS_IN_MINUTE$6 = 60000;

var longFormattingTokensRegExp$1 = /(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g;
var defaultParsingTokensRegExp = /(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format.
 *
 * Accepted format tokens:
 * | Unit                    | Priority | Token | Input examples                   |
 * |-------------------------|----------|-------|----------------------------------|
 * | Year                    | 10       | YY    | 00, 01, ..., 99                  |
 * |                         |          | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | 10       | GG    | 00, 01, ..., 99                  |
 * |                         |          | GGGG  | 1900, 1901, ..., 2099            |
 * | Quarter                 | 20       | Q     | 1, 2, 3, 4                       |
 * |                         |          | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Month                   | 30       | M     | 1, 2, ..., 12                    |
 * |                         |          | Mo    | 1st, 2nd, ..., 12th              |
 * |                         |          | MM    | 01, 02, ..., 12                  |
 * |                         |          | MMM   | Jan, Feb, ..., Dec               |
 * |                         |          | MMMM  | January, February, ..., December |
 * | ISO week                | 40       | W     | 1, 2, ..., 53                    |
 * |                         |          | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         |          | WW    | 01, 02, ..., 53                  |
 * | Day of week             | 50       | d     | 0, 1, ..., 6                     |
 * |                         |          | do    | 0th, 1st, ..., 6th               |
 * |                         |          | dd    | Su, Mo, ..., Sa                  |
 * |                         |          | ddd   | Sun, Mon, ..., Sat               |
 * |                         |          | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | 50       | E     | 1, 2, ..., 7                     |
 * | Day of month            | 50       | D     | 1, 2, ..., 31                    |
 * |                         |          | Do    | 1st, 2nd, ..., 31st              |
 * |                         |          | DD    | 01, 02, ..., 31                  |
 * | Day of year             | 50       | DDD   | 1, 2, ..., 366                   |
 * |                         |          | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         |          | DDDD  | 001, 002, ..., 366               |
 * | Time of day             | 60       | A     | AM, PM                           |
 * |                         |          | a     | am, pm                           |
 * |                         |          | aa    | a.m., p.m.                       |
 * | Hour                    | 70       | H     | 0, 1, ... 23                     |
 * |                         |          | HH    | 00, 01, ... 23                   |
 * | Time of day hour        | 70       | h     | 1, 2, ..., 12                    |
 * |                         |          | hh    | 01, 02, ..., 12                  |
 * | Minute                  | 80       | m     | 0, 1, ..., 59                    |
 * |                         |          | mm    | 00, 01, ..., 59                  |
 * | Second                  | 90       | s     | 0, 1, ..., 59                    |
 * |                         |          | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | 100      | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | 100      | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | 100      | SSS   | 000, 001, ..., 999               |
 * | Timezone                | 110      | Z     | -01:00, +00:00, ... +12:00       |
 * |                         |          | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | 120      | X     | 512969520                        |
 * | Milliseconds timestamp  | 120      | x     | 512969520900                     |
 *
 * Values will be assigned to the date in the ascending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/DD/YYYY', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * Also, `parse` unfolds long formats like those in [format]{@link https://date-fns.org/docs/format}:
 * | Token | Input examples                 |
 * |-------|--------------------------------|
 * | LT    | 05:30 a.m.                     |
 * | LTS   | 05:30:15 a.m.                  |
 * | L     | 07/02/1995                     |
 * | l     | 7/2/1995                       |
 * | LL    | July 2 1995                    |
 * | ll    | Jul 2 1995                     |
 * | LLL   | July 2 1995 05:30 a.m.         |
 * | lll   | Jul 2 1995 05:30 a.m.          |
 * | LLLL  | Sunday, July 2 1995 05:30 a.m. |
 * | llll  | Sun, Jul 2 1995 05:30 a.m.     |
 *
 * The characters wrapped in square brackets in the format string are escaped.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - the date to took the missing higher priority values from
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/DD/YYYY',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in English locale in the context of 2010 year:
 * import eoLocale from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   'Do [de] MMMM',
 *   new Date(2010, 0, 1)
 *   {locale: eoLocale}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var options = dirtyOptions || {};

  var weekStartsOn = options.weekStartsOn === undefined ? 0 : Number(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var locale = options.locale || locale$1;
  var localeParsers = locale.parsers || {};
  var localeUnits = locale.units || {};

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var formatString = String(dirtyFormatString).replace(longFormattingTokensRegExp$1, function (substring) {
    if (substring[0] === '[') {
      return substring;
    }

    if (substring[0] === '\\') {
      return cleanEscapedString$1(substring);
    }

    return locale.formatLong(substring);
  });

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = cloneObject(options);
  subFnOptions.locale = locale;

  var tokens = formatString.match(locale.parsingTokensRegExp || defaultParsingTokensRegExp);
  var tokensLength = tokens.length;

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];

  var i;
  for (i = 0; i < tokensLength; i++) {
    var token = tokens[i];
    var parser = localeParsers[token] || parsers[token];
    if (parser) {
      var matchResult;

      if (parser.match instanceof RegExp) {
        matchResult = parser.match.exec(dateString);
      } else {
        matchResult = parser.match(dateString, subFnOptions);
      }

      if (!matchResult) {
        return new Date(NaN);
      }

      var unitName = parser.unit;
      var unit = localeUnits[unitName] || units[unitName];

      setters.push({
        priority: unit.priority,
        set: unit.set,
        value: parser.parse(matchResult, subFnOptions),
        index: setters.length
      });

      var substring = matchResult[0];
      dateString = dateString.slice(substring.length);
    } else {
      var head = tokens[i].match(/^\[.*]$/) ? tokens[i].replace(/^\[|]$/g, '') : tokens[i];
      if (dateString.indexOf(head) === 0) {
        dateString = dateString.slice(head.length);
      } else {
        return new Date(NaN);
      }
    }
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return a - b;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN);
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMinutes(date, date.getTimezoneOffset());

  var dateValues = { date: utcDate };

  var settersLength = uniquePrioritySetters.length;
  for (i = 0; i < settersLength; i++) {
    var setter = uniquePrioritySetters[i];
    dateValues = setter.set(dateValues, setter.value, subFnOptions);
  }

  return dateValues.date;
}

function dateToSystemTimezone(dateValues) {
  var date = dateValues.date;
  var time = date.getTime();

  // Get the system timezone offset at (moment of time - offset)
  var offset = date.getTimezoneOffset();

  // Get the system timezone offset at the exact moment of time
  offset = new Date(time + offset * MILLISECONDS_IN_MINUTE$6).getTimezoneOffset();

  // Convert date in timezone "UTC+00:00" to the system timezone
  dateValues.date = new Date(time + offset * MILLISECONDS_IN_MINUTE$6);

  return dateValues;
}

function cleanEscapedString$1(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '');
  }
  return input.replace(/\\/g, '');
}

// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.

// 

/**
 * Custom parse behavior on top of date-fns parse function.
 */
function parseDate$1(date, format$$1) {
  if (typeof date !== 'string') {
    return isValid(date) ? date : null;
  }

  var parsed = parse(date, format$$1, new Date());

  // if date is not valid or the formatted output after parsing does not match
  // the string value passed in (avoids overflows)
  if (!isValid(parsed) || format(parsed, format$$1) !== date) {
    return null;
  }

  return parsed;
}

var after = function after(value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isAfter(value, otherValue) || inclusion && isEqual$1(value, otherValue);
};

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/
};

var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/
};

var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/
};

var validate = function validate(value, ref) {
  if (ref === void 0) ref = [];
  var locale = ref[0];if (locale === void 0) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate(val, [locale]);
    });
  }

  // Match at least one locale.
  if (!locale) {
    return Object.keys(alpha$1).some(function (loc) {
      return alpha$1[loc].test(value);
    });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var validate$1 = function validate$1(value, ref) {
  if (ref === void 0) ref = [];
  var locale = ref[0];if (locale === void 0) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$1(val, [locale]);
    });
  }

  // Match at least one locale.
  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var validate$2 = function validate$2(value, ref) {
  if (ref === void 0) ref = [];
  var locale = ref[0];if (locale === void 0) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$2(val, [locale]);
    });
  }

  // Match at least one locale.
  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var validate$3 = function validate$3(value, ref) {
  if (ref === void 0) ref = [];
  var locale = ref[0];if (locale === void 0) locale = null;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$3(val, [locale]);
    });
  }

  // Match at least one locale.
  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var before = function before(value, ref) {
  var otherValue = ref[0];
  var inclusion = ref[1];
  var format = ref[2];

  if (typeof format === 'undefined') {
    format = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format);
  otherValue = parseDate$1(otherValue, format);

  // if either is not valid.
  if (!value || !otherValue) {
    return false;
  }

  return isBefore(value, otherValue) || inclusion && isEqual$1(value, otherValue);
};

var validate$4 = function validate$4(value, ref) {
  var min = ref[0];
  var max = ref[1];

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$4(val, [min, max]);
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var confirmed = function confirmed(value, other) {
  return String(value) === String(other);
};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assertString;
  function assertString(input) {
    var isString = typeof input === 'string' || input instanceof String;

    if (!isString) {
      throw new TypeError('This library (validator.js) validates strings only');
    }
  }
  module.exports = exports['default'];
});

unwrapExports(assertString_1);

var isCreditCard_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCreditCard;

  var _assertString2 = _interopRequireDefault(assertString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /* eslint-disable max-len */
  var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
  /* eslint-enable max-len */

  function isCreditCard(str) {
    (0, _assertString2.default)(str);
    var sanitized = str.replace(/[- ]+/g, '');
    if (!creditCard.test(sanitized)) {
      return false;
    }
    var sum = 0;
    var digit = void 0;
    var tmpNum = void 0;
    var shouldDouble = void 0;
    for (var i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
  }
  module.exports = exports['default'];
});

var isCreditCard = unwrapExports(isCreditCard_1);

var credit_card = function credit_card(value) {
  return isCreditCard(String(value));
};

var validate$5 = function validate$5(value, ref) {
  if (ref === void 0) ref = [];
  var decimals = ref[0];if (decimals === void 0) decimals = '*';
  var separator = ref[1];if (separator === void 0) separator = '.';

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$5(val, [decimals, separator]);
    });
  }

  if (value === null || value === undefined || value === '') {
    return true;
  }

  // if is 0.
  if (Number(decimals) === 0) {
    return (/^-?\d*$/.test(value)
    );
  }

  var regexPart = decimals === '*' ? '+' : "{1," + decimals + "}";
  var regex = new RegExp("^-?\\d*(\\" + separator + "\\d" + regexPart + ")?$");

  if (!regex.test(value)) {
    return false;
  }

  var parsedValue = parseFloat(value);

  // eslint-disable-next-line
  return parsedValue === parsedValue;
};

var date_between = function date_between(value, params) {
  var min;
  var max;
  var format;
  var inclusivity = '()';

  if (params.length > 3) {
    var assign;
    assign = params, min = assign[0], max = assign[1], inclusivity = assign[2], format = assign[3];
  } else {
    var assign$1;
    assign$1 = params, min = assign$1[0], max = assign$1[1], format = assign$1[2];
  }

  var minDate = parseDate$1(min, format);
  var maxDate = parseDate$1(max, format);
  var dateVal = parseDate$1(value, format);

  if (!minDate || !maxDate || !dateVal) {
    return false;
  }

  if (inclusivity === '()') {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }

  if (inclusivity === '(]') {
    return isAfter(dateVal, minDate) && (isEqual$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }

  if (inclusivity === '[)') {
    return isBefore(dateVal, maxDate) && (isEqual$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }

  return isEqual$1(dateVal, maxDate) || isEqual$1(dateVal, minDate) || isBefore(dateVal, maxDate) && isAfter(dateVal, minDate);
};

var date_format = function date_format(value, ref) {
  var format = ref[0];

  return !!parseDate$1(value, format);
};

var validate$6 = function validate$6(value, ref) {
  var length = ref[0];

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$6(val, [length]);
    });
  }
  var strVal = String(value);

  return (/^[0-9]*$/.test(strVal) && strVal.length === Number(length)
  );
};

var validateImage = function validateImage(file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();
    image.onerror = function () {
      return resolve({ valid: false });
    };
    image.onload = function () {
      return resolve({
        valid: image.width === Number(width) && image.height === Number(height)
      });
    };

    image.src = URL.createObjectURL(file);
  });
};

var dimensions = function dimensions(files, ref) {
  var width = ref[0];
  var height = ref[1];

  var list = [];
  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return false;
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  }));
};

var merge_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = merge;
  function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments[1];

    for (var key in defaults) {
      if (typeof obj[key] === 'undefined') {
        obj[key] = defaults[key];
      }
    }
    return obj;
  }
  module.exports = exports['default'];
});

unwrapExports(merge_1);

var isByteLength_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  };

  exports.default = isByteLength;

  var _assertString2 = _interopRequireDefault(assertString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  /* eslint-disable prefer-rest-params */
  function isByteLength(str, options) {
    (0, _assertString2.default)(str);
    var min = void 0;
    var max = void 0;
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
      min = options.min || 0;
      max = options.max;
    } else {
      // backwards compatibility: isByteLength(str, min [, max])
      min = arguments[1];
      max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
  }
  module.exports = exports['default'];
});

unwrapExports(isByteLength_1);

var isFQDN = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFDQN;

  var _assertString2 = _interopRequireDefault(assertString_1);

  var _merge2 = _interopRequireDefault(merge_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false
  };

  function isFDQN(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge2.default)(options, default_fqdn_options);

    /* Remove the optional trailing dot before checking validity */
    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
      str = str.substring(0, str.length - 1);
    }
    var parts = str.split('.');
    if (options.require_tld) {
      var tld = parts.pop();
      if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }
      // disallow spaces
      if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
        return false;
      }
    }
    for (var part, i = 0; i < parts.length; i++) {
      part = parts[i];
      if (options.allow_underscores) {
        part = part.replace(/_/g, '');
      }
      if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }
      // disallow full-width chars
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }
      if (part[0] === '-' || part[part.length - 1] === '-') {
        return false;
      }
    }
    return true;
  }
  module.exports = exports['default'];
});

unwrapExports(isFQDN);

var isEmail_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEmail;

  var _assertString2 = _interopRequireDefault(assertString_1);

  var _merge2 = _interopRequireDefault(merge_1);

  var _isByteLength2 = _interopRequireDefault(isByteLength_1);

  var _isFQDN2 = _interopRequireDefault(isFQDN);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true
  };

  /* eslint-disable max-len */
  /* eslint-disable no-control-regex */
  var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  /* eslint-enable max-len */
  /* eslint-enable no-control-regex */

  function isEmail(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge2.default)(options, default_email_options);

    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(displayName);
      if (display_email) {
        str = display_email[1];
      } else if (options.require_display_name) {
        return false;
      }
    }

    var parts = str.split('@');
    var domain = parts.pop();
    var user = parts.join('@');

    var lower_domain = domain.toLowerCase();
    if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
      user = user.replace(/\./g, '').toLowerCase();
    }

    if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
      return false;
    }

    if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
      return false;
    }

    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }

    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

    var user_parts = user.split('.');
    for (var i = 0; i < user_parts.length; i++) {
      if (!pattern.test(user_parts[i])) {
        return false;
      }
    }

    return true;
  }
  module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var validate$7 = function validate$7(value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return isEmail(String(val));
    });
  }

  return isEmail(String(value));
};

var ext = function ext(files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  return files.every(function (file) {
    return regex.test(file.name);
  });
};

var image = function image(files) {
  return files.every(function (file) {
    return (/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name)
    );
  });
};

var validate$8 = function validate$8(value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$8(val, options);
    });
  }

  // eslint-disable-next-line
  return !!options.filter(function (option) {
    return option == value;
  }).length;
};

var isIP_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIP;

  var _assertString2 = _interopRequireDefault(assertString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  var ipv6Block = /^[0-9A-F]{1,4}$/i;

  function isIP(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    (0, _assertString2.default)(str);
    version = String(version);
    if (!version) {
      return isIP(str, 4) || isIP(str, 6);
    } else if (version === '4') {
      if (!ipv4Maybe.test(str)) {
        return false;
      }
      var parts = str.split('.').sort(function (a, b) {
        return a - b;
      });
      return parts[3] <= 255;
    } else if (version === '6') {
      var blocks = str.split(':');
      var foundOmissionBlock = false; // marker to indicate ::

      // At least some OS accept the last 32 bits of an IPv6 address
      // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
      // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
      // and '::a.b.c.d' is deprecated, but also valid.
      var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
      var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

      if (blocks.length > expectedNumberOfBlocks) {
        return false;
      }
      // initial or final ::
      if (str === '::') {
        return true;
      } else if (str.substr(0, 2) === '::') {
        blocks.shift();
        blocks.shift();
        foundOmissionBlock = true;
      } else if (str.substr(str.length - 2) === '::') {
        blocks.pop();
        blocks.pop();
        foundOmissionBlock = true;
      }

      for (var i = 0; i < blocks.length; ++i) {
        // test for a :: which can not be at the string start/end
        // since those cases have been handled above
        if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
          if (foundOmissionBlock) {
            return false; // multiple :: in address
          }
          foundOmissionBlock = true;
        } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
          // it has been checked before that the last
          // block is a valid IPv4 address
        } else if (!ipv6Block.test(blocks[i])) {
          return false;
        }
      }
      if (foundOmissionBlock) {
        return blocks.length >= 1;
      }
      return blocks.length === expectedNumberOfBlocks;
    }
    return false;
  }
  module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip = function ip(value, ref) {
  if (ref === void 0) ref = [];
  var version = ref[0];if (version === void 0) version = 4;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return isIP(val, version);
    });
  }

  return isIP(value, version);
};

/**
 * @param {Array|String} value 
 * @param {Number} length
 * @param {Number} max 
 */
var compare = function compare(value, length, max) {
  if (max === undefined) {
    return value.length === length;
  }

  // cast to number.
  max = Number(max);

  return value.length >= length && value.length <= max;
};

var length = function length(value, ref) {
  var length = ref[0];
  var max = ref[1];if (max === void 0) max = undefined;

  length = Number(length);
  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return compare(value, length, max);
};

var integer = function integer(value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return (/^-?[0-9]+$/.test(String(val))
      );
    });
  }

  return (/^-?[0-9]+$/.test(String(value))
  );
};

var max$1 = function max$1(value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

var max_value = function max_value(value, ref) {
  var max = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) <= max;
};

var mimes = function mimes(files, _mimes) {
  var regex = new RegExp(_mimes.join('|').replace('*', '.+') + "$", 'i');

  return files.every(function (file) {
    return regex.test(file.type);
  });
};

var min$1 = function min$1(value, ref) {
  var length = ref[0];

  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};

var min_value = function min_value(value, ref) {
  var min = ref[0];

  if (Array.isArray(value) || value === null || value === undefined || value === '') {
    return false;
  }

  return Number(value) >= min;
};

var validate$9 = function validate$9(value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$9(val, options);
    });
  }

  // eslint-disable-next-line
  return !options.filter(function (option) {
    return option == value;
  }).length;
};

var numeric = function numeric(value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return (/^[0-9]+$/.test(String(val))
      );
    });
  }

  return (/^[0-9]+$/.test(String(value))
  );
};

var regex = function regex(value, ref) {
  var regex = ref[0];
  var flags = ref.slice(1);

  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};

var required = function required(value, ref) {
  if (ref === void 0) ref = [];
  var invalidateFalse = ref[0];if (invalidateFalse === void 0) invalidateFalse = false;

  if (Array.isArray(value)) {
    return !!value.length;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false && invalidateFalse) {
    return false;
  }

  if (value === undefined || value === null) {
    return false;
  }

  return !!String(value).trim().length;
};

var size = function size(files, ref) {
  var size = ref[0];

  if (isNaN(size)) {
    return false;
  }

  var nSize = Number(size) * 1024;
  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var isURL_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isURL;

  var _assertString2 = _interopRequireDefault(assertString_1);

  var _isFQDN2 = _interopRequireDefault(isFQDN);

  var _isIP2 = _interopRequireDefault(isIP_1);

  var _merge2 = _interopRequireDefault(merge_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var default_url_options = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false
  };

  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  }

  function checkHost(host, matches) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];
      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }
    return false;
  }

  function isURL(url, options) {
    (0, _assertString2.default)(url);
    if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
      return false;
    }
    if (url.indexOf('mailto:') === 0) {
      return false;
    }
    options = (0, _merge2.default)(options, default_url_options);
    var protocol = void 0,
        auth = void 0,
        host = void 0,
        hostname = void 0,
        port = void 0,
        port_str = void 0,
        split = void 0,
        ipv6 = void 0;

    split = url.split('#');
    url = split.shift();

    split = url.split('?');
    url = split.shift();

    split = url.split('://');
    if (split.length > 1) {
      protocol = split.shift();
      if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (options.require_protocol) {
      return false;
    } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
      split[0] = url.substr(2);
    }
    url = split.join('://');

    if (url === '') {
      return false;
    }

    split = url.split('/');
    url = split.shift();

    if (url === '' && !options.require_host) {
      return true;
    }

    split = url.split('@');
    if (split.length > 1) {
      auth = split.shift();
      if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
        return false;
      }
    }
    hostname = split.join('@');

    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = '';
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(':');
      host = split.shift();
      if (split.length) {
        port_str = split.join(':');
      }
    }

    if (port_str !== null) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    }

    if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
      return false;
    }

    host = host || ipv6;

    if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
      return false;
    }
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
      return false;
    }

    return true;
  }
  module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url = function url(value, ref) {
  if (ref === void 0) ref = [];
  var requireProtocol = ref[0];if (requireProtocol === void 0) requireProtocol = false;

  var options = { require_protocol: !!requireProtocol, allow_underscores: true };
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return isURL(val, options);
    });
  }

  return isURL(value, options);
};

/* eslint-disable camelcase */
var Rules = {
  after: after,
  alpha_dash: validate$1,
  alpha_num: validate$2,
  alpha_spaces: validate$3,
  alpha: validate,
  before: before,
  between: validate$4,
  confirmed: confirmed,
  credit_card: credit_card,
  date_between: date_between,
  date_format: date_format,
  decimal: validate$5,
  digits: validate$6,
  dimensions: dimensions,
  email: validate$7,
  ext: ext,
  image: image,
  in: validate$8,
  integer: integer,
  length: length,
  ip: ip,
  max: max$1,
  max_value: max_value,
  mimes: mimes,
  min: min$1,
  min_value: min_value,
  not_in: validate$9,
  numeric: numeric,
  regex: regex,
  required: required,
  size: size,
  url: url
};

// 

var normalize = function normalize(fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function (prev, curr) {
      if (~curr.indexOf('.')) {
        prev[curr.split('.')[1]] = curr;
      } else {
        prev[curr] = curr;
      }

      return prev;
    }, {});
  }

  return fields;
};

/**
 * Maps fields to computed functions.
 */
var mapFields = function mapFields(fields) {
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function (prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField() {
      // if field exists
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }

      // if it has a scope defined
      var index = field.indexOf('.');
      if (index <= 0) {
        return {};
      }

      var ref = field.split('.');
      var scope = ref[0];
      var name = ref.slice(1);
      scope = this.$validator.flags["$" + scope];
      name = name.join('.');

      if (scope && scope[name]) {
        return scope[name];
      }

      return {};
    };

    return prev;
  }, {});
};

var version = '2.0.0-rc.21';

var rulesPlugin = function rulesPlugin(ref) {
  var Validator$$1 = ref.Validator;

  Object.keys(Rules).forEach(function (rule) {
    Validator$$1.extend(rule, Rules[rule]);
  });

  // Merge the english messages.
  Validator$$1.localize('en', locale);
};

use(rulesPlugin);

var index_esm = {
  install: install,
  use: use,
  directive: directive,
  mixin: mixin,
  mapFields: mapFields,
  Validator: Validator,
  ErrorBag: ErrorBag,
  Rules: Rules,
  version: version
};

exports.install = install;
exports.use = use;
exports.directive = directive;
exports.mixin = mixin;
exports.mapFields = mapFields;
exports.Validator = Validator;
exports.ErrorBag = ErrorBag;
exports.Rules = Rules;
exports.version = version;
exports.default = index_esm;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["vue-faqs"] = factory();else root["vue-faqs"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 16);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var bind = __webpack_require__(10);
      var isBuffer = __webpack_require__(34);

      /*global toString:true*/

      // utils is a library of generic helper functions non-specific to axios

      var toString = Object.prototype.toString;

      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function isArray(val) {
        return toString.call(val) === '[object Array]';
      }

      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      function isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
      }

      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }

      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }

      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */
      function isString(val) {
        return typeof val === 'string';
      }

      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */
      function isNumber(val) {
        return typeof val === 'number';
      }

      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */
      function isUndefined(val) {
        return typeof val === 'undefined';
      }

      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function isObject(val) {
        return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object';
      }

      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      function isDate(val) {
        return toString.call(val) === '[object Date]';
      }

      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      function isFile(val) {
        return toString.call(val) === '[object File]';
      }

      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */
      function isBlob(val) {
        return toString.call(val) === '[object Blob]';
      }

      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }

      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }

      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
      }

      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
      function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }

      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       */
      function isStandardBrowserEnv() {
        if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          return false;
        }
        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }

      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === 'undefined') {
          return;
        }

        // Force an array if not already something iterable
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof2(obj)) !== 'object' && !isArray(obj)) {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }

      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */
      function merge() /* obj1, obj2, obj3, ... */{
        var result = {};
        function assignValue(val, key) {
          if (_typeof2(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object') {
            result[key] = merge(result[key], val);
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }

      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      /* globals __VUE_SSR_CONTEXT__ */

      // this module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle

      module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, injectStyles, scopeId, moduleIdentifier /* server only */
      ) {
        var esModule;
        var scriptExports = rawScriptExports = rawScriptExports || {};

        // ES6 modules interop
        var type = _typeof2(rawScriptExports.default);
        if (type === 'object' || type === 'function') {
          esModule = rawScriptExports;
          scriptExports = rawScriptExports.default;
        }

        // Vue.extend constructor export interop
        var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

        // render functions
        if (compiledTemplate) {
          options.render = compiledTemplate.render;
          options.staticRenderFns = compiledTemplate.staticRenderFns;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function hook(context) {
            // 2.3 injection
            context = context || // cached call
            this.$vnode && this.$vnode.ssrContext || // stateful
            this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = injectStyles;
        }

        if (hook) {
          var functional = options.functional;
          var existing = functional ? options.render : options.beforeCreate;
          if (!functional) {
            // inject component registration as beforeCreate hook
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          } else {
            // register for functioal component in vue file
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return existing(h, context);
            };
          }
        }

        return {
          esModule: esModule,
          exports: scriptExports,
          options: options
        };
      };

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(21);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

      var Bus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();
      /* harmony default export */__webpack_exports__["a"] = Bus;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        var utils = __webpack_require__(0);
        var normalizeHeaderName = __webpack_require__(36);

        var DEFAULT_CONTENT_TYPE = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };

        function setContentTypeIfUnset(headers, value) {
          if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
            headers['Content-Type'] = value;
          }
        }

        function getDefaultAdapter() {
          var adapter;
          if (typeof XMLHttpRequest !== 'undefined') {
            // For browsers use XHR adapter
            adapter = __webpack_require__(12);
          } else if (typeof process !== 'undefined') {
            // For node use HTTP adapter
            adapter = __webpack_require__(12);
          }
          return adapter;
        }

        var defaults = {
          adapter: getDefaultAdapter(),

          transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
              return data;
            }
            if (utils.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
              setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
              return data.toString();
            }
            if (utils.isObject(data)) {
              setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
              return JSON.stringify(data);
            }
            return data;
          }],

          transformResponse: [function transformResponse(data) {
            /*eslint no-param-reassign:0*/
            if (typeof data === 'string') {
              try {
                data = JSON.parse(data);
              } catch (e) {/* Ignore */}
            }
            return data;
          }],

          timeout: 0,

          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',

          maxContentLength: -1,

          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          }
        };

        defaults.headers = {
          common: {
            'Accept': 'application/json, text/plain, */*'
          }
        };

        utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
          defaults.headers[method] = {};
        });

        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });

        module.exports = defaults;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(11));

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchForm_vue__ = __webpack_require__(19);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af79af54_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_SearchForm_vue__ = __webpack_require__(23);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchForm_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af79af54_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_SearchForm_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/SearchForm.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] SearchForm.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-af79af54", Component.options);
          } else {
            hotAPI.reload("data-v-af79af54", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      (function (global, factory) {
        true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global['vue-scrollto'] = factory();
      })(this, function () {
        'use strict';

        /**
         * https://github.com/gre/bezier-easing
         * BezierEasing - use bezier curve for transition easing function
         * by Gaëtan Renaudeau 2014 - 2015 – MIT License
         */

        // These values are established by empiricism with tests (tradeoff: performance VS precision)

        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 0.001;
        var SUBDIVISION_PRECISION = 0.0000001;
        var SUBDIVISION_MAX_ITERATIONS = 10;

        var kSplineTableSize = 11;
        var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

        var float32ArraySupported = typeof Float32Array === 'function';

        function A(aA1, aA2) {
          return 1.0 - 3.0 * aA2 + 3.0 * aA1;
        }
        function B(aA1, aA2) {
          return 3.0 * aA2 - 6.0 * aA1;
        }
        function C(aA1) {
          return 3.0 * aA1;
        }

        // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
        function calcBezier(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }

        // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
        function getSlope(aT, aA1, aA2) {
          return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
        }

        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX,
              currentT,
              i = 0;
          do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
              aB = currentT;
            } else {
              aA = currentT;
            }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
        }

        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
              return aGuessT;
            }
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }

        var index = function bezier(mX1, mY1, mX2, mY2) {
          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
            throw new Error('bezier x values must be in [0, 1] range');
          }

          // Precompute samples table
          var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          }

          function getTForX(aX) {
            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }
            --currentSample;

            // Interpolate to provide an initial guess for t
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;

            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
              return guessForT;
            } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
          }

          return function BezierEasing(x) {
            if (mX1 === mY1 && mX2 === mY2) {
              return x; // linear
            }
            // Because JavaScript number are imprecise, we should guarantee the extremes are right.
            if (x === 0) {
              return 0;
            }
            if (x === 1) {
              return 1;
            }
            return calcBezier(getTForX(x), mY1, mY2);
          };
        };

        var easings = {
          ease: [0.25, 0.1, 0.25, 1.0],
          linear: [0.00, 0.0, 1.00, 1.0],
          "ease-in": [0.42, 0.0, 1.00, 1.0],
          "ease-out": [0.00, 0.0, 0.58, 1.0],
          "ease-in-out": [0.42, 0.0, 0.58, 1.0]
        };

        var _ = {
          $: function $(selector) {
            if (typeof selector !== "string") {
              return selector;
            }
            return document.querySelector(selector);
          },
          on: function on(element, events, handler) {
            if (!(events instanceof Array)) {
              events = [events];
            }
            for (var i = 0; i < events.length; i++) {
              element.addEventListener(events[i], handler);
            }
          },
          off: function off(element, events, handler) {
            if (!(events instanceof Array)) {
              events = [events];
            }
            for (var i = 0; i < events.length; i++) {
              element.removeEventListener(events[i], handler);
            }
          },
          cumulativeOffset: function cumulativeOffset(element) {
            var top = 0;
            var left = 0;

            do {
              top += element.offsetTop || 0;
              left += element.offsetLeft || 0;
              element = element.offsetParent;
            } while (element);

            return {
              top: top,
              left: left
            };
          }
        };

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var abortEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

        var defaults$$1 = {
          container: "body",
          duration: 500,
          easing: "ease",
          offset: 0,
          cancelable: true,
          onDone: false,
          onCancel: false,
          x: true,
          y: false
        };

        function setDefaults(options) {
          defaults$$1 = _extends({}, defaults$$1, options);
        }

        var scroller = function scroller() {
          var element = void 0; // element to scroll to
          var container = void 0; // container to scroll
          var duration = void 0; // duration of the scrolling
          var easing = void 0; // easing to be used when scrolling
          var offset = void 0; // offset to be added (subtracted)
          var cancelable = void 0; // indicates if user can cancel the scroll or not.
          var onDone = void 0; // callback when scrolling is done
          var onCancel = void 0; // callback when scrolling is canceled / aborted
          var x = void 0; // scroll on x axis
          var y = void 0; // scroll on y axis

          var initialX = void 0; // initial X of container
          var targetX = void 0; // target X of container
          var initialY = void 0; // initial Y of container
          var targetY = void 0; // target Y of container
          var diffX = void 0; // difference
          var diffY = void 0; // difference

          var abort = void 0; // is scrolling aborted

          var abortEv = void 0; // event that aborted scrolling
          var abortFn = function abortFn(e) {
            if (!cancelable) return;
            abortEv = e;
            abort = true;
          };
          var easingFn = void 0;

          var timeStart = void 0; // time when scrolling started
          var timeElapsed = void 0; // time elapsed since scrolling started

          var progress = void 0; // progress

          function scrollTop(container) {
            var scrollTop = container.scrollTop;

            if (container.tagName.toLowerCase() === "body") {
              // in firefox body.scrollTop always returns 0
              // thus if we are trying to get scrollTop on a body tag
              // we need to get it from the documentElement
              scrollTop = scrollTop || document.documentElement.scrollTop;
            }

            return scrollTop;
          }

          function scrollLeft(container) {
            var scrollLeft = container.scrollLeft;

            if (container.tagName.toLowerCase() === "body") {
              // in firefox body.scrollLeft always returns 0
              // thus if we are trying to get scrollLeft on a body tag
              // we need to get it from the documentElement
              scrollLeft = scrollLeft || document.documentElement.scrollLeft;
            }

            return scrollLeft;
          }

          function step(timestamp) {
            if (abort) return done();
            if (!timeStart) timeStart = timestamp;

            timeElapsed = timestamp - timeStart;

            progress = Math.min(timeElapsed / duration, 1);
            progress = easingFn(progress);

            topLeft(container, initialY + diffY * progress, initialX + diffX * progress);

            timeElapsed < duration ? window.requestAnimationFrame(step) : done();
          }

          function done() {
            if (!abort) topLeft(container, targetY, targetX);
            timeStart = false;

            _.off(container, abortEvents, abortFn);
            if (abort && onCancel) onCancel(abortEv);
            if (!abort && onDone) onDone();
          }

          function topLeft(element, top, left) {
            if (x) element.scrollTop = top;
            if (y) element.scrollLeft = left;
            if (element.tagName.toLowerCase() === "body") {
              // in firefox body.scrollTop doesn't scroll the page
              // thus if we are trying to scrollTop on a body tag
              // we need to scroll on the documentElement
              if (x) document.documentElement.scrollTop = top;
              if (y) document.documentElement.scrollLeft = left;
            }
          }

          function scrollTo(target, _duration) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if ((typeof _duration === "undefined" ? "undefined" : _typeof(_duration)) === "object") {
              options = _duration;
            } else if (typeof _duration === "number") {
              options.duration = _duration;
            }

            element = _.$(target);

            if (!element) {
              return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + target);
            }

            container = _.$(options.container || defaults$$1.container);
            duration = options.duration || defaults$$1.duration;
            easing = options.easing || defaults$$1.easing;
            offset = options.offset || defaults$$1.offset;
            cancelable = options.cancelable !== false;
            onDone = options.onDone || defaults$$1.onDone;
            onCancel = options.onCancel || defaults$$1.onCancel;
            x = options.x === undefined ? defaults$$1.x : options.x;
            y = options.y === undefined ? defaults$$1.y : options.y;

            var cumulativeOffset = _.cumulativeOffset(element);

            initialY = scrollTop(container);
            targetY = cumulativeOffset.top - container.offsetTop + offset;

            initialX = scrollLeft(container);
            targetX = cumulativeOffset.left - container.offsetLeft + offset;

            abort = false;

            diffY = targetY - initialY;
            diffX = targetX - initialX;

            if (typeof easing === "string") {
              easing = easings[easing] || easings["ease"];
            }

            easingFn = index.apply(index, easing);

            if (!diffY && !diffX) return;

            _.on(container, abortEvents, abortFn, { passive: true });

            window.requestAnimationFrame(step);

            return function () {
              abortEv = null;
              abort = true;
            };
          }

          return scrollTo;
        };

        var _scroller = scroller();

        var bindings = []; // store binding data

        function deleteBinding(el) {
          for (var i = 0; i < bindings.length; ++i) {
            if (bindings[i].el === el) {
              bindings.splice(i, 1);
              return true;
            }
          }
          return false;
        }

        function findBinding(el) {
          for (var i = 0; i < bindings.length; ++i) {
            if (bindings[i].el === el) {
              return bindings[i];
            }
          }
        }

        function getBinding(el) {
          var binding = findBinding(el);

          if (binding) {
            return binding;
          }

          bindings.push(binding = {
            el: el,
            binding: {}
          });

          return binding;
        }

        function handleClick(e) {
          e.preventDefault();
          var ctx = getBinding(this).binding;

          if (typeof ctx.value === "string") {
            return _scroller(ctx.value);
          }
          _scroller(ctx.value.el || ctx.value.element, ctx.value);
        }

        var VueScrollTo$1 = {
          bind: function bind(el, binding) {
            getBinding(el).binding = binding;
            _.on(el, "click", handleClick);
          },
          unbind: function unbind(el) {
            deleteBinding(el);
            _.off(el, "click", handleClick);
          },
          update: function update(el, binding) {
            getBinding(el).binding = binding;
          },

          scrollTo: _scroller,
          bindings: bindings
        };

        var install = function install(Vue, options) {
          if (options) setDefaults(options);
          Vue.directive("scroll-to", VueScrollTo$1);
          Vue.prototype.$scrollTo = VueScrollTo$1.scrollTo;
        };

        if (typeof window !== "undefined" && window.Vue) {
          window.VueScrollTo = VueScrollTo$1;
          window.VueScrollTo.setDefaults = setDefaults;
          Vue.use(install);
        }

        VueScrollTo$1.install = install;

        return VueScrollTo$1;
      });

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Question_vue__ = __webpack_require__(24);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26be0da0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Question_vue__ = __webpack_require__(25);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Question_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26be0da0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Question_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/Question.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] Question.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-26be0da0", Component.options);
          } else {
            hotAPI.reload("data-v-26be0da0", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 7 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(26);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_104b2e48_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(27);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_104b2e48_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/Category.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] Category.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-104b2e48", Component.options);
          } else {
            hotAPI.reload("data-v-104b2e48", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 8 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CategorySelect_vue__ = __webpack_require__(28);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a01dd64_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CategorySelect_vue__ = __webpack_require__(29);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CategorySelect_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a01dd64_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_CategorySelect_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/CategorySelect.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] CategorySelect.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-2a01dd64", Component.options);
          } else {
            hotAPI.reload("data-v-2a01dd64", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 9 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Suggestion_vue__ = __webpack_require__(30);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_084da3ce_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Suggestion_vue__ = __webpack_require__(31);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Suggestion_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_084da3ce_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Suggestion_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/Suggestion.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] Suggestion.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-084da3ce", Component.options);
          } else {
            hotAPI.reload("data-v-084da3ce", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };

      /***/
    },
    /* 11 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        var utils = __webpack_require__(0);
        var settle = __webpack_require__(37);
        var buildURL = __webpack_require__(39);
        var parseHeaders = __webpack_require__(40);
        var isURLSameOrigin = __webpack_require__(41);
        var createError = __webpack_require__(13);
        var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(42);

        module.exports = function xhrAdapter(config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;

            if (utils.isFormData(requestData)) {
              delete requestHeaders['Content-Type']; // Let the browser set it
            }

            var request = new XMLHttpRequest();
            var loadEvent = 'onreadystatechange';
            var xDomain = false;

            // For IE 8/9 CORS support
            // Only supports POST and GET calls and doesn't returns the response headers.
            // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
            if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
              request = new window.XDomainRequest();
              loadEvent = 'onload';
              xDomain = true;
              request.onprogress = function handleProgress() {};
              request.ontimeout = function handleTimeout() {};
            }

            // HTTP basic authentication
            if (config.auth) {
              var username = config.auth.username || '';
              var password = config.auth.password || '';
              requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
            }

            request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

            // Set the request timeout in MS
            request.timeout = config.timeout;

            // Listen for ready state
            request[loadEvent] = function handleLoad() {
              if (!request || request.readyState !== 4 && !xDomain) {
                return;
              }

              // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              }

              // Prepare the response
              var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
              var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
              var response = {
                data: responseData,
                // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
                status: request.status === 1223 ? 204 : request.status,
                statusText: request.status === 1223 ? 'No Content' : request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
              };

              settle(resolve, reject, response);

              // Clean up request
              request = null;
            };

            // Handle low level network errors
            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(createError('Network Error', config, null, request));

              // Clean up request
              request = null;
            };

            // Handle timeout
            request.ontimeout = function handleTimeout() {
              reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

              // Clean up request
              request = null;
            };

            // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.
            if (utils.isStandardBrowserEnv()) {
              var cookies = __webpack_require__(43);

              // Add xsrf header
              var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

              if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
              }
            }

            // Add headers to the request
            if ('setRequestHeader' in request) {
              utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                  // Remove Content-Type if data is undefined
                  delete requestHeaders[key];
                } else {
                  // Otherwise add header to the request
                  request.setRequestHeader(key, val);
                }
              });
            }

            // Add withCredentials to request if needed
            if (config.withCredentials) {
              request.withCredentials = true;
            }

            // Add responseType to request if needed
            if (config.responseType) {
              try {
                request.responseType = config.responseType;
              } catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config.responseType !== 'json') {
                  throw e;
                }
              }
            }

            // Handle progress if needed
            if (typeof config.onDownloadProgress === 'function') {
              request.addEventListener('progress', config.onDownloadProgress);
            }

            // Not all browsers support upload events
            if (typeof config.onUploadProgress === 'function' && request.upload) {
              request.upload.addEventListener('progress', config.onUploadProgress);
            }

            if (config.cancelToken) {
              // Handle cancellation
              config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                  return;
                }

                request.abort();
                reject(cancel);
                // Clean up request
                request = null;
              });
            }

            if (requestData === undefined) {
              requestData = null;
            }

            // Send the request
            request.send(requestData);
          });
        };

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(11));

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var enhanceError = __webpack_require__(38);

      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */

      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      };

      Cancel.prototype.__CANCEL__ = true;

      module.exports = Cancel;

      /***/
    },
    /* 16 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__component_FaqContainer_vue__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__component_SearchForm_vue__ = __webpack_require__(4);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__component_Question_vue__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__component_Category_vue__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__component_CategorySelect_vue__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__component_Suggestion_vue__ = __webpack_require__(9);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "FaqContainer", function () {
        return __WEBPACK_IMPORTED_MODULE_0__component_FaqContainer_vue__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SearchForm", function () {
        return __WEBPACK_IMPORTED_MODULE_1__component_SearchForm_vue__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Question", function () {
        return __WEBPACK_IMPORTED_MODULE_2__component_Question_vue__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Category", function () {
        return __WEBPACK_IMPORTED_MODULE_3__component_Category_vue__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CategorySelect", function () {
        return __WEBPACK_IMPORTED_MODULE_4__component_CategorySelect_vue__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Suggestion", function () {
        return __WEBPACK_IMPORTED_MODULE_5__component_Suggestion_vue__["a"];
      });

      var install = function install(Vue) {
        Vue.component('faq-container', __WEBPACK_IMPORTED_MODULE_0__component_FaqContainer_vue__["a" /* default */]);
        Vue.component('search-form', __WEBPACK_IMPORTED_MODULE_1__component_SearchForm_vue__["a" /* default */]);
        Vue.component('question', __WEBPACK_IMPORTED_MODULE_2__component_Question_vue__["a" /* default */]);
        Vue.component('category', __WEBPACK_IMPORTED_MODULE_3__component_Category_vue__["a" /* default */]);
        Vue.component('category-select', __WEBPACK_IMPORTED_MODULE_4__component_CategorySelect_vue__["a" /* default */]);
        Vue.component('suggestion', __WEBPACK_IMPORTED_MODULE_5__component_Suggestion_vue__["a" /* default */]);
      };

      /* harmony default export */__webpack_exports__["default"] = {
        install: install
      };

      /***/
    },
    /* 17 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FaqContainer_vue__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa961856_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FaqContainer_vue__ = __webpack_require__(51);
      var disposed = false;
      var normalizeComponent = __webpack_require__(1);
      /* script */

      /* template */

      /* styles */
      var __vue_styles__ = null;
      /* scopeId */
      var __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FaqContainer_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa961856_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_FaqContainer_vue__["a" /* default */], __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src/component/FaqContainer.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }
      if (Component.options.functional) {
        console.error("[vue-loader] FaqContainer.vue: functional components are not supported with templates, they should use render functions.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-aa961856", Component.options);
          } else {
            hotAPI.reload("data-v-aa961856", Component.options);
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["a"] = Component.exports;

      /***/
    },
    /* 18 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__SearchForm_vue__ = __webpack_require__(4);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Question_vue__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Category_vue__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__CategorySelect_vue__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__Suggestion_vue__ = __webpack_require__(9);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__bus__ = __webpack_require__(2);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(32);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
      //
      //
      //
      //
      //
      //

      function increment() {
        var count = 1;
        return function () {
          return count++;
        };
      }

      var index = increment();

      /* harmony default export */__webpack_exports__["a"] = {
        props: {
          url: {
            type: String
          },
          cdn: {
            value: String
          },
          variable: {},
          urldisabled: {},
          jsoncontainer: {
            type: String
          },
          stripquote: {}
        },
        components: {
          SearchForm: __WEBPACK_IMPORTED_MODULE_0__SearchForm_vue__["a" /* default */],
          Question: __WEBPACK_IMPORTED_MODULE_1__Question_vue__["a" /* default */],
          Category: __WEBPACK_IMPORTED_MODULE_2__Category_vue__["a" /* default */],
          CategorySelect: __WEBPACK_IMPORTED_MODULE_3__CategorySelect_vue__["a" /* default */],
          Suggestion: __WEBPACK_IMPORTED_MODULE_4__Suggestion_vue__["a" /* default */]
        },
        methods: {
          checkIfValidCategory: function checkIfValidCategory(faqs, category) {
            return faqs.filter(function (item) {
              return item.link == category;
            })[0];
          },
          checkIfValidQuestion: function checkIfValidQuestion(faqs, category, question) {
            var arr = faqs.filter(function (item) {
              return item.link == category;
            })[0];
            return arr.questions.filter(function (item) {
              return item.link == question;
            })[0];
          },
          breakUrl: function breakUrl(base) {
            var path = window.location.href;
            var paths = path.replace(base, '');
            paths = paths.split('/');
            var potentialCategory = paths[0];
            var potentialQuestion = paths[1];

            return {
              potentialCategory: potentialCategory,
              potentialQuestion: potentialQuestion
            };
          },
          handleNested: function handleNested(faqs, category, question) {
            var categoryObject = this.checkIfValidCategory(faqs, category);
            if (categoryObject) {
              var questionObject = this.checkIfValidQuestion(categoryObject.link, question);
              if (!categoryObject || !questionObject) {
                window.location.href = this.url;
                return;
              }

              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setCategory', categoryObject.link);
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setQuestions', categoryObject.questions);

              var mappedQuestions = categoryObject.questions.map(function (obj) {
                if (questionObject.id === obj.id) {
                  obj.active = 'initialized';
                }
                return obj;
              });

              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setInitialQuestion', mappedQuestions);
            } else {
              window.location.href = this.url;
            }
          },
          handleCategory: function handleCategory(faqs, category) {
            var categoryObject = this.checkIfValidCategory(faqs, category);

            if (categoryObject) {
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setCategory', categoryObject.link);
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setQuestions', categoryObject.questions);
            } else {
              window.location.href = this.url;
            }
          },
          checkUrl: function checkUrl(faqs, base) {
            var _breakUrl = this.breakUrl(base),
                potentialCategory = _breakUrl.potentialCategory,
                potentialQuestion = _breakUrl.potentialQuestion;

            if (potentialCategory && potentialQuestion) {
              this.handleNested(faqs, potentialCategory, potentialQuestion);
            } else if (potentialCategory && !potentialQuestion) {
              this.handleCategory(faqs, potentialCategory);
            } else {
              this.setDefault(faqs);
            }
          },
          setDefault: function setDefault(faqs) {
            __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setCategory', faqs[0].title);
            __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setInitialCategory', faqs[0].title, faqs[0]);
            __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setQuestions', faqs[0].questions.map(function (item) {
              item.parent_link = faqs[0].title;
              return item;
            }));
          },
          extractQuestions: function extractQuestions(faqs) {
            var arr = [];
            faqs.forEach(function (faq) {
              faq.questions.forEach(function (question) {
                question.parent_link = faq.title;
                arr.push(question);
              });
            });

            return arr;
          }
        },
        mounted: function mounted() {
          var _this = this;

          if (this.urldisabled) {
            __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('urlDisabled', true);
            if (this.cdn) {
              __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(this.cdn).then(function (resp) {
                __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setFaqs', resp.data);
                __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setAllQuestions', _this.extractQuestions(resp.data));
                _this.setDefault(resp.data);
              });
            }

            if (this.jsoncontainer) {
              var content = document.getElementById(this.jsoncontainer).textContent;

              var faqs = JSON.parse(content).map(function (item) {
                item.questions.map(function (q) {
                  q.id = index();
                  q.active = false;
                  return q;
                });

                return item;
              });

              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setFaqs', faqs);
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setAllQuestions', this.extractQuestions(faqs));
              this.setDefault(faqs);
            }
          } else {
            if (this.cdn) {
              __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(this.cdn).then(function (resp) {
                __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setBaseUrl', _this.url);
                __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setFaqs', resp.data);
                __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setAllQuestions', _this.extractQuestions(resp.data));
                _this.checkUrl(resp.data, _this.url);
              });
            }

            if (this.jsoncontainer) {
              var _content = document.getElementById(this.jsoncontainer).textContent;

              var _faqs = JSON.parse(_content).map(function (item) {
                item.questions.map(function (q) {
                  q.id = index();
                  q.active = false;
                  return q;
                });

                return item;
              });

              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setBaseUrl', this.url);
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setFaqs', _faqs);
              __WEBPACK_IMPORTED_MODULE_5__bus__["a" /* default */].$emit('setAllQuestions', this.extractQuestions(_faqs));
              this.checkUrl(_faqs, this.url);
            }
          }
        }
      };

      /***/
    },
    /* 19 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_vue_scrollto__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vue_scrollto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_scrollto__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__(20);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__bus__ = __webpack_require__(2);
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */__webpack_exports__["a"] = {
        props: {
          header: {
            default: 'Frequently Asked Questions'
          },
          searchbtn: {
            default: 'Search'
          }
        },
        data: function data() {
          return {
            current: 0,
            showForm: false,
            activeForm: false,
            searchText: '',
            questions: [],
            searchResults: [],
            faqs: []
          };
        },
        methods: {
          filterResults: function filterResults(e) {
            var questions = Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["a" /* filterSearch */])(this.questions, e.target.value, 5);
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('inputChange', e.target.value);
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('updateSearchResults', questions);
          },
          up: function up() {
            // When up pressed while suggestions are open
            if (this.current > 0) {
              this.current--;
              __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('updateIndex', this.current);
            }
          },
          down: function down() {
            // When up pressed while suggestions are open
            if (this.current < this.searchResults.length - 1) {
              this.current++;
              __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('updateIndex', this.current);
            }
          },
          handleShow: function handleShow(input) {
            this.searchText = '';
            this.showForm = !this.showForm;
            this.activeForm = !this.activeForm;
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('showSearch', this.showForm);
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('activeForm', this.activeForm);
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('inputChange', input);

            this.searchText = '';
            if (this.showForm == false) {
              __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('updateSearchResults', []);
            }
            if (this.showForm == true) {
              this.$refs.search.focus();
            }
          },
          selectQuestion: function selectQuestion() {
            if (this.searchResults.length == 0) {
              return;
            }
            var question = this.searchResults[this.current];
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('showSearch', false);
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('entered', true);
            this.current = 0;
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('updateIndex', 0);
            this.searchText = question.title;
            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('setCategory', question.parent_link);

            var mappedQuestions = this.faqs.filter(function (item) {
              return question.parent_link == item.title;
            })[0];

            mappedQuestions.questions.map(function (item) {
              if (item.title == question.title) {
                item.active = true;
              } else {
                item.active = 'hidden';
              }
            });

            __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$emit('setQuestions', mappedQuestions.questions);
            setTimeout(function () {
              Object(__WEBPACK_IMPORTED_MODULE_0_vue_scrollto__["scrollTo"])('a[name="' + question.title + '"]');
            }, 100);

            if (!this.urlDisabled) {
              var base = this.url;
              var newUrl = base + question.parent_link + '/' + question.link;
              history.replaceState({}, null, newUrl);
            }
          }
        },
        mounted: function mounted() {
          var _this = this;

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('setBaseUrl', function (url) {
            _this.url = url;
          });

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('setAllQuestions', function (questions) {
            _this.questions = questions;
          });

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('updateSearchResults', function (results) {
            _this.searchResults = results;
          });

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('setFaqs', function (faqs) {
            _this.faqs = faqs;
          });

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('updateText', function (val) {
            _this.searchText = val;
          });

          __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* default */].$on('urlDisabled', function (bool) {
            _this.urlDisabled = bool;
          });
        }
      };

      /***/
    },
    /* 20 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* unused harmony export filtered */
      /* unused harmony export clearActive */
      /* unused harmony export clearActiveNoAnimate */
      /* harmony export (immutable) */
      __webpack_exports__["a"] = filterSearch;
      // TODO manage active states without hardcoded initalize variable
      // TODO common words
      function compareArrayPartial(title, inputWord) {
        var count = 0;
        var arr = title.filter(function (word) {
          if (inputWord.filter(function (currentWord) {
            if (word === currentWord) {
              count += 1;
            }
            return word.slice(0, currentWord.length) === currentWord;
          }).length) {
            return word;
          }
        });

        return {
          arr: arr,
          count: count
        };
      }

      function filtered(item, value) {
        var title = item.title.replace(/[`~!@#$%^&*()_|+\-=?’\;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
        var userInput = value.replace(/[`~!@#$%^&*()_|+\-=?'\;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();

        return compareArrayPartial(title.split(' '), userInput.split(' '));
      }

      function clearActive(arr) {
        return arr.map(function (obj) {
          obj.active = false;
          return obj;
        });
      }

      function clearActiveNoAnimate(arr) {
        return arr.map(function (obj) {
          obj.active = 'hidden';
          return obj;
        });
      }

      function filterSearch(arr, value, limit) {
        var results = [];
        arr.forEach(function (item) {
          if (filtered(item, value).arr.length) {
            item.count = filtered(item, value).count;
            results.push(item);
          }
        });

        return results.sort(function (a, b) {
          return b.count - a.count;
        }).slice(0, limit);
      }

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        /*!
        * Vue.js v2.4.2
        * (c) 2014-2017 Evan You
        * Released under the MIT License.
        */
        !function (t, e) {
          true ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Vue = e();
        }(this, function () {
          "use strict";
          function t(t) {
            return void 0 === t || null === t;
          }function e(t) {
            return void 0 !== t && null !== t;
          }function n(t) {
            return !0 === t;
          }function r(t) {
            return !1 === t;
          }function i(t) {
            return "string" == typeof t || "number" == typeof t || "boolean" == typeof t;
          }function o(t) {
            return null !== t && "object" == (typeof t === 'undefined' ? 'undefined' : _typeof2(t));
          }function a(t) {
            return "[object Object]" === pi.call(t);
          }function s(t) {
            return "[object RegExp]" === pi.call(t);
          }function c(t) {
            var e = parseFloat(t);return e >= 0 && Math.floor(e) === e && isFinite(t);
          }function u(t) {
            return null == t ? "" : "object" == (typeof t === 'undefined' ? 'undefined' : _typeof2(t)) ? JSON.stringify(t, null, 2) : String(t);
          }function l(t) {
            var e = parseFloat(t);return isNaN(e) ? t : e;
          }function f(t, e) {
            for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) {
              n[r[i]] = !0;
            }return e ? function (t) {
              return n[t.toLowerCase()];
            } : function (t) {
              return n[t];
            };
          }function p(t, e) {
            if (t.length) {
              var n = t.indexOf(e);if (n > -1) return t.splice(n, 1);
            }
          }function d(t, e) {
            return hi.call(t, e);
          }function v(t) {
            var e = Object.create(null);return function (n) {
              return e[n] || (e[n] = t(n));
            };
          }function h(t, e) {
            function n(n) {
              var r = arguments.length;return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
            }return n._length = t.length, n;
          }function m(t, e) {
            e = e || 0;for (var n = t.length - e, r = new Array(n); n--;) {
              r[n] = t[n + e];
            }return r;
          }function y(t, e) {
            for (var n in e) {
              t[n] = e[n];
            }return t;
          }function g(t) {
            for (var e = {}, n = 0; n < t.length; n++) {
              t[n] && y(e, t[n]);
            }return e;
          }function _(t, e, n) {}function b(t, e) {
            if (t === e) return !0;var n = o(t),
                r = o(e);if (!n || !r) return !n && !r && String(t) === String(e);try {
              var i = Array.isArray(t),
                  a = Array.isArray(e);if (i && a) return t.length === e.length && t.every(function (t, n) {
                return b(t, e[n]);
              });if (i || a) return !1;var s = Object.keys(t),
                  c = Object.keys(e);return s.length === c.length && s.every(function (n) {
                return b(t[n], e[n]);
              });
            } catch (t) {
              return !1;
            }
          }function $(t, e) {
            for (var n = 0; n < t.length; n++) {
              if (b(t[n], e)) return n;
            }return -1;
          }function C(t) {
            var e = !1;return function () {
              e || (e = !0, t.apply(this, arguments));
            };
          }function w(t) {
            var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
          }function x(t, e, n, r) {
            Object.defineProperty(t, e, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
          }function A(t) {
            if (!Ti.test(t)) {
              var e = t.split(".");return function (t) {
                for (var n = 0; n < e.length; n++) {
                  if (!t) return;t = t[e[n]];
                }return t;
              };
            }
          }function k(t, e, n) {
            if (ki.errorHandler) ki.errorHandler.call(null, t, e, n);else {
              if (!ji || "undefined" == typeof console) throw t;console.error(t);
            }
          }function O(t) {
            return "function" == typeof t && /native code/.test(t.toString());
          }function T(t) {
            Gi.target && Zi.push(Gi.target), Gi.target = t;
          }function S() {
            Gi.target = Zi.pop();
          }function E(t, e, n) {
            t.__proto__ = e;
          }function j(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
              var o = n[r];x(t, o, e[o]);
            }
          }function L(t, e) {
            if (o(t)) {
              var n;return d(t, "__ob__") && t.__ob__ instanceof eo ? n = t.__ob__ : to.shouldConvert && !zi() && (Array.isArray(t) || a(t)) && Object.isExtensible(t) && !t._isVue && (n = new eo(t)), e && n && n.vmCount++, n;
            }
          }function N(t, e, n, r, i) {
            var o = new Gi(),
                a = Object.getOwnPropertyDescriptor(t, e);if (!a || !1 !== a.configurable) {
              var s = a && a.get,
                  c = a && a.set,
                  u = !i && L(n);Object.defineProperty(t, e, { enumerable: !0, configurable: !0, get: function get() {
                  var e = s ? s.call(t) : n;return Gi.target && (o.depend(), u && u.dep.depend(), Array.isArray(e) && D(e)), e;
                }, set: function set(e) {
                  var r = s ? s.call(t) : n;e === r || e !== e && r !== r || (c ? c.call(t, e) : n = e, u = !i && L(e), o.notify());
                } });
            }
          }function I(t, e, n) {
            if (Array.isArray(t) && c(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;if (d(t, e)) return t[e] = n, n;var r = t.__ob__;return t._isVue || r && r.vmCount ? n : r ? (N(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n);
          }function M(t, e) {
            if (Array.isArray(t) && c(e)) t.splice(e, 1);else {
              var n = t.__ob__;t._isVue || n && n.vmCount || d(t, e) && (delete t[e], n && n.dep.notify());
            }
          }function D(t) {
            for (var e = void 0, n = 0, r = t.length; n < r; n++) {
              (e = t[n]) && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && D(e);
            }
          }function P(t, e) {
            if (!e) return t;for (var n, r, i, o = Object.keys(e), s = 0; s < o.length; s++) {
              r = t[n = o[s]], i = e[n], d(t, n) ? a(r) && a(i) && P(r, i) : I(t, n, i);
            }return t;
          }function F(t, e, n) {
            return n ? t || e ? function () {
              var r = "function" == typeof e ? e.call(n) : e,
                  i = "function" == typeof t ? t.call(n) : void 0;return r ? P(r, i) : i;
            } : void 0 : e ? t ? function () {
              return P("function" == typeof e ? e.call(this) : e, "function" == typeof t ? t.call(this) : t);
            } : e : t;
          }function R(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
          }function H(t, e) {
            var n = Object.create(t || null);return e ? y(n, e) : n;
          }function B(t) {
            var e = t.props;if (e) {
              var n,
                  r,
                  i = {};if (Array.isArray(e)) for (n = e.length; n--;) {
                "string" == typeof (r = e[n]) && (i[yi(r)] = { type: null });
              } else if (a(e)) for (var o in e) {
                r = e[o], i[yi(o)] = a(r) ? r : { type: r };
              }t.props = i;
            }
          }function U(t) {
            var e = t.inject;if (Array.isArray(e)) for (var n = t.inject = {}, r = 0; r < e.length; r++) {
              n[e[r]] = e[r];
            }
          }function V(t) {
            var e = t.directives;if (e) for (var n in e) {
              var r = e[n];"function" == typeof r && (e[n] = { bind: r, update: r });
            }
          }function z(t, e, n) {
            function r(r) {
              var i = no[r] || ro;c[r] = i(t[r], e[r], n, r);
            }"function" == typeof e && (e = e.options), B(e), U(e), V(e);var i = e.extends;if (i && (t = z(t, i, n)), e.mixins) for (var o = 0, a = e.mixins.length; o < a; o++) {
              t = z(t, e.mixins[o], n);
            }var s,
                c = {};for (s in t) {
              r(s);
            }for (s in e) {
              d(t, s) || r(s);
            }return c;
          }function K(t, e, n, r) {
            if ("string" == typeof n) {
              var i = t[e];if (d(i, n)) return i[n];var o = yi(n);if (d(i, o)) return i[o];var a = gi(o);if (d(i, a)) return i[a];var s = i[n] || i[o] || i[a];return s;
            }
          }function J(t, e, n, r) {
            var i = e[t],
                o = !d(n, t),
                a = n[t];if (G(Boolean, i.type) && (o && !d(i, "default") ? a = !1 : G(String, i.type) || "" !== a && a !== bi(t) || (a = !0)), void 0 === a) {
              a = q(r, i, t);var s = to.shouldConvert;to.shouldConvert = !0, L(a), to.shouldConvert = s;
            }return a;
          }function q(t, e, n) {
            if (d(e, "default")) {
              var r = e.default;return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== W(e.type) ? r.call(t) : r;
            }
          }function W(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);return e ? e[1] : "";
          }function G(t, e) {
            if (!Array.isArray(e)) return W(e) === W(t);for (var n = 0, r = e.length; n < r; n++) {
              if (W(e[n]) === W(t)) return !0;
            }return !1;
          }function Z(t) {
            return new io(void 0, void 0, void 0, String(t));
          }function Y(t) {
            var e = new io(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.isCloned = !0, e;
          }function Q(t) {
            for (var e = t.length, n = new Array(e), r = 0; r < e; r++) {
              n[r] = Y(t[r]);
            }return n;
          }function X(t) {
            function e() {
              var t = arguments,
                  n = e.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var r = n.slice(), i = 0; i < r.length; i++) {
                r[i].apply(null, t);
              }
            }return e.fns = t, e;
          }function tt(e, n, r, i, o) {
            var a, s, c, u;for (a in e) {
              s = e[a], c = n[a], u = co(a), t(s) || (t(c) ? (t(s.fns) && (s = e[a] = X(s)), r(u.name, s, u.once, u.capture, u.passive)) : s !== c && (c.fns = s, e[a] = c));
            }for (a in n) {
              t(e[a]) && i((u = co(a)).name, n[a], u.capture);
            }
          }function et(r, i, o) {
            function a() {
              o.apply(this, arguments), p(s.fns, a);
            }var s,
                c = r[i];t(c) ? s = X([a]) : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : s = X([c, a]), s.merged = !0, r[i] = s;
          }function nt(n, r, i) {
            var o = r.options.props;if (!t(o)) {
              var a = {},
                  s = n.attrs,
                  c = n.props;if (e(s) || e(c)) for (var u in o) {
                var l = bi(u);rt(a, c, u, l, !0) || rt(a, s, u, l, !1);
              }return a;
            }
          }function rt(t, n, r, i, o) {
            if (e(n)) {
              if (d(n, r)) return t[r] = n[r], o || delete n[r], !0;if (d(n, i)) return t[r] = n[i], o || delete n[i], !0;
            }return !1;
          }function it(t) {
            for (var e = 0; e < t.length; e++) {
              if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
            }return t;
          }function ot(t) {
            return i(t) ? [Z(t)] : Array.isArray(t) ? st(t) : void 0;
          }function at(t) {
            return e(t) && e(t.text) && r(t.isComment);
          }function st(r, o) {
            var a,
                s,
                c,
                u = [];for (a = 0; a < r.length; a++) {
              t(s = r[a]) || "boolean" == typeof s || (c = u[u.length - 1], Array.isArray(s) ? u.push.apply(u, st(s, (o || "") + "_" + a)) : i(s) ? at(c) ? c.text += String(s) : "" !== s && u.push(Z(s)) : at(s) && at(c) ? u[u.length - 1] = Z(c.text + s.text) : (n(r._isVList) && e(s.tag) && t(s.key) && e(o) && (s.key = "__vlist" + o + "_" + a + "__"), u.push(s)));
            }return u;
          }function ct(t, e) {
            return t.__esModule && t.default && (t = t.default), o(t) ? e.extend(t) : t;
          }function ut(t, e, n, r, i) {
            var o = so();return o.asyncFactory = t, o.asyncMeta = { data: e, context: n, children: r, tag: i }, o;
          }function lt(r, i, a) {
            if (n(r.error) && e(r.errorComp)) return r.errorComp;if (e(r.resolved)) return r.resolved;if (n(r.loading) && e(r.loadingComp)) return r.loadingComp;if (!e(r.contexts)) {
              var s = r.contexts = [a],
                  c = !0,
                  u = function u() {
                for (var t = 0, e = s.length; t < e; t++) {
                  s[t].$forceUpdate();
                }
              },
                  l = C(function (t) {
                r.resolved = ct(t, i), c || u();
              }),
                  f = C(function (t) {
                e(r.errorComp) && (r.error = !0, u());
              }),
                  p = r(l, f);return o(p) && ("function" == typeof p.then ? t(r.resolved) && p.then(l, f) : e(p.component) && "function" == typeof p.component.then && (p.component.then(l, f), e(p.error) && (r.errorComp = ct(p.error, i)), e(p.loading) && (r.loadingComp = ct(p.loading, i), 0 === p.delay ? r.loading = !0 : setTimeout(function () {
                t(r.resolved) && t(r.error) && (r.loading = !0, u());
              }, p.delay || 200)), e(p.timeout) && setTimeout(function () {
                t(r.resolved) && f(null);
              }, p.timeout))), c = !1, r.loading ? r.loadingComp : r.resolved;
            }r.contexts.push(a);
          }function ft(t) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) {
              var r = t[n];if (e(r) && e(r.componentOptions)) return r;
            }
          }function pt(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;var e = t.$options._parentListeners;e && ht(t, e);
          }function dt(t, e, n) {
            n ? ao.$once(t, e) : ao.$on(t, e);
          }function vt(t, e) {
            ao.$off(t, e);
          }function ht(t, e, n) {
            ao = t, tt(e, n || {}, dt, vt, t);
          }function mt(t, e) {
            var n = {};if (!t) return n;for (var r = [], i = 0, o = t.length; i < o; i++) {
              var a = t[i];if (a.context !== e && a.functionalContext !== e || !a.data || null == a.data.slot) r.push(a);else {
                var s = a.data.slot,
                    c = n[s] || (n[s] = []);"template" === a.tag ? c.push.apply(c, a.children) : c.push(a);
              }
            }return r.every(yt) || (n.default = r), n;
          }function yt(t) {
            return t.isComment || " " === t.text;
          }function gt(t, e) {
            e = e || {};for (var n = 0; n < t.length; n++) {
              Array.isArray(t[n]) ? gt(t[n], e) : e[t[n].key] = t[n].fn;
            }return e;
          }function _t(t) {
            var e = t.$options,
                n = e.parent;if (n && !e.abstract) {
              for (; n.$options.abstract && n.$parent;) {
                n = n.$parent;
              }n.$children.push(t);
            }t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
          }function bt(t, e, n) {
            t.$el = e, t.$options.render || (t.$options.render = so), At(t, "beforeMount");var r;return r = function r() {
              t._update(t._render(), n);
            }, t._watcher = new go(t, r, _), n = !1, null == t.$vnode && (t._isMounted = !0, At(t, "mounted")), t;
          }function $t(t, e, n, r, i) {
            var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== Oi);if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = i, t.$attrs = r.data && r.data.attrs, t.$listeners = n, e && t.$options.props) {
              to.shouldConvert = !1;for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                var u = s[c];a[u] = J(u, t.$options.props, e, t);
              }to.shouldConvert = !0, t.$options.propsData = e;
            }if (n) {
              var l = t.$options._parentListeners;t.$options._parentListeners = n, ht(t, n, l);
            }o && (t.$slots = mt(i, r.context), t.$forceUpdate());
          }function Ct(t) {
            for (; t && (t = t.$parent);) {
              if (t._inactive) return !0;
            }return !1;
          }function wt(t, e) {
            if (e) {
              if (t._directInactive = !1, Ct(t)) return;
            } else if (t._directInactive) return;if (t._inactive || null === t._inactive) {
              t._inactive = !1;for (var n = 0; n < t.$children.length; n++) {
                wt(t.$children[n]);
              }At(t, "activated");
            }
          }function xt(t, e) {
            if (!(e && (t._directInactive = !0, Ct(t)) || t._inactive)) {
              t._inactive = !0;for (var n = 0; n < t.$children.length; n++) {
                xt(t.$children[n]);
              }At(t, "deactivated");
            }
          }function At(t, e) {
            var n = t.$options[e];if (n) for (var r = 0, i = n.length; r < i; r++) {
              try {
                n[r].call(t);
              } catch (n) {
                k(n, t, e + " hook");
              }
            }t._hasHookEvent && t.$emit("hook:" + e);
          }function kt() {
            mo = lo.length = fo.length = 0, po = {}, vo = ho = !1;
          }function Ot() {
            ho = !0;var t, e;for (lo.sort(function (t, e) {
              return t.id - e.id;
            }), mo = 0; mo < lo.length; mo++) {
              e = (t = lo[mo]).id, po[e] = null, t.run();
            }var n = fo.slice(),
                r = lo.slice();kt(), Et(n), Tt(r), Ki && ki.devtools && Ki.emit("flush");
          }function Tt(t) {
            for (var e = t.length; e--;) {
              var n = t[e],
                  r = n.vm;r._watcher === n && r._isMounted && At(r, "updated");
            }
          }function St(t) {
            t._inactive = !1, fo.push(t);
          }function Et(t) {
            for (var e = 0; e < t.length; e++) {
              t[e]._inactive = !0, wt(t[e], !0);
            }
          }function jt(t) {
            var e = t.id;if (null == po[e]) {
              if (po[e] = !0, ho) {
                for (var n = lo.length - 1; n > mo && lo[n].id > t.id;) {
                  n--;
                }lo.splice(n + 1, 0, t);
              } else lo.push(t);vo || (vo = !0, qi(Ot));
            }
          }function Lt(t) {
            _o.clear(), Nt(t, _o);
          }function Nt(t, e) {
            var n,
                r,
                i = Array.isArray(t);if ((i || o(t)) && Object.isExtensible(t)) {
              if (t.__ob__) {
                var a = t.__ob__.dep.id;if (e.has(a)) return;e.add(a);
              }if (i) for (n = t.length; n--;) {
                Nt(t[n], e);
              } else for (n = (r = Object.keys(t)).length; n--;) {
                Nt(t[r[n]], e);
              }
            }
          }function It(t, e, n) {
            bo.get = function () {
              return this[e][n];
            }, bo.set = function (t) {
              this[e][n] = t;
            }, Object.defineProperty(t, n, bo);
          }function Mt(t) {
            t._watchers = [];var e = t.$options;e.props && Dt(t, e.props), e.methods && Ut(t, e.methods), e.data ? Pt(t) : L(t._data = {}, !0), e.computed && Rt(t, e.computed), e.watch && e.watch !== Ri && Vt(t, e.watch);
          }function Dt(t, e) {
            var n = t.$options.propsData || {},
                r = t._props = {},
                i = t.$options._propKeys = [],
                o = !t.$parent;to.shouldConvert = o;for (var a in e) {
              !function (o) {
                i.push(o);var a = J(o, e, n, t);N(r, o, a), o in t || It(t, "_props", o);
              }(a);
            }to.shouldConvert = !0;
          }function Pt(t) {
            var e = t.$options.data;a(e = t._data = "function" == typeof e ? Ft(e, t) : e || {}) || (e = {});for (var n = Object.keys(e), r = t.$options.props, i = (t.$options.methods, n.length); i--;) {
              var o = n[i];r && d(r, o) || w(o) || It(t, "_data", o);
            }L(e, !0);
          }function Ft(t, e) {
            try {
              return t.call(e);
            } catch (t) {
              return k(t, e, "data()"), {};
            }
          }function Rt(t, e) {
            var n = t._computedWatchers = Object.create(null);for (var r in e) {
              var i = e[r],
                  o = "function" == typeof i ? i : i.get;n[r] = new go(t, o || _, _, $o), r in t || Ht(t, r, i);
            }
          }function Ht(t, e, n) {
            "function" == typeof n ? (bo.get = Bt(e), bo.set = _) : (bo.get = n.get ? !1 !== n.cache ? Bt(e) : n.get : _, bo.set = n.set ? n.set : _), Object.defineProperty(t, e, bo);
          }function Bt(t) {
            return function () {
              var e = this._computedWatchers && this._computedWatchers[t];if (e) return e.dirty && e.evaluate(), Gi.target && e.depend(), e.value;
            };
          }function Ut(t, e) {
            t.$options.props;for (var n in e) {
              t[n] = null == e[n] ? _ : h(e[n], t);
            }
          }function Vt(t, e) {
            for (var n in e) {
              var r = e[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
                zt(t, n, r[i]);
              } else zt(t, n, r);
            }
          }function zt(t, e, n, r) {
            return a(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
          }function Kt(t) {
            var e = t.$options.provide;e && (t._provided = "function" == typeof e ? e.call(t) : e);
          }function Jt(t) {
            var e = qt(t.$options.inject, t);e && (to.shouldConvert = !1, Object.keys(e).forEach(function (n) {
              N(t, n, e[n]);
            }), to.shouldConvert = !0);
          }function qt(t, e) {
            if (t) {
              for (var n = Object.create(null), r = Ji ? Reflect.ownKeys(t) : Object.keys(t), i = 0; i < r.length; i++) {
                for (var o = r[i], a = t[o], s = e; s;) {
                  if (s._provided && a in s._provided) {
                    n[o] = s._provided[a];break;
                  }s = s.$parent;
                }
              }return n;
            }
          }function Wt(t, n, r, i, o) {
            var a = {},
                s = t.options.props;if (e(s)) for (var c in s) {
              a[c] = J(c, s, n || {});
            } else e(r.attrs) && Gt(a, r.attrs), e(r.props) && Gt(a, r.props);var u = Object.create(i),
                l = t.options.render.call(null, function (t, e, n, r) {
              return ee(u, t, e, n, r, !0);
            }, { data: r, props: a, children: o, parent: i, listeners: r.on || {}, injections: qt(t.options.inject, i), slots: function slots() {
                return mt(o, i);
              } });return l instanceof io && (l.functionalContext = i, l.functionalOptions = t.options, r.slot && ((l.data || (l.data = {})).slot = r.slot)), l;
          }function Gt(t, e) {
            for (var n in e) {
              t[yi(n)] = e[n];
            }
          }function Zt(r, i, a, s, c) {
            if (!t(r)) {
              var u = a.$options._base;if (o(r) && (r = u.extend(r)), "function" == typeof r) {
                var l;if (t(r.cid) && (l = r, void 0 === (r = lt(l, u, a)))) return ut(l, i, a, s, c);i = i || {}, me(r), e(i.model) && te(r.options, i);var f = nt(i, r, c);if (n(r.options.functional)) return Wt(r, f, i, a, s);var p = i.on;if (i.on = i.nativeOn, n(r.options.abstract)) {
                  var d = i.slot;i = {}, d && (i.slot = d);
                }Qt(i);var v = r.options.name || c;return new io("vue-component-" + r.cid + (v ? "-" + v : ""), i, void 0, void 0, void 0, a, { Ctor: r, propsData: f, listeners: p, tag: c, children: s }, l);
              }
            }
          }function Yt(t, n, r, i) {
            var o = t.componentOptions,
                a = { _isComponent: !0, parent: n, propsData: o.propsData, _componentTag: o.tag, _parentVnode: t, _parentListeners: o.listeners, _renderChildren: o.children, _parentElm: r || null, _refElm: i || null },
                s = t.data.inlineTemplate;return e(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new o.Ctor(a);
          }function Qt(t) {
            t.hook || (t.hook = {});for (var e = 0; e < wo.length; e++) {
              var n = wo[e],
                  r = t.hook[n],
                  i = Co[n];t.hook[n] = r ? Xt(i, r) : i;
            }
          }function Xt(t, e) {
            return function (n, r, i, o) {
              t(n, r, i, o), e(n, r, i, o);
            };
          }function te(t, n) {
            var r = t.model && t.model.prop || "value",
                i = t.model && t.model.event || "input";(n.props || (n.props = {}))[r] = n.model.value;var o = n.on || (n.on = {});e(o[i]) ? o[i] = [n.model.callback].concat(o[i]) : o[i] = n.model.callback;
          }function ee(t, e, r, o, a, s) {
            return (Array.isArray(r) || i(r)) && (a = o, o = r, r = void 0), n(s) && (a = Ao), ne(t, e, r, o, a);
          }function ne(t, n, r, i, o) {
            if (e(r) && e(r.__ob__)) return so();if (e(r) && e(r.is) && (n = r.is), !n) return so();Array.isArray(i) && "function" == typeof i[0] && ((r = r || {}).scopedSlots = { default: i[0] }, i.length = 0), o === Ao ? i = ot(i) : o === xo && (i = it(i));var a, s;if ("string" == typeof n) {
              var c;s = ki.getTagNamespace(n), a = ki.isReservedTag(n) ? new io(ki.parsePlatformTagName(n), r, i, void 0, void 0, t) : e(c = K(t.$options, "components", n)) ? Zt(c, r, t, i, n) : new io(n, r, i, void 0, void 0, t);
            } else a = Zt(n, r, t, i);return e(a) ? (s && re(a, s), a) : so();
          }function re(n, r) {
            if (n.ns = r, "foreignObject" !== n.tag && e(n.children)) for (var i = 0, o = n.children.length; i < o; i++) {
              var a = n.children[i];e(a.tag) && t(a.ns) && re(a, r);
            }
          }function ie(t, n) {
            var r, i, a, s, c;if (Array.isArray(t) || "string" == typeof t) for (r = new Array(t.length), i = 0, a = t.length; i < a; i++) {
              r[i] = n(t[i], i);
            } else if ("number" == typeof t) for (r = new Array(t), i = 0; i < t; i++) {
              r[i] = n(i + 1, i);
            } else if (o(t)) for (s = Object.keys(t), r = new Array(s.length), i = 0, a = s.length; i < a; i++) {
              c = s[i], r[i] = n(t[c], c, i);
            }return e(r) && (r._isVList = !0), r;
          }function oe(t, e, n, r) {
            var i = this.$scopedSlots[t];if (i) return n = n || {}, r && (n = y(y({}, r), n)), i(n) || e;var o = this.$slots[t];return o || e;
          }function ae(t) {
            return K(this.$options, "filters", t, !0) || Ci;
          }function se(t, e, n) {
            var r = ki.keyCodes[e] || n;return Array.isArray(r) ? -1 === r.indexOf(t) : r !== t;
          }function ce(t, e, n, r, i) {
            if (n) if (o(n)) {
              Array.isArray(n) && (n = g(n));var a;for (var s in n) {
                !function (o) {
                  if ("class" === o || "style" === o || vi(o)) a = t;else {
                    var s = t.attrs && t.attrs.type;a = r || ki.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                  }o in a || (a[o] = n[o], i && ((t.on || (t.on = {}))["update:" + o] = function (t) {
                    n[o] = t;
                  }));
                }(s);
              }
            } else ;return t;
          }function ue(t, e) {
            var n = this._staticTrees[t];return n && !e ? Array.isArray(n) ? Q(n) : Y(n) : (n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), fe(n, "__static__" + t, !1), n);
          }function le(t, e, n) {
            return fe(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
          }function fe(t, e, n) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
              t[r] && "string" != typeof t[r] && pe(t[r], e + "_" + r, n);
            } else pe(t, e, n);
          }function pe(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n;
          }function de(t, e) {
            if (e) if (a(e)) {
              var n = t.on = t.on ? y({}, t.on) : {};for (var r in e) {
                var i = n[r],
                    o = e[r];n[r] = i ? [].concat(o, i) : o;
              }
            } else ;return t;
          }function ve(t) {
            t._vnode = null, t._staticTrees = null;var e = t.$vnode = t.$options._parentVnode,
                n = e && e.context;t.$slots = mt(t.$options._renderChildren, n), t.$scopedSlots = Oi, t._c = function (e, n, r, i) {
              return ee(t, e, n, r, i, !1);
            }, t.$createElement = function (e, n, r, i) {
              return ee(t, e, n, r, i, !0);
            };var r = e && e.data;N(t, "$attrs", r && r.attrs, null, !0), N(t, "$listeners", t.$options._parentListeners, null, !0);
          }function he(t, e) {
            var n = t.$options = Object.create(t.constructor.options);n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
          }function me(t) {
            var e = t.options;if (t.super) {
              var n = me(t.super);if (n !== t.superOptions) {
                t.superOptions = n;var r = ye(t);r && y(t.extendOptions, r), (e = t.options = z(n, t.extendOptions)).name && (e.components[e.name] = t);
              }
            }return e;
          }function ye(t) {
            var e,
                n = t.options,
                r = t.extendOptions,
                i = t.sealedOptions;for (var o in n) {
              n[o] !== i[o] && (e || (e = {}), e[o] = ge(n[o], r[o], i[o]));
            }return e;
          }function ge(t, e, n) {
            if (Array.isArray(t)) {
              var r = [];n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];for (var i = 0; i < t.length; i++) {
                (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
              }return r;
            }return t;
          }function _e(t) {
            this._init(t);
          }function be(t) {
            t.use = function (t) {
              var e = this._installedPlugins || (this._installedPlugins = []);if (e.indexOf(t) > -1) return this;var n = m(arguments, 1);return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this;
            };
          }function $e(t) {
            t.mixin = function (t) {
              return this.options = z(this.options, t), this;
            };
          }function Ce(t) {
            t.cid = 0;var e = 1;t.extend = function (t) {
              t = t || {};var n = this,
                  r = n.cid,
                  i = t._Ctor || (t._Ctor = {});if (i[r]) return i[r];var o = t.name || n.options.name,
                  a = function a(t) {
                this._init(t);
              };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = z(n.options, t), a.super = n, a.options.props && we(a), a.options.computed && xe(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, xi.forEach(function (t) {
                a[t] = n[t];
              }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, a.sealedOptions = y({}, a.options), i[r] = a, a;
            };
          }function we(t) {
            var e = t.options.props;for (var n in e) {
              It(t.prototype, "_props", n);
            }
          }function xe(t) {
            var e = t.options.computed;for (var n in e) {
              Ht(t.prototype, n, e[n]);
            }
          }function Ae(t) {
            xi.forEach(function (e) {
              t[e] = function (t, n) {
                return n ? ("component" === e && a(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = { bind: n, update: n }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
              };
            });
          }function ke(t) {
            return t && (t.Ctor.options.name || t.tag);
          }function Oe(t, e) {
            return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!s(t) && t.test(e);
          }function Te(t, e, n) {
            for (var r in t) {
              var i = t[r];if (i) {
                var o = ke(i.componentOptions);o && !n(o) && (i !== e && Se(i), t[r] = null);
              }
            }
          }function Se(t) {
            t && t.componentInstance.$destroy();
          }function Ee(t) {
            for (var n = t.data, r = t, i = t; e(i.componentInstance);) {
              (i = i.componentInstance._vnode).data && (n = je(i.data, n));
            }for (; e(r = r.parent);) {
              r.data && (n = je(n, r.data));
            }return Le(n.staticClass, n.class);
          }function je(t, n) {
            return { staticClass: Ne(t.staticClass, n.staticClass), class: e(t.class) ? [t.class, n.class] : n.class };
          }function Le(t, n) {
            return e(t) || e(n) ? Ne(t, Ie(n)) : "";
          }function Ne(t, e) {
            return t ? e ? t + " " + e : t : e || "";
          }function Ie(t) {
            return Array.isArray(t) ? Me(t) : o(t) ? De(t) : "string" == typeof t ? t : "";
          }function Me(t) {
            for (var n, r = "", i = 0, o = t.length; i < o; i++) {
              e(n = Ie(t[i])) && "" !== n && (r && (r += " "), r += n);
            }return r;
          }function De(t) {
            var e = "";for (var n in t) {
              t[n] && (e && (e += " "), e += n);
            }return e;
          }function Pe(t) {
            return Go(t) ? "svg" : "math" === t ? "math" : void 0;
          }function Fe(t) {
            if ("string" == typeof t) {
              var e = document.querySelector(t);return e || document.createElement("div");
            }return t;
          }function Re(t, e) {
            var n = t.data.ref;if (n) {
              var r = t.context,
                  i = t.componentInstance || t.elm,
                  o = r.$refs;e ? Array.isArray(o[n]) ? p(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i;
            }
          }function He(r, i) {
            return r.key === i.key && (r.tag === i.tag && r.isComment === i.isComment && e(r.data) === e(i.data) && Be(r, i) || n(r.isAsyncPlaceholder) && r.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
          }function Be(t, n) {
            if ("input" !== t.tag) return !0;var r;return (e(r = t.data) && e(r = r.attrs) && r.type) === (e(r = n.data) && e(r = r.attrs) && r.type);
          }function Ue(t, n, r) {
            var i,
                o,
                a = {};for (i = n; i <= r; ++i) {
              e(o = t[i].key) && (a[o] = i);
            }return a;
          }function Ve(t, e) {
            (t.data.directives || e.data.directives) && ze(t, e);
          }function ze(t, e) {
            var n,
                r,
                i,
                o = t === ta,
                a = e === ta,
                s = Ke(t.data.directives, t.context),
                c = Ke(e.data.directives, e.context),
                u = [],
                l = [];for (n in c) {
              r = s[n], i = c[n], r ? (i.oldValue = r.value, qe(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (qe(i, "bind", e, t), i.def && i.def.inserted && u.push(i));
            }if (u.length) {
              var f = function f() {
                for (var n = 0; n < u.length; n++) {
                  qe(u[n], "inserted", e, t);
                }
              };o ? et(e.data.hook || (e.data.hook = {}), "insert", f) : f();
            }if (l.length && et(e.data.hook || (e.data.hook = {}), "postpatch", function () {
              for (var n = 0; n < l.length; n++) {
                qe(l[n], "componentUpdated", e, t);
              }
            }), !o) for (n in s) {
              c[n] || qe(s[n], "unbind", t, t, a);
            }
          }function Ke(t, e) {
            var n = Object.create(null);if (!t) return n;var r, i;for (r = 0; r < t.length; r++) {
              (i = t[r]).modifiers || (i.modifiers = ra), n[Je(i)] = i, i.def = K(e.$options, "directives", i.name, !0);
            }return n;
          }function Je(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
          }function qe(t, e, n, r, i) {
            var o = t.def && t.def[e];if (o) try {
              o(n.elm, t, n, r, i);
            } catch (r) {
              k(r, n.context, "directive " + t.name + " " + e + " hook");
            }
          }function We(n, r) {
            var i = r.componentOptions;if (!(e(i) && !1 === i.Ctor.options.inheritAttrs || t(n.data.attrs) && t(r.data.attrs))) {
              var o,
                  a,
                  s = r.elm,
                  c = n.data.attrs || {},
                  u = r.data.attrs || {};e(u.__ob__) && (u = r.data.attrs = y({}, u));for (o in u) {
                a = u[o], c[o] !== a && Ge(s, o, a);
              }Ii && u.value !== c.value && Ge(s, "value", u.value);for (o in c) {
                t(u[o]) && (zo(o) ? s.removeAttributeNS(Vo, Ko(o)) : Bo(o) || s.removeAttribute(o));
              }
            }
          }function Ge(t, e, n) {
            Uo(e) ? Jo(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : Bo(e) ? t.setAttribute(e, Jo(n) || "false" === n ? "false" : "true") : zo(e) ? Jo(n) ? t.removeAttributeNS(Vo, Ko(e)) : t.setAttributeNS(Vo, e, n) : Jo(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
          }function Ze(n, r) {
            var i = r.elm,
                o = r.data,
                a = n.data;if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
              var s = Ee(r),
                  c = i._transitionClasses;e(c) && (s = Ne(s, Ie(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s);
            }
          }function Ye(t) {
            function e() {
              (a || (a = [])).push(t.slice(v, i).trim()), v = i + 1;
            }var n,
                r,
                i,
                o,
                a,
                s = !1,
                c = !1,
                u = !1,
                l = !1,
                f = 0,
                p = 0,
                d = 0,
                v = 0;for (i = 0; i < t.length; i++) {
              if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (u) 96 === n && 92 !== r && (u = !1);else if (l) 47 === n && 92 !== r && (l = !1);else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
                switch (n) {case 34:
                    c = !0;break;case 39:
                    s = !0;break;case 96:
                    u = !0;break;case 40:
                    d++;break;case 41:
                    d--;break;case 91:
                    p++;break;case 93:
                    p--;break;case 123:
                    f++;break;case 125:
                    f--;}if (47 === n) {
                  for (var h = i - 1, m = void 0; h >= 0 && " " === (m = t.charAt(h)); h--) {}m && sa.test(m) || (l = !0);
                }
              } else void 0 === o ? (v = i + 1, o = t.slice(0, i).trim()) : e();
            }if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== v && e(), a) for (i = 0; i < a.length; i++) {
              o = Qe(o, a[i]);
            }return o;
          }function Qe(t, e) {
            var n = e.indexOf("(");return n < 0 ? '_f("' + e + '")(' + t + ")" : '_f("' + e.slice(0, n) + '")(' + t + "," + e.slice(n + 1);
          }function Xe(t) {
            console.error("[Vue compiler]: " + t);
          }function tn(t, e) {
            return t ? t.map(function (t) {
              return t[e];
            }).filter(function (t) {
              return t;
            }) : [];
          }function en(t, e, n) {
            (t.props || (t.props = [])).push({ name: e, value: n });
          }function nn(t, e, n) {
            (t.attrs || (t.attrs = [])).push({ name: e, value: n });
          }function rn(t, e, n, r, i, o) {
            (t.directives || (t.directives = [])).push({ name: e, rawName: n, value: r, arg: i, modifiers: o });
          }function on(t, e, n, r, i, o) {
            r && r.capture && (delete r.capture, e = "!" + e), r && r.once && (delete r.once, e = "~" + e), r && r.passive && (delete r.passive, e = "&" + e);var a;r && r.native ? (delete r.native, a = t.nativeEvents || (t.nativeEvents = {})) : a = t.events || (t.events = {});var s = { value: n, modifiers: r },
                c = a[e];Array.isArray(c) ? i ? c.unshift(s) : c.push(s) : a[e] = c ? i ? [s, c] : [c, s] : s;
          }function an(t, e, n) {
            var r = sn(t, ":" + e) || sn(t, "v-bind:" + e);if (null != r) return Ye(r);if (!1 !== n) {
              var i = sn(t, e);if (null != i) return JSON.stringify(i);
            }
          }function sn(t, e) {
            var n;if (null != (n = t.attrsMap[e])) for (var r = t.attrsList, i = 0, o = r.length; i < o; i++) {
              if (r[i].name === e) {
                r.splice(i, 1);break;
              }
            }return n;
          }function cn(t, e, n) {
            var r = n || {},
                i = r.number,
                o = "$$v";r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");var a = un(e, o);t.model = { value: "(" + e + ")", expression: '"' + e + '"', callback: "function ($$v) {" + a + "}" };
          }function un(t, e) {
            var n = ln(t);return null === n.idx ? t + "=" + e : "$set(" + n.exp + ", " + n.idx + ", " + e + ")";
          }function ln(t) {
            if (Eo = t, So = Eo.length, Lo = No = Io = 0, t.indexOf("[") < 0 || t.lastIndexOf("]") < So - 1) return { exp: t, idx: null };for (; !pn();) {
              dn(jo = fn()) ? hn(jo) : 91 === jo && vn(jo);
            }return { exp: t.substring(0, No), idx: t.substring(No + 1, Io) };
          }function fn() {
            return Eo.charCodeAt(++Lo);
          }function pn() {
            return Lo >= So;
          }function dn(t) {
            return 34 === t || 39 === t;
          }function vn(t) {
            var e = 1;for (No = Lo; !pn();) {
              if (t = fn(), dn(t)) hn(t);else if (91 === t && e++, 93 === t && e--, 0 === e) {
                Io = Lo;break;
              }
            }
          }function hn(t) {
            for (var e = t; !pn() && (t = fn()) !== e;) {}
          }function mn(t, e, n) {
            var r = n && n.number,
                i = an(t, "value") || "null",
                o = an(t, "true-value") || "true",
                a = an(t, "false-value") || "false";en(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), on(t, ua, "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + e + "=$$a.concat($$v))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + un(e, "$$c") + "}", null, !0);
          }function yn(t, e, n) {
            var r = n && n.number,
                i = an(t, "value") || "null";en(t, "checked", "_q(" + e + "," + (i = r ? "_n(" + i + ")" : i) + ")"), on(t, ua, un(e, i), null, !0);
          }function gn(t, e, n) {
            var r = "var $$selectedVal = " + ('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "})") + ";";on(t, "change", r = r + " " + un(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
          }function _n(t, e, n) {
            var r = t.attrsMap.type,
                i = n || {},
                o = i.lazy,
                a = i.number,
                s = i.trim,
                c = !o && "range" !== r,
                u = o ? "change" : "range" === r ? ca : "input",
                l = "$event.target.value";s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");var f = un(e, l);c && (f = "if($event.target.composing)return;" + f), en(t, "value", "(" + e + ")"), on(t, u, f, null, !0), (s || a) && on(t, "blur", "$forceUpdate()");
          }function bn(t) {
            var n;e(t[ca]) && (t[n = Ni ? "change" : "input"] = [].concat(t[ca], t[n] || []), delete t[ca]), e(t[ua]) && (t[n = Fi ? "click" : "change"] = [].concat(t[ua], t[n] || []), delete t[ua]);
          }function $n(t, _e2, n, r, i) {
            if (n) {
              var o = _e2,
                  a = Do;_e2 = function e(n) {
                null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && Cn(t, _e2, r, a);
              };
            }Do.addEventListener(t, _e2, Hi ? { capture: r, passive: i } : r);
          }function Cn(t, e, n, r) {
            (r || Do).removeEventListener(t, e, n);
          }function wn(e, n) {
            if (!t(e.data.on) || !t(n.data.on)) {
              var r = n.data.on || {},
                  i = e.data.on || {};Do = n.elm, bn(r), tt(r, i, $n, Cn, n.context);
            }
          }function xn(n, r) {
            if (!t(n.data.domProps) || !t(r.data.domProps)) {
              var i,
                  o,
                  a = r.elm,
                  s = n.data.domProps || {},
                  c = r.data.domProps || {};e(c.__ob__) && (c = r.data.domProps = y({}, c));for (i in s) {
                t(c[i]) && (a[i] = "");
              }for (i in c) {
                if (o = c[i], "textContent" !== i && "innerHTML" !== i || (r.children && (r.children.length = 0), o !== s[i])) if ("value" === i) {
                  a._value = o;var u = t(o) ? "" : String(o);An(a, r, u) && (a.value = u);
                } else a[i] = o;
              }
            }
          }function An(t, e, n) {
            return !t.composing && ("option" === e.tag || kn(t, n) || On(t, n));
          }function kn(t, e) {
            var n = !0;try {
              n = document.activeElement !== t;
            } catch (t) {}return n && t.value !== e;
          }function On(t, n) {
            var r = t.value,
                i = t._vModifiers;return e(i) && i.number ? l(r) !== l(n) : e(i) && i.trim ? r.trim() !== n.trim() : r !== n;
          }function Tn(t) {
            var e = Sn(t.style);return t.staticStyle ? y(t.staticStyle, e) : e;
          }function Sn(t) {
            return Array.isArray(t) ? g(t) : "string" == typeof t ? pa(t) : t;
          }function En(t, e) {
            var n,
                r = {};if (e) for (var i = t; i.componentInstance;) {
              (i = i.componentInstance._vnode).data && (n = Tn(i.data)) && y(r, n);
            }(n = Tn(t.data)) && y(r, n);for (var o = t; o = o.parent;) {
              o.data && (n = Tn(o.data)) && y(r, n);
            }return r;
          }function jn(n, r) {
            var i = r.data,
                o = n.data;if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
              var a,
                  s,
                  c = r.elm,
                  u = o.staticStyle,
                  l = o.normalizedStyle || o.style || {},
                  f = u || l,
                  p = Sn(r.data.style) || {};r.data.normalizedStyle = e(p.__ob__) ? y({}, p) : p;var d = En(r, !0);for (s in f) {
                t(d[s]) && ha(c, s, "");
              }for (s in d) {
                (a = d[s]) !== f[s] && ha(c, s, null == a ? "" : a);
              }
            }
          }function Ln(t, e) {
            if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
              return t.classList.add(e);
            }) : t.classList.add(e);else {
              var n = " " + (t.getAttribute("class") || "") + " ";n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
            }
          }function Nn(t, e) {
            if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
              return t.classList.remove(e);
            }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");else {
              for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) {
                n = n.replace(r, " ");
              }(n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
            }
          }function In(t) {
            if (t) {
              if ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof2(t))) {
                var e = {};return !1 !== t.css && y(e, _a(t.name || "v")), y(e, t), e;
              }return "string" == typeof t ? _a(t) : void 0;
            }
          }function Mn(t) {
            Oa(function () {
              Oa(t);
            });
          }function Dn(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);n.indexOf(e) < 0 && (n.push(e), Ln(t, e));
          }function Pn(t, e) {
            t._transitionClasses && p(t._transitionClasses, e), Nn(t, e);
          }function Fn(t, e, n) {
            var r = Rn(t, e),
                i = r.type,
                o = r.timeout,
                a = r.propCount;if (!i) return n();var s = i === $a ? xa : ka,
                c = 0,
                u = function u() {
              t.removeEventListener(s, l), n();
            },
                l = function l(e) {
              e.target === t && ++c >= a && u();
            };setTimeout(function () {
              c < a && u();
            }, o + 1), t.addEventListener(s, l);
          }function Rn(t, e) {
            var n,
                r = window.getComputedStyle(t),
                i = r[wa + "Delay"].split(", "),
                o = r[wa + "Duration"].split(", "),
                a = Hn(i, o),
                s = r[Aa + "Delay"].split(", "),
                c = r[Aa + "Duration"].split(", "),
                u = Hn(s, c),
                l = 0,
                f = 0;return e === $a ? a > 0 && (n = $a, l = a, f = o.length) : e === Ca ? u > 0 && (n = Ca, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? $a : Ca : null) ? n === $a ? o.length : c.length : 0, { type: n, timeout: l, propCount: f, hasTransform: n === $a && Ta.test(r[wa + "Property"]) };
          }function Hn(t, e) {
            for (; t.length < e.length;) {
              t = t.concat(t);
            }return Math.max.apply(null, e.map(function (e, n) {
              return Bn(e) + Bn(t[n]);
            }));
          }function Bn(t) {
            return 1e3 * Number(t.slice(0, -1));
          }function Un(n, r) {
            var i = n.elm;e(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());var a = In(n.data.transition);if (!t(a) && !e(i._enterCb) && 1 === i.nodeType) {
              for (var s = a.css, c = a.type, u = a.enterClass, f = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, x = a.appearCancelled, A = a.duration, k = uo, O = uo.$vnode; O && O.parent;) {
                k = (O = O.parent).context;
              }var T = !k._isMounted || !n.isRootInsert;if (!T || $ || "" === $) {
                var S = T && d ? d : u,
                    E = T && h ? h : p,
                    j = T && v ? v : f,
                    L = T ? b || m : m,
                    N = T && "function" == typeof $ ? $ : y,
                    I = T ? w || g : g,
                    M = T ? x || _ : _,
                    D = l(o(A) ? A.enter : A),
                    P = !1 !== s && !Ii,
                    F = Kn(N),
                    R = i._enterCb = C(function () {
                  P && (Pn(i, j), Pn(i, E)), R.cancelled ? (P && Pn(i, S), M && M(i)) : I && I(i), i._enterCb = null;
                });n.data.show || et(n.data.hook || (n.data.hook = {}), "insert", function () {
                  var t = i.parentNode,
                      e = t && t._pending && t._pending[n.key];e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), N && N(i, R);
                }), L && L(i), P && (Dn(i, S), Dn(i, E), Mn(function () {
                  Dn(i, j), Pn(i, S), R.cancelled || F || (zn(D) ? setTimeout(R, D) : Fn(i, c, R));
                })), n.data.show && (r && r(), N && N(i, R)), P || F || R();
              }
            }
          }function Vn(n, r) {
            function i() {
              x.cancelled || (n.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n), v && v(a), b && (Dn(a, f), Dn(a, d), Mn(function () {
                Dn(a, p), Pn(a, f), x.cancelled || $ || (zn(w) ? setTimeout(x, w) : Fn(a, u, x));
              })), h && h(a, x), b || $ || x());
            }var a = n.elm;e(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());var s = In(n.data.transition);if (t(s)) return r();if (!e(a._leaveCb) && 1 === a.nodeType) {
              var c = s.css,
                  u = s.type,
                  f = s.leaveClass,
                  p = s.leaveToClass,
                  d = s.leaveActiveClass,
                  v = s.beforeLeave,
                  h = s.leave,
                  m = s.afterLeave,
                  y = s.leaveCancelled,
                  g = s.delayLeave,
                  _ = s.duration,
                  b = !1 !== c && !Ii,
                  $ = Kn(h),
                  w = l(o(_) ? _.leave : _),
                  x = a._leaveCb = C(function () {
                a.parentNode && a.parentNode._pending && (a.parentNode._pending[n.key] = null), b && (Pn(a, p), Pn(a, d)), x.cancelled ? (b && Pn(a, f), y && y(a)) : (r(), m && m(a)), a._leaveCb = null;
              });g ? g(i) : i();
            }
          }function zn(t) {
            return "number" == typeof t && !isNaN(t);
          }function Kn(n) {
            if (t(n)) return !1;var r = n.fns;return e(r) ? Kn(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1;
          }function Jn(t, e) {
            !0 !== e.data.show && Un(e);
          }function qn(t, e, n) {
            var r = e.value,
                i = t.multiple;if (!i || Array.isArray(r)) {
              for (var o, a, s = 0, c = t.options.length; s < c; s++) {
                if (a = t.options[s], i) o = $(r, Wn(a)) > -1, a.selected !== o && (a.selected = o);else if (b(Wn(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
              }i || (t.selectedIndex = -1);
            }
          }function Wn(t) {
            return "_value" in t ? t._value : t.value;
          }function Gn(t) {
            t.target.composing = !0;
          }function Zn(t) {
            t.target.composing && (t.target.composing = !1, Yn(t.target, "input"));
          }function Yn(t, e) {
            var n = document.createEvent("HTMLEvents");n.initEvent(e, !0, !0), t.dispatchEvent(n);
          }function Qn(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : Qn(t.componentInstance._vnode);
          }function Xn(t) {
            var e = t && t.componentOptions;return e && e.Ctor.options.abstract ? Xn(ft(e.children)) : t;
          }function tr(t) {
            var e = {},
                n = t.$options;for (var r in n.propsData) {
              e[r] = t[r];
            }var i = n._parentListeners;for (var o in i) {
              e[yi(o)] = i[o];
            }return e;
          }function er(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", { props: e.componentOptions.propsData });
          }function nr(t) {
            for (; t = t.parent;) {
              if (t.data.transition) return !0;
            }
          }function rr(t, e) {
            return e.key === t.key && e.tag === t.tag;
          }function ir(t) {
            return t.isComment && t.asyncFactory;
          }function or(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
          }function ar(t) {
            t.data.newPos = t.elm.getBoundingClientRect();
          }function sr(t) {
            var e = t.data.pos,
                n = t.data.newPos,
                r = e.left - n.left,
                i = e.top - n.top;if (r || i) {
              t.data.moved = !0;var o = t.elm.style;o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
            }
          }function cr(t, e) {
            var n = e ? Ha(e) : Fa;if (n.test(t)) {
              for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(t);) {
                (i = r.index) > a && o.push(JSON.stringify(t.slice(a, i)));var s = Ye(r[1].trim());o.push("_s(" + s + ")"), a = i + r[0].length;
              }return a < t.length && o.push(JSON.stringify(t.slice(a))), o.join("+");
            }
          }function ur(t, e) {
            var n = e ? $s : bs;return t.replace(n, function (t) {
              return _s[t];
            });
          }function lr(t, e) {
            function n(e) {
              l += e, t = t.substring(e);
            }function r(t, n, r) {
              var i, s;if (null == n && (n = l), null == r && (r = l), t && (s = t.toLowerCase()), t) for (i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--) {} else i = 0;if (i >= 0) {
                for (var c = a.length - 1; c >= i; c--) {
                  e.end && e.end(a[c].tag, n, r);
                }a.length = i, o = i && a[i - 1].tag;
              } else "br" === s ? e.start && e.start(t, [], !0, n, r) : "p" === s && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r));
            }for (var i, o, a = [], s = e.expectHTML, c = e.isUnaryTag || $i, u = e.canBeLeftOpenTag || $i, l = 0; t;) {
              if (i = t, o && ys(o)) {
                var f = 0,
                    p = o.toLowerCase(),
                    d = gs[p] || (gs[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
                    v = t.replace(d, function (t, n, r) {
                  return f = r.length, ys(p) || "noscript" === p || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), ws(p, n) && (n = n.slice(1)), e.chars && e.chars(n), "";
                });l += t.length - v.length, t = v, r(p, l - f, l);
              } else {
                var h = t.indexOf("<");if (0 === h) {
                  if (is.test(t)) {
                    var m = t.indexOf("--\x3e");if (m >= 0) {
                      e.shouldKeepComment && e.comment(t.substring(4, m)), n(m + 3);continue;
                    }
                  }if (os.test(t)) {
                    var y = t.indexOf("]>");if (y >= 0) {
                      n(y + 2);continue;
                    }
                  }var g = t.match(rs);if (g) {
                    n(g[0].length);continue;
                  }var _ = t.match(ns);if (_) {
                    var b = l;n(_[0].length), r(_[1], b, l);continue;
                  }var $ = function () {
                    var e = t.match(ts);if (e) {
                      var r = { tagName: e[1], attrs: [], start: l };n(e[0].length);for (var i, o; !(i = t.match(es)) && (o = t.match(Ya));) {
                        n(o[0].length), r.attrs.push(o);
                      }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r;
                    }
                  }();if ($) {
                    !function (t) {
                      var n = t.tagName,
                          i = t.unarySlash;s && ("p" === o && Ka(n) && r(o), u(n) && o === n && r(n));for (var l = c(n) || !!i, f = t.attrs.length, p = new Array(f), d = 0; d < f; d++) {
                        var v = t.attrs[d];as && -1 === v[0].indexOf('""') && ("" === v[3] && delete v[3], "" === v[4] && delete v[4], "" === v[5] && delete v[5]);var h = v[3] || v[4] || v[5] || "";p[d] = { name: v[1], value: ur(h, e.shouldDecodeNewlines) };
                      }l || (a.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: p }), o = n), e.start && e.start(n, p, l, t.start, t.end);
                    }($), ws(o, t) && n(1);continue;
                  }
                }var C = void 0,
                    w = void 0,
                    x = void 0;if (h >= 0) {
                  for (w = t.slice(h); !(ns.test(w) || ts.test(w) || is.test(w) || os.test(w) || (x = w.indexOf("<", 1)) < 0);) {
                    h += x, w = t.slice(h);
                  }C = t.substring(0, h), n(h);
                }h < 0 && (C = t, t = ""), e.chars && C && e.chars(C);
              }if (t === i) {
                e.chars && e.chars(t);break;
              }
            }r();
          }function fr(t, e) {
            function n(t) {
              t.pre && (s = !1), ps(t.tag) && (c = !1);
            }ss = e.warn || Xe, ps = e.isPreTag || $i, ds = e.mustUseProp || $i, vs = e.getTagNamespace || $i, us = tn(e.modules, "transformNode"), ls = tn(e.modules, "preTransformNode"), fs = tn(e.modules, "postTransformNode"), cs = e.delimiters;var r,
                i,
                o = [],
                a = !1 !== e.preserveWhitespace,
                s = !1,
                c = !1;return lr(t, { warn: ss, expectHTML: e.expectHTML, isUnaryTag: e.isUnaryTag, canBeLeftOpenTag: e.canBeLeftOpenTag, shouldDecodeNewlines: e.shouldDecodeNewlines, shouldKeepComment: e.comments, start: function start(t, a, u) {
                function l(t) {}var f = i && i.ns || vs(t);Ni && "svg" === f && (a = Er(a));var p = { type: 1, tag: t, attrsList: a, attrsMap: Or(a), parent: i, children: [] };f && (p.ns = f), Sr(p) && !zi() && (p.forbidden = !0);for (var d = 0; d < ls.length; d++) {
                  ls[d](p, e);
                }if (s || (pr(p), p.pre && (s = !0)), ps(p.tag) && (c = !0), s) dr(p);else {
                  mr(p), yr(p), $r(p), vr(p), p.plain = !p.key && !a.length, hr(p), Cr(p), wr(p);for (var v = 0; v < us.length; v++) {
                    us[v](p, e);
                  }xr(p);
                }if (r ? o.length || r.if && (p.elseif || p.else) && (l(), br(r, { exp: p.elseif, block: p })) : (r = p, l()), i && !p.forbidden) if (p.elseif || p.else) gr(p, i);else if (p.slotScope) {
                  i.plain = !1;var h = p.slotTarget || '"default"';(i.scopedSlots || (i.scopedSlots = {}))[h] = p;
                } else i.children.push(p), p.parent = i;u ? n(p) : (i = p, o.push(p));for (var m = 0; m < fs.length; m++) {
                  fs[m](p, e);
                }
              }, end: function end() {
                var t = o[o.length - 1],
                    e = t.children[t.children.length - 1];e && 3 === e.type && " " === e.text && !c && t.children.pop(), o.length -= 1, i = o[o.length - 1], n(t);
              }, chars: function chars(t) {
                if (i && (!Ni || "textarea" !== i.tag || i.attrsMap.placeholder !== t)) {
                  var e = i.children;if (t = c || t.trim() ? Tr(i) ? t : js(t) : a && e.length ? " " : "") {
                    var n;!s && " " !== t && (n = cr(t, cs)) ? e.push({ type: 2, expression: n, text: t }) : " " === t && e.length && " " === e[e.length - 1].text || e.push({ type: 3, text: t });
                  }
                }
              }, comment: function comment(t) {
                i.children.push({ type: 3, text: t, isComment: !0 });
              } }), r;
          }function pr(t) {
            null != sn(t, "v-pre") && (t.pre = !0);
          }function dr(t) {
            var e = t.attrsList.length;if (e) for (var n = t.attrs = new Array(e), r = 0; r < e; r++) {
              n[r] = { name: t.attrsList[r].name, value: JSON.stringify(t.attrsList[r].value) };
            } else t.pre || (t.plain = !0);
          }function vr(t) {
            var e = an(t, "key");e && (t.key = e);
          }function hr(t) {
            var e = an(t, "ref");e && (t.ref = e, t.refInFor = Ar(t));
          }function mr(t) {
            var e;if (e = sn(t, "v-for")) {
              var n = e.match(ks);if (!n) return;t.for = n[2].trim();var r = n[1].trim(),
                  i = r.match(Os);i ? (t.alias = i[1].trim(), t.iterator1 = i[2].trim(), i[3] && (t.iterator2 = i[3].trim())) : t.alias = r;
            }
          }function yr(t) {
            var e = sn(t, "v-if");if (e) t.if = e, br(t, { exp: e, block: t });else {
              null != sn(t, "v-else") && (t.else = !0);var n = sn(t, "v-else-if");n && (t.elseif = n);
            }
          }function gr(t, e) {
            var n = _r(e.children);n && n.if && br(n, { exp: t.elseif, block: t });
          }function _r(t) {
            for (var e = t.length; e--;) {
              if (1 === t[e].type) return t[e];t.pop();
            }
          }function br(t, e) {
            t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
          }function $r(t) {
            null != sn(t, "v-once") && (t.once = !0);
          }function Cr(t) {
            if ("slot" === t.tag) t.slotName = an(t, "name");else {
              var e = an(t, "slot");e && (t.slotTarget = '""' === e ? '"default"' : e), "template" === t.tag && (t.slotScope = sn(t, "scope"));
            }
          }function wr(t) {
            var e;(e = an(t, "is")) && (t.component = e), null != sn(t, "inline-template") && (t.inlineTemplate = !0);
          }function xr(t) {
            var e,
                n,
                r,
                i,
                o,
                a,
                s,
                c = t.attrsList;for (e = 0, n = c.length; e < n; e++) {
              if (r = i = c[e].name, o = c[e].value, As.test(r)) {
                if (t.hasBindings = !0, (a = kr(r)) && (r = r.replace(Es, "")), Ss.test(r)) r = r.replace(Ss, ""), o = Ye(o), s = !1, a && (a.prop && (s = !0, "innerHtml" === (r = yi(r)) && (r = "innerHTML")), a.camel && (r = yi(r)), a.sync && on(t, "update:" + yi(r), un(o, "$event"))), s || !t.component && ds(t.tag, t.attrsMap.type, r) ? en(t, r, o) : nn(t, r, o);else if (xs.test(r)) on(t, r = r.replace(xs, ""), o, a, !1, ss);else {
                  var u = (r = r.replace(As, "")).match(Ts),
                      l = u && u[1];l && (r = r.slice(0, -(l.length + 1))), rn(t, r, i, o, l, a);
                }
              } else nn(t, r, JSON.stringify(o));
            }
          }function Ar(t) {
            for (var e = t; e;) {
              if (void 0 !== e.for) return !0;e = e.parent;
            }return !1;
          }function kr(t) {
            var e = t.match(Es);if (e) {
              var n = {};return e.forEach(function (t) {
                n[t.slice(1)] = !0;
              }), n;
            }
          }function Or(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) {
              e[t[n].name] = t[n].value;
            }return e;
          }function Tr(t) {
            return "script" === t.tag || "style" === t.tag;
          }function Sr(t) {
            return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type);
          }function Er(t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t[n];Ls.test(r.name) || (r.name = r.name.replace(Ns, ""), e.push(r));
            }return e;
          }function jr(t, e) {
            t && (hs = Is(e.staticKeys || ""), ms = e.isReservedTag || $i, Lr(t), Nr(t, !1));
          }function Lr(t) {
            if (t.static = Ir(t), 1 === t.type) {
              if (!ms(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;for (var e = 0, n = t.children.length; e < n; e++) {
                var r = t.children[e];Lr(r), r.static || (t.static = !1);
              }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
                var a = t.ifConditions[i].block;Lr(a), a.static || (t.static = !1);
              }
            }
          }function Nr(t, e) {
            if (1 === t.type) {
              if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);if (t.staticRoot = !1, t.children) for (var n = 0, r = t.children.length; n < r; n++) {
                Nr(t.children[n], e || !!t.for);
              }if (t.ifConditions) for (var i = 1, o = t.ifConditions.length; i < o; i++) {
                Nr(t.ifConditions[i].block, e);
              }
            }
          }function Ir(t) {
            return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || di(t.tag) || !ms(t.tag) || Mr(t) || !Object.keys(t).every(hs))));
          }function Mr(t) {
            for (; t.parent;) {
              if ("template" !== (t = t.parent).tag) return !1;if (t.for) return !0;
            }return !1;
          }function Dr(t, e, n) {
            var r = e ? "nativeOn:{" : "on:{";for (var i in t) {
              var o = t[i];r += '"' + i + '":' + Pr(i, o) + ",";
            }return r.slice(0, -1) + "}";
          }function Pr(t, e) {
            if (!e) return "function(){}";if (Array.isArray(e)) return "[" + e.map(function (e) {
              return Pr(t, e);
            }).join(",") + "]";var n = Ds.test(e.value),
                r = Ms.test(e.value);if (e.modifiers) {
              var i = "",
                  o = "",
                  a = [];for (var s in e.modifiers) {
                Rs[s] ? (o += Rs[s], Ps[s] && a.push(s)) : a.push(s);
              }return a.length && (i += Fr(a)), o && (i += o), "function($event){" + i + (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) + "}";
            }return n || r ? e.value : "function($event){" + e.value + "}";
          }function Fr(t) {
            return "if(!('button' in $event)&&" + t.map(Rr).join("&&") + ")return null;";
          }function Rr(t) {
            var e = parseInt(t, 10);if (e) return "$event.keyCode!==" + e;var n = Ps[t];return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")";
          }function Hr(t, e) {
            var n = new Bs(e);return { render: "with(this){return " + (t ? Br(t, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns };
          }function Br(t, e) {
            if (t.staticRoot && !t.staticProcessed) return Ur(t, e);if (t.once && !t.onceProcessed) return Vr(t, e);if (t.for && !t.forProcessed) return Jr(t, e);if (t.if && !t.ifProcessed) return zr(t, e);if ("template" !== t.tag || t.slotTarget) {
              if ("slot" === t.tag) return oi(t, e);var n;if (t.component) n = ai(t.component, t, e);else {
                var r = t.plain ? void 0 : qr(t, e),
                    i = t.inlineTemplate ? null : Xr(t, e, !0);n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
              }for (var o = 0; o < e.transforms.length; o++) {
                n = e.transforms[o](t, n);
              }return n;
            }return Xr(t, e) || "void 0";
          }function Ur(t, e) {
            return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + Br(t, e) + "}"), "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
          }function Vr(t, e) {
            if (t.onceProcessed = !0, t.if && !t.ifProcessed) return zr(t, e);if (t.staticInFor) {
              for (var n = "", r = t.parent; r;) {
                if (r.for) {
                  n = r.key;break;
                }r = r.parent;
              }return n ? "_o(" + Br(t, e) + "," + e.onceId++ + (n ? "," + n : "") + ")" : Br(t, e);
            }return Ur(t, e);
          }function zr(t, e, n, r) {
            return t.ifProcessed = !0, Kr(t.ifConditions.slice(), e, n, r);
          }function Kr(t, e, n, r) {
            function i(t) {
              return n ? n(t, e) : t.once ? Vr(t, e) : Br(t, e);
            }if (!t.length) return r || "_e()";var o = t.shift();return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Kr(t, e, n, r) : "" + i(o.block);
          }function Jr(t, e, n, r) {
            var i = t.for,
                o = t.alias,
                a = t.iterator1 ? "," + t.iterator1 : "",
                s = t.iterator2 ? "," + t.iterator2 : "";return t.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Br)(t, e) + "})";
          }function qr(t, e) {
            var n = "{",
                r = Wr(t, e);r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');for (var i = 0; i < e.dataGenFns.length; i++) {
              n += e.dataGenFns[i](t);
            }if (t.attrs && (n += "attrs:{" + si(t.attrs) + "},"), t.props && (n += "domProps:{" + si(t.props) + "},"), t.events && (n += Dr(t.events, !1, e.warn) + ","), t.nativeEvents && (n += Dr(t.nativeEvents, !0, e.warn) + ","), t.slotTarget && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += Zr(t.scopedSlots, e) + ","), t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
              var o = Gr(t, e);o && (n += o + ",");
            }return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
          }function Wr(t, e) {
            var n = t.directives;if (n) {
              var r,
                  i,
                  o,
                  a,
                  s = "directives:[",
                  c = !1;for (r = 0, i = n.length; r < i; r++) {
                o = n[r], a = !0;var u = e.directives[o.name];u && (a = !!u(t, o, e.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
              }return c ? s.slice(0, -1) + "]" : void 0;
            }
          }function Gr(t, e) {
            var n = t.children[0];if (1 === n.type) {
              var r = Hr(n, e.options);return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (t) {
                return "function(){" + t + "}";
              }).join(",") + "]}";
            }
          }function Zr(t, e) {
            return "scopedSlots:_u([" + Object.keys(t).map(function (n) {
              return Yr(n, t[n], e);
            }).join(",") + "])";
          }function Yr(t, e, n) {
            return e.for && !e.forProcessed ? Qr(t, e, n) : "{key:" + t + ",fn:function(" + String(e.attrsMap.scope) + "){return " + ("template" === e.tag ? Xr(e, n) || "void 0" : Br(e, n)) + "}}";
          }function Qr(t, e, n) {
            var r = e.for,
                i = e.alias,
                o = e.iterator1 ? "," + e.iterator1 : "",
                a = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + r + "),function(" + i + o + a + "){return " + Yr(t, e, n) + "})";
          }function Xr(t, e, n, r, i) {
            var o = t.children;if (o.length) {
              var a = o[0];if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || Br)(a, e);var s = n ? ti(o, e.maybeComponent) : 0,
                  c = i || ni;return "[" + o.map(function (t) {
                return c(t, e);
              }).join(",") + "]" + (s ? "," + s : "");
            }
          }function ti(t, e) {
            for (var n = 0, r = 0; r < t.length; r++) {
              var i = t[r];if (1 === i.type) {
                if (ei(i) || i.ifConditions && i.ifConditions.some(function (t) {
                  return ei(t.block);
                })) {
                  n = 2;break;
                }(e(i) || i.ifConditions && i.ifConditions.some(function (t) {
                  return e(t.block);
                })) && (n = 1);
              }
            }return n;
          }function ei(t) {
            return void 0 !== t.for || "template" === t.tag || "slot" === t.tag;
          }function ni(t, e) {
            return 1 === t.type ? Br(t, e) : 3 === t.type && t.isComment ? ii(t) : ri(t);
          }function ri(t) {
            return "_v(" + (2 === t.type ? t.expression : ci(JSON.stringify(t.text))) + ")";
          }function ii(t) {
            return "_e(" + JSON.stringify(t.text) + ")";
          }function oi(t, e) {
            var n = t.slotName || '"default"',
                r = Xr(t, e),
                i = "_t(" + n + (r ? "," + r : ""),
                o = t.attrs && "{" + t.attrs.map(function (t) {
              return yi(t.name) + ":" + t.value;
            }).join(",") + "}",
                a = t.attrsMap["v-bind"];return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")";
          }function ai(t, e, n) {
            var r = e.inlineTemplate ? null : Xr(e, n, !0);return "_c(" + t + "," + qr(e, n) + (r ? "," + r : "") + ")";
          }function si(t) {
            for (var e = "", n = 0; n < t.length; n++) {
              var r = t[n];e += '"' + r.name + '":' + ci(r.value) + ",";
            }return e.slice(0, -1);
          }function ci(t) {
            return t.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
          }function ui(t, e) {
            try {
              return new Function(t);
            } catch (n) {
              return e.push({ err: n, code: t }), _;
            }
          }function li(t) {
            var e = Object.create(null);return function (n, r, i) {
              var o = (r = r || {}).delimiters ? String(r.delimiters) + n : n;if (e[o]) return e[o];var a = t(n, r),
                  s = {},
                  c = [];return s.render = ui(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (t) {
                return ui(t, c);
              }), e[o] = s;
            };
          }function fi(t) {
            if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
          }var pi = Object.prototype.toString,
              di = f("slot,component", !0),
              vi = f("key,ref,slot,is"),
              hi = Object.prototype.hasOwnProperty,
              mi = /-(\w)/g,
              yi = v(function (t) {
            return t.replace(mi, function (t, e) {
              return e ? e.toUpperCase() : "";
            });
          }),
              gi = v(function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          }),
              _i = /([^-])([A-Z])/g,
              bi = v(function (t) {
            return t.replace(_i, "$1-$2").replace(_i, "$1-$2").toLowerCase();
          }),
              $i = function $i(t, e, n) {
            return !1;
          },
              Ci = function Ci(t) {
            return t;
          },
              wi = "data-server-rendered",
              xi = ["component", "directive", "filter"],
              Ai = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
              ki = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: $i, isReservedAttr: $i, isUnknownElement: $i, getTagNamespace: _, parsePlatformTagName: Ci, mustUseProp: $i, _lifecycleHooks: Ai },
              Oi = Object.freeze({}),
              Ti = /[^\w.$]/,
              Si = _,
              Ei = "__proto__" in {},
              ji = "undefined" != typeof window,
              Li = ji && window.navigator.userAgent.toLowerCase(),
              Ni = Li && /msie|trident/.test(Li),
              Ii = Li && Li.indexOf("msie 9.0") > 0,
              Mi = Li && Li.indexOf("edge/") > 0,
              Di = Li && Li.indexOf("android") > 0,
              Pi = Li && /iphone|ipad|ipod|ios/.test(Li),
              Fi = Li && /chrome\/\d+/.test(Li) && !Mi,
              Ri = {}.watch,
              Hi = !1;if (ji) try {
            var Bi = {};Object.defineProperty(Bi, "passive", { get: function get() {
                Hi = !0;
              } }), window.addEventListener("test-passive", null, Bi);
          } catch (t) {}var Ui,
              Vi,
              zi = function zi() {
            return void 0 === Ui && (Ui = !ji && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Ui;
          },
              Ki = ji && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
              Ji = "undefined" != typeof Symbol && O(Symbol) && "undefined" != typeof Reflect && O(Reflect.ownKeys),
              qi = function () {
            function t() {
              r = !1;var t = n.slice(0);n.length = 0;for (var e = 0; e < t.length; e++) {
                t[e]();
              }
            }var e,
                n = [],
                r = !1;if ("undefined" != typeof Promise && O(Promise)) {
              var i = Promise.resolve(),
                  o = function o(t) {
                console.error(t);
              };e = function e() {
                i.then(t).catch(o), Pi && setTimeout(_);
              };
            } else if ("undefined" == typeof MutationObserver || !O(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function e() {
              setTimeout(t, 0);
            };else {
              var a = 1,
                  s = new MutationObserver(t),
                  c = document.createTextNode(String(a));s.observe(c, { characterData: !0 }), e = function e() {
                a = (a + 1) % 2, c.data = String(a);
              };
            }return function (t, i) {
              var o;if (n.push(function () {
                if (t) try {
                  t.call(i);
                } catch (t) {
                  k(t, i, "nextTick");
                } else o && o(i);
              }), r || (r = !0, e()), !t && "undefined" != typeof Promise) return new Promise(function (t, e) {
                o = t;
              });
            };
          }();Vi = "undefined" != typeof Set && O(Set) ? Set : function () {
            function t() {
              this.set = Object.create(null);
            }return t.prototype.has = function (t) {
              return !0 === this.set[t];
            }, t.prototype.add = function (t) {
              this.set[t] = !0;
            }, t.prototype.clear = function () {
              this.set = Object.create(null);
            }, t;
          }();var Wi = 0,
              Gi = function Gi() {
            this.id = Wi++, this.subs = [];
          };Gi.prototype.addSub = function (t) {
            this.subs.push(t);
          }, Gi.prototype.removeSub = function (t) {
            p(this.subs, t);
          }, Gi.prototype.depend = function () {
            Gi.target && Gi.target.addDep(this);
          }, Gi.prototype.notify = function () {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) {
              t[e].update();
            }
          }, Gi.target = null;var Zi = [],
              Yi = Array.prototype,
              Qi = Object.create(Yi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
            var e = Yi[t];x(Qi, t, function () {
              for (var n = [], r = arguments.length; r--;) {
                n[r] = arguments[r];
              }var i,
                  o = e.apply(this, n),
                  a = this.__ob__;switch (t) {case "push":case "unshift":
                  i = n;break;case "splice":
                  i = n.slice(2);}return i && a.observeArray(i), a.dep.notify(), o;
            });
          });var Xi = Object.getOwnPropertyNames(Qi),
              to = { shouldConvert: !0 },
              eo = function eo(t) {
            this.value = t, this.dep = new Gi(), this.vmCount = 0, x(t, "__ob__", this), Array.isArray(t) ? ((Ei ? E : j)(t, Qi, Xi), this.observeArray(t)) : this.walk(t);
          };eo.prototype.walk = function (t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) {
              N(t, e[n], t[e[n]]);
            }
          }, eo.prototype.observeArray = function (t) {
            for (var e = 0, n = t.length; e < n; e++) {
              L(t[e]);
            }
          };var no = ki.optionMergeStrategies;no.data = function (t, e, n) {
            return n ? F(t, e, n) : e && "function" != typeof e ? t : F.call(this, t, e);
          }, Ai.forEach(function (t) {
            no[t] = R;
          }), xi.forEach(function (t) {
            no[t + "s"] = H;
          }), no.watch = function (t, e) {
            if (t === Ri && (t = void 0), e === Ri && (e = void 0), !e) return Object.create(t || null);if (!t) return e;var n = {};y(n, t);for (var r in e) {
              var i = n[r],
                  o = e[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o];
            }return n;
          }, no.props = no.methods = no.inject = no.computed = function (t, e) {
            if (!t) return e;var n = Object.create(null);return y(n, t), e && y(n, e), n;
          }, no.provide = F;var ro = function ro(t, e) {
            return void 0 === e ? t : e;
          },
              io = function io(t, e, n, r, i, o, a, s) {
            this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
          },
              oo = { child: {} };oo.child.get = function () {
            return this.componentInstance;
          }, Object.defineProperties(io.prototype, oo);var ao,
              so = function so(t) {
            void 0 === t && (t = "");var e = new io();return e.text = t, e.isComment = !0, e;
          },
              co = v(function (t) {
            var e = "&" === t.charAt(0),
                n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                r = "!" === (t = n ? t.slice(1) : t).charAt(0);return t = r ? t.slice(1) : t, { name: t, once: n, capture: r, passive: e };
          }),
              uo = null,
              lo = [],
              fo = [],
              po = {},
              vo = !1,
              ho = !1,
              mo = 0,
              yo = 0,
              go = function go(t, e, n, r) {
            this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++yo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Vi(), this.newDepIds = new Vi(), this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = A(e), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
          };go.prototype.get = function () {
            T(this);var t,
                e = this.vm;try {
              t = this.getter.call(e, e);
            } catch (t) {
              if (!this.user) throw t;k(t, e, 'getter for watcher "' + this.expression + '"');
            } finally {
              this.deep && Lt(t), S(), this.cleanupDeps();
            }return t;
          }, go.prototype.addDep = function (t) {
            var e = t.id;this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
          }, go.prototype.cleanupDeps = function () {
            for (var t = this, e = this.deps.length; e--;) {
              var n = t.deps[e];t.newDepIds.has(n.id) || n.removeSub(t);
            }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
          }, go.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : jt(this);
          }, go.prototype.run = function () {
            if (this.active) {
              var t = this.get();if (t !== this.value || o(t) || this.deep) {
                var e = this.value;if (this.value = t, this.user) try {
                  this.cb.call(this.vm, t, e);
                } catch (t) {
                  k(t, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, t, e);
              }
            }
          }, go.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1;
          }, go.prototype.depend = function () {
            for (var t = this, e = this.deps.length; e--;) {
              t.deps[e].depend();
            }
          }, go.prototype.teardown = function () {
            var t = this;if (this.active) {
              this.vm._isBeingDestroyed || p(this.vm._watchers, this);for (var e = this.deps.length; e--;) {
                t.deps[e].removeSub(t);
              }this.active = !1;
            }
          };var _o = new Vi(),
              bo = { enumerable: !0, configurable: !0, get: _, set: _ },
              $o = { lazy: !0 },
              Co = { init: function init(t, e, n, r) {
              if (!t.componentInstance || t.componentInstance._isDestroyed) (t.componentInstance = Yt(t, uo, n, r)).$mount(e ? t.elm : void 0, e);else if (t.data.keepAlive) {
                var i = t;Co.prepatch(i, i);
              }
            }, prepatch: function prepatch(t, e) {
              var n = e.componentOptions;$t(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
            }, insert: function insert(t) {
              var e = t.context,
                  n = t.componentInstance;n._isMounted || (n._isMounted = !0, At(n, "mounted")), t.data.keepAlive && (e._isMounted ? St(n) : wt(n, !0));
            }, destroy: function destroy(t) {
              var e = t.componentInstance;e._isDestroyed || (t.data.keepAlive ? xt(e, !0) : e.$destroy());
            } },
              wo = Object.keys(Co),
              xo = 1,
              Ao = 2,
              ko = 0;!function (t) {
            t.prototype._init = function (t) {
              var e = this;e._uid = ko++, e._isVue = !0, t && t._isComponent ? he(e, t) : e.$options = z(me(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, _t(e), pt(e), ve(e), At(e, "beforeCreate"), Jt(e), Mt(e), Kt(e), At(e, "created"), e.$options.el && e.$mount(e.$options.el);
            };
          }(_e), function (t) {
            var e = {};e.get = function () {
              return this._data;
            };var n = {};n.get = function () {
              return this._props;
            }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = I, t.prototype.$delete = M, t.prototype.$watch = function (t, e, n) {
              var r = this;if (a(e)) return zt(r, t, e, n);(n = n || {}).user = !0;var i = new go(r, t, e, n);return n.immediate && e.call(r, i.value), function () {
                i.teardown();
              };
            };
          }(_e), function (t) {
            var e = /^hook:/;t.prototype.$on = function (t, n) {
              var r = this,
                  i = this;if (Array.isArray(t)) for (var o = 0, a = t.length; o < a; o++) {
                r.$on(t[o], n);
              } else (i._events[t] || (i._events[t] = [])).push(n), e.test(t) && (i._hasHookEvent = !0);return i;
            }, t.prototype.$once = function (t, e) {
              function n() {
                r.$off(t, n), e.apply(r, arguments);
              }var r = this;return n.fn = e, r.$on(t, n), r;
            }, t.prototype.$off = function (t, e) {
              var n = this,
                  r = this;if (!arguments.length) return r._events = Object.create(null), r;if (Array.isArray(t)) {
                for (var i = 0, o = t.length; i < o; i++) {
                  n.$off(t[i], e);
                }return r;
              }var a = r._events[t];if (!a) return r;if (1 === arguments.length) return r._events[t] = null, r;for (var s, c = a.length; c--;) {
                if ((s = a[c]) === e || s.fn === e) {
                  a.splice(c, 1);break;
                }
              }return r;
            }, t.prototype.$emit = function (t) {
              var e = this,
                  n = e._events[t];if (n) {
                n = n.length > 1 ? m(n) : n;for (var r = m(arguments, 1), i = 0, o = n.length; i < o; i++) {
                  try {
                    n[i].apply(e, r);
                  } catch (n) {
                    k(n, e, 'event handler for "' + t + '"');
                  }
                }
              }return e;
            };
          }(_e), function (t) {
            t.prototype._update = function (t, e) {
              var n = this;n._isMounted && At(n, "beforeUpdate");var r = n.$el,
                  i = n._vnode,
                  o = uo;uo = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), uo = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
            }, t.prototype.$forceUpdate = function () {
              var t = this;t._watcher && t._watcher.update();
            }, t.prototype.$destroy = function () {
              var t = this;if (!t._isBeingDestroyed) {
                At(t, "beforeDestroy"), t._isBeingDestroyed = !0;var e = t.$parent;!e || e._isBeingDestroyed || t.$options.abstract || p(e.$children, t), t._watcher && t._watcher.teardown();for (var n = t._watchers.length; n--;) {
                  t._watchers[n].teardown();
                }t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), At(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null);
              }
            };
          }(_e), function (t) {
            t.prototype.$nextTick = function (t) {
              return qi(t, this);
            }, t.prototype._render = function () {
              var t = this,
                  e = t.$options,
                  n = e.render,
                  r = e.staticRenderFns,
                  i = e._parentVnode;if (t._isMounted) for (var o in t.$slots) {
                t.$slots[o] = Q(t.$slots[o]);
              }t.$scopedSlots = i && i.data.scopedSlots || Oi, r && !t._staticTrees && (t._staticTrees = []), t.$vnode = i;var a;try {
                a = n.call(t._renderProxy, t.$createElement);
              } catch (e) {
                k(e, t, "render function"), a = t._vnode;
              }return a instanceof io || (a = so()), a.parent = i, a;
            }, t.prototype._o = le, t.prototype._n = l, t.prototype._s = u, t.prototype._l = ie, t.prototype._t = oe, t.prototype._q = b, t.prototype._i = $, t.prototype._m = ue, t.prototype._f = ae, t.prototype._k = se, t.prototype._b = ce, t.prototype._v = Z, t.prototype._e = so, t.prototype._u = gt, t.prototype._g = de;
          }(_e);var Oo = [String, RegExp, Array],
              To = { KeepAlive: { name: "keep-alive", abstract: !0, props: { include: Oo, exclude: Oo }, created: function created() {
                this.cache = Object.create(null);
              }, destroyed: function destroyed() {
                var t = this;for (var e in t.cache) {
                  Se(t.cache[e]);
                }
              }, watch: { include: function include(t) {
                  Te(this.cache, this._vnode, function (e) {
                    return Oe(t, e);
                  });
                }, exclude: function exclude(t) {
                  Te(this.cache, this._vnode, function (e) {
                    return !Oe(t, e);
                  });
                } }, render: function render() {
                var t = ft(this.$slots.default),
                    e = t && t.componentOptions;if (e) {
                  var n = ke(e);if (n && (this.include && !Oe(this.include, n) || this.exclude && Oe(this.exclude, n))) return t;var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, t.data.keepAlive = !0;
                }return t;
              } } };!function (t) {
            var e = {};e.get = function () {
              return ki;
            }, Object.defineProperty(t, "config", e), t.util = { warn: Si, extend: y, mergeOptions: z, defineReactive: N }, t.set = I, t.delete = M, t.nextTick = qi, t.options = Object.create(null), xi.forEach(function (e) {
              t.options[e + "s"] = Object.create(null);
            }), t.options._base = t, y(t.options.components, To), be(t), $e(t), Ce(t), Ae(t);
          }(_e), Object.defineProperty(_e.prototype, "$isServer", { get: zi }), Object.defineProperty(_e.prototype, "$ssrContext", { get: function get() {
              return this.$vnode && this.$vnode.ssrContext;
            } }), _e.version = "2.4.2";var So,
              Eo,
              jo,
              Lo,
              No,
              Io,
              Mo,
              Do,
              Po,
              Fo = f("style,class"),
              Ro = f("input,textarea,option,select"),
              Ho = function Ho(t, e, n) {
            return "value" === n && Ro(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
          },
              Bo = f("contenteditable,draggable,spellcheck"),
              Uo = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
              Vo = "http://www.w3.org/1999/xlink",
              zo = function zo(t) {
            return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
          },
              Ko = function Ko(t) {
            return zo(t) ? t.slice(6, t.length) : "";
          },
              Jo = function Jo(t) {
            return null == t || !1 === t;
          },
              qo = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
              Wo = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
              Go = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
              Zo = function Zo(t) {
            return Wo(t) || Go(t);
          },
              Yo = Object.create(null),
              Qo = Object.freeze({ createElement: function createElement(t, e) {
              var n = document.createElement(t);return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
            }, createElementNS: function createElementNS(t, e) {
              return document.createElementNS(qo[t], e);
            }, createTextNode: function createTextNode(t) {
              return document.createTextNode(t);
            }, createComment: function createComment(t) {
              return document.createComment(t);
            }, insertBefore: function insertBefore(t, e, n) {
              t.insertBefore(e, n);
            }, removeChild: function removeChild(t, e) {
              t.removeChild(e);
            }, appendChild: function appendChild(t, e) {
              t.appendChild(e);
            }, parentNode: function parentNode(t) {
              return t.parentNode;
            }, nextSibling: function nextSibling(t) {
              return t.nextSibling;
            }, tagName: function tagName(t) {
              return t.tagName;
            }, setTextContent: function setTextContent(t, e) {
              t.textContent = e;
            }, setAttribute: function setAttribute(t, e, n) {
              t.setAttribute(e, n);
            } }),
              Xo = { create: function create(t, e) {
              Re(e);
            }, update: function update(t, e) {
              t.data.ref !== e.data.ref && (Re(t, !0), Re(e));
            }, destroy: function destroy(t) {
              Re(t, !0);
            } },
              ta = new io("", {}, []),
              ea = ["create", "activate", "update", "remove", "destroy"],
              na = { create: Ve, update: Ve, destroy: function destroy(t) {
              Ve(t, ta);
            } },
              ra = Object.create(null),
              ia = [Xo, na],
              oa = { create: We, update: We },
              aa = { create: Ze, update: Ze },
              sa = /[\w).+\-_$\]]/,
              ca = "__r",
              ua = "__c",
              la = { create: wn, update: wn },
              fa = { create: xn, update: xn },
              pa = v(function (t) {
            var e = {},
                n = /;(?![^(]*\))/g,
                r = /:(.+)/;return t.split(n).forEach(function (t) {
              if (t) {
                var n = t.split(r);n.length > 1 && (e[n[0].trim()] = n[1].trim());
              }
            }), e;
          }),
              da = /^--/,
              va = /\s*!important$/,
              ha = function ha(t, e, n) {
            if (da.test(e)) t.style.setProperty(e, n);else if (va.test(n)) t.style.setProperty(e, n.replace(va, ""), "important");else {
              var r = ya(e);if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
                t.style[r] = n[i];
              } else t.style[r] = n;
            }
          },
              ma = ["Webkit", "Moz", "ms"],
              ya = v(function (t) {
            if (Po = Po || document.createElement("div").style, "filter" !== (t = yi(t)) && t in Po) return t;for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ma.length; n++) {
              var r = ma[n] + e;if (r in Po) return r;
            }
          }),
              ga = { create: jn, update: jn },
              _a = v(function (t) {
            return { enterClass: t + "-enter", enterToClass: t + "-enter-to", enterActiveClass: t + "-enter-active", leaveClass: t + "-leave", leaveToClass: t + "-leave-to", leaveActiveClass: t + "-leave-active" };
          }),
              ba = ji && !Ii,
              $a = "transition",
              Ca = "animation",
              wa = "transition",
              xa = "transitionend",
              Aa = "animation",
              ka = "animationend";ba && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (wa = "WebkitTransition", xa = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Aa = "WebkitAnimation", ka = "webkitAnimationEnd"));var Oa = ji && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
              Ta = /\b(transform|all)(,|$)/,
              Sa = function (r) {
            function o(t) {
              return new io(E.tagName(t).toLowerCase(), {}, [], void 0, t);
            }function a(t, e) {
              function n() {
                0 == --n.listeners && s(t);
              }return n.listeners = e, n;
            }function s(t) {
              var n = E.parentNode(t);e(n) && E.removeChild(n, t);
            }function c(t, r, i, o, a) {
              if (t.isRootInsert = !a, !u(t, r, i, o)) {
                var s = t.data,
                    c = t.children,
                    l = t.tag;e(l) ? (t.elm = t.ns ? E.createElementNS(t.ns, l) : E.createElement(l, t), y(t), v(t, c, r), e(s) && m(t, r), d(i, t.elm, o)) : n(t.isComment) ? (t.elm = E.createComment(t.text), d(i, t.elm, o)) : (t.elm = E.createTextNode(t.text), d(i, t.elm, o));
              }
            }function u(t, r, i, o) {
              var a = t.data;if (e(a)) {
                var s = e(t.componentInstance) && a.keepAlive;if (e(a = a.hook) && e(a = a.init) && a(t, !1, i, o), e(t.componentInstance)) return l(t, r), n(s) && p(t, r, i, o), !0;
              }
            }function l(t, n) {
              e(t.data.pendingInsert) && (n.push.apply(n, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, h(t) ? (m(t, n), y(t)) : (Re(t), n.push(t));
            }function p(t, n, r, i) {
              for (var o, a = t; a.componentInstance;) {
                if (a = a.componentInstance._vnode, e(o = a.data) && e(o = o.transition)) {
                  for (o = 0; o < T.activate.length; ++o) {
                    T.activate[o](ta, a);
                  }n.push(a);break;
                }
              }d(r, t.elm, i);
            }function d(t, n, r) {
              e(t) && (e(r) ? r.parentNode === t && E.insertBefore(t, n, r) : E.appendChild(t, n));
            }function v(t, e, n) {
              if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) {
                c(e[r], n, t.elm, null, !0);
              } else i(t.text) && E.appendChild(t.elm, E.createTextNode(t.text));
            }function h(t) {
              for (; t.componentInstance;) {
                t = t.componentInstance._vnode;
              }return e(t.tag);
            }function m(t, n) {
              for (var r = 0; r < T.create.length; ++r) {
                T.create[r](ta, t);
              }e(k = t.data.hook) && (e(k.create) && k.create(ta, t), e(k.insert) && n.push(t));
            }function y(t) {
              for (var n, r = t; r;) {
                e(n = r.context) && e(n = n.$options._scopeId) && E.setAttribute(t.elm, n, ""), r = r.parent;
              }e(n = uo) && n !== t.context && e(n = n.$options._scopeId) && E.setAttribute(t.elm, n, "");
            }function g(t, e, n, r, i, o) {
              for (; r <= i; ++r) {
                c(n[r], o, t, e);
              }
            }function _(t) {
              var n,
                  r,
                  i = t.data;if (e(i)) for (e(n = i.hook) && e(n = n.destroy) && n(t), n = 0; n < T.destroy.length; ++n) {
                T.destroy[n](t);
              }if (e(n = t.children)) for (r = 0; r < t.children.length; ++r) {
                _(t.children[r]);
              }
            }function b(t, n, r, i) {
              for (; r <= i; ++r) {
                var o = n[r];e(o) && (e(o.tag) ? ($(o), _(o)) : s(o.elm));
              }
            }function $(t, n) {
              if (e(n) || e(t.data)) {
                var r,
                    i = T.remove.length + 1;for (e(n) ? n.listeners += i : n = a(t.elm, i), e(r = t.componentInstance) && e(r = r._vnode) && e(r.data) && $(r, n), r = 0; r < T.remove.length; ++r) {
                  T.remove[r](t, n);
                }e(r = t.data.hook) && e(r = r.remove) ? r(t, n) : n();
              } else s(t.elm);
            }function C(n, r, i, o, a) {
              for (var s, u, l, f = 0, p = 0, d = r.length - 1, v = r[0], h = r[d], m = i.length - 1, y = i[0], _ = i[m], $ = !a; f <= d && p <= m;) {
                t(v) ? v = r[++f] : t(h) ? h = r[--d] : He(v, y) ? (w(v, y, o), v = r[++f], y = i[++p]) : He(h, _) ? (w(h, _, o), h = r[--d], _ = i[--m]) : He(v, _) ? (w(v, _, o), $ && E.insertBefore(n, v.elm, E.nextSibling(h.elm)), v = r[++f], _ = i[--m]) : He(h, y) ? (w(h, y, o), $ && E.insertBefore(n, h.elm, v.elm), h = r[--d], y = i[++p]) : (t(s) && (s = Ue(r, f, d)), t(u = e(y.key) ? s[y.key] : null) ? (c(y, o, n, v.elm), y = i[++p]) : He(l = r[u], y) ? (w(l, y, o), r[u] = void 0, $ && E.insertBefore(n, l.elm, v.elm), y = i[++p]) : (c(y, o, n, v.elm), y = i[++p]));
              }f > d ? g(n, t(i[m + 1]) ? null : i[m + 1].elm, i, p, m, o) : p > m && b(n, r, f, d);
            }function w(r, i, o, a) {
              if (r !== i) {
                var s = i.elm = r.elm;if (n(r.isAsyncPlaceholder)) e(i.asyncFactory.resolved) ? A(r.elm, i, o) : i.isAsyncPlaceholder = !0;else if (n(i.isStatic) && n(r.isStatic) && i.key === r.key && (n(i.isCloned) || n(i.isOnce))) i.componentInstance = r.componentInstance;else {
                  var c,
                      u = i.data;e(u) && e(c = u.hook) && e(c = c.prepatch) && c(r, i);var l = r.children,
                      f = i.children;if (e(u) && h(i)) {
                    for (c = 0; c < T.update.length; ++c) {
                      T.update[c](r, i);
                    }e(c = u.hook) && e(c = c.update) && c(r, i);
                  }t(i.text) ? e(l) && e(f) ? l !== f && C(s, l, f, o, a) : e(f) ? (e(r.text) && E.setTextContent(s, ""), g(s, null, f, 0, f.length - 1, o)) : e(l) ? b(s, l, 0, l.length - 1) : e(r.text) && E.setTextContent(s, "") : r.text !== i.text && E.setTextContent(s, i.text), e(u) && e(c = u.hook) && e(c = c.postpatch) && c(r, i);
                }
              }
            }function x(t, r, i) {
              if (n(i) && e(t.parent)) t.parent.data.pendingInsert = r;else for (var o = 0; o < r.length; ++o) {
                r[o].data.hook.insert(r[o]);
              }
            }function A(t, r, i) {
              if (n(r.isComment) && e(r.asyncFactory)) return r.elm = t, r.isAsyncPlaceholder = !0, !0;r.elm = t;var o = r.tag,
                  a = r.data,
                  s = r.children;if (e(a) && (e(k = a.hook) && e(k = k.init) && k(r, !0), e(k = r.componentInstance))) return l(r, i), !0;if (e(o)) {
                if (e(s)) if (t.hasChildNodes()) {
                  for (var c = !0, u = t.firstChild, f = 0; f < s.length; f++) {
                    if (!u || !A(u, s[f], i)) {
                      c = !1;break;
                    }u = u.nextSibling;
                  }if (!c || u) return !1;
                } else v(r, s, i);if (e(a)) for (var p in a) {
                  if (!j(p)) {
                    m(r, i);break;
                  }
                }
              } else t.data !== r.text && (t.data = r.text);return !0;
            }var k,
                O,
                T = {},
                S = r.modules,
                E = r.nodeOps;for (k = 0; k < ea.length; ++k) {
              for (T[ea[k]] = [], O = 0; O < S.length; ++O) {
                e(S[O][ea[k]]) && T[ea[k]].push(S[O][ea[k]]);
              }
            }var j = f("attrs,style,class,staticClass,staticStyle,key");return function (r, i, a, s, u, l) {
              if (!t(i)) {
                var f = !1,
                    p = [];if (t(r)) f = !0, c(i, p, u, l);else {
                  var d = e(r.nodeType);if (!d && He(r, i)) w(r, i, p, s);else {
                    if (d) {
                      if (1 === r.nodeType && r.hasAttribute(wi) && (r.removeAttribute(wi), a = !0), n(a) && A(r, i, p)) return x(i, p, !0), r;r = o(r);
                    }var v = r.elm,
                        m = E.parentNode(v);if (c(i, p, v._leaveCb ? null : m, E.nextSibling(v)), e(i.parent)) {
                      for (var y = i.parent; y;) {
                        y.elm = i.elm, y = y.parent;
                      }if (h(i)) for (var g = 0; g < T.create.length; ++g) {
                        T.create[g](ta, i.parent);
                      }
                    }e(m) ? b(m, [r], 0, 0) : e(r.tag) && _(r);
                  }
                }return x(i, p, f), i.elm;
              }e(r) && _(r);
            };
          }({ nodeOps: Qo, modules: [oa, aa, la, fa, ga, ji ? { create: Jn, activate: Jn, remove: function remove(t, e) {
                !0 !== t.data.show ? Vn(t, e) : e();
              } } : {}].concat(ia) }),
              Ea = f("text,number,password,search,email,tel,url");Ii && document.addEventListener("selectionchange", function () {
            var t = document.activeElement;t && t.vmodel && Yn(t, "input");
          });var ja = { model: { inserted: function inserted(t, e, n) {
                if ("select" === n.tag) {
                  var r = function r() {
                    qn(t, e, n.context);
                  };r(), (Ni || Mi) && setTimeout(r, 0), t._vOptions = [].map.call(t.options, Wn);
                } else ("textarea" === n.tag || Ea(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("change", Zn), Di || (t.addEventListener("compositionstart", Gn), t.addEventListener("compositionend", Zn)), Ii && (t.vmodel = !0)));
              }, componentUpdated: function componentUpdated(t, e, n) {
                if ("select" === n.tag) {
                  qn(t, e, n.context);var r = t._vOptions;(t._vOptions = [].map.call(t.options, Wn)).some(function (t, e) {
                    return !b(t, r[e]);
                  }) && Yn(t, "change");
                }
              } }, show: { bind: function bind(t, e, n) {
                var r = e.value,
                    i = (n = Qn(n)).data && n.data.transition,
                    o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;r && i ? (n.data.show = !0, Un(n, function () {
                  t.style.display = o;
                })) : t.style.display = r ? o : "none";
              }, update: function update(t, e, n) {
                var r = e.value;r !== e.oldValue && ((n = Qn(n)).data && n.data.transition ? (n.data.show = !0, r ? Un(n, function () {
                  t.style.display = t.__vOriginalDisplay;
                }) : Vn(n, function () {
                  t.style.display = "none";
                })) : t.style.display = r ? t.__vOriginalDisplay : "none");
              }, unbind: function unbind(t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
              } } },
              La = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
              Na = { name: "transition", props: La, abstract: !0, render: function render(t) {
              var e = this,
                  n = this.$options._renderChildren;if (n && (n = n.filter(function (t) {
                return t.tag || ir(t);
              })).length) {
                var r = this.mode,
                    o = n[0];if (nr(this.$vnode)) return o;var a = Xn(o);if (!a) return o;if (this._leaving) return er(t, o);var s = "__transition-" + this._uid + "-";a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;var c = (a.data || (a.data = {})).transition = tr(this),
                    u = this._vnode,
                    l = Xn(u);if (a.data.directives && a.data.directives.some(function (t) {
                  return "show" === t.name;
                }) && (a.data.show = !0), l && l.data && !rr(a, l) && !ir(l)) {
                  var f = l && (l.data.transition = y({}, c));if ("out-in" === r) return this._leaving = !0, et(f, "afterLeave", function () {
                    e._leaving = !1, e.$forceUpdate();
                  }), er(t, o);if ("in-out" === r) {
                    if (ir(a)) return u;var p,
                        d = function d() {
                      p();
                    };et(c, "afterEnter", d), et(c, "enterCancelled", d), et(f, "delayLeave", function (t) {
                      p = t;
                    });
                  }
                }return o;
              }
            } },
              Ia = y({ tag: String, moveClass: String }, La);delete Ia.mode;var Ma = { Transition: Na, TransitionGroup: { props: Ia, render: function render(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = tr(this), s = 0; s < i.length; s++) {
                  var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
                }if (r) {
                  for (var u = [], l = [], f = 0; f < r.length; f++) {
                    var p = r[f];p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p);
                  }this.kept = t(e, null, u), this.removed = l;
                }return t(e, null, o);
              }, beforeUpdate: function beforeUpdate() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
              }, updated: function updated() {
                var t = this.prevChildren,
                    e = this.moveClass || (this.name || "v") + "-move";if (t.length && this.hasMove(t[0].elm, e)) {
                  t.forEach(or), t.forEach(ar), t.forEach(sr);document.body.offsetHeight;t.forEach(function (t) {
                    if (t.data.moved) {
                      var n = t.elm,
                          r = n.style;Dn(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(xa, n._moveCb = function t(r) {
                        r && !/transform$/.test(r.propertyName) || (n.removeEventListener(xa, t), n._moveCb = null, Pn(n, e));
                      });
                    }
                  });
                }
              }, methods: { hasMove: function hasMove(t, e) {
                  if (!ba) return !1;if (this._hasMove) return this._hasMove;var n = t.cloneNode();t._transitionClasses && t._transitionClasses.forEach(function (t) {
                    Nn(n, t);
                  }), Ln(n, e), n.style.display = "none", this.$el.appendChild(n);var r = Rn(n);return this.$el.removeChild(n), this._hasMove = r.hasTransform;
                } } } };_e.config.mustUseProp = Ho, _e.config.isReservedTag = Zo, _e.config.isReservedAttr = Fo, _e.config.getTagNamespace = Pe, _e.config.isUnknownElement = function (t) {
            if (!ji) return !0;if (Zo(t)) return !1;if (t = t.toLowerCase(), null != Yo[t]) return Yo[t];var e = document.createElement(t);return t.indexOf("-") > -1 ? Yo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Yo[t] = /HTMLUnknownElement/.test(e.toString());
          }, y(_e.options.directives, ja), y(_e.options.components, Ma), _e.prototype.__patch__ = ji ? Sa : _, _e.prototype.$mount = function (t, e) {
            return t = t && ji ? Fe(t) : void 0, bt(this, t, e);
          }, setTimeout(function () {
            ki.devtools && Ki && Ki.emit("init", _e);
          }, 0);var Da,
              Pa = !!ji && function (t, e) {
            var n = document.createElement("div");return n.innerHTML = '<div a="' + t + '"/>', n.innerHTML.indexOf(e) > 0;
          }("\n", "&#10;"),
              Fa = /\{\{((?:.|\n)+?)\}\}/g,
              Ra = /[-.*+?^${}()|[\]\/\\]/g,
              Ha = v(function (t) {
            var e = t[0].replace(Ra, "\\$&"),
                n = t[1].replace(Ra, "\\$&");return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
          }),
              Ba = [{ staticKeys: ["staticClass"], transformNode: function transformNode(t, e) {
              e.warn;var n = sn(t, "class");n && (t.staticClass = JSON.stringify(n));var r = an(t, "class", !1);r && (t.classBinding = r);
            }, genData: function genData(t) {
              var e = "";return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e;
            } }, { staticKeys: ["staticStyle"], transformNode: function transformNode(t, e) {
              e.warn;var n = sn(t, "style");n && (t.staticStyle = JSON.stringify(pa(n)));var r = an(t, "style", !1);r && (t.styleBinding = r);
            }, genData: function genData(t) {
              var e = "";return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e;
            } }],
              Ua = { model: function model(t, e, n) {
              Mo = n;var r = e.value,
                  i = e.modifiers,
                  o = t.tag,
                  a = t.attrsMap.type;if (t.component) return cn(t, r, i), !1;if ("select" === o) gn(t, r, i);else if ("input" === o && "checkbox" === a) mn(t, r, i);else if ("input" === o && "radio" === a) yn(t, r, i);else if ("input" === o || "textarea" === o) _n(t, r, i);else if (!ki.isReservedTag(o)) return cn(t, r, i), !1;return !0;
            }, text: function text(t, e) {
              e.value && en(t, "textContent", "_s(" + e.value + ")");
            }, html: function html(t, e) {
              e.value && en(t, "innerHTML", "_s(" + e.value + ")");
            } },
              Va = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
              za = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
              Ka = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
              Ja = { expectHTML: !0, modules: Ba, directives: Ua, isPreTag: function isPreTag(t) {
              return "pre" === t;
            }, isUnaryTag: Va, mustUseProp: Ho, canBeLeftOpenTag: za, isReservedTag: Zo, getTagNamespace: Pe, staticKeys: function (t) {
              return t.reduce(function (t, e) {
                return t.concat(e.staticKeys || []);
              }, []).join(",");
            }(Ba) },
              qa = { decode: function decode(t) {
              return Da = Da || document.createElement("div"), Da.innerHTML = t, Da.textContent;
            } },
              Wa = /([^\s"'<>/=]+)/,
              Ga = /(?:=)/,
              Za = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
              Ya = new RegExp("^\\s*" + Wa.source + "(?:\\s*(" + Ga.source + ")\\s*(?:" + Za.join("|") + "))?"),
              Qa = "[a-zA-Z_][\\w\\-\\.]*",
              Xa = "((?:" + Qa + "\\:)?" + Qa + ")",
              ts = new RegExp("^<" + Xa),
              es = /^\s*(\/?)>/,
              ns = new RegExp("^<\\/" + Xa + "[^>]*>"),
              rs = /^<!DOCTYPE [^>]+>/i,
              is = /^<!--/,
              os = /^<!\[/,
              as = !1;"x".replace(/x(.)?/g, function (t, e) {
            as = "" === e;
          });var ss,
              cs,
              us,
              ls,
              fs,
              ps,
              ds,
              vs,
              hs,
              ms,
              ys = f("script,style,textarea", !0),
              gs = {},
              _s = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n" },
              bs = /&(?:lt|gt|quot|amp);/g,
              $s = /&(?:lt|gt|quot|amp|#10);/g,
              Cs = f("pre,textarea", !0),
              ws = function ws(t, e) {
            return t && Cs(t) && "\n" === e[0];
          },
              xs = /^@|^v-on:/,
              As = /^v-|^@|^:/,
              ks = /(.*?)\s+(?:in|of)\s+(.*)/,
              Os = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
              Ts = /:(.*)$/,
              Ss = /^:|^v-bind:/,
              Es = /\.[^.]+/g,
              js = v(qa.decode),
              Ls = /^xmlns:NS\d+/,
              Ns = /^NS\d+:/,
              Is = v(function (t) {
            return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
          }),
              Ms = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
              Ds = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
              Ps = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
              Fs = function Fs(t) {
            return "if(" + t + ")return null;";
          },
              Rs = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: Fs("$event.target !== $event.currentTarget"), ctrl: Fs("!$event.ctrlKey"), shift: Fs("!$event.shiftKey"), alt: Fs("!$event.altKey"), meta: Fs("!$event.metaKey"), left: Fs("'button' in $event && $event.button !== 0"), middle: Fs("'button' in $event && $event.button !== 1"), right: Fs("'button' in $event && $event.button !== 2") },
              Hs = { on: function on(t, e) {
              t.wrapListeners = function (t) {
                return "_g(" + t + "," + e.value + ")";
              };
            }, bind: function bind(t, e) {
              t.wrapData = function (n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
              };
            }, cloak: _ },
              Bs = function Bs(t) {
            this.options = t, this.warn = t.warn || Xe, this.transforms = tn(t.modules, "transformCode"), this.dataGenFns = tn(t.modules, "genData"), this.directives = y(y({}, Hs), t.directives);var e = t.isReservedTag || $i;this.maybeComponent = function (t) {
              return !e(t.tag);
            }, this.onceId = 0, this.staticRenderFns = [];
          },
              Us = function (t) {
            return function (e) {
              function n(n, r) {
                var i = Object.create(e),
                    o = [],
                    a = [];if (i.warn = function (t, e) {
                  (e ? a : o).push(t);
                }, r) {
                  r.modules && (i.modules = (e.modules || []).concat(r.modules)), r.directives && (i.directives = y(Object.create(e.directives), r.directives));for (var s in r) {
                    "modules" !== s && "directives" !== s && (i[s] = r[s]);
                  }
                }var c = t(n, i);return c.errors = o, c.tips = a, c;
              }return { compile: n, compileToFunctions: li(n) };
            };
          }(function (t, e) {
            var n = fr(t.trim(), e);jr(n, e);var r = Hr(n, e);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
          })(Ja).compileToFunctions,
              Vs = v(function (t) {
            var e = Fe(t);return e && e.innerHTML;
          }),
              zs = _e.prototype.$mount;return _e.prototype.$mount = function (t, e) {
            if ((t = t && Fe(t)) === document.body || t === document.documentElement) return this;var n = this.$options;if (!n.render) {
              var r = n.template;if (r) {
                if ("string" == typeof r) "#" === r.charAt(0) && (r = Vs(r));else {
                  if (!r.nodeType) return this;r = r.innerHTML;
                }
              } else t && (r = fi(t));if (r) {
                var i = Us(r, { shouldDecodeNewlines: Pa, delimiters: n.delimiters, comments: n.comments }, this),
                    o = i.render,
                    a = i.staticRenderFns;n.render = o, n.staticRenderFns = a;
              }
            }return zs.call(this, t, e);
          }, _e.compile = Us, _e;
        });
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(22));

      /***/
    },
    /* 22 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    },
    /* 23 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', {
          staticClass: "faq-search-form"
        }, [_vm._t("faq-header", [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c('div', {
          staticClass: "faq-search-input-container",
          class: {
            'fade-input': !_vm.showForm
          }
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.searchText,
            expression: "searchText"
          }],
          ref: "search",
          domProps: {
            "value": _vm.searchText
          },
          on: {
            "input": [function ($event) {
              if ($event.target.composing) {
                return;
              }
              _vm.searchText = $event.target.value;
            }, _vm.filterResults],
            "keydown": [function ($event) {
              if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) {
                return null;
              }
              _vm.down($event);
            }, function ($event) {
              if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) {
                return null;
              }
              _vm.up($event);
            }, function ($event) {
              if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) {
                return null;
              }
              _vm.selectQuestion($event);
            }]
          }
        })]), _vm._v(" "), _c('div', {
          staticClass: "faq-search-icon"
        }, [_c('a', {
          class: _vm.searchbtn,
          on: {
            "click": function click($event) {
              _vm.handleShow(_vm.searchText);
            }
          }
        })])], 2);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-af79af54", esExports);
        }
      }

      /***/
    },
    /* 24 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(2);
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */__webpack_exports__["a"] = {
        props: {
          inactive: {
            default: 'fa fa-plus'
          },
          active: {
            default: 'fa fa-plus rotate'
          },
          left: {
            default: false
          },
          icon: {}
        },
        data: function data() {
          return {
            selectedQuestions: [],
            url: ''
          };
        },
        methods: {
          handleActive: function handleActive(state) {
            if (state === true) {
              return 'active';
            }
            if (state === 'hidden') {
              return 'hidden';
            }
            return false;
          },
          handleRotation: function handleRotation(state, active, inactive) {
            if (state === true) {
              return active;
            } else if (state === 'hidden') {
              return inactive;
            } else {
              return inactive;
            }
          },
          toggleActive: function toggleActive(question) {
            this.selectedQuestions.map(function (item) {
              if (item.id === question.id) {
                if (item.active === true) {
                  item.active = false;
                } else if (item.active === false) {
                  item.active = true;
                } else if (item.active === 'hidden') {
                  item.active = true;
                }
              }
            });

            if (!this.urlDisabled) {
              var base = this.url;
              var newLink = '/' + question.parent_link + '/' + question.link;
              var prevLink = '/' + question.parent_link;
              var handled = window.location.href.indexOf(question.link) !== -1 ? prevLink : newLink;
              history.replaceState({}, null, base + handled);
            }
          }
        },
        mounted: function mounted() {
          var _this = this;

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setUrl', function (url) {
            _this.url = url;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setQuestions', function (questions) {
            _this.selectedQuestions = questions;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setInititalQuestion', function (questions) {
            _this.selectedQuestions = questions;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('urlDisabled', function (bool) {
            _this.urlDisabled = bool;
          });
        }
      };

      /***/
    },
    /* 25 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', {
          staticClass: "faq-question-container"
        }, _vm._l(_vm.selectedQuestions, function (question) {
          return _c('div', {
            staticClass: "question",
            class: question.active == 'initialized' ? 'faq-highlight' : null,
            on: {
              "click": function click($event) {
                _vm.toggleActive(question);
              }
            }
          }, [!_vm.left ? _c('div', {
            staticClass: "question-inner"
          }, [_c('div', {
            staticClass: "question-block"
          }, [_c('a', {
            staticClass: "accordion",
            attrs: {
              "name": question.title
            }
          }, [_vm._v(_vm._s(question.title))]), _vm._v(" "), _c('div', {
            staticClass: "accordian-panel",
            class: _vm.handleActive(question.active),
            domProps: {
              "innerHTML": _vm._s(question.text)
            }
          })]), _vm._v(" "), _c('div', {
            staticClass: "icon-wrap"
          }, [_vm.icon && question.active !== 'hidden' ? _c('span', {
            staticClass: "img-wrap"
          }, [_c('img', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive),
            attrs: {
              "src": _vm.icon,
              "alt": ""
            }
          })]) : _vm._e(), _vm._v(" "), _vm.icon && question.active === 'hidden' ? _c('span', {
            staticClass: "img-wrap"
          }, [_c('img', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive),
            attrs: {
              "src": _vm.icon,
              "alt": ""
            }
          })]) : _vm._e(), _vm._v(" "), !_vm.icon ? _c('span', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive)
          }) : _vm._e(), _vm._v(" "), !_vm.icon ? _c('span', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive)
          }) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.left ? _c('div', {
            staticClass: "question-inner"
          }, [_c('div', {
            staticClass: "icon-wrap"
          }, [_vm.icon && question.active !== 'hidden' ? _c('span', {
            staticClass: "img-wrap"
          }, [_c('img', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive),
            attrs: {
              "src": _vm.icon,
              "alt": ""
            }
          })]) : _vm._e(), _vm._v(" "), _vm.icon && question.active === 'hidden' ? _c('span', {
            staticClass: "img-wrap"
          }, [_c('img', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive),
            attrs: {
              "src": _vm.icon,
              "alt": ""
            }
          })]) : _vm._e(), _vm._v(" "), !_vm.icon && question.active !== 'hidden' ? _c('span', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive)
          }) : _vm._e(), _vm._v(" "), !_vm.icon && question.active === 'hidden' ? _c('span', {
            class: _vm.handleRotation(question.active, _vm.active, _vm.inactive)
          }) : _vm._e()]), _vm._v(" "), _c('div', {
            staticClass: "question-block"
          }, [_c('a', {
            staticClass: "accordion",
            attrs: {
              "name": question.title
            }
          }, [_vm._v(_vm._s(question.title))]), _vm._v(" "), _c('div', {
            staticClass: "accordian-panel",
            class: _vm.handleActive(question.active),
            domProps: {
              "innerHTML": _vm._s(question.text)
            }
          })])]) : _vm._e()]);
        }));
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-26be0da0", esExports);
        }
      }

      /***/
    },
    /* 26 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(2);
      //
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */__webpack_exports__["a"] = {
        data: function data() {
          return {
            faqs: [],
            url: '',
            activeCategory: ''
          };
        },
        methods: {
          fetchCategory: function fetchCategory(item) {
            item.questions.map(function (item) {
              item.active = 'hidden';
              return item;
            });

            this.activeCategory = item.title;
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setCategory', item.title);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setQuestions', item.questions);

            if (!this.urlDisabled) {
              var base = this.url;
              history.replaceState({}, null, '/' + query.link);
            }
          }
        },
        mounted: function mounted() {
          var _this = this;

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setUrl', function (url) {
            _this.url = url;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setFaqs', function (faqs) {
            _this.faqs = faqs;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('urlDisabled', function (bool) {
            _this.urlDisabled = bool;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setInitialCategory', function (category) {
            _this.activeCategory = category;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('fromSelect', function (category) {
            _this.activeCategory = category;
          });
        }
      };

      /***/
    },
    /* 27 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', [_c('ul', {
          staticClass: "faq-category-container"
        }, _vm._l(_vm.faqs, function (item) {
          return _c('li', {
            class: {
              'selected': item.title == _vm.activeCategory
            }
          }, [_c('a', {
            on: {
              "click": function click($event) {
                _vm.fetchCategory(item);
              }
            }
          }, [_vm._v(_vm._s(item.title))])]);
        }))]);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-104b2e48", esExports);
        }
      }

      /***/
    },
    /* 28 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(2);
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */__webpack_exports__["a"] = {
        props: ['classname'],
        data: function data() {
          return {
            faqs: [],
            url: '',
            activeCategory: '',
            selectedCategory: ''
          };
        },
        methods: {
          fetchCategory: function fetchCategory(e) {
            var _this = this;

            var query = this.faqs.filter(function (item) {
              return item.title == _this.selectedCategory;
            })[0];

            query.questions.map(function (item) {
              item.active = 'hidden';
              return item;
            });

            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setCategory', query.title);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('fromSelect', query.title);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setQuestions', query.questions);

            if (!this.urlDisabled) {
              var base = this.url;
              history.replaceState({}, null, '/' + query.link);
            }
          }
        },
        mounted: function mounted() {
          var _this2 = this;

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setUrl', function (url) {
            _this2.url = url;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setFaqs', function (faqs) {
            _this2.faqs = faqs;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('urlDisabled', function (bool) {
            _this2.urlDisabled = bool;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setInitialCategory', function (category, catObj) {
            _this2.selectedCategory = catObj.title;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setCategory', function (category) {
            _this2.selectedCategory = category;
          });
        }
      };

      /***/
    },
    /* 29 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', [_c('select', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.selectedCategory,
            expression: "selectedCategory"
          }],
          class: _vm.classname,
          on: {
            "change": [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.selectedCategory = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.fetchCategory]
          }
        }, _vm._l(_vm.faqs, function (item) {
          return _c('option', [_vm._v(_vm._s(item.title))]);
        }))]);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-2a01dd64", esExports);
        }
      }

      /***/
    },
    /* 30 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(2);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vue_scrollto__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vue_scrollto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_scrollto__);
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //


      /* harmony default export */__webpack_exports__["a"] = {
        props: {
          noResults: {
            default: 'No results found for'
          }

        },
        data: function data() {
          return {
            showSearch: false,
            searchResults: [],
            resultIndex: 0,
            hasInput: false,
            inputVal: '',
            entered: false,
            activeForm: false
          };
        },
        methods: {
          querySelect: function querySelect(question) {
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('showSearch', false);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('updateIndex', 0);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setCategory', question.parent_link);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('entered', true);
            __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('updateText', question.title);
            var mappedQuestions = this.faqs.filter(function (item) {
              return question.parent_link == item.title;
            })[0];
            console.log(mappedQuestions);
            if (mappedQuestions) {
              mappedQuestions.questions.map(function (item) {
                if (item.title == question.title) {
                  item.active = true;
                } else {
                  item.active = 'hidden';
                }
              });

              __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$emit('setQuestions', mappedQuestions.questions);
              setTimeout(function () {
                Object(__WEBPACK_IMPORTED_MODULE_1_vue_scrollto__["scrollTo"])('a[name=\'' + question.title + '\']');
              }, 100);

              if (!this.urlDisabled) {
                var base = this.url;
                var newUrl = base + parentLink + '/' + question.link;
                history.replaceState({}, null, newUrl);
              }
            }
          }
        },
        mounted: function mounted() {
          var _this = this;

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setBaseUrl', function (url) {
            _this.url = url;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('updateIndex', function (index) {
            _this.resultIndex = index;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('updateSearchResults', function (results) {
            _this.searchResults = results;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('showSearch', function (bool) {
            _this.showSearch = bool;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('activeForm', function (bool) {
            _this.activeForm = bool;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('inputChange', function (val) {
            _this.inputVal = val;
            _this.hasInput = val.length;
            _this.entered = false;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('entered', function () {
            _this.entered = true;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('setFaqs', function (faqs) {
            _this.faqs = faqs;
          });

          __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].$on('urlDisabled', function (bool) {
            _this.urlDisabled = bool;
          });
        }
      };

      /***/
    },
    /* 31 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', {
          staticClass: "faq-suggestion-container"
        }, [_c('div', [_vm.hasInput && _vm.searchResults.length && !_vm.entered ? _c('ul', _vm._l(_vm.searchResults, function (result, index) {
          return _c('li', {
            class: {
              'selected': index == _vm.resultIndex
            },
            attrs: {
              "parent": result.parent_link,
              "child": result.link
            },
            on: {
              "click": function click($event) {
                _vm.querySelect(result);
              }
            }
          }, [_vm._v(_vm._s(result.title))]);
        })) : _vm._e(), _vm._v(" "), _vm.activeForm && _vm.hasInput && _vm.searchResults.length == 0 ? _c('div', {
          staticClass: "faq-no-results"
        }, [_vm._t("faq-no-results", [_vm._v(_vm._s(_vm.noResults))]), _vm._v(" "), _c('span', [_vm._v("\"" + _vm._s(_vm.inputVal) + "\"")])], 2) : _vm._e()])]);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-084da3ce", esExports);
        }
      }

      /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(33);

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);
      var bind = __webpack_require__(10);
      var Axios = __webpack_require__(35);
      var defaults = __webpack_require__(3);

      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);

        // Copy axios.prototype to instance
        utils.extend(instance, Axios.prototype, context);

        // Copy context to instance
        utils.extend(instance, context);

        return instance;
      }

      // Create the default instance to be exported
      var axios = createInstance(defaults);

      // Expose Axios class to allow class inheritance
      axios.Axios = Axios;

      // Factory for creating new instances
      axios.create = function create(instanceConfig) {
        return createInstance(utils.merge(defaults, instanceConfig));
      };

      // Expose Cancel & CancelToken
      axios.Cancel = __webpack_require__(15);
      axios.CancelToken = __webpack_require__(49);
      axios.isCancel = __webpack_require__(14);

      // Expose all/spread
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = __webpack_require__(50);

      module.exports = axios;

      // Allow use of default import syntax in TypeScript
      module.exports.default = axios;

      /***/
    },
    /* 34 */
    /***/function (module, exports) {

      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */

      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      }

      // For Node v0.10 support. Remove this eventually.
      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var defaults = __webpack_require__(3);
      var utils = __webpack_require__(0);
      var InterceptorManager = __webpack_require__(44);
      var dispatchRequest = __webpack_require__(45);
      var isAbsoluteURL = __webpack_require__(47);
      var combineURLs = __webpack_require__(48);

      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */
      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof config === 'string') {
          config = utils.merge({
            url: arguments[0]
          }, arguments[1]);
        }

        config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
        config.method = config.method.toLowerCase();

        // Support baseURL config
        if (config.baseURL && !isAbsoluteURL(config.url)) {
          config.url = combineURLs(config.baseURL, config.url);
        }

        // Hook up interceptors middleware
        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);

        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      };

      // Provide aliases for supported request methods
      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url
          }));
        };
      });

      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, data, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
          }));
        };
      });

      module.exports = Axios;

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var createError = __webpack_require__(13);

      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
        }
      };

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */

      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        return error;
      };

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      }

      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */
      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];

          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            }

            if (!utils.isArray(val)) {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + '=' + encode(v));
            });
          });

          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        });

        return parsed;
      };

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = utils.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;

        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() :

      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

      function E() {
        this.message = 'String contains an invalid character';
      }
      E.prototype = new Error();
      E.prototype.code = 5;
      E.prototype.name = 'InvalidCharacterError';

      function btoa(input) {
        var str = String(input);
        var output = '';
        for (
        // initialize result and counter
        var block, charCode, idx = 0, map = chars;
        // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        str.charAt(idx | 0) || (map = '=', idx % 1);
        // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
          charCode = str.charCodeAt(idx += 3 / 4);
          if (charCode > 0xFF) {
            throw new E();
          }
          block = block << 8 | charCode;
        }
        return output;
      }

      module.exports = btoa;

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = utils.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() :

      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      }();

      /***/
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      function InterceptorManager() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected
        });
        return this.handlers.length - 1;
      };

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);
      var transformData = __webpack_require__(46);
      var isCancel = __webpack_require__(14);
      var defaults = __webpack_require__(3);

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }

      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);

        // Ensure headers exist
        config.headers = config.headers || {};

        // Transform request data
        config.data = transformData(config.data, config.headers, config.transformRequest);

        // Flatten headers
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });

        var adapter = config.adapter || defaults.adapter;

        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);

          // Transform response data
          response.data = transformData(response.data, response.headers, config.transformResponse);

          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);

            // Transform response data
            if (reason && reason.response) {
              reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
          }

          return Promise.reject(reason);
        });
      };

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */
      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });

        return data;
      };

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */

      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
        );
      };

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */

      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
      };

      /***/
    },
    /* 49 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var Cancel = __webpack_require__(15);

      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */
      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;

      /***/
    },
    /* 50 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */

      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };

      /***/
    },
    /* 51 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
        return _c('div', {
          staticClass: "faq-container"
        }, [_vm._t("default")], 2);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-aa961856", esExports);
        }
      }

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=vue-faqs.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(15)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--2-0!../../../../node_modules/style-loader/index.js!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--2-0!../../../../node_modules/style-loader/index.js!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);