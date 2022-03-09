<template>
  <div>
    <h1>All Movies Page</h1>
    <div>
      <SearchInput v-model="search" />
      <MainDropdown />
    </div>
    <MovieList :search="search" />
  </div>
</template>

<script>
import SearchInput from "../components/UI/SearchInput.vue";
import MainDropdown from "../components/UI/MainDropdown.vue";
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
    MainDropdown,
  },
};
</script>

<style lang="scss" scoped></style>
