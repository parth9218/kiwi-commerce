var createClass = require('../helpers/createClass')()

var Customers = function () {
	function Customers(client) {
		this.client = client;
		this.resourceUrl = '/customers';
	}

	createClass(Customers, [{
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
			return this.client.post(this.resourceUrl, data);
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
	}, {
		key: 'createAddress',
		value: function createAddress(customerId, data) {
			return this.client.post(this.resourceUrl + '/' + customerId, data);
		}
	}, {
		key: 'updateAddress',
		value: function updateAddress(customerId, addressId, data) {
			return this.client.put(this.resourceUrl + '/' + customerId + '/addresses/' + addressId, data);
		}
	}, {
		key: 'deleteAddress',
		value: function deleteAddress(customerId, addressId) {
			return this.client.delete(this.resourceUrl + '/' + customerId + '/addresses/' + addressId);
		}
	}, {
		key: 'setDefaultBillingAddress',
		value: function setDefaultBillingAddress(customerId, addressId) {
			return this.client.post(this.resourceUrl + '/' + customerId + '/addresses/' + addressId + '/default_billing');
		}
	}, {
		key: 'setDefaultShippingAddress',
		value: function setDefaultShippingAddress(customerId, addressId) {
			return this.client.post(this.resourceUrl + '/' + customerId + '/addresses/' + addressId + '/default_shipping');
		}
	}]);

	return Customers;
}();

module.exports = Customers;
