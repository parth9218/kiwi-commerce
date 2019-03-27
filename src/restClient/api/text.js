var createClass = require('../helpers/createClass')()

var Text = function () {
	function Text(client) {
		this.client = client;
	}

	createClass(Text, [{
		key: 'list',
		value: function list() {
			return this.client.get('/text');
		}
	}]);

	return Text;
}();

module.exports= Text;
