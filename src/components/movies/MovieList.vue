<template>
  <div>
    <MovieCard
      v-for="movie in moviesState"
      :key="movie.id"
      :title="movie.title"
      :img="movie.poster_url"
    >
    </MovieCard>
  </div>
</template>

<script>
import apiMoviesService from "../../services/api/apiMoviesService";
import MovieCard from "../MovieCard.vue";

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
        this.moviesState = await apiMoviesService.getMovieList();
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
