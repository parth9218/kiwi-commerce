var ajaxClient2 = require('./ajaxClient');
var apiClient2 = require('./apiClient');
var webstoreClient2 = require('./webstoreClient');
var productCategories2 = require('./api/productCategories');
var products2 = require('./api/products/products');
var options2 = require('./api/products/options');
var optionValues2 = require('./api/products/optionValues');
var variants2 = require('./api/products/variants');
var images2 = require('./api/products/images');
var sitemap2 = require('./api/sitemap');
var theme2 = require('./api/theme/theme');
var settings2 = require('./api/theme/settings');
var assets2 = require('./api/theme/assets');
var placeholders2 = require('./api/theme/placeholders');
var customerGroups2 = require('./api/customerGroups');
var customers2 = require('./api/customers');
var ajaxCart2 = require('./api/ajaxCart');
var orders2 = require('./api/orders/orders');
var discounts2 = require('./api/orders/discounts');
var transactions2 = require('./api/orders/transactions');
var items2 = require('./api/orders/items');
var statuses2 = require('./api/orders/statuses');
var shippingMethods2 = require('./api/shippingMethods');
var paymentMethods2 = require('./api/paymentMethods');
var paymentGateways2 = require('./api/paymentGateways');
var ajaxShippingMethods2 = require('./api/ajaxShippingMethods');
var ajaxPaymentMethods2 = require('./api/ajaxPaymentMethods');
var ajaxPaymentFormSettings2 = require('./api/ajaxPaymentFormSettings');
var countries2 = require('./api/countries');
var currencies2 = require('./api/currencies');
var text2 = require('./api/text');
var settings4 = require('./api/settings');
var checkoutFields2 = require('./api/checkoutFields');
var pages2 = require('./api/pages');
var tokens2 = require('./api/tokens');
var redirects2 = require('./api/redirects');
var webhooks2 = require('./api/webhooks');
var files2 = require('./api/files');
var settings6 = require('./api/apps/settings');
var account2 = require('./webstore/account');
var services2 = require('./webstore/services');
var serviceSettings2 = require('./webstore/serviceSettings');
var serviceActions2 = require('./webstore/serviceActions');
var serviceLogs2 = require('./webstore/serviceLogs');

var Client = function Client() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	this.apiBaseUrl = options.apiBaseUrl || '/api/v1';
	this.apiToken = options.apiToken;
	this.ajaxBaseUrl = options.ajaxBaseUrl || '/ajax';
	this.webstoreToken = options.webstoreToken;

	var apiClient = new apiClient2({
		baseUrl: this.apiBaseUrl,
		token: this.apiToken
	});
	var ajaxClient = new ajaxClient2({ baseUrl: this.ajaxBaseUrl });
	var webstoreClient = new webstoreClient2({ token: this.webstoreToken });

	this.products = new products2(apiClient);
	this.products.options = new options2(apiClient);
	this.products.options.values = new optionValues2(apiClient);
	this.products.variants = new variants2(apiClient);
	this.products.images = new images2(apiClient);
	this.productCategories = new productCategories2(apiClient);
	this.customers = new customers2(apiClient);
	this.orders = new orders2(apiClient);
	this.orders.discounts = new discounts2(apiClient);
	this.orders.transactions = new transactions2(apiClient);
	this.orders.items = new items2(apiClient);
	this.orderStatuses = new statuses2(apiClient);
	this.shippingMethods = new shippingMethods2(apiClient);
	this.paymentMethods = new paymentMethods2(apiClient);
	this.paymentGateways = new paymentGateways2(apiClient);
	this.customerGroups = new customerGroups2(apiClient);
	this.sitemap = new sitemap2(apiClient);
	this.theme = new theme2(apiClient);
	this.theme.settings = new settings2(apiClient);
	this.theme.assets = new assets2(apiClient);
	this.theme.placeholders = new placeholders2(apiClient);
	this.countries = new countries2(apiClient);
	this.currencies = new currencies2(apiClient);
	this.text = new text2(apiClient);
	this.settings = new settings4(apiClient);
	this.checkoutFields = new checkoutFields2(apiClient);
	this.pages = new pages2(apiClient);
	this.tokens = new tokens2(apiClient);
	this.redirects = new redirects2(apiClient);
	this.webhooks = new webhooks2(apiClient);
	this.files = new files2(apiClient);
	this.apps = {};
	this.apps.settings = new settings6(apiClient);

	this.ajax = {};
	this.ajax.products = new products2(ajaxClient);
	this.ajax.sitemap = new sitemap2(ajaxClient);
	this.ajax.cart = new ajaxCart2(ajaxClient);
	this.ajax.countries = new countries2(ajaxClient);
	this.ajax.currencies = new currencies2(ajaxClient);
	this.ajax.shippingMethods = new ajaxShippingMethods2(ajaxClient);
	this.ajax.paymentMethods = new ajaxPaymentMethods2(ajaxClient);
	this.ajax.paymentFormSettings = new ajaxPaymentFormSettings2(ajaxClient);
	this.ajax.pages = new pages2(ajaxClient);

	this.webstore = {};
	this.webstore.account = new account2(webstoreClient);
	this.webstore.services = new services2(webstoreClient);
	this.webstore.services.settings = new serviceSettings2(webstoreClient);
	this.webstore.services.actions = new serviceActions2(webstoreClient);
	this.webstore.services.logs = new serviceLogs2(webstoreClient);
};

Client.authorize = function (baseUrl, email) {
	return apiClient2.authorize(baseUrl, email);
};

Client.authorizeInWebStore = function (email, adminUrl) {
	return webstoreClient2.authorize(email, adminUrl);
};

module.exports = Client;
