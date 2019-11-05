import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';

// 导入样式
import './assets/reset.min.css';
import './assets/font/iconfont.css';
import './assets/css/Shopcart.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')