// Hopefully an ES5 Transpiled version of newsapi npm package.

'use strict';
/**
 * This module provides access to the News API
 * https://newsapi.org/
 *
 * The API provides access to recent news headlines
 * from many popular news sources.
 *
 * The author of this code has no formal relationship with NewsAPI.org and does not
 * claim to have created any of the facilities provided by NewsAPI.org.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Promise = require('bluebird'),
    request = require('request'),
    qs = require('querystring'),
    host = 'https://newsapi.org';

var API_KEY = void 0; // To be set by clients

var NewsAPI = function () {
  function NewsAPI(apiKey) {
    _classCallCheck(this, NewsAPI);

    if (!apiKey) throw new Error('No API key specified');
    API_KEY = apiKey;
    this.v2 = {
      topHeadlines: function topHeadlines() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _splitArgsIntoOptions = splitArgsIntoOptionsAndCallback(args),
            _splitArgsIntoOptions2 = _splitArgsIntoOptions.params,
            params = _splitArgsIntoOptions2 === undefined ? { language: 'en' } : _splitArgsIntoOptions2,
            options = _splitArgsIntoOptions.options,
            cb = _splitArgsIntoOptions.cb;

        var url = createUrlFromEndpointAndOptions('/v2/top-headlines', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      },
      everything: function everything() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var _splitArgsIntoOptions3 = splitArgsIntoOptionsAndCallback(args),
            params = _splitArgsIntoOptions3.params,
            options = _splitArgsIntoOptions3.options,
            cb = _splitArgsIntoOptions3.cb;

        var url = createUrlFromEndpointAndOptions('/v2/everything', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      },
      sources: function sources() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var _splitArgsIntoOptions4 = splitArgsIntoOptionsAndCallback(args),
            params = _splitArgsIntoOptions4.params,
            options = _splitArgsIntoOptions4.options,
            cb = _splitArgsIntoOptions4.cb;

        var url = createUrlFromEndpointAndOptions('/v2/sources', params);
        return getDataFromWeb(url, options, API_KEY, cb);
      }
    };
  }

  _createClass(NewsAPI, [{
    key: 'sources',
    value: function sources() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var _splitArgsIntoOptions5 = splitArgsIntoOptionsAndCallback(args),
          params = _splitArgsIntoOptions5.params,
          options = _splitArgsIntoOptions5.options,
          cb = _splitArgsIntoOptions5.cb;

      var url = createUrlFromEndpointAndOptions('/v1/sources', params);
      return getDataFromWeb(url, options, null, cb);
    }
  }, {
    key: 'articles',
    value: function articles() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var _splitArgsIntoOptions6 = splitArgsIntoOptionsAndCallback(args),
          params = _splitArgsIntoOptions6.params,
          options = _splitArgsIntoOptions6.options,
          cb = _splitArgsIntoOptions6.cb;

      var url = createUrlFromEndpointAndOptions('/v1/articles', params);
      return getDataFromWeb(url, options, API_KEY, cb);
    }
  }]);

  return NewsAPI;
}();

var NewsAPIError = function (_Error) {
  _inherits(NewsAPIError, _Error);

  function NewsAPIError(err) {
    _classCallCheck(this, NewsAPIError);

    var _this = _possibleConstructorReturn(this, (NewsAPIError.__proto__ || Object.getPrototypeOf(NewsAPIError)).call(this));

    _this.name = 'NewsAPIError: ' + err.code;
    _this.message = err.message;
    return _this;
  }

  return NewsAPIError;
}(Error);

/**
 * Takes a variable-length array that represents arguments to a function and attempts to split it into
 * an 'options' object and a 'cb' callback function.
 * @param {Array}   args The arguments to the function
 * @return {Object}
 */


function splitArgsIntoOptionsAndCallback(args) {
  var params = void 0;
  var options = void 0;
  var cb = void 0;
  if (args.length > 1) {
    var possibleCb = args[args.length - 1];
    if ('function' === typeof possibleCb) {
      cb = possibleCb;
      options = args.length === 3 ? args[1] : undefined;
    } else {
      options = args[1];
    }
    params = args[0];
  } else if ('object' === _typeof(args[0])) {
    params = args[0];
  } else if ('function' === typeof args[0]) {
    cb = args[0];
  }
  return { params: params, options: options, cb: cb };
}

/**
 * Creates a url string from an endpoint and an options object by appending the endpoint
 * to the global "host" const and appending the options as querystring parameters.
 * @param {String} endpoint
 * @param {Object} [options]
 * @return {String}
 */
function createUrlFromEndpointAndOptions(endpoint, options) {
  var query = qs.stringify(options);
  var baseURL = '' + host + endpoint;
  return query ? baseURL + '?' + query : baseURL;
}

/**
 * Takes a URL string and returns a Promise containing
 * a buffer with the data from the web.
 * @param  {String} url      A URL String
 * @param  {String} apiKey   (Optional) A key to be used for authentication
 * @return {Promise<Buffer>} A Promise containing a Buffer
 */
function getDataFromWeb(url, options, apiKey, cb) {
  var useCallback = 'function' === typeof cb;
  return new Promise(function (resolve, reject) {
    var req = { url: url, headers: {} };
    if (apiKey) {
      req.headers['X-Api-Key'] = apiKey;
    }
    if (options && options.noCache === true) {
      req.headers['X-No-Cache'] = 'true';
    }
    request.get(req, function (err, res, body) {
      if (err) {
        if (useCallback) return cb(err);
        return reject(err);
      }
      try {
        var data = JSON.parse(body);
        if (data.status === 'error') throw new NewsAPIError(data);
        // 'showHeaders' option can be used for clients to debug response headers
        // response will be in form of { headers, body }
        if (options && options.showHeaders) {
          if (useCallback) return cb(null, { headers: res.headers, body: data });
          return resolve({ headers: res.headers, body: data });
        }
        if (useCallback) return cb(null, data);
        return resolve(data);
      } catch (e) {
        if (useCallback) return cb(e);
        return reject(e);
      }
    });
  });
}

module.exports = NewsAPI;
