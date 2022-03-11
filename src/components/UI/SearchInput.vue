<template>
  <div class="search-input">
    <label class="search-input__label" for="">Search</label>
    <input
      class="search-input__input"
      type="text"
      placeholder="What are you looking for?"
      name=""
      id=""
      @input="$emit('input', $event.target.value)"
    />
    <img src="@/assets/img/search.svg" class="search-input__icon" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style lang="scss" scoped>
.search-input {
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
  &__input {
    @include input-element;
    display: block;
  }

  &__icon {
    position: absolute;
    top: 274px;
    right: 41.5%;
    border: 0;
    background-color: transparent;
  }
}
</style>
