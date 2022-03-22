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
    <button type="button" class="search-input__icon">
      <img src="@/assets/img/search.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style lang="scss" scoped>
.search-input {
  position: relative;

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
    width: 100%;
  }

  &__icon {
    position: absolute;
    top: 38px;
    right: 2%;
    border: 0;
    background-color: transparent;
  }
}
</style>
