import Vue from "vue";
import Vuex from "vuex";
import apiMoviesService from "../services/api/apiMoviesService";
import * as authApi from "@/services/api/apiAuthService";
import { setAuthHeader, removeAuthHeader } from "@/services/api/client";

Vue.use(Vuex);
const authHeaderStorageKey = "LS_AUTH_HEADER";

export default new Vuex.Store({
  state: {
    moviesRecord: [],
    genreList: [],
    selectedGenre: "",
    authHeader: null,
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
    isLoggedIn: (state) => !!state.authHeader,
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
    setUserData(state, { authHeader }) {
      state.authHeader = authHeader;
      localStorage.setItem(authHeaderStorageKey, authHeader);
    },
    resetUserData(state) {
      state.authHeader = null;
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
    async login({ commit, getters, dispatch }, credentials) {
      if (getters.isLoggedIn) await dispatch("logout");
      const response = await authApi.login(credentials);
      const authHeader = response.headers.authorization;
      setAuthHeader(authHeader);
      commit("setUserData", { authHeader });
    },
    async logout({ commit, getters }) {
      if (!getters.isLoggedIn) return;
      authApi.logout();
      localStorage.removeItem(authHeaderStorageKey);
      commit("resetUserData");
      removeAuthHeader();
    },
    restoreUserData({ commit }) {
      try {
        const authHeader = localStorage.getItem(authHeaderStorageKey);

        if (authHeader) {
          setAuthHeader(authHeader);
          commit("setUserData", { authHeader });
        }
      } catch {
        // ignore error
      }
    },
  },
  modules: {},
});
