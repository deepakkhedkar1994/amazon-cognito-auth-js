import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

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

export default CognitoRefreshToken;