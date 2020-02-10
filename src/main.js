import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.$axios = axios.create({
  baseURL: 'http://127.0.0.1:8030',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
