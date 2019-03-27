var createClass = require('../helpers/createClass')()


var Countries = function () {
	function Countries(client) {
		this.client = client;
	}

	createClass(Countries, [{
		key: 'list',
		value: function list() {
			return this.client.get('/countries');
		}
	}]);

	return Countries;
}();

module.exports = Countries;
