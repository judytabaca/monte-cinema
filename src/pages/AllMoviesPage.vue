<template>
  <div class="page-title">
    <h1>All the movies</h1>
    <div class="movie-filters">
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

<style lang="scss" scoped>
.page-title {
  text-align: left;

  .movie-filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    margin-bottom: 3em;

    .search-input {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  h1 {
    font-family: Eczar;
    font-weight: 600;
    font-size: 80px;
    line-height: 82px;
    letter-spacing: 0.01em;
    color: $tuna;
    margin: 32px 0px;
  }
}
</style>
