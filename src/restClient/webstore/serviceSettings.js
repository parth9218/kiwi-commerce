var createClass = require('../helpers/createClass')()

var WebStoreServices = function () {
	function WebStoreServices(client) {
		this.client = client;
	}

	createClass(WebStoreServices, [{
		key: "retrieve",
		value: function retrieve(id) {
			return this.client.get("/services/" + id + "/settings");
		}
	}, {
		key: "update",
		value: function update(id, data) {
			return this.client.post("/services/" + id + "/settings", data);
		}
	}]);

	return WebStoreServices;
}();

module.exports = WebStoreServices;
