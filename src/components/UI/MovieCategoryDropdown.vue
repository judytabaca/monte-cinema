<template>
  <div>
    <label for=""></label>
    <select @change="$store.commit('setSelectedGenre', $event.target.value)">
      <option
        v-for="genre in ['All Movies', ...$store.getters.genreList]"
        :key="genre"
      >
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "MovieCategoryDropdown",
  props: {
    listOptions: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
