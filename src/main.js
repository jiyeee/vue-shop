import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'


Vue.prototype.$http = axios;
axios.defaults.baseURL = "https://vue-shop-62e74.firebaseio.com/";
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
