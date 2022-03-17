<template>
  <div>
    <BreadCrumbs :secondLevel="movieId">Movies</BreadCrumbs>
    <h1>Movie Details</h1>
    <h3>Movie ID: {{ movieId }}</h3>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";

export default {
  name: "MovieDetailsPage",
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  components: {
    BreadCrumbs,
  },
};
</script>

<style lang="scss" scoped></style>
