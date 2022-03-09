<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in searchedMovies"
      :key="movie.id"
      :title="movie.title"
      :img="movie.poster_url"
      :genre="movie.genre.name"
    >
    </MovieCard>
  </div>
</template>

<script>
import apiMoviesService from "../../services/api/apiMoviesService";
import MovieCard from "./MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      moviesState: [],
    };
  },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
  methods: {
    async getMovies() {
      try {
        this.moviesState = await apiMoviesService.getMovieList();
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    searchedMovies() {
      let re = new RegExp(this.search, "i");
      return this.moviesState.filter((movie) => movie.title.match(re));
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
