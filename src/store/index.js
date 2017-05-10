import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    role: 'admin', // 角色
    directoryId: '', // 当前目录ID
    categoryId: '', // 当前类别ID
    movieId: '', // 当前movie ID
    directories: [], // 目录列表
    categories: [], // 类别列表
    movies: [] // movie列表
  },
  getters: {},
  mutations: {
    TOGGLE_DIRECTORY_ID(state, id) {
      state.directoryId = id
      state.categoryId = ''
    },
    TOGGLE_CATEGORY_ID(state, id) {
      state.categoryId = id
    },
    FETCH_DIRECTORIES(state, arr) {
      state.directories = arr;
    },
    FETCH_CATEGORIES(state, arr) {
      state.categories = arr;
    },
    FETCH_MOVIES(state, arr) {
      state.movies = arr;
    }
  },
  actions: {
    toggleDirectoryId({ commit }, id) {
      commit('TOGGLE_DIRECTORY_ID', id)
    },
    toggleCategoryId({ commit }, id) {
      commit('TOGGLE_CATEGORY_ID', id)
    },
    fetchDirectories({ commit, state }) {
      Vue.http.get('/api/directories').then(res => {
        commit("FETCH_DIRECTORIES", res.body.data)
        commit('TOGGLE_DIRECTORY_ID', res.body.data[0]._id)
        Vue.http.get('/api/categories', {
          params: {
            directoryId: state.directoryId
          }
        }).then(res => {
          commit("FETCH_CATEGORIES", res.body.data);
          commit('TOGGLE_CATEGORY_ID', res.body.data[0]._id);
          Vue.http.get('/api/movies', {
            params: {
              categoryId: state.categoryId
            }
          }).then(res => {
            commit("FETCH_MOVIES", res.body.data);
          })
        })
      })
    },
    fetchCategories({ commit, state }) {
      Vue.http.get('/api/categories', {
        params: {
          directoryId: state.directoryId
        }
      }).then(res => {
        if (_.size(res.body.data)) {
          commit("FETCH_CATEGORIES", res.body.data);
          commit('TOGGLE_CATEGORY_ID', res.body.data[0]._id);
          Vue.http.get('/api/movies', {
            params: {
              categoryId: state.categoryId
            }
          }).then(res => {
            commit("FETCH_MOVIES", res.body.data);
          })
        } else {
          commit("FETCH_CATEGORIES", []);
          commit('TOGGLE_CATEGORY_ID', '');
          commit("FETCH_MOVIES", []);
        }
      })
    },
    fetchMovies({ commit, state }) {
      Vue.http.get('/api/movies', {
        params: {
          categoryId: state.categoryId
        }
      }).then(res => {
        commit("FETCH_MOVIES", res.body.data);
      })
    }
  },
  modules: {}
});

export default store;
