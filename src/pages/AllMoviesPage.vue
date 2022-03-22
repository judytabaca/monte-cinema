<template>
  <div class="movies-page">
    <BreadCrumbs backPath="/movie">Movies</BreadCrumbs>
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
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";

export default {
  name: "AllMoviesPage",
  metaInfo: {
    title: "Movies",
  },
  data() {
    return {
      search: "",
    };
  },
  components: {
    MovieList,
    BreadCrumbs,
    SearchInput,
    MovieCategoryDropdown,
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
    h1 {
      font-size: 48px;
      text-align: center;
    }
    .movie-filters {
      grid-template-columns: 1fr;

      .search-input {
        grid-column-end: 1;
      }
    }
  }
}
</style>
