var createClass = require('../helpers/createClass')()

var WebStoreServices = function () {
	function WebStoreServices(client) {
		this.client = client;
		this.resourceUrl = '/services';
	}

	createClass(WebStoreServices, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(id) {
			return this.client.get(this.resourceUrl + '/' + id);
		}
	}, {
		key: 'enable',
		value: function enable(id) {
			return this.client.post(this.resourceUrl + '/' + id + '/enable');
		}
	}, {
		key: 'disable',
		value: function disable(id) {
			return this.client.post(this.resourceUrl + '/' + id + '/disable');
		}
	}]);

	return WebStoreServices;
}();

module.exports = WebStoreServices;
