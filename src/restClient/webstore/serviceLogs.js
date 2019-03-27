var createClass = require('../helpers/createClass')()

var WebStoreServices = function () {
	function WebStoreServices(client) {
		this.client = client;
	}

	createClass(WebStoreServices, [{
		key: "list",
		value: function list(serviceId) {
			return this.client.get("/services/" + serviceId + "/logs");
		}
	}]);

	return WebStoreServices;
}();

module.exports = WebStoreServices;
