var createClass = require('../helpers/createClass')()

var ProductCategories = function () {
	function ProductCategories(client) {

		this.client = client;
		this.resourceUrl = '/product_categories';
	}

	createClass(ProductCategories, [{
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
		key: 'uploadImage',
		value: function uploadImage(categoryId, formData) {
			return this.client.postFormData(this.resourceUrl + '/' + categoryId + '/image', formData);
		}
	}, {
		key: 'deleteImage',
		value: function deleteImage(id) {
			return this.client.delete(this.resourceUrl + '/' + id + '/image');
		}
	}]);

	return ProductCategories;
}();


module.exports = ProductCategories;
