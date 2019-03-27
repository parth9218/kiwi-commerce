var createClass = require('../helpers/createClass')()

var AjaxPaymentFormSettings = function () {
	function AjaxPaymentFormSettings(client) {
		this.client = client;
	}

	createClass(AjaxPaymentFormSettings, [{
		key: 'retrieve',
		value: function retrieve() {
			return this.client.get('/payment_form_settings');
		}
	}]);

	return AjaxPaymentFormSettings;
}();

module.exports = AjaxPaymentFormSettings;
