import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import finance from './finance';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    finance,
  },
});
