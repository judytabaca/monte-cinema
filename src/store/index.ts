import Vue from "vue";
import Vuex from "vuex";
import apiMoviesService from "../services/api/apiMoviesService";

Vue.use(Vuex);

export interface Movie {
  id: number;
  title: string;
  genre: {
    id: number;
    name: string;
  };
  poster_url: string;
  length: number;
  release_date: string;
  description: string;
}

export default new Vuex.Store({
  state: {
    moviesRecord: [] as Array<Movie>,
    genreList: [] as Array<string>,
    selectedGenre: "",
  },
  getters: {
    movieList: (state) => {
      return state.moviesRecord;
    },
    movieListByGenre: (state) => {
      if (
        state.selectedGenre == "All Categories" ||
        state.selectedGenre == ""
      ) {
        return state.moviesRecord;
      }
      return state.moviesRecord.filter(
        (movie) => movie.genre.name === state.selectedGenre
      );
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
        const movies: Array<Movie> = await apiMoviesService.getMovieList();
        commit("setMovies", movies);
      } catch (err) {
        console.log(err);
      }
    },
    async getGenreList({ commit }) {
      try {
        const movieList: Array<Movie> = await apiMoviesService.getMovieList();
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
