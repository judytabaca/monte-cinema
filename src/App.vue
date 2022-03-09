<template>
  <div class="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
// import apiMoviesService from "../src/services/api/apiMoviesService";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },

  methods: {
    // async getMovies() {
    //   try {
    //     const movies = await apiMoviesService.getMovieList();
    //     this.$store.commit("setMovies", movies);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
  mounted() {
    // this.getMovies();
    this.$store.dispatch("getMovies");
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

.app {
  max-width: 1440px;
  width: 95%;
  margin: auto;
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .app {
    width: 95%;
    margin: auto;
  }
}

@media only screen and (max-width: 450px) {
  .app {
    width: 100%;
    margin: auto;
  }
}
</style>
