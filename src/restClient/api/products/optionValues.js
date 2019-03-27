var createClass = require('../../helpers/createClass')()

var ProductOptionValues = function () {
	function ProductOptionValues(client) {
		this.client = client;
	}

	createClass(ProductOptionValues, [{
		key: "list",
		value: function list(productId, optionId) {
			return this.client.get("/products/" + productId + "/options/" + optionId + "/values");
		}
	}, {
		key: "retrieve",
		value: function retrieve(productId, optionId, valueId) {
			return this.client.get("/products/" + productId + "/options/" + optionId + "/values/" + valueId);
		}
	}, {
		key: "create",
		value: function create(productId, optionId, data) {
			return this.client.post("/products/" + productId + "/options/" + optionId + "/values", data);
		}
	}, {
		key: "update",
		value: function update(productId, optionId, valueId, data) {
			return this.client.put("/products/" + productId + "/options/" + optionId + "/values/" + valueId, data);
		}
	}, {
		key: "delete",
		value: function _delete(productId, optionId, valueId) {
			return this.client.delete("/products/" + productId + "/options/" + optionId + "/values/" + valueId);
		}
	}]);

	return ProductOptionValues;
}();


module.exports = ProductOptionValues;
