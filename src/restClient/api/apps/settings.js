var createClass = require('../../helpers/createClass')()

var AppSettings = function () {
	function AppSettings(client) {
		this.client = client;
		this.resourceUrl = '/apps';
	}

	createClass(AppSettings, [{
		key: 'retrieve',
		value: function retrieve(appKey) {
			return this.client.get(this.resourceUrl + '/' + appKey + '/settings');
		}
	}, {
		key: 'update',
		value: function update(appKey, data) {
			return this.client.put(this.resourceUrl + '/' + appKey + '/settings', data);
		}
	}]);

	return AppSettings;
}();

module.exports = AppSettings;
