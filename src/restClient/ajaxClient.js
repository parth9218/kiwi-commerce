var _restClient2 = require('./restClient');
var inherits = require('./helpers/inherits')
var createClass = require('./helpers/createClass')()

function possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

var AjaxClient = function (RestClient) {
	inherits(AjaxClient, RestClient);
	function AjaxClient() {
		return possibleConstructorReturn(this, (AjaxClient.__proto__ || Object.getPrototypeOf(AjaxClient)).apply(this, arguments));
	}

	createClass(AjaxClient, [{
		key: 'getConfig',
		value: function getConfig(method, data, cookie) {
			var config = {
				credentials: this.getCredentialsConfig(this.baseUrl),
				method: method,
				headers: {
					'Content-Type': 'application/json'
				}
			};

			if (cookie) {
				config.headers.Cookie = cookie;
			}

			if (data) {
				config.body = JSON.stringify(data);
			}
			return config;
		}
	}, {
		key: 'getCredentialsConfig',
		value: function getCredentialsConfig(baseUrl) {
			var includePrefix = baseUrl.includes('http://') || baseUrl.includes('https://');
			return includePrefix ? 'include' : 'same-origin';
		}
	}]);

	return AjaxClient;
}(_restClient2);


module.exports = AjaxClient;
