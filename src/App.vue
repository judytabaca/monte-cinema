<template>
  <div class="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  metaInfo: {
    title: "Welcome",
    titleTemplate: "%s | Monte Cinema",
  },
  components: {
    TheHeader,
  },

  methods: {},
  mounted() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getGenreList");
  },
  created() {
    this.$store.dispatch("restoreUserData");
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

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
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
