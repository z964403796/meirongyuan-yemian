import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import uView from "uview-ui";
Vue.use(uView);
App.mpType = 'app'
import util from "./common/util.js"
import { Api } from "@/api/index";
import fetch from "@/service/fetch";
import upload from "./common/upload.js";
import lib from "./common/lib.js";
import Vuex from 'vuex'
Vue.prototype.$api = Api;
Vue.prototype.util = util
Vue.prototype.$upload = upload
Vue.prototype.$url = fetch.baseUrl
Vue.prototype.lib = lib
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		verify_token: ''
	},
	mutations: {
		settoken(state, verify_token) {
			state.verify_token = verify_token;
		}
	},
})
Vue.prototype.$store = store
const app = new Vue({
	...App,
	store
})
app.$mount()
