<template>
  <button :class="buttonClasses">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    buttonText: {
      type: String,
      default: "Click Me!",
    },
    buttonType: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClasses() {
      return [
        "button",
        { button__primary: this.buttonType === "primary" },
        { button__secondary: this.buttonType === "secondary" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  height: 48px;
  border-radius: 24px;
  padding: 16px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;

  &__primary {
    color: $snow-white;
    border: 5px solid $cherry-red;
    background-color: $cherry-red;
  }

  &__secondary {
    color: $cherry-red;
    border: 5px solid $snow-white;
    background-color: $snow-white;
  }

  &__primary:hover {
    background-color: $totem-pole;
    border: 5px solid $totem-pole;
  }

  &__primary:focus {
    background-color: $totem-pole;
    border: 5px solid $bittersweet;
  }
}
</style>
