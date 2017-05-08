import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    role: 'admin',
    dIndex: 0,
    cIndex: 0,
    list: [],
  },
  getters: {},
  mutations: {
    CHANGE_DINDEX(state, index) {
      state.dIndex = index
    },
    CHANGE_CINDEX(state, index) {
      state.cIndex = index
    },
    FETCH_GET(state, obj) {
      state.list = obj;
    }
  },
  actions: {
    changeDIndex({ commit }, index) {
      debugger
      commit('CHANGE_DINDEX', index)
    },
    changeCIndex({ commit }, index) {
      commit('CHANGE_CINDEX', index)
    },
    fetchData({ commit }) {
      Vue.http.get('/api/directories')
        .then(res => {
          commit("FETCH_GET", res.body.data);
        })
    }
  },
  modules: {}
});

export default store;
