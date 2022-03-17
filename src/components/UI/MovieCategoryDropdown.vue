<template>
  <div class="dropdown-categories">
    <label class="dropdown-categories__label" for="">Categories</label>
    <select
      class="dropdown-categories__select"
      @change="$store.commit('setSelectedGenre', $event.target.value)"
    >
      <option
        class="dropdown-categories__options"
        v-for="genre in movieCategories"
        :key="genre"
      >
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MovieCategoryDropdown",
  computed: {
    ...mapGetters(["genreList"]),

    movieCategories() {
      return ["All Categories", ...this.genreList];
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-categories {
  width: 100%;

  &__label {
    @include roboto-mono-700;
    color: $bittersweet;
    text-transform: uppercase;
    margin: 12px 0;
  }

  &__select {
    @include input-element;
    display: block;
    width: 100%;
  }
}
</style>
