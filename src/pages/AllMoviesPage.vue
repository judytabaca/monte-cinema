<template>
  <div>
    <h1>All Movies Page</h1>
    <router-link to="/movie/1">Movie Number 1</router-link>
    <a href="" @click="movie2">Movie Number 2</a>
  </div>
</template>

<script>
export default {
  name: "AllMoviesPage",
  methods: {
    movie2() {
      this.$router.push("/movie/2");
    },
  },
};
</script>

<style lang="scss" scoped></style>
