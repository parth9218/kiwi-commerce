var createClass = require('../helpers/createClass')()

var AjaxCart = function () {
	function AjaxCart(client) {
		this.client = client;
	}

	createClass(AjaxCart, [{
		key: "retrieve",
		value: function retrieve(cookie) {
			return this.client.get("/cart", null, cookie);
		}
	}, {
		key: "update",
		value: function update(data) {
			return this.client.put("/cart", data);
		}
	}, {
		key: "checkout",
		value: function checkout() {
			return this.client.put("/cart/checkout");
		}
	}, {
		key: "updateBillingAddress",
		value: function updateBillingAddress(address) {
			return this.client.put("/cart/billing_address", address);
		}
	}, {
		key: "updateShippingAddress",
		value: function updateShippingAddress(address) {
			return this.client.put("/cart/shipping_address", address);
		}
	}, {
		key: "addItem",
		value: function addItem(data) {
			return this.client.post("/cart/items", data);
		}
	}, {
		key: "updateItem",
		value: function updateItem(id, data) {
			return this.client.put("/cart/items/" + id, data);
		}
	}, {
		key: "deleteItem",
		value: function deleteItem(id) {
			return this.client.delete("/cart/items/" + id);
		}
	}]);

	return AjaxCart;
}();

module.exports = AjaxCart;
