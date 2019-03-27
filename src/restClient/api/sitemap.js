var createClass = require('../helpers/createClass')()

var Sitemap = function () {
	function Sitemap(client) {
		this.client = client;
		this.resourceUrl = '/sitemap';
	}

	createClass(Sitemap, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}]);

	return Sitemap;
}();

module.exports = Sitemap;
