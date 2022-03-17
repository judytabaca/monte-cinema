<template>
  <div>
    <BreadCrumbs>Movies</BreadCrumbs>
    <h1>All Movies Page</h1>
    <MovieList />
  </div>
</template>

<script>
import MovieList from "../components/movies/MovieList.vue";
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";

export default {
  name: "AllMoviesPage",
  components: {
    MovieList,
    BreadCrumbs,
  },
};
</script>

<style lang="scss" scoped></style>
