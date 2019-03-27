var createClass = require('../../helpers/createClass')()

var ThemeSettings = function () {
	function ThemeSettings(client) {
		this.client = client;
	}

	createClass(ThemeSettings, [{
		key: 'retrieve',
		value: function retrieve() {
			return this.client.get('/theme/settings');
		}
	}, {
		key: 'update',
		value: function update(data) {
			return this.client.put('/theme/settings', data);
		}
	}, {
		key: 'retrieveSchema',
		value: function retrieveSchema() {
			return this.client.get('/theme/settings_schema');
		}
	}]);

	return ThemeSettings;
}();

module.exports = ThemeSettings;
