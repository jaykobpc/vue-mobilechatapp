import Vue from 'vue'
import App from './App.vue'
import router from './Router/Index';
import store from './Vuex/Store';

import './assets/allToggles.css';
import './assets/moreToggles.css';

import 'animate.css/animate.min.css';
import 'animate.css/animate.compat.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
