var createClass = require('../../helpers/createClass')()

var OrderTransactions = function () {
	function OrderTransactions(client) {
		this.client = client;
	}

	createClass(OrderTransactions, [{
		key: "create",
		value: function create(orderId, data) {
			return this.client.post("/orders/" + orderId + "/transactions", data);
		}
	}, {
		key: "update",
		value: function update(orderId, transactionId, data) {
			return this.client.put("/orders/" + orderId + "/transactions/" + transactionId, data);
		}
	}, {
		key: "delete",
		value: function _delete(orderId, transactionId) {
			return this.client.delete("/orders/" + orderId + "/transactions/" + transactionId);
		}
	}]);

	return OrderTransactions;
}();

module.exports = OrderTransactions;
