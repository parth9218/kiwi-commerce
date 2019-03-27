var createClass = require('../../helpers/createClass')()

var ThemePlaceholders = function () {
	function ThemePlaceholders(client) {
		this.client = client;
		this.resourceUrl = '/theme/placeholders';
	}

	createClass(ThemePlaceholders, [{
		key: 'list',
		value: function list() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(placeholderKey) {
			return this.client.get(this.resourceUrl + '/' + placeholderKey);
		}
	}, {
		key: 'create',
		value: function create(data) {
			return this.client.post(this.resourceUrl, data);
		}
	}, {
		key: 'update',
		value: function update(placeholderKey, data) {
			return this.client.put(this.resourceUrl + '/' + placeholderKey, data);
		}
	}, {
		key: 'delete',
		value: function _delete(placeholderKey) {
			return this.client.delete(this.resourceUrl + '/' + placeholderKey);
		}
	}]);

	return ThemePlaceholders;
}();

module.exports = ThemePlaceholders;
