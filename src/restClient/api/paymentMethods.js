var createClass = require('../helpers/createClass')()

var PaymentMethods = function () {
	function PaymentMethods(client) {
		this.client = client;
		this.resourceUrl = '/payment_methods';
	}

	createClass(PaymentMethods, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(id, filter) {
			return this.client.get(this.resourceUrl + '/' + id, filter);
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

	return PaymentMethods;
}();

module.exports = PaymentMethods;
