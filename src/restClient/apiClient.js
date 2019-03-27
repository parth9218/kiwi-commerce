var _crossFetch2 = require('cross-fetch');
var inherits = require('./helpers/inherits')
var _restClient2 = require('./restClient');

function possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

var ApiClient = function (_RestClient) {
	inherits(ApiClient, _RestClient);

	function ApiClient() {
		return possibleConstructorReturn(this, (ApiClient.__proto__ || Object.getPrototypeOf(ApiClient)).apply(this, arguments));
	}

	return ApiClient;
}(_restClient2);

ApiClient.authorize = function (baseUrl, email) {
	var config = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: email })
	};
	return (0, _crossFetch2)(baseUrl + '/authorize', config).then(_restClient2.returnStatusAndJson);
};

module.exports = ApiClient;
