var createClass = require('../../helpers/createClass')()

var Theme = function () {
	function Theme(client) {
		this.client = client;
	}

	createClass(Theme, [{
		key: 'export',
		value: function _export() {
			return this.client.get('/theme/export');
		}
	}, {
		key: 'install',
		value: function install(formData) {
			return this.client.postFormData('/theme/install', formData);
		}
	}]);

	return Theme;
}();

module.exports = Theme;
