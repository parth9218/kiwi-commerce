var createClass = require('../helpers/createClass')()

var Currencies = function () {
	function Currencies(client) {
		this.client = client;
	}

	createClass(Currencies, [{
		key: 'list',
		value: function list() {
			return this.client.get('/currencies');
		}
	}]);

	return Currencies;
}();

module.exports = Currencies;
