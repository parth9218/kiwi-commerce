const restClient = require('restClient')
import clientSettings from './settings';

const api = new restClient({
	ajaxBaseUrl: clientSettings.ajaxBaseUrl || '/ajax'
});

export default api;
