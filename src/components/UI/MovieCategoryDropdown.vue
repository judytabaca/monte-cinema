<template>
  <div class="dropdown-categories">
    <label class="dropdown-categories__label" for="">Categories</label>
    <select
      class="dropdown-categories__select"
      @change="$store.commit('setSelectedGenre', $event.target.value)"
    >
      <option class="dropdown-categories__options" value="">
        All Categories
      </option>
      <option
        class="dropdown-categories__options"
        v-for="genre in $store.getters.genreList"
        :key="genre"
        :value="genre"
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
    font-family: Roboto, Mono;
    color: $bittersweet;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin: 12px 0;
  }

  &__select {
    @include input-element;
    display: block;
    width: 100%;
  }
}
</style>
