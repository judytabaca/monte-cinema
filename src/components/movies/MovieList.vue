<template>
  <div>
    <MovieCard
      v-for="movie in this.$store.getters.getMovies"
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
  methods: {
    async getMovies() {
      try {
        const movies = await apiMoviesService.getMovieList();
        this.$store.commit("setMovies", movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped></style>
