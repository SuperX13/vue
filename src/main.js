import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
