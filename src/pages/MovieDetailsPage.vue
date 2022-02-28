<template>
  <div>
    <h1>Movie Details</h1>
    <h3>Movie ID: {{ movieId }}</h3>
  </div>
</template>

<script>
export default {
  name: "MovieDetailsPage",
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
