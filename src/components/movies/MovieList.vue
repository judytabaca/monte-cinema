<template>
  <div class="movie-list">
    <MovieCard v-for="movie in searchedMovies" :key="movie.id" :movie="movie">
    </MovieCard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Movie } from "@/store/index";
import MovieCard from "./MovieCard.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
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
    ...mapGetters(["movieList", "selectedGenre", "movieListByGenre"]),
    searchedMovies(): Array<Movie> {
      let re = new RegExp(this.search, "i");
      return this.$store.getters.movieListByGenre.filter((movie: Movie) =>
        movie.title.match(re)
      );
    },
  },
});
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
