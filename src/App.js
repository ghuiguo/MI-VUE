import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';

import VueAwesomeSwiper from 'vue-awesome-swiper'

// 导入样式
import 'swiper/dist/css/swiper.css'
import './assets/reset.min.css';
import './assets/font/iconfont.css';
import './assets/font/cartFont/iconfont.css';
import './assets/css/Shopcart.css';

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


