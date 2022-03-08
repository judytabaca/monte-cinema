<template>
  <div>
    <label for="email">Email</label>
    <input
      required
      class="email__input"
      type="email"
      placeholder="Enter your email"
      :value="value"
      name="email"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blurTouched')"
    />
  </div>
</template>

<script>
export default {
  name: "MainInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  color: $bittersweet;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin: 12px 0;
}
.email__input {
  display: block;
  width: 100%;
  padding: 1em 1.5em;
  border: 0;
  border-radius: 0.5em;
  background-color: $input-background;
  margin-bottom: 15px;
}
</style>
