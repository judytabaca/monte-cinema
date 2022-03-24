import Vue from "vue";
import Vuex from "vuex";
import apiMoviesService from "../services/api/apiMoviesService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesRecord: [],
    genreList: [],
    selectedGenre: "All Categories",
  },
  getters: {
    movieList: (state) => {
      return state.moviesRecord;
    },
    genreList: (state) => {
      return state.genreList;
    },
    selectedGenre: (state) => {
      return state.selectedGenre;
    },
  },
  mutations: {
    setMovies(state, payload) {
      state.moviesRecord = payload;
    },
    setGenreList(state, payload) {
      state.genreList = payload;
    },
    setSelectedGenre(state, payload) {
      state.selectedGenre = payload;
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
    async getGenreList({ commit }) {
      try {
        const movieList = await apiMoviesService.getMovieList();
        const uniqueGenres = [
          ...new Set(movieList.map((movie) => movie.genre.name)),
        ];
        commit("setGenreList", uniqueGenres);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
