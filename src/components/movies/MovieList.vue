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
import MovieCard from "./MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
};
</script>

<style lang="scss" scoped></style>
