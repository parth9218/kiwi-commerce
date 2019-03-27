var createClass = require('../helpers/createClass')()

var AjaxShippingMethods = function () {
	function AjaxShippingMethods(client) {
		this.client = client;
	}

	createClass(AjaxShippingMethods, [{
		key: 'list',
		value: function list() {
			return this.client.get('/shipping_methods');
		}
	}]);

	return AjaxShippingMethods;
}();

module.exports = AjaxShippingMethods;
