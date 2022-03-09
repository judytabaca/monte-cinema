import Vue from "vue";
import Vuex from "vuex";
import apiMoviesService from "../services/api/apiMoviesService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesRecord: [],
  },
  getters: {
    movieList: (state) => {
      return state.moviesRecord;
    },
  },
  mutations: {
    setMovies(state, payload) {
      state.moviesRecord = payload;
    },
  },
  actions: {
    async getMovies({ commit }) {
      try {
        const movies = await apiMoviesService.getMovieList();
        commit("setMovies", movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
