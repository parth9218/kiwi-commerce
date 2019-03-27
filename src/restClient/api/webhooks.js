var createClass = require('../helpers/createClass')()

var Webhooks = function () {
	function Webhooks(client) {
		this.client = client;
		this.resourceUrl = '/webhooks';
	}

	createClass(Webhooks, [{
		key: 'list',
		value: function list() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(id) {
			return this.client.get(this.resourceUrl + '/' + id);
		}
	}, {
		key: 'create',
		value: function create(data) {
			return this.client.post('' + this.resourceUrl, data);
		}
	}, {
		key: 'update',
		value: function update(id, data) {
			return this.client.put(this.resourceUrl + '/' + id, data);
		}
	}, {
		key: 'delete',
		value: function _delete(id) {
			return this.client.delete(this.resourceUrl + '/' + id);
		}
	}]);

	return Webhooks;
}();

module.exports = Webhooks;
