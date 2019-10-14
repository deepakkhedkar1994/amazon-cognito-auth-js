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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _src = __webpack_require__(10);

	Object.keys(_src).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _DecodingHelper = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
	var CognitoAccessToken = function () {
	  /**
	   * Constructs a new CognitoAccessToken object
	   * @param {string=} AccessToken The JWT access token.
	   */
	  function CognitoAccessToken(AccessToken) {
	    _classCallCheck(this, CognitoAccessToken);

	    // Assign object
	    this.jwtToken = AccessToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoAccessToken, [{
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
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).exp;
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
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).username;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse((0, _DecodingHelper.decode)(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);

	  return CognitoAccessToken;
	}();

	exports.default = CognitoAccessToken;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _DecodingHelper = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
	var CognitoIdToken = function () {
	  /**
	   * Constructs a new CognitoIdToken object
	   * @param {string=} IdToken The JWT Id token
	   */
	  function CognitoIdToken(IdToken) {
	    _classCallCheck(this, CognitoIdToken);

	    // Assign object
	    this.jwtToken = IdToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoIdToken, [{
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
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).exp;
	    }

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      var jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse((0, _DecodingHelper.decode)(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    }
	  }]);

	  return CognitoIdToken;
	}();

	exports.default = CognitoIdToken;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    _classCallCheck(this, CognitoRefreshToken);

	    // Assign object
	    this.refreshToken = RefreshToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoRefreshToken, [{
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
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    _classCallCheck(this, CognitoTokenScopes);

	    // Assign object
	    this.tokenScopes = TokenScopesArray || [];
	  }

	  /**
	   * @returns {Array} the token scopes.
	   */


	  _createClass(CognitoTokenScopes, [{
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
/* 5 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var decode = exports.decode = function decode(str) {
	  return global.atob(str);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
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

	    _classCallCheck(this, CognitoAuthSession);

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


	  _createClass(CognitoAuthSession, [{
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jsCookie = __webpack_require__(11);

	var Cookies = _interopRequireWildcard(_jsCookie);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    _classCallCheck(this, CookieStorage);

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


	  _createClass(CookieStorage, [{
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
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    _classCallCheck(this, DateHelper);
	  }

	  _createClass(DateHelper, [{
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
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	    _classCallCheck(this, MemoryStorage);
	  }

	  _createClass(MemoryStorage, null, [{
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
	    _classCallCheck(this, StorageHelper);

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


	  _createClass(StorageHelper, [{
	    key: 'getStorage',
	    value: function getStorage() {
	      return this.storageWindow;
	    }
	  }]);

	  return StorageHelper;
	}();

	exports.default = StorageHelper;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CognitoAccessToken = __webpack_require__(1);

	Object.defineProperty(exports, 'CognitoAccessToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAccessToken).default;
	  }
	});

	var _CognitoIdToken = __webpack_require__(2);

	Object.defineProperty(exports, 'CognitoIdToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoIdToken).default;
	  }
	});

	var _CognitoRefreshToken = __webpack_require__(3);

	Object.defineProperty(exports, 'CognitoRefreshToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoRefreshToken).default;
	  }
	});

	var _CognitoTokenScopes = __webpack_require__(4);

	Object.defineProperty(exports, 'CognitoTokenScopes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoTokenScopes).default;
	  }
	});

	var _CognitoAuth = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./CognitoAuth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  }
	});

	var _CognitoAuthSession = __webpack_require__(6);

	Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  }
	});

	var _DateHelper = __webpack_require__(8);

	Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  }
	});

	var _StorageHelper = __webpack_require__(9);

	Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  }
	});

	var _CookieStorage = __webpack_require__(7);

	Object.defineProperty(exports, 'CookieStorage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CookieStorage).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
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


/***/ })
/******/ ])
});
;