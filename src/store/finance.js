import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    finance: [],
  },
  actions: {
    async GET_FINANCE({ commit }) {
      const response = await Vue.$axios.get('/api/expenses/');
      commit('SET_LIST', response.data);
    },
  },
  mutations: {
    SET_LIST: (state, list) => {
      state.finance = list;
    },
  },
};
