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
/* 2 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
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

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	var _CognitoAuthSession = __webpack_require__(5);

	var _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

	var _StorageHelper = __webpack_require__(6);

	var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @class */
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
	    _classCallCheck(this, CognitoAuth);

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


	  _createClass(CognitoAuth, [{
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
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var tokenScopesInputSet, cachedScopesSet, URL, tokenScopes, idToken, accessToken, refreshToken;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                tokenScopesInputSet = new Set(this.TokenScopesArray);
	                cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
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
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(httpRequestResponse) {
	        var map, response, _response, _response2;

	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
	      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(map) {
	        var state, codeParameter, url, header, body, _response;

	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
	      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(map) {
	        var idToken, accessToken, refreshToken, state;
	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
	        for (var _iterator = set1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	      if (match != null && match.length > 2 && _typeof(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
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
	      var map = new Map();
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
	      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(refreshToken) {
	        var url, header, body, response, signInUserSession;
	        return regeneratorRuntime.wrap(function _callee5$(_context5) {
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

	      return new Promise(function (resolve, reject) {

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
	      } else if ((typeof XDomainRequest === 'undefined' ? 'undefined' : _typeof(XDomainRequest)) !== this.getCognitoConstants().UNDEFINED) {
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
	      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(jsonData) {
	        var jsonDataObject, URL;
	        return regeneratorRuntime.wrap(function _callee6$(_context6) {
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
	      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(jsonData) {
	        var jsonDataObject, refreshToken, accessToken, idToken, state;
	        return regeneratorRuntime.wrap(function _callee7$(_context7) {
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
/* 8 */
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

	var _CognitoAuth = __webpack_require__(7);

	Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  }
	});

	var _CognitoAuthSession = __webpack_require__(5);

	Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  }
	});

	var _DateHelper = __webpack_require__(9);

	Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  }
	});

	var _StorageHelper = __webpack_require__(6);

	Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  }
	});

	var _CookieStorage = __webpack_require__(8);

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