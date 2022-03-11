<template>
  <div>
    <h1>All Movies Page</h1>
    <div>
      <SearchInput v-model="search" />
      <MovieCategoryDropdown />
    </div>
    <MovieList :search="search" />
  </div>
</template>

<script>
import SearchInput from "../components/UI/SearchInput.vue";
import MovieCategoryDropdown from "../components/UI/MovieCategoryDropdown.vue";
import MovieList from "../components/movies/MovieList.vue";

export default {
  name: "AllMoviesPage",
  data() {
    return {
      search: "",
    };
  },
  components: {
    MovieList,
    SearchInput,
    MovieCategoryDropdown,
  },
};
</script>

<style lang="scss" scoped></style>
