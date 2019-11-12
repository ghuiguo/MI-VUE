import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
// import * as types from './store-types';
// import goodsList from './goodsList';
// import {
// 	queryPower
// } from '../api/login';

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		// goodsList
	},
	//=>设置公共信息
	state: {
		// isLogin: false,
		// power: ''
	},
	mutations: {
		// [types.CHECK_IS_LOGIN](state, isLogin = true) {
		// 	state.isLogin = isLogin;
		// }
	},
	actions: {
		// [types.QUERY_POWER](context) {
		// 	queryPower().then(power => {
		// 		context.commit(types.QUERY_POWER, power);
		// 	});
		// }
	},
	plugins: [logger()]
});