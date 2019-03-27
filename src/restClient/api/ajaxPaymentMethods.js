var createClass = require('../helpers/createClass')()

var AjaxPaymentMethods = function () {
	function AjaxPaymentMethods(client) {
		this.client = client;
	}

	createClass(AjaxPaymentMethods, [{
		key: 'list',
		value: function list() {
			return this.client.get('/payment_methods');
		}
	}]);

	return AjaxPaymentMethods;
}();

module.exports = AjaxPaymentMethods;
