var createClass = require('../../helpers/createClass')()

var OrderDiscounts = function () {
	function OrderDiscounts(client) {
		this.client = client;
	}

	createClass(OrderDiscounts, [{
		key: "create",
		value: function create(orderId, data) {
			return this.client.post("/orders/" + orderId + "/discounts", data);
		}
	}, {
		key: "update",
		value: function update(orderId, discountId, data) {
			return this.client.put("/orders/" + orderId + "/discounts/" + discountId, data);
		}
	}, {
		key: "delete",
		value: function _delete(orderId, discountId) {
			return this.client.delete("/orders/" + orderId + "/discounts/" + discountId);
		}
	}]);

	return OrderDiscounts;
}();

module.exports = OrderDiscounts;
