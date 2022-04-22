<template>
  <div class="wrapper">
    <label :for="inputName" class="input-label"><slot /></label>
    <input
      :id="inputName"
      class="input-box"
      required
      :type="inputType"
      placeholder="..."
      :value="value"
      :name="inputType"
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
    inputType: {
      type: String,
      default: "text",
    },
    inputName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .input-box {
    display: block;
    width: 100%;
    padding: 1em 1.5em;
    border: 0;
    border-radius: 0.5em;
    background-color: $input-background;
    margin-bottom: 15px;
  }

  .input-label {
    color: $bittersweet;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    margin: 12px 0;
  }
}
</style>
