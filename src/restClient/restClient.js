var crossFetch2 = require('cross-fetch');
var queryString2 = require('query-string');
var createClass = require('./helpers/createClass')()

var RestClient = function () {

	function RestClient(_ref) {
		var _this = this;

		var baseUrl = _ref.baseUrl,
				token = _ref.token;

		this.postFormDataConfig = function (formData) {
			return {
				method: 'post',
				body: formData,
				headers: {
					Authorization: 'Bearer ' + _this.token
				}
			};
		};

		this.returnStatusAndJson = function (response) {
			return response.json().then(function (json) {
				return { status: response.status, json: json };
			}).catch(function () {
				return { status: response.status, json: null };
			});
		};

		this.baseUrl = baseUrl;
		this.token = token;
	}

	createClass(RestClient, [{
		key: 'getConfig',
		value: function getConfig(method, data) {
			var config = {
				method: method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + this.token
				}
			};

			if (data) {
				config.body = JSON.stringify(data);
			}
			return config;
		}
	}, {
		key: 'get',
		value: function get(endpoint, filter, cookie) {
			return (0, crossFetch2)('' + this.baseUrl + endpoint + '?' + queryString2.stringify(filter), this.getConfig('get', null, cookie)).then(this.returnStatusAndJson);
		}
	}, {
		key: 'post',
		value: function post(endpoint, data) {
			return (0, crossFetch2)(this.baseUrl + endpoint, this.getConfig('post', data)).then(this.returnStatusAndJson);
		}
	}, {
		key: 'postFormData',
		value: function postFormData(endpoint, formData) {
			return (0, crossFetch2)(this.baseUrl + endpoint, this.postFormDataConfig(formData)).then(this.returnStatusAndJson);
		}
	}, {
		key: 'put',
		value: function put(endpoint, data) {
			return (0, crossFetch2)(this.baseUrl + endpoint, this.getConfig('put', data)).then(this.returnStatusAndJson);
		}
	}, {
		key: 'delete',
		value: function _delete(endpoint) {
			return (0, crossFetch2)(this.baseUrl + endpoint, this.getConfig('delete')).then(this.returnStatusAndJson);
		}
	}]);

	return RestClient;
}();

RestClient.returnStatusAndJsonStatic = function (response) {
	return response.json().then(function (json) {
		return { status: response.status, json: json };
	}).catch(function () {
		return { status: response.status, json: null };
	});
};

module.exports = RestClient;
