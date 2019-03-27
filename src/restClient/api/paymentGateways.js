var createClass = require('../helpers/createClass')()

var PaymentGateways = function () {
	function PaymentGateways(client) {
		this.client = client;
		this.resourceUrl = '/payment_gateways';
	}

	createClass(PaymentGateways, [{
		key: 'retrieve',
		value: function retrieve(gatewayName) {
			return this.client.get(this.resourceUrl + '/' + gatewayName);
		}
	}, {
		key: 'update',
		value: function update(gatewayName, data) {
			return this.client.put(this.resourceUrl + '/' + gatewayName, data);
		}
	}]);

	return PaymentGateways;
}();

module.exports = PaymentGateways;
