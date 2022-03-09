<template>
  <div>
    <label for=""> </label>
    <input
      type="text"
      name=""
      id=""
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style lang="scss" scoped></style>
