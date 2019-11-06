import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import Type from '../pages/Type.vue';
import Shopcart from '../pages/Shopcart.vue';
import Myself from '../pages/Myself.vue';
import Paylist from '../pages/ShopCart-payList.vue';



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
	}, {
		path: '/type',
		name: 'type',
		component: Type,
	}, {
		path: '/shopcart',
		name: 'shopcart',
		component: Shopcart,

	},{
		path: '/myself',
		name: 'myself',
		component: Myself,
	},
	{
		path: '/paylist',
		name: 'paylist',
		component: Paylist,
	},{
		path: '*',
		redirect: '/homepage'
	}]
});

export default router;