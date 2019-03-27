var createClass = require('../../helpers/createClass')()

var ProductVariants = function () {
	function ProductVariants(client) {
		this.client = client;
	}

	createClass(ProductVariants, [{
		key: "list",
		value: function list(productId) {
			return this.client.get("/products/" + productId + "/variants");
		}
	}, {
		key: "create",
		value: function create(productId, data) {
			return this.client.post("/products/" + productId + "/variants", data);
		}
	}, {
		key: "update",
		value: function update(productId, variantId, data) {
			return this.client.put("/products/" + productId + "/variants/" + variantId, data);
		}
	}, {
		key: "delete",
		value: function _delete(productId, variantId) {
			return this.client.delete("/products/" + productId + "/variants/" + variantId);
		}
	}, {
		key: "setOption",
		value: function setOption(productId, variantId, data) {
			return this.client.put("/products/" + productId + "/variants/" + variantId + "/options", data);
		}
	}]);

	return ProductVariants;
}();

module.exports = ProductVariants;
