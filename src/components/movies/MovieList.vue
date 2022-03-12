<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in moviesByCategory"
      :key="movie.id"
      :title="movie.title"
      :img="movie.poster_url"
      :genre="movie.genre.name"
    >
    </MovieCard>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  data() {
    return {
      selectedGenre: "",
    };
  },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
  computed: {
    searchedMovies() {
      let re = new RegExp(this.search, "i");
      return this.$store.getters.movieList.filter((movie) =>
        movie.title.match(re)
      );
    },
    moviesByCategory() {
      const moviesByCategory = this.searchedMovies.filter(
        (movie) => movie.genre.name === this.$store.getters.selectedGenre
      );
      return this.$store.getters.selectedGenre == "All Movies" ||
        this.$store.getters.selectedGenre == ""
        ? this.searchedMovies
        : moviesByCategory;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 2em;
}
</style>
