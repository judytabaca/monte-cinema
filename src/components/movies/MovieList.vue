<template>
  <div class="movie-list">
    <MovieCard v-for="movie in moviesByCategory" :key="movie.id" :movie="movie">
    </MovieCard>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import MovieCard from "./MovieCard.vue";
export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["movieList", "selectedGenre"]),
    searchedMovies() {
      let re = new RegExp(this.search, "i");
      return this.movieList.filter((movie) => movie.title.match(re));
    },
    moviesByCategory() {
      const moviesByCategory = this.searchedMovies.filter(
        (movie) => movie.genre.name === this.selectedGenre
      );
      return this.selectedGenre === "" ? this.searchedMovies : moviesByCategory;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 2em;
}

@include md {
  .movie-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include sm {
  .movie-list {
    grid-template-columns: 1fr;
  }
}
</style>
