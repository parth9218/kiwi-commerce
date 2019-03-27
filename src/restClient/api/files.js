var createClass = require('../helpers/createClass')()

var Files = function () {
	function Files(client) {
		this.client = client;
		this.resourceUrl = '/files';
	}

	createClass(Files, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'upload',
		value: function upload(formData) {
			return this.client.postFormData(this.resourceUrl, formData);
		}
	}, {
		key: 'delete',
		value: function _delete(fileName) {
			return this.client.delete(this.resourceUrl + '/' + fileName);
		}
	}]);

	return Files;
}();

module.exports = Files;
