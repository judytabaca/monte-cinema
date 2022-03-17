<template>
  <div>
    <MovieCard
      v-for="movie in $store.getters.movieList"
      :key="movie.id"
      :movie="movie"
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
};
</script>

<style lang="scss" scoped></style>
