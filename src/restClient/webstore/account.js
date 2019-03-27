var createClass = require('../helpers/createClass')()

var WebStoreAccount = function () {
	function WebStoreAccount(client) {
		this.client = client;
		this.resourceUrl = '/account';
	}

	createClass(WebStoreAccount, [{
		key: 'retrieve',
		value: function retrieve() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'update',
		value: function update(data) {
			return this.client.put(this.resourceUrl, data);
		}
	}, {
		key: 'updateDeveloper',
		value: function updateDeveloper(data) {
			return this.client.put(this.resourceUrl + '/developer', data);
		}
	}]);

	return WebStoreAccount;
}();

module.exports = WebStoreAccount;
