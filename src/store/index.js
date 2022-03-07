import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stateMovies: [],
  },
  getters: {
    getMovies: (state) => {
      return state.stateMovies;
    },
  },
  mutations: {
    setMovies(state, payload) {
      state.stateMovies = payload;
    },
  },
  actions: {},
  modules: {},
});
