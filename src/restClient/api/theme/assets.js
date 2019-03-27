var createClass = require('../../helpers/createClass')()

var ThemeAssets = function () {
	function ThemeAssets(client) {
		this.client = client;
		this.resourceUrl = '/theme/assets';
	}

	createClass(ThemeAssets, [{
		key: 'uploadFile',
		value: function uploadFile(formData) {
			return this.client.postFormData(this.resourceUrl, formData);
		}
	}, {
		key: 'deleteFile',
		value: function deleteFile(fileName) {
			return this.client.delete(this.resourceUrl + '/' + fileName);
		}
	}]);

	return ThemeAssets;
}();

module.exports = ThemeAssets;
