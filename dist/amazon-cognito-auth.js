/*!
 * Copyright 2017 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 * 
 *      http://aws.amazon.com/apache2.0/
 * 
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License. 
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AmazonCognitoIdentity"] = factory();
	else
		root["AmazonCognitoIdentity"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
	import _Object$keys from 'babel-runtime/core-js/object/keys';
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _src = __webpack_require__(78);

	_Object$keys(_src).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;

	  _Object$defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _src[key];
	    }
	  });
	});

	var enhancements = _interopRequireWildcard(_src);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// The version of crypto-browserify included by aws-sdk only
	// checks for window.crypto, not window.msCrypto as used by
	// IE 11 – so we set it explicitly here
	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
	  window.crypto = window.msCrypto;
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(44)('wks');
	var uid = __webpack_require__(25);
	var Symbol = __webpack_require__(1).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1);
	var core = __webpack_require__(3);
	var ctx = __webpack_require__(12);
	var hide = __webpack_require__(11);
	var has = __webpack_require__(13);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(17)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(10);
	var IE8_DOM_DEFINE = __webpack_require__(58);
	var toPrimitive = __webpack_require__(47);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(81);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(7);
	var createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(5) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(59);
	var defined = __webpack_require__(33);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(12);
	var call = __webpack_require__(104);
	var isArrayIter = __webpack_require__(103);
	var anObject = __webpack_require__(10);
	var toLength = __webpack_require__(46);
	var getIterFn = __webpack_require__(74);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(7).f;
	var has = __webpack_require__(13);
	var TAG = __webpack_require__(2)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(112)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(36)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	var global = __webpack_require__(1);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(19);
	var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoAccessToken = function () {
	  /**
	   * Constructs a new CognitoAccessToken object
	   * @param {string=} AccessToken The JWT access token.
	   */
	  function CognitoAccessToken(AccessToken) {
	    (0, _classCallCheck3.default)(this, CognitoAccessToken);

	    // Assign object
	    this.jwtToken = AccessToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  (0, _createClass3.default)(CognitoAccessToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    }

	    /**
	     * Sets new value for access token.
	     * @param {string=} accessToken The JWT access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(accessToken) {
	      this.jwtToken = accessToken;
	    }

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      var jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse(atob(jwtPayload)).exp;
	    }

	    /**
	     * @returns {string} the username from payload.
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      var jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse(atob(jwtPayload)).username;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse(atob(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);
	  return CognitoAccessToken;
	}();

	exports.default = CognitoAccessToken;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoIdToken = function () {
	  /**
	   * Constructs a new CognitoIdToken object
	   * @param {string=} IdToken The JWT Id token
	   */
	  function CognitoIdToken(IdToken) {
	    (0, _classCallCheck3.default)(this, CognitoIdToken);

	    // Assign object
	    this.jwtToken = IdToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  (0, _createClass3.default)(CognitoIdToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    }

	    /**
	     * Sets new value for id token.
	     * @param {string=} idToken The JWT Id token
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(idToken) {
	      this.jwtToken = idToken;
	    }

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      var jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse(atob(jwtPayload)).exp;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse(atob(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);
	  return CognitoIdToken;
	}();

	exports.default = CognitoIdToken;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoRefreshToken = function () {
	  /**
	   * Constructs a new CognitoRefreshToken object
	   * @param {string=} RefreshToken The JWT refresh token.
	   */
	  function CognitoRefreshToken(RefreshToken) {
	    (0, _classCallCheck3.default)(this, CognitoRefreshToken);

	    // Assign object
	    this.refreshToken = RefreshToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  (0, _createClass3.default)(CognitoRefreshToken, [{
	    key: 'getToken',
	    value: function getToken() {
	      return this.refreshToken;
	    }

	    /**
	     * Sets new value for refresh token.
	     * @param {string=} refreshToken The JWT refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setToken',
	    value: function setToken(refreshToken) {
	      this.refreshToken = refreshToken;
	    }
	  }]);
	  return CognitoRefreshToken;
	}();

	exports.default = CognitoRefreshToken;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoTokenScopes = function () {
	  /**
	   * Constructs a new CognitoTokenScopes object
	   * @param {array=} TokenScopesArray The token scopes
	   */
	  function CognitoTokenScopes(TokenScopesArray) {
	    (0, _classCallCheck3.default)(this, CognitoTokenScopes);

	    // Assign object
	    this.tokenScopes = TokenScopesArray || [];
	  }

	  /**
	   * @returns {Array} the token scopes.
	   */


	  (0, _createClass3.default)(CognitoTokenScopes, [{
	    key: "getScopes",
	    value: function getScopes() {
	      return this.tokenScopes;
	    }

	    /**
	     * Sets new value for token scopes.
	     * @param {array=} tokenScopes The token scopes
	     * @returns {void}
	     */

	  }, {
	    key: "setTokenScopes",
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    }
	  }]);
	  return CognitoTokenScopes;
	}();

	exports.default = CognitoTokenScopes;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(16);
	var TAG = __webpack_require__(2)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	var document = __webpack_require__(1).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(20);
	var $export = __webpack_require__(4);
	var redefine = __webpack_require__(67);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(19);
	var $iterCreate = __webpack_require__(105);
	var setToStringTag = __webpack_require__(21);
	var getPrototypeOf = __webpack_require__(111);
	var ITERATOR = __webpack_require__(2)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(25)('meta');
	var isObject = __webpack_require__(6);
	var has = __webpack_require__(13);
	var setDesc = __webpack_require__(7).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(17)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(15);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(10);
	var dPs = __webpack_require__(108);
	var enumBugKeys = __webpack_require__(35);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(34)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(64);
	var enumBugKeys = __webpack_require__(35);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys');
	var uid = __webpack_require__(25);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(3);
	var global = __webpack_require__(1);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(20) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(45);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(6);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1);
	var core = __webpack_require__(3);
	var LIBRARY = __webpack_require__(20);
	var wksExt = __webpack_require__(50);
	var defineProperty = __webpack_require__(7).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(2);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _CognitoTokenScopes = __webpack_require__(30);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(27);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(28);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(29);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @class */
	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	var CognitoAuthSession = function () {
	  /**
	   * Constructs a new CognitoUserSession object
	   * @param {CognitoIdToken} IdToken The session's Id token.
	   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	   * @param {CognitoAccessToken} AccessToken The session's access token.
	   * @param {array}  TokenScopes  The session's token scopes.
	    * @param {string} State The session's state. 
	   */
	  function CognitoAuthSession() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        IdToken = _ref.IdToken,
	        RefreshToken = _ref.RefreshToken,
	        AccessToken = _ref.AccessToken,
	        TokenScopes = _ref.TokenScopes,
	        State = _ref.State;

	    (0, _classCallCheck3.default)(this, CognitoAuthSession);

	    if (IdToken) {
	      this.idToken = IdToken;
	    } else {
	      this.idToken = new _CognitoIdToken2.default();
	    }
	    if (RefreshToken) {
	      this.refreshToken = RefreshToken;
	    } else {
	      this.refreshToken = new _CognitoRefreshToken2.default();
	    }
	    if (AccessToken) {
	      this.accessToken = AccessToken;
	    } else {
	      this.accessToken = new _CognitoAccessToken2.default();
	    }
	    if (TokenScopes) {
	      this.tokenScopes = TokenScopes;
	    } else {
	      this.tokenScopes = new _CognitoTokenScopes2.default();
	    }
	    if (State) {
	      this.state = State;
	    } else {
	      this.state = null;
	    }
	  }

	  /**
	   * @returns {CognitoIdToken} the session's Id token
	   */


	  (0, _createClass3.default)(CognitoAuthSession, [{
	    key: 'getIdToken',
	    value: function getIdToken() {
	      return this.idToken;
	    }

	    /**
	     * Set a new Id token
	     * @param {CognitoIdToken} IdToken The session's Id token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setIdToken',
	    value: function setIdToken(IdToken) {
	      this.idToken = IdToken;
	    }

	    /**
	     * @returns {CognitoRefreshToken} the session's refresh token
	     */

	  }, {
	    key: 'getRefreshToken',
	    value: function getRefreshToken() {
	      return this.refreshToken;
	    }

	    /**
	     * Set a new Refresh token
	     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setRefreshToken',
	    value: function setRefreshToken(RefreshToken) {
	      this.refreshToken = RefreshToken;
	    }

	    /**
	     * @returns {CognitoAccessToken} the session's access token
	     */

	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      return this.accessToken;
	    }

	    /**
	     * Set a new Access token
	     * @param {CognitoAccessToken} AccessToken The session's access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setAccessToken',
	    value: function setAccessToken(AccessToken) {
	      this.accessToken = AccessToken;
	    }

	    /**
	     * @returns {CognitoTokenScopes} the session's token scopes
	     */

	  }, {
	    key: 'getTokenScopes',
	    value: function getTokenScopes() {
	      return this.tokenScopes;
	    }

	    /**
	     * Set new token scopes
	     * @param {array}  tokenScopes  The session's token scopes.
	     * @returns {void}
	     */

	  }, {
	    key: 'setTokenScopes',
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    }

	    /**
	     * @returns {string} the session's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }

	    /**
	     * Set new state
	     * @param {string}  state  The session's state.
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
	    }

	    /**
	     * Checks to see if the session is still valid based on session expiry information found
	     * in Access and Id Tokens and the current time
	     * @returns {boolean} if the session is still valid
	     */

	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var now = Math.floor(new Date() / 1000);
	      try {
	        if (this.accessToken != null) {
	          return now < this.accessToken.getExpiration();
	        }
	        if (this.idToken != null) {
	          return now < this.idToken.getExpiration();
	        }
	        return false;
	      } catch (e) {
	        return false;
	      }
	    }
	  }]);
	  return CognitoAuthSession;
	}();

	exports.default = CognitoAuthSession;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
	var dataMemory = {};

	/** @class */

	var MemoryStorage = function () {
	  function MemoryStorage() {
	    (0, _classCallCheck3.default)(this, MemoryStorage);
	  }

	  (0, _createClass3.default)(MemoryStorage, null, [{
	    key: 'setItem',


	    /**
	     * This is used to set a specific item in storage
	     * @param {string} key - the key for the item
	     * @param {object} value - the value
	     * @returns {string} value that was set
	     */
	    value: function setItem(key, value) {
	      dataMemory[key] = value;
	      return dataMemory[key];
	    }

	    /**
	     * This is used to get a specific key from storage
	     * @param {string} key - the key for the item
	     * This is used to clear the storage
	     * @returns {string} the data item
	     */

	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
	    }

	    /**
	     * This is used to remove an item from storage
	     * @param {string} key - the key being set
	     * @returns {string} value - value that was deleted
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      return delete dataMemory[key];
	    }

	    /**
	     * This is used to clear the storage
	     * @returns {string} nothing
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      dataMemory = {};
	      return dataMemory;
	    }
	  }]);
	  return MemoryStorage;
	}();

	/** @class */


	var StorageHelper = function () {

	  /**
	   * This is used to get a storage object
	   * @returns {object} the storage
	   */
	  function StorageHelper() {
	    (0, _classCallCheck3.default)(this, StorageHelper);

	    try {
	      this.storageWindow = window.localStorage;
	      this.storageWindow.setItem('aws.cognito.test-ls', 1);
	      this.storageWindow.removeItem('aws.cognito.test-ls');
	    } catch (exception) {
	      this.storageWindow = MemoryStorage;
	    }
	  }

	  /**
	   * This is used to return the storage
	   * @returns {object} the storage
	   */


	  (0, _createClass3.default)(StorageHelper, [{
	    key: 'getStorage',
	    value: function getStorage() {
	      return this.storageWindow;
	    }
	  }]);
	  return StorageHelper;
	}();

	exports.default = StorageHelper;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(7).f;
	var create = __webpack_require__(39);
	var redefineAll = __webpack_require__(42);
	var ctx = __webpack_require__(12);
	var anInstance = __webpack_require__(31);
	var forOf = __webpack_require__(18);
	var $iterDefine = __webpack_require__(36);
	var step = __webpack_require__(61);
	var setSpecies = __webpack_require__(70);
	var DESCRIPTORS = __webpack_require__(5);
	var fastKey = __webpack_require__(37).fastKey;
	var validate = __webpack_require__(48);
	var SIZE = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(32);
	var from = __webpack_require__(96);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(1);
	var $export = __webpack_require__(4);
	var meta = __webpack_require__(37);
	var fails = __webpack_require__(17);
	var hide = __webpack_require__(11);
	var redefineAll = __webpack_require__(42);
	var forOf = __webpack_require__(18);
	var anInstance = __webpack_require__(31);
	var isObject = __webpack_require__(6);
	var setToStringTag = __webpack_require__(21);
	var dP = __webpack_require__(7).f;
	var each = __webpack_require__(98)(0);
	var DESCRIPTORS = __webpack_require__(5);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function (target, iterable) {
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base();
	      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
	        anInstance(this, C, KEY);
	        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    IS_WEAK || dP(C.prototype, 'size', {
	      get: function () {
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(1).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(5) && !__webpack_require__(17)(function () {
	  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(16);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(16);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(64);
	var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(13);
	var toIObject = __webpack_require__(14);
	var arrayIndexOf = __webpack_require__(97)(false);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(10);
	var isObject = __webpack_require__(6);
	var newPromiseCapability = __webpack_require__(38);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(4);
	var aFunction = __webpack_require__(15);
	var ctx = __webpack_require__(12);
	var forOf = __webpack_require__(18);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(4);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(1);
	var core = __webpack_require__(3);
	var dP = __webpack_require__(7);
	var DESCRIPTORS = __webpack_require__(5);
	var SPECIES = __webpack_require__(2)('species');

	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(10);
	var aFunction = __webpack_require__(15);
	var SPECIES = __webpack_require__(2)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(12);
	var invoke = __webpack_require__(102);
	var html = __webpack_require__(57);
	var cel = __webpack_require__(34);
	var global = __webpack_require__(1);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(16)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(32);
	var ITERATOR = __webpack_require__(2)('iterator');
	var Iterators = __webpack_require__(19);
	module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(53);

	var _promise2 = _interopRequireDefault(_promise);

	var _map = __webpack_require__(80);

	var _map2 = _interopRequireDefault(_map);

	var _typeof2 = __webpack_require__(86);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(79);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _regenerator = __webpack_require__(87);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _set = __webpack_require__(82);

	var _set2 = _interopRequireDefault(_set);

	var _asyncToGenerator2 = __webpack_require__(85);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _CognitoTokenScopes = __webpack_require__(30);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(27);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(28);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(29);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	var _CognitoAuthSession = __webpack_require__(51);

	var _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

	var _StorageHelper = __webpack_require__(52);

	var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @class */
	/*!
	  * Amazon Cognito Auth SDK for JavaScript
	  * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	  *
	  * Licensed under the Apache License, Version 2.0 (the "License").
	  * You may not use this file except in compliance with the License.
	  * A copy of the License is located at
	  *
	  *         http://aws.amazon.com/apache2.0/
	  *
	  * or in the "license" file accompanying this file.
	  * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	  * OR CONDITIONS OF ANY KIND, either express or implied. See the
	  * License for the specific language governing permissions
	  * and limitations under the License.
	  */

	var CognitoAuth = function () {
	  /**
	   * Constructs a new CognitoAuth object
	   * @param {object} data Creation options
	   * @param {string} data.ClientId Required: User pool application client id.
	   * @param {string} data.AppWebDomain Required: The application/user-pools Cognito web hostname,
	   *                     this is set at the Cognito console.
	   * @param {array} data.TokenScopesArray Optional: The token scopes
	   * @param {string} data.RedirectUriSignIn Required: The redirect Uri,
	   * which will be launched after authentication as signed in.
	   * @param {string} data.RedirectUriSignOut Required:
	   * The redirect Uri, which will be launched when signed out.
	   * @param {string} data.IdentityProvider Optional: Pre-selected identity provider (this allows to
	   * automatically trigger social provider authentication flow).
	   * @param {string} data.UserPoolId Optional: UserPoolId for the configured cognito userPool.
	   * @param {boolean} data.AdvancedSecurityDataCollectionFlag Optional: boolean flag indicating if the
	   *        data collection is enabled to support cognito advanced security features. By default, this
	   *        flag is set to true.
	   * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
	   */
	  function CognitoAuth(data) {
	    (0, _classCallCheck3.default)(this, CognitoAuth);

	    var _ref = data || {},
	        ClientId = _ref.ClientId,
	        AppWebDomain = _ref.AppWebDomain,
	        TokenScopesArray = _ref.TokenScopesArray,
	        RedirectUriSignIn = _ref.RedirectUriSignIn,
	        RedirectUriSignOut = _ref.RedirectUriSignOut,
	        IdentityProvider = _ref.IdentityProvider,
	        UserPoolId = _ref.UserPoolId,
	        AdvancedSecurityDataCollectionFlag = _ref.AdvancedSecurityDataCollectionFlag,
	        Storage = _ref.Storage;

	    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
	      throw new Error(this.getCognitoConstants().PARAMETERERROR);
	    }

	    this.clientId = ClientId;
	    this.appWebDomain = AppWebDomain;
	    this.TokenScopesArray = TokenScopesArray || [];
	    if (!Array.isArray(TokenScopesArray)) {
	      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
	    }
	    var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	    this.RedirectUriSignIn = RedirectUriSignIn;
	    this.RedirectUriSignOut = RedirectUriSignOut;
	    this.IdentityProvider = IdentityProvider;
	    this.responseType = this.getCognitoConstants().TOKEN;
	    this.storage = Storage || new _StorageHelper2.default().getStorage();
	    this.username = this.getLastUser();
	    this.userPoolId = UserPoolId;
	    this.signInUserSession = this.getCachedSession();
	    +this.signInUserSession.setTokenScopes(tokenScopes);

	    /**
	     * By default, AdvancedSecurityDataCollectionFlag is set to true, if no input value is provided.
	     */
	    this.advancedSecurityDataCollectionFlag = true;
	    if (AdvancedSecurityDataCollectionFlag) {
	      this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag;
	    }
	  }

	  /**
	   * @returns {JSON} the constants
	   */


	  (0, _createClass3.default)(CognitoAuth, [{
	    key: 'getCognitoConstants',
	    value: function getCognitoConstants() {
	      var CognitoConstants = {
	        DOMAIN_SCHEME: 'https',
	        DOMAIN_PATH_SIGNIN: 'oauth2/authorize',
	        DOMAIN_PATH_TOKEN: 'oauth2/token',
	        DOMAIN_PATH_SIGNOUT: 'logout',
	        DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
	        DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
	        DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
	        DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER: 'identity_provider',
	        DOMAIN_QUERY_PARAM_USERCONTEXTDATA: 'userContextData',
	        CLIENT_ID: 'client_id',
	        STATE: 'state',
	        SCOPE: 'scope',
	        TOKEN: 'token',
	        CODE: 'code',
	        POST: 'POST',
	        PARAMETERERROR: 'The parameters: App client Id, App web domain' + ', the redirect URL when you are signed in and the ' + 'redirect URL when you are signed out are required.',
	        SCOPETYPEERROR: 'Scopes have to be array type. ',
	        QUESTIONMARK: '?',
	        POUNDSIGN: '#',
	        COLONDOUBLESLASH: '://',
	        SLASH: '/',
	        AMPERSAND: '&',
	        EQUALSIGN: '=',
	        SPACE: ' ',
	        CONTENTTYPE: 'Content-Type',
	        CONTENTTYPEVALUE: 'application/x-www-form-urlencoded',
	        AUTHORIZATIONCODE: 'authorization_code',
	        IDTOKEN: 'id_token',
	        ACCESSTOKEN: 'access_token',
	        REFRESHTOKEN: 'refresh_token',
	        ERROR: 'error',
	        ERROR_DESCRIPTION: 'error_description',
	        STRINGTYPE: 'string',
	        STATELENGTH: 32,
	        STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	        WITHCREDENTIALS: 'withCredentials',
	        UNDEFINED: 'undefined',
	        SELF: '_self',
	        HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
	        QUERYPARAMETERREGEX1: /#(.+)/,
	        QUERYPARAMETERREGEX2: /=(.+)/,
	        HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' }
	      };
	      return CognitoConstants;
	    }

	    /**
	     * @returns {string} the client id
	     */

	  }, {
	    key: 'getClientId',
	    value: function getClientId() {
	      return this.clientId;
	    }

	    /**
	     * @returns {string} the app web domain
	     */

	  }, {
	    key: 'getAppWebDomain',
	    value: function getAppWebDomain() {
	      return this.appWebDomain;
	    }

	    /**
	     * method for getting the current user of the application from the local storage
	     *
	     * @returns {CognitoAuth} the user retrieved from storage
	     */

	  }, {
	    key: 'getCurrentUser',
	    value: function getCurrentUser() {
	      var lastUserKey = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser';

	      var lastAuthUser = this.storage.getItem(lastUserKey);
	      return lastAuthUser;
	    }

	    /**
	     * @param {string} Username the user's name
	     * method for setting the current user's name
	     * @returns {void}
	     */

	  }, {
	    key: 'setUser',
	    value: function setUser(Username) {
	      this.username = Username;
	    }

	    /**
	     * sets response type to 'code'
	     * @returns {void}
	     */

	  }, {
	    key: 'useCodeGrantFlow',
	    value: function useCodeGrantFlow() {
	      this.responseType = this.getCognitoConstants().CODE;
	    }

	    /**
	     * sets response type to 'token'
	     * @returns {void}
	     */

	  }, {
	    key: 'useImplicitFlow',
	    value: function useImplicitFlow() {
	      this.responseType = this.getCognitoConstants().TOKEN;
	    }

	    /**
	     * @returns {CognitoAuthSession} the current session for this user
	     */

	  }, {
	    key: 'getSignInUserSession',
	    value: function getSignInUserSession() {
	      return this.signInUserSession;
	    }

	    /**
	     * @returns {string} the user's username
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      return this.username;
	    }

	    /**
	     * @param {string} Username the user's username
	     * @returns {void}
	     */

	  }, {
	    key: 'setUsername',
	    value: function setUsername(Username) {
	      this.username = Username;
	    }

	    /**
	     * @returns {string} the user's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }

	    /**
	     * @param {string} State the user's state
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
	    }

	    /**
	     * This is used to get a session, either from the session object
	     * or from the local storage, or by using a refresh token
	     * @param {string} RedirectUriSignIn Required: The redirect Uri,
	     * which will be launched after authentication.
	     * @param {array} TokenScopesArray Required: The token scopes, it is an
	     * array of strings specifying all scopes for the tokens.
	     * @returns {void}
	     */

	  }, {
	    key: 'getSession',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	        var tokenScopesInputSet, cachedScopesSet, URL, tokenScopes, idToken, accessToken, refreshToken;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                tokenScopesInputSet = new _set2.default(this.TokenScopesArray);
	                cachedScopesSet = new _set2.default(this.signInUserSession.tokenScopes.getScopes());
	                URL = this.getFQDNSignIn();

	                if (!(this.signInUserSession != null && this.signInUserSession.isValid())) {
	                  _context.next = 5;
	                  break;
	                }

	                return _context.abrupt('return', this.signInUserSession);

	              case 5:
	                this.signInUserSession = this.getCachedSession();
	                // compare scopes

	                if (this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
	                  _context.next = 18;
	                  break;
	                }

	                tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	                idToken = new _CognitoIdToken2.default();
	                accessToken = new _CognitoAccessToken2.default();
	                refreshToken = new _CognitoRefreshToken2.default();

	                this.signInUserSession.setTokenScopes(tokenScopes);
	                this.signInUserSession.setIdToken(idToken);
	                this.signInUserSession.setAccessToken(accessToken);
	                this.signInUserSession.setRefreshToken(refreshToken);
	                this.launchUri(URL);
	                _context.next = 29;
	                break;

	              case 18:
	                if (!this.signInUserSession.isValid()) {
	                  _context.next = 22;
	                  break;
	                }

	                return _context.abrupt('return', this.signInUserSession);

	              case 22:
	                if (!(!this.signInUserSession.getRefreshToken() || !this.signInUserSession.getRefreshToken().getToken())) {
	                  _context.next = 26;
	                  break;
	                }

	                this.launchUri(URL);
	                _context.next = 29;
	                break;

	              case 26:
	                _context.next = 28;
	                return this.refreshSession(this.signInUserSession.getRefreshToken().getToken());

	              case 28:
	                return _context.abrupt('return', this.signInUserSession);

	              case 29:
	                throw undefined;

	              case 30:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getSession() {
	        return _ref2.apply(this, arguments);
	      }

	      return getSession;
	    }()

	    /**
	     * This is used to start a new session
	     * @param {string} RedirectUriSignIn Required: The redirect Uri,
	     * which will be launched after authentication.
	     * @param {array} TokenScopesArray Required: The token scopes, it is an
	     * array of strings specifying all scopes for the tokens.
	     * @returns {void}
	     */

	  }, {
	    key: 'startSession',
	    value: function startSession() {
	      var URL = this.getFQDNSignIn();
	      var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	      var idToken = new _CognitoIdToken2.default();
	      var accessToken = new _CognitoAccessToken2.default();
	      var refreshToken = new _CognitoRefreshToken2.default();
	      this.signInUserSession.setTokenScopes(tokenScopes);
	      this.signInUserSession.setIdToken(idToken);
	      this.signInUserSession.setAccessToken(accessToken);
	      this.signInUserSession.setRefreshToken(refreshToken);
	      this.launchUri(URL);
	    }

	    /**
	     * @param {string} httpRequestResponse the http request response
	     * @returns {void}
	     * Parse the http request response and proceed according to different response types.
	     */

	  }, {
	    key: 'parseCognitoWebResponse',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(httpRequestResponse) {
	        var map, response, _response, _response2;

	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                map = void 0;

	                if (!(httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1)) {
	                  _context2.next = 10;
	                  break;
	                }

	                // for code type
	                // this is to avoid a bug exists when sign in with Google or facebook
	                // Sometimes the code will contain a poundsign in the end which breaks the parsing
	                response = httpRequestResponse.split(this.getCognitoConstants().POUNDSIGN)[0];

	                map = this.getQueryParameters(response, this.getCognitoConstants().QUESTIONMARK);
	                // this.getCodeQueryParameter(map);
	                _context2.next = 6;
	                return this.getCodeQueryParameter(map);

	              case 6:
	                _response = _context2.sent;
	                return _context2.abrupt('return', _response);

	              case 10:
	                if (!(httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1)) {
	                  _context2.next = 18;
	                  break;
	                }

	                // for token type
	                map = this.getQueryParameters(httpRequestResponse, this.getCognitoConstants().QUERYPARAMETERREGEX1);

	                if (!map.has(this.getCognitoConstants().ERROR)) {
	                  _context2.next = 14;
	                  break;
	                }

	                return _context2.abrupt('return', this.userhandler.onFailure(map.get(this.getCognitoConstants().ERROR_DESCRIPTION)));

	              case 14:
	                _context2.next = 16;
	                return this.getTokenQueryParameter(map);

	              case 16:
	                _response2 = _context2.sent;
	                return _context2.abrupt('return', _response2);

	              case 18:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      function parseCognitoWebResponse(_x) {
	        return _ref3.apply(this, arguments);
	      }

	      return parseCognitoWebResponse;
	    }()

	    // done -2
	    /**
	     * @param {map} Query parameter map 
	     * @returns {void}
	     * Get the query parameter map and proceed according to code response type.
	     */

	  }, {
	    key: 'getCodeQueryParameter',
	    value: function () {
	      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(map) {
	        var state, codeParameter, url, header, body, _response;

	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                state = null;

	                if (map.has(this.getCognitoConstants().STATE)) {
	                  this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
	                } else {
	                  this.signInUserSession.setState(state);
	                }

	                if (!map.has(this.getCognitoConstants().CODE)) {
	                  _context3.next = 13;
	                  break;
	                }

	                // if the response contains code
	                // To parse the response and get the code value.
	                codeParameter = map.get(this.getCognitoConstants().CODE);
	                url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	                header = this.getCognitoConstants().HEADER;
	                body = { grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
	                  client_id: this.getClientId(),
	                  redirect_uri: this.RedirectUriSignIn,
	                  code: codeParameter };
	                // const boundOnSuccess = (this.onSuccessExchangeForToken).bind(this);
	                // const boundOnFailure = (this.onFailure).bind(this);
	                // this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);

	                _context3.next = 9;
	                return this.makePOSTRequest(header, body, url);

	              case 9:
	                _response = _context3.sent;
	                _context3.next = 12;
	                return this.onSuccessExchangeForToken(_response);

	              case 12:
	                return _context3.abrupt('return', this.signInUserSession);

	              case 13:
	                return _context3.abrupt('return', null);

	              case 14:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));

	      function getCodeQueryParameter(_x2) {
	        return _ref4.apply(this, arguments);
	      }

	      return getCodeQueryParameter;
	    }()

	    // done -2
	    /**
	     * Get the query parameter map and proceed according to token response type.
	     * @param {map} Query parameter map 
	     * @returns {void}
	     */

	  }, {
	    key: 'getTokenQueryParameter',
	    value: function () {
	      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(map) {
	        var idToken, accessToken, refreshToken, state;
	        return _regenerator2.default.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                idToken = new _CognitoIdToken2.default();
	                accessToken = new _CognitoAccessToken2.default();
	                refreshToken = new _CognitoRefreshToken2.default();
	                state = null;

	                if (map.has(this.getCognitoConstants().IDTOKEN)) {
	                  idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
	                  this.signInUserSession.setIdToken(idToken);
	                } else {
	                  this.signInUserSession.setIdToken(idToken);
	                }
	                if (map.has(this.getCognitoConstants().ACCESSTOKEN)) {
	                  accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
	                  this.signInUserSession.setAccessToken(accessToken);
	                } else {
	                  this.signInUserSession.setAccessToken(accessToken);
	                }
	                if (map.has(this.getCognitoConstants().STATE)) {
	                  this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
	                } else {
	                  this.signInUserSession.setState(state);
	                }
	                this.cacheTokensScopes();
	                // this.userhandler.onSuccess(this.signInUserSession); 
	                return _context4.abrupt('return', this.signInUserSession);

	              case 9:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));

	      function getTokenQueryParameter(_x3) {
	        return _ref5.apply(this, arguments);
	      }

	      return getTokenQueryParameter;
	    }()

	    /**
	     * Get cached tokens and scopes and return a new session using all the cached data.
	     * @returns {CognitoAuthSession} the auth session
	     */

	  }, {
	    key: 'getCachedSession',
	    value: function getCachedSession() {
	      if (!this.username) {
	        return new _CognitoAuthSession2.default();
	      }
	      var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId() + '.' + this.username;
	      var idTokenKey = keyPrefix + '.idToken';
	      var accessTokenKey = keyPrefix + '.accessToken';
	      var refreshTokenKey = keyPrefix + '.refreshToken';
	      var scopeKey = keyPrefix + '.tokenScopesString';

	      var scopesString = this.storage.getItem(scopeKey);
	      var scopesArray = [];
	      if (scopesString) {
	        scopesArray = scopesString.split(' ');
	      }
	      var tokenScopes = new _CognitoTokenScopes2.default(scopesArray);
	      var idToken = new _CognitoIdToken2.default(this.storage.getItem(idTokenKey));
	      var accessToken = new _CognitoAccessToken2.default(this.storage.getItem(accessTokenKey));
	      var refreshToken = new _CognitoRefreshToken2.default(this.storage.getItem(refreshTokenKey));

	      var sessionData = {
	        IdToken: idToken,
	        AccessToken: accessToken,
	        RefreshToken: refreshToken,
	        TokenScopes: tokenScopes
	      };
	      var cachedSession = new _CognitoAuthSession2.default(sessionData);
	      return cachedSession;
	    }

	    /**
	     * This is used to get last signed in user from local storage
	     * @returns {string} the last user name
	     */

	  }, {
	    key: 'getLastUser',
	    value: function getLastUser() {
	      var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	      var lastUserKey = keyPrefix + '.LastAuthUser';
	      var lastUserName = this.storage.getItem(lastUserKey);
	      if (lastUserName) {
	        return lastUserName;
	      }
	      return undefined;
	    }

	    /**
	     * This is used to save the session tokens and scopes to local storage
	     * Input parameter is a set of strings.
	     * @returns {void}
	     */

	  }, {
	    key: 'cacheTokensScopes',
	    value: function cacheTokensScopes() {
	      var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	      var tokenUserName = this.signInUserSession.getAccessToken().getUsername();
	      this.username = tokenUserName;
	      var idTokenKey = keyPrefix + '.' + tokenUserName + '.idToken';
	      var accessTokenKey = keyPrefix + '.' + tokenUserName + '.accessToken';
	      var refreshTokenKey = keyPrefix + '.' + tokenUserName + '.refreshToken';
	      var lastUserKey = keyPrefix + '.LastAuthUser';
	      var scopeKey = keyPrefix + '.' + tokenUserName + '.tokenScopesString';
	      var scopesArray = this.signInUserSession.getTokenScopes().getScopes();
	      var scopesString = scopesArray.join(' ');
	      this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
	      this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
	      this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
	      this.storage.setItem(lastUserKey, tokenUserName);
	      this.storage.setItem(scopeKey, scopesString);
	    }

	    /**
	     * Compare two sets if they are identical.
	     * @param {set} set1 one set
	     * @param {set} set2 the other set
	     * @returns {boolean} boolean value is true if two sets are identical
	     */

	  }, {
	    key: 'compareSets',
	    value: function compareSets(set1, set2) {
	      if (set1.size !== set2.size) {
	        return false;
	      }
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(set1), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;

	          if (!set2.has(item)) {
	            return false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return true;
	    }

	    /**
	     * @param {string} url the url string
	     * Get the hostname from url.
	     * @returns {string} hostname string
	     */

	  }, {
	    key: 'getHostName',
	    value: function getHostName(url) {
	      var match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
	      if (match != null && match.length > 2 && (0, _typeof3.default)(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
	        return match[2];
	      }
	      return undefined;
	    }

	    /**
	     * Get http query parameters and return them as a map.
	     * @param {string} url the url string
	     * @param {string} splitMark query parameters split mark (prefix)
	     * @returns {map} map
	     */

	  }, {
	    key: 'getQueryParameters',
	    value: function getQueryParameters(url, splitMark) {
	      var str = String(url).split(splitMark);
	      var url2 = str[1];
	      var str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
	      var num = str1.length;
	      var map = new _map2.default();
	      var i = void 0;
	      for (i = 0; i < num; i++) {
	        str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
	        map.set(str1[i][0], str1[i][1]);
	      }
	      return map;
	    }

	    /**
	     * helper function to generate a random string
	     * @param {int} length the length of string
	     * @param {string} chars a original string
	     * @returns {string} a random value.
	     */

	  }, {
	    key: 'generateRandomString',
	    value: function generateRandomString(length, chars) {
	      var result = '';
	      var i = length;
	      for (; i > 0; --i) {
	        result += chars[Math.round(Math.random() * (chars.length - 1))];
	      }return result;
	    }

	    /**
	     * This is used to clear the session tokens and scopes from local storage
	     * @returns {void}
	     */

	  }, {
	    key: 'clearCachedTokensScopes',
	    value: function clearCachedTokensScopes() {
	      var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	      var idTokenKey = keyPrefix + '.' + this.username + '.idToken';
	      var accessTokenKey = keyPrefix + '.' + this.username + '.accessToken';
	      var refreshTokenKey = keyPrefix + '.' + this.username + '.refreshToken';
	      var lastUserKey = keyPrefix + '.LastAuthUser';
	      var scopeKey = keyPrefix + '.' + this.username + '.tokenScopesString';

	      this.storage.removeItem(idTokenKey);
	      this.storage.removeItem(accessTokenKey);
	      this.storage.removeItem(refreshTokenKey);
	      this.storage.removeItem(lastUserKey);
	      this.storage.removeItem(scopeKey);
	    }

	    /**
	     * This is used to build a user session from tokens retrieved in the authentication result
	     * @param {object} refreshToken authResult Successful auth response from server.
	     * @returns {void}
	     */

	  }, {
	    key: 'refreshSession',
	    value: function () {
	      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(refreshToken) {
	        var url, header, body, response, signInUserSession;
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                // https POST call for refreshing token
	                url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	                header = this.getCognitoConstants().HEADER;
	                body = { grant_type: this.getCognitoConstants().REFRESHTOKEN,
	                  client_id: this.getClientId(),
	                  redirect_uri: this.RedirectUriSignIn,
	                  refresh_token: refreshToken };
	                // const boundOnSuccess = (this.onSuccessRefreshToken).bind(this);
	                // const boundOnFailure = (this.onFailure).bind(this);
	                // this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);

	                _context5.next = 5;
	                return this.makePOSTRequest(header, body, url);

	              case 5:
	                response = _context5.sent;
	                _context5.next = 8;
	                return this.onSuccessRefreshToken(response);

	              case 8:
	                signInUserSession = _context5.sent;
	                return _context5.abrupt('return', signInUserSession);

	              case 10:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));

	      function refreshSession(_x4) {
	        return _ref6.apply(this, arguments);
	      }

	      return refreshSession;
	    }()

	    /**
	     * Make the http POST request.
	     * @param {JSON} header header JSON object
	     * @param {JSON} body body JSON object
	     * @param {string} url string
	     * @param {function} onSuccess callback
	     * @param {function} onFailure callback
	     * @returns {void}
	     */

	  }, {
	    key: 'makePOSTRequest',
	    value: function makePOSTRequest(header, body, url) {
	      var _this = this;

	      var onSuccess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	      var onFailure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

	      return new _promise2.default(function (resolve, reject) {

	        // This is a sample server that supports CORS.
	        var xhr = _this.createCORSRequest(_this.getCognitoConstants().POST, url);
	        var bodyString = '';
	        if (!xhr) {
	          return;
	        }
	        // set header
	        for (var key in header) {
	          xhr.setRequestHeader(key, header[key]);
	        }
	        for (var _key in body) {
	          bodyString = bodyString.concat(_key, _this.getCognitoConstants().EQUALSIGN, body[_key], _this.getCognitoConstants().AMPERSAND);
	        }
	        bodyString = bodyString.substring(0, bodyString.length - 1);
	        xhr.send(bodyString);
	        xhr.onreadystatechange = function addressState() {
	          if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	              // onSuccess(xhr.responseText);
	              // return xhr.responseText
	              resolve(xhr.responseText);
	            } else {
	              // onFailure(xhr.responseText);
	              // throw xhr.responseText
	              reject(xhr.responseText);
	            }
	          }
	        };
	      });
	    }

	    /**
	     * Create the XHR object
	     * @param {string} method which method to call
	     * @param {string} url the url string
	     * @returns {object} xhr
	     */

	  }, {
	    key: 'createCORSRequest',
	    value: function createCORSRequest(method, url) {
	      var xhr = new XMLHttpRequest();
	      xhr.open(method, url, true);
	      if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
	        // XHR for Chrome/Firefox/Opera/Safari.
	        xhr.open(method, url, true);
	      } else if ((typeof XDomainRequest === 'undefined' ? 'undefined' : (0, _typeof3.default)(XDomainRequest)) !== this.getCognitoConstants().UNDEFINED) {
	        // XDomainRequest for IE.
	        xhr = new XDomainRequest();
	        xhr.open(method, url);
	      } else {
	        // CORS not supported.
	        xhr = null;
	      }
	      return xhr;
	    }

	    /**
	     * The http POST request onFailure callback.
	     * @param {object} err the error object
	     * @returns {function} onFailure
	     */

	  }, {
	    key: 'onFailure',
	    value: function onFailure(err) {
	      this.userhandler.onFailure(err);
	    }

	    /**
	     * The http POST request onSuccess callback when refreshing tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessRefreshToken',
	    value: function () {
	      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(jsonData) {
	        var jsonDataObject, URL;
	        return _regenerator2.default.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                jsonDataObject = JSON.parse(jsonData);

	                if (!Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	                  _context6.next = 6;
	                  break;
	                }

	                URL = this.getFQDNSignIn();

	                this.launchUri(URL);
	                _context6.next = 10;
	                break;

	              case 6:
	                if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	                  this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	                }
	                if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	                  this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	                }
	                this.cacheTokensScopes();
	                // this.userhandler.onSuccess(this.signInUserSession);
	                return _context6.abrupt('return', this.signInUserSession);

	              case 10:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));

	      function onSuccessRefreshToken(_x7) {
	        return _ref7.apply(this, arguments);
	      }

	      return onSuccessRefreshToken;
	    }()

	    /**
	     * The http POST request onSuccess callback when exchanging code for tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessExchangeForToken',
	    value: function () {
	      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(jsonData) {
	        var jsonDataObject, refreshToken, accessToken, idToken, state;
	        return _regenerator2.default.wrap(function _callee7$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                jsonDataObject = JSON.parse(jsonData);
	                refreshToken = new _CognitoRefreshToken2.default();
	                accessToken = new _CognitoAccessToken2.default();
	                idToken = new _CognitoIdToken2.default();
	                state = null;

	                if (!Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	                  _context7.next = 7;
	                  break;
	                }

	                throw jsonData;

	              case 7:
	                if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	                  this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	                } else {
	                  this.signInUserSession.setIdToken(idToken);
	                }
	                if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	                  this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	                } else {
	                  this.signInUserSession.setAccessToken(accessToken);
	                }
	                if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().REFRESHTOKEN)) {
	                  this.signInUserSession.setRefreshToken(new _CognitoRefreshToken2.default(jsonDataObject.refresh_token));
	                } else {
	                  this.signInUserSession.setRefreshToken(refreshToken);
	                }
	                this.cacheTokensScopes();
	                // this.userhandler.onSuccess(this.signInUserSession);
	                return _context7.abrupt('return', this.signInUserSession);

	              case 12:
	              case 'end':
	                return _context7.stop();
	            }
	          }
	        }, _callee7, this);
	      }));

	      function onSuccessExchangeForToken(_x8) {
	        return _ref8.apply(this, arguments);
	      }

	      return onSuccessExchangeForToken;
	    }()

	    /**
	     * Launch Cognito Auth UI page.
	     * @param {string} URL the url to launch
	     * @returns {void}
	     */

	  }, {
	    key: 'launchUri',
	    value: function launchUri(URL) {
	      window.open(URL, this.getCognitoConstants().SELF);
	    }

	    /**
	     * @returns {string} scopes string
	     */

	  }, {
	    key: 'getSpaceSeperatedScopeString',
	    value: function getSpaceSeperatedScopeString() {
	      var tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
	      tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
	      return encodeURIComponent(tokenScopesString);
	    }

	    /**
	     * Create the FQDN(fully qualified domain name) for authorization endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignIn',
	    value: function getFQDNSignIn() {
	      if (this.state == null) {
	        this.state = this.generateRandomString(this.getCognitoConstants().STATELENGTH, this.getCognitoConstants().STATEORIGINSTRING);
	      }

	      var identityProviderParam = this.IdentityProvider ? this.getCognitoConstants().AMPERSAND.concat(this.getCognitoConstants().DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER, this.getCognitoConstants().EQUALSIGN, this.IdentityProvider) : '';
	      var tokenScopesString = this.getSpaceSeperatedScopeString();

	      var userContextDataParam = '';
	      var userContextData = this.getUserContextData();
	      if (userContextData) {
	        userContextDataParam = this.getCognitoConstants().AMPERSAND + this.getCognitoConstants().DOMAIN_QUERY_PARAM_USERCONTEXTDATA + this.getCognitoConstants().EQUALSIGN + this.getUserContextData();
	      }

	      // Build the complete web domain to launch the login screen
	      var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE, this.getCognitoConstants().EQUALSIGN, this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId(), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE, this.getCognitoConstants().EQUALSIGN, this.state, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString, identityProviderParam, userContextDataParam);

	      return uri;
	    }

	    /**
	     * Sign out the user.
	     * @returns {void}
	     */

	  }, {
	    key: 'signOut',
	    value: function signOut() {
	      var URL = this.getFQDNSignOut();
	      this.signInUserSession = null;
	      this.clearCachedTokensScopes();
	      this.launchUri(URL);
	    }

	    /**
	     * Create the FQDN(fully qualified domain name) for signout endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignOut',
	    value: function getFQDNSignOut() {
	      var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
	      return uri;
	    }

	    /**
	     * This method returns the encoded data string used for cognito advanced security feature.
	     * This would be generated only when developer has included the JS used for collecting the
	     * data on their client. Please refer to documentation to know more about using AdvancedSecurity
	     * features
	     **/

	  }, {
	    key: 'getUserContextData',
	    value: function getUserContextData() {
	      if (typeof AmazonCognitoAdvancedSecurityData === "undefined") {
	        return;
	      }

	      var _username = "";
	      if (this.username) {
	        _username = this.username;
	      }

	      var _userpoolId = "";
	      if (this.userpoolId) {
	        _userpoolId = this.userpoolId;
	      }

	      if (this.advancedSecurityDataCollectionFlag) {
	        return AmazonCognitoAdvancedSecurityData.getData(_username, _userpoolId, this.clientId);
	      }
	    }

	    /**
	     * Helper method to let the user know if he has either a valid cached session 
	     * or a valid authenticated session from the app integration callback.
	     * @returns {boolean} userSignedIn 
	     */

	  }, {
	    key: 'isUserSignedIn',
	    value: function isUserSignedIn() {
	      return this.signInUserSession != null && this.signInUserSession.isValid() || this.getCachedSession() != null && this.getCachedSession().isValid();
	    }
	  }]);
	  return CognitoAuth;
	}();

	exports.default = CognitoAuth;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _jsCookie = __webpack_require__(132);

	var Cookies = _interopRequireWildcard(_jsCookie);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/** @class */
	var CookieStorage = function () {

	  /**
	   * Constructs a new CookieStorage object
	   * @param {object} data Creation options.
	   * @param {string} data.domain Cookies domain (mandatory).
	   * @param {string} data.path Cookies path (default: '/')
	   * @param {integer} data.expires Cookie expiration (in days, default: 365)
	   * @param {boolean} data.secure Cookie secure flag (default: true)
	   */
	  function CookieStorage(data) {
	    (0, _classCallCheck3.default)(this, CookieStorage);

	    this.domain = data.domain;
	    if (data.path) {
	      this.path = data.path;
	    } else {
	      this.path = '/';
	    }
	    if (Object.prototype.hasOwnProperty.call(data, 'expires')) {
	      this.expires = data.expires;
	    } else {
	      this.expires = 365;
	    }
	    if (Object.prototype.hasOwnProperty.call(data, 'secure')) {
	      this.secure = data.secure;
	    } else {
	      this.secure = true;
	    }
	  }

	  /**
	   * This is used to set a specific item in storage
	   * @param {string} key - the key for the item
	   * @param {object} value - the value
	   * @returns {string} value that was set
	   */


	  (0, _createClass3.default)(CookieStorage, [{
	    key: 'setItem',
	    value: function setItem(key, value) {
	      Cookies.set(key, value, {
	        path: this.path,
	        expires: this.expires,
	        domain: this.domain,
	        secure: this.secure
	      });
	      return Cookies.get(key);
	    }

	    /**
	     * This is used to get a specific key from storage
	     * @param {string} key - the key for the item
	     * This is used to clear the storage
	     * @returns {string} the data item
	     */

	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      return Cookies.get(key);
	    }

	    /**
	     * This is used to remove an item from storage
	     * @param {string} key - the key being set
	     * @returns {string} value - value that was deleted
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      return Cookies.remove(key, {
	        path: this.path,
	        domain: this.domain,
	        secure: this.secure
	      });
	    }

	    /**
	     * This is used to clear the storage
	     * @returns {string} nothing
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      var cookies = Cookies.get();
	      var index = void 0;
	      for (index = 0; index < cookies.length; ++index) {
	        Cookies.remove(cookies[index]);
	      }
	      return {};
	    }
	  }]);
	  return CookieStorage;
	}();

	exports.default = CookieStorage;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(8);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(9);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
	var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	/** @class */

	var DateHelper = function () {
	  function DateHelper() {
	    (0, _classCallCheck3.default)(this, DateHelper);
	  }

	  (0, _createClass3.default)(DateHelper, [{
	    key: 'getNowString',

	    /**
	     * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
	     */
	    value: function getNowString() {
	      var now = new Date();

	      var weekDay = weekNames[now.getUTCDay()];
	      var month = monthNames[now.getUTCMonth()];
	      var day = now.getUTCDate();

	      var hours = now.getUTCHours();
	      if (hours < 10) {
	        hours = '0' + hours;
	      }

	      var minutes = now.getUTCMinutes();
	      if (minutes < 10) {
	        minutes = '0' + minutes;
	      }

	      var seconds = now.getUTCSeconds();
	      if (seconds < 10) {
	        seconds = '0' + seconds;
	      }

	      var year = now.getUTCFullYear();

	      // ddd MMM D HH:mm:ss UTC YYYY
	      var dateNow = weekDay + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC ' + year;

	      return dateNow;
	    }
	  }]);
	  return DateHelper;
	}();

	exports.default = DateHelper;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CognitoAccessToken = __webpack_require__(27);

	Object.defineProperty(exports, 'CognitoAccessToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAccessToken).default;
	  }
	});

	var _CognitoIdToken = __webpack_require__(28);

	Object.defineProperty(exports, 'CognitoIdToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoIdToken).default;
	  }
	});

	var _CognitoRefreshToken = __webpack_require__(29);

	Object.defineProperty(exports, 'CognitoRefreshToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoRefreshToken).default;
	  }
	});

	var _CognitoTokenScopes = __webpack_require__(30);

	Object.defineProperty(exports, 'CognitoTokenScopes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoTokenScopes).default;
	  }
	});

	var _CognitoAuth = __webpack_require__(75);

	Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  }
	});

	var _CognitoAuthSession = __webpack_require__(51);

	Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  }
	});

	var _DateHelper = __webpack_require__(77);

	Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  }
	});

	var _StorageHelper = __webpack_require__(52);

	Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  }
	});

	var _CookieStorage = __webpack_require__(76);

	Object.defineProperty(exports, 'CookieStorage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CookieStorage).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(53);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
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
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(84);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(83);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(23);
	__webpack_require__(22);
	module.exports = __webpack_require__(115);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(117);
	__webpack_require__(124);
	__webpack_require__(123);
	__webpack_require__(122);
	module.exports = __webpack_require__(3).Map;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(118);
	var $Object = __webpack_require__(3).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(119);
	__webpack_require__(125);
	__webpack_require__(126);
	module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(120);
	__webpack_require__(129);
	__webpack_require__(128);
	__webpack_require__(127);
	module.exports = __webpack_require__(3).Set;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	__webpack_require__(26);
	__webpack_require__(130);
	__webpack_require__(131);
	module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(23);
	module.exports = __webpack_require__(50).f('iterator');


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(18);

	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(14);
	var toLength = __webpack_require__(46);
	var toAbsoluteIndex = __webpack_require__(113);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(12);
	var IObject = __webpack_require__(59);
	var toObject = __webpack_require__(73);
	var toLength = __webpack_require__(46);
	var asc = __webpack_require__(100);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	var isArray = __webpack_require__(60);
	var SPECIES = __webpack_require__(2)('species');

	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(99);

	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(40);
	var gOPS = __webpack_require__(63);
	var pIE = __webpack_require__(41);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(19);
	var ITERATOR = __webpack_require__(2)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(10);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(39);
	var descriptor = __webpack_require__(24);
	var setToStringTag = __webpack_require__(21);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(2)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1);
	var macrotask = __webpack_require__(72).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(16)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(7);
	var anObject = __webpack_require__(10);
	var getKeys = __webpack_require__(40);

	module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(41);
	var createDesc = __webpack_require__(24);
	var toIObject = __webpack_require__(14);
	var toPrimitive = __webpack_require__(47);
	var has = __webpack_require__(13);
	var IE8_DOM_DEFINE = __webpack_require__(58);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(14);
	var gOPN = __webpack_require__(62).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(13);
	var toObject = __webpack_require__(73);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(45);
	var defined = __webpack_require__(33);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(45);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1);
	var navigator = global.navigator;

	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(10);
	var get = __webpack_require__(74);
	module.exports = __webpack_require__(3).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(95);
	var step = __webpack_require__(61);
	var Iterators = __webpack_require__(19);
	var toIObject = __webpack_require__(14);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(54);
	var validate = __webpack_require__(48);
	var MAP = 'Map';

	// 23.1 Map Objects
	module.exports = __webpack_require__(56)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(20);
	var global = __webpack_require__(1);
	var ctx = __webpack_require__(12);
	var classof = __webpack_require__(32);
	var $export = __webpack_require__(4);
	var isObject = __webpack_require__(6);
	var aFunction = __webpack_require__(15);
	var anInstance = __webpack_require__(31);
	var forOf = __webpack_require__(18);
	var speciesConstructor = __webpack_require__(71);
	var task = __webpack_require__(72).set;
	var microtask = __webpack_require__(107)();
	var newPromiseCapabilityModule = __webpack_require__(38);
	var perform = __webpack_require__(65);
	var userAgent = __webpack_require__(114);
	var promiseResolve = __webpack_require__(66);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(42)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(21)($Promise, PROMISE);
	__webpack_require__(70)(PROMISE);
	Wrapper = __webpack_require__(3)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(106)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(54);
	var validate = __webpack_require__(48);
	var SET = 'Set';

	// 23.2 Set Objects
	module.exports = __webpack_require__(56)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(1);
	var has = __webpack_require__(13);
	var DESCRIPTORS = __webpack_require__(5);
	var $export = __webpack_require__(4);
	var redefine = __webpack_require__(67);
	var META = __webpack_require__(37).KEY;
	var $fails = __webpack_require__(17);
	var shared = __webpack_require__(44);
	var setToStringTag = __webpack_require__(21);
	var uid = __webpack_require__(25);
	var wks = __webpack_require__(2);
	var wksExt = __webpack_require__(50);
	var wksDefine = __webpack_require__(49);
	var enumKeys = __webpack_require__(101);
	var isArray = __webpack_require__(60);
	var anObject = __webpack_require__(10);
	var isObject = __webpack_require__(6);
	var toIObject = __webpack_require__(14);
	var toPrimitive = __webpack_require__(47);
	var createDesc = __webpack_require__(24);
	var _create = __webpack_require__(39);
	var gOPNExt = __webpack_require__(110);
	var $GOPD = __webpack_require__(109);
	var $DP = __webpack_require__(7);
	var $keys = __webpack_require__(40);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(41).f = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(20)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(68)('Map');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(69)('Map');


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(4);

	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(55)('Map') });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(4);
	var core = __webpack_require__(3);
	var global = __webpack_require__(1);
	var speciesConstructor = __webpack_require__(71);
	var promiseResolve = __webpack_require__(66);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(4);
	var newPromiseCapability = __webpack_require__(38);
	var perform = __webpack_require__(65);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(68)('Set');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(69)('Set');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(4);

	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(55)('Set') });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(49)('asyncIterator');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(49)('observable');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.2.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					var stringifiedAttributes = '';

					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return (document.cookie = key + '=' + value + stringifiedAttributes);
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!this.json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(134);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
	  runtime.wrap = wrap;

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

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
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
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
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
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
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
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
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
	        if (delegate.iterator.return) {
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

	  runtime.keys = function(object) {
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
	  runtime.values = values;

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
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ })
/******/ ])
});
;