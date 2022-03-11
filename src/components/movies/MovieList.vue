<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in $store.getters.movieList"
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
    return {};
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
      return this.moviesState.filter((movie) => movie.title.match(re));
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
