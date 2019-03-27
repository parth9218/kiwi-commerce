var createClass = require('../../helpers/createClass')()

var Products = function () {
	function Products(client) {
		this.client = client;
		this.resourceUrl = '/products';
	}

	createClass(Products, [{
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
		key: 'skuExists',
		value: function skuExists(productId, sku) {
			return this.client.get(this.resourceUrl + '/' + productId + '/sku', { sku: sku });
		}
	}, {
		key: 'slugExists',
		value: function slugExists(productId, slug) {
			return this.client.get(this.resourceUrl + '/' + productId + '/slug', { slug: slug });
		}
	}]);

	return Products;
}();

module.exports = Products;
