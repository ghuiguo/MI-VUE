import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import Type from '../pages/Type.vue';
import Shopcart from '../pages/Shopcart.vue';
import Myself from '../pages/Myself.vue';
import Paylist from '../pages/ShopCart-payList.vue';
import Surepay from '../pages/Surepay.vue'
import Login from '../pages/Login.vue';
import Recom from '../pages/Home/Recom.vue';
import Phone from '../pages/Home/Phone.vue';



Vue.use(VueRouter);
const router = new VueRouter({
	mode: "hash",
	routes: [{
		path: '/',
		redirect: '/homepage'
	}, {
		path: '/homepage',
		name: 'homepage',
		component: Homepage,
		children: [{
			path: '',
			redirect: {
				path: '/homepage/recom',
			}
		},{
			path: 'recom',
			name: 'Recom',
			component: Recom
		}, {
			path: 'phone',
			name: 'Phone',
			component: Phone
		}]
	}, {
		path: '/type',
		name: 'type',
		component: Type,
	}, {
		path: '/shopcart',
		name: 'shopcart',
		component: Shopcart,

	},
	{
		path: '/paylist',
		name: 'paylist',
		component: Paylist,
	},{
		path: '/surepay',
		name: 'surepay',
		component: Surepay,
	},{
		path: '/myself',
		name: 'myself',
		component: Myself,
	},{
		path: '/login',
		name: 'login',
		component: Login,
	},{
		path: '*',
		redirect: '/homepage'
	}]
});

export default router;