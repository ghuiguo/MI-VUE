import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from './store/index';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import LyTab  from "ly-tab";

//    导入样式
import 'swiper/dist/css/swiper.css'
import './assets/reset.min.css';
import './assets/font/iconfont.css';
import '../public/assets/font/cartFont/iconfont.css'
import '../public/assets/css/Shopcart.css';
import '../public/assets/css/Shopcart-payList.css';
import '../public/assets/css/Surepay.css';
import '../public/assets/css/Successpay.css';
import '../public/assets/css/Search.css';
// import '../public/assets/css/Details.css';

Vue.use(VueAwesomeSwiper);
Vue.use(LyTab);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


