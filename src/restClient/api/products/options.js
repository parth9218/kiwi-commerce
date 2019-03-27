var createClass = require('../../helpers/createClass')()

var ProductOptions = function () {
	function ProductOptions(client) {
		this.client = client;
	}

	createClass(ProductOptions, [{
		key: "list",
		value: function list(productId) {
			return this.client.get("/products/" + productId + "/options");
		}
	}, {
		key: "retrieve",
		value: function retrieve(productId, optionId) {
			return this.client.get("/products/" + productId + "/options/" + optionId);
		}
	}, {
		key: "create",
		value: function create(productId, data) {
			return this.client.post("/products/" + productId + "/options", data);
		}
	}, {
		key: "update",
		value: function update(productId, optionId, data) {
			return this.client.put("/products/" + productId + "/options/" + optionId, data);
		}
	}, {
		key: "delete",
		value: function _delete(productId, optionId) {
			return this.client.delete("/products/" + productId + "/options/" + optionId);
		}
	}]);

	return ProductOptions;
}();

module.exports = ProductOptions;
