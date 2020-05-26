import Vue from 'vue'
import utils from './utils.js';
import request from './api.js'
import cookie from './cookie.js'
import action from './action.js'

Vue.prototype.utils = utils;
Vue.prototype.request = request;
Vue.prototype.cookie = cookie;
Vue.prototype.action = action;
