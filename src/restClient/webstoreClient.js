var crossFetch2 = require('cross-fetch');
var inherits = require('./helpers/inherits')
var restClient2 = require('./restClient');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

var WebStoreClient = function (RestClient) {
	inherits(WebStoreClient, RestClient);
	function WebStoreClient(options) {
		return _possibleConstructorReturn(this, (WebStoreClient.__proto__ || Object.getPrototypeOf(WebStoreClient)).call(this, { baseUrl: 'https://api.cezerin.com/v1', token: options.token }));
	}

	return WebStoreClient;
}(restClient2);

WebStoreClient.authorize = function (email, adminUrl) {
	var config = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: email, admin_url: adminUrl })
	};

	return (0, crossFetch2)('https://api.cezerin.com/v1/account/authorize', config).then(restClient2.returnStatusAndJson);
};

module.exports = WebStoreClient;
