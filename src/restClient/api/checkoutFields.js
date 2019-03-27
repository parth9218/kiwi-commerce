var createClass = require('../helpers/createClass')()

var CheckoutFields = function () {
	function CheckoutFields(client) {
		this.client = client;
		this.resourceUrl = '/settings/checkout/fields';
	}

	createClass(CheckoutFields, [{
		key: 'list',
		value: function list() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(name) {
			return this.client.get(this.resourceUrl + '/' + name);
		}
	}, {
		key: 'update',
		value: function update(name, data) {
			return this.client.put(this.resourceUrl + '/' + name, data);
		}
	}]);

	return CheckoutFields;
}();

module.exports = CheckoutFields;
