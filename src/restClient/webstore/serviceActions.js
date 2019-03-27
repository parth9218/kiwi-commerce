var createClass = require('../helpers/createClass')()

var WebStoreServices = function () {
	function WebStoreServices(client) {
		this.client = client;
	}

	createClass(WebStoreServices, [{
		key: "call",
		value: function call(serviceId, actionId) {
			return this.client.post("/services/" + serviceId + "/actions/" + actionId);
		}
	}]);

	return WebStoreServices;
}();

module.exports = WebStoreServices;
