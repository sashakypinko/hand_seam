window._ = require('lodash');

window.$ = require('jquery');

require('./index');

require('bootstrap');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
