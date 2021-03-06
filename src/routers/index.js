import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import Type from '../pages/Type.vue';
import Myself from '../pages/Myself.vue';
import Login from '../pages/Login.vue';
import Recom from '../pages/Home/Recom.vue';
import Phone from '../pages/Home/Phone.vue';
import Setting from '../pages/Setting.vue';

import Search from '../pages/Search.vue';
import SearchReault from '../pages/Search/SearchResult.vue';
// import SearchBefore from '../pages/Search/SearchBefore.Vue';
import Searchmain from '../pages/Search/Searchmain.vue';

import Paylist from '../pages/Cart/ShopCart-payList.vue';
import Shopcart from '../pages/Shopcart.vue';
import Successpay from '../pages/Cart/Successpay.vue';
import Surepay from '../pages/Cart/Surepay.vue';
import SurepayFa from '../pages/Cart/SurepayFa.vue';

import OrderList from '../pages/OrderList.vue';
import ProductDetail from '../pages/ProductDetail.vue';




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
		}, {
			path: 'recom',
			name: 'Recom',
			component: Recom
		}, {
			path: 'phone',
			name: 'Phone',
			component: Phone
		}]
	},
		{
		path: '/type',
		name: 'type',
		component: Type,
	}, {
		path: '/shopcart',
		name: 'shopcart',
		component: Shopcart,
	},{
		path: '/paylist',
		name: 'paylist',
		component: Paylist,
	}, {
		path: '/surepayfa',
		name: 'surepayfa',
		component: SurepayFa,
		children: [{
			path: 'surepay',
			name: 'surepay',
			component: Surepay,
		},{
			path: 'successpay',
			name: 'successpay',
			component: Successpay,
		}]
	}, {
		path: '/myself',
		name: 'myself',
		component: Myself,
	}, {
		path: '/login',
		name: 'login',
		component: Login,
	},{
		path: '/setting',
		name: 'setting',
		component: Setting,
	},{
		path: '/search',
		name: 'search',
		component: Search,
		children:[{
			path:'searchmain',
			name:'searchmain',
			component:Searchmain
		},{
			path:'searchreault/:productId',
			name:'searchreault',
			component:SearchReault
		}]
	},
	{
		path: '/orderList/:type',
		name: 'orderList',
		component: OrderList,
	},{
		path: '/productDetail/:productId',
		name: 'productDetail',
		component: ProductDetail,
	},{
		path: '*',
		redirect: '/homepage'
	}]
});

export default router;