var createClass = require('../helpers/createClass')()

var Redirects = function () {
	function Redirects(client) {
		this.client = client;
		this.resourceUrl = '/redirects';
	}

	createClass(Redirects, [{
		key: 'list',
		value: function list() {
			return this.client.get(this.resourceUrl);
		}
	}, {
		key: 'retrieve',
		value: function retrieve(id) {
			return this.client.get(this.resourceUrl + '/' + id);
		}
	}, {
		key: 'create',
		value: function create(data) {
			return this.client.post(this.resourceUrl, data);
		}
	}, {
		key: 'update',
		value: function update(id, data) {
			return this.client.put(this.resourceUrl + '/' + id, data);
		}
	}, {
		key: 'delete',
		value: function _delete(id) {
			return this.client.delete(this.resourceUrl + '/' + id);
		}
	}]);

	return Redirects;
}();

module.exports = Redirects;
