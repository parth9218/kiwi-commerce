var createClass = require('../../helpers/createClass')()

var ProductImages = function () {
	function ProductImages(client) {
		this.client = client;
	}

	createClass(ProductImages, [{
		key: "list",
		value: function list(productId) {
			return this.client.get("/products/" + productId + "/images");
		}
	}, {
		key: "update",
		value: function update(productId, imageId, data) {
			return this.client.put("/products/" + productId + "/images/" + imageId, data);
		}
	}, {
		key: "upload",
		value: function upload(productId, formData) {
			return this.client.postFormData("/products/" + productId + "/images", formData);
		}
	}, {
		key: "delete",
		value: function _delete(productId, imageId) {
			return this.client.delete("/products/" + productId + "/images/" + imageId);
		}
	}]);

	return ProductImages;
}();
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

module.exports = ProductImages;
