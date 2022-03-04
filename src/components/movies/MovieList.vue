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
import axios from "axios";
import MovieCard from "../MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      BASE_URL: "http://localhost:3000/movies",
      moviesState: [],
    };
  },
  methods: {
    async getMovies() {
      try {
        const response = await axios.get(this.BASE_URL);
        const movies = response.data;
        this.moviesState = movies;
        // list rendering
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped></style>
