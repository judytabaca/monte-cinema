<template>
  <div>
    <BreadCrumbs>Movies</BreadCrumbs>
    <div class="movies-page">
      <h1>All the movies</h1>
      <div class="movie-filters">
        <SearchInput v-model="search" />
        <MovieCategoryDropdown />
      </div>
      <MovieList :search="search" />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
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
    BreadCrumbs,
  },
};
</script>

<style lang="scss" scoped>
.movies-page {
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

@include md {
  .movies-page {
    .movie-filters {
      grid-template-columns: 2fr 1fr;

      .search-input {
        grid-column-end: 1;
      }
    }
  }
}

@include sm {
  .movies-page {
    .movie-filters {
      grid-template-columns: 1fr;

      .search-input {
        grid-column-end: 1;
      }
    }
  }
}
</style>
