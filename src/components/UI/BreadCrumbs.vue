<template>
  <div class="breadcrumbs">
    <button class="breadcrumbs__link breadcrumbs__link--btn" @click="goBack">
      <div>
        <img src="@/assets/img/arrow-back.svg" />
      </div>
      <div>Back</div>
    </button>
    <p
      class="breadcrumbs__link breadcrumbs__link--crumb"
      @click="$router.push(backPath)"
    >
      <slot />
    </p>
    <template v-if="secondLevel">
      <div><img src="@/assets/img/forward-tick.svg" /></div>
      <p class="breadcrumbs__link breadcrumbs__link--crumb">
        {{ secondLevel }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",

  props: {
    backPath: {
      type: Object,
      default: null,
    },
    secondLevel: {
      type: String,
      default: null,
    },
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: $wisp-pink;

  p:last-of-type {
    cursor: default;
  }

  &__link {
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: $tuna;
    height: 35px;
    margin: 0 1em;
    cursor: pointer;

    &--btn {
      width: 140px;
      border: 2px solid $tuna;
      background-color: transparent;
      flex-direction: row;

      &:hover,
      &:focus {
        color: $snow-white;
        border: 2px solid $tuna;
        background-color: $tuna;
      }

      div {
        margin: 0 0.4em;
      }
    }
  }
}
</style>
