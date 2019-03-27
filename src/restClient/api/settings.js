var createClass = require('../helpers/createClass')()


var Settings = function () {
	function Settings(client) {
		this.client = client;
		this.resourceUrl = '/settings';
	}

	createClass(Settings, [{
		key: 'retrieve',
		value: function retrieve() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'update',
		value: function update(data) {
			return this.client.put(this.resourceUrl, data);
		}
	}, {
		key: 'retrieveEmailSettings',
		value: function retrieveEmailSettings() {
			return this.client.get(this.resourceUrl + '/email');
		}
	}, {
		key: 'updateEmailSettings',
		value: function updateEmailSettings(data) {
			return this.client.put(this.resourceUrl + '/email', data);
		}
	}, {
		key: 'retrieveEmailTemplate',
		value: function retrieveEmailTemplate(name) {
			return this.client.get(this.resourceUrl + '/email/templates/' + name);
		}
	}, {
		key: 'updateEmailTemplate',
		value: function updateEmailTemplate(name, data) {
			return this.client.put(this.resourceUrl + '/email/templates/' + name, data);
		}
	}, {
		key: 'uploadLogo',
		value: function uploadLogo(formData) {
			return this.client.postFormData(this.resourceUrl + '/logo', formData);
		}
	}, {
		key: 'deleteLogo',
		value: function deleteLogo() {
			return this.client.delete(this.resourceUrl + '/logo');
		}
	}]);

	return Settings;
}();

module.exports = Settings;
