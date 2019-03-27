var createClass = require('../../helpers/createClass')()

var OrderItems = function () {
	function OrderItems(client) {
		this.client = client;
	}

	createClass(OrderItems, [{
		key: "create",
		value: function create(orderId, data) {
			return this.client.post("/orders/" + orderId + "/items", data);
		}
	}, {
		key: "update",
		value: function update(orderId, itemId, data) {
			return this.client.put("/orders/" + orderId + "/items/" + itemId, data);
		}
	}, {
		key: "delete",
		value: function _delete(orderId, itemId) {
			return this.client.delete("/orders/" + orderId + "/items/" + itemId);
		}
	}]);

	return OrderItems;
}();

module.exports = OrderItems;
