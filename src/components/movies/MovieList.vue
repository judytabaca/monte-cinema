<template>
  <div class="movie-list">
    <MovieCard v-for="movie in searchedMovies" :key="movie.id" :movie="movie">
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
      return this.$store.getters.movieListByGenre.filter((movie) =>
        movie.title.match(re)
      );
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
