<template>
  <div>
    <h1>All Movies Page</h1>
    <MovieList />
  </div>
</template>

<script>
import MovieList from "../components/movies/MovieList.vue";

export default {
  name: "AllMoviesPage",
  metaInfo: {
    title: "Movies",
  },
  components: {
    MovieList,
  },
};
</script>

<style lang="scss" scoped></style>
