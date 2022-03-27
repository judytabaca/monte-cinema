<template>
  <button :disabled="disabled" :class="buttonClasses" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    buttonType: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        "button",
        { "button--primary": this.buttonType === "primary" },
        { "button--secondary": this.buttonType === "secondary" },
      ];
    },
  },
  methods: {
    click(event) {
      this.$emit("click", event);
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

  &--primary {
    color: $snow-white;
    border: 5px solid $cherry-red;
    background-color: $cherry-red;

    &:hover {
      background-color: $totem-pole;
      border: 5px solid $totem-pole;
    }

    &:focus {
      background-color: $totem-pole;
      border: 5px solid $bittersweet;
    }
  }

  &--secondary {
    color: $cherry-red;
    border: 5px solid $snow-white;
    background-color: $snow-white;
  }

  &:disabled {
    background-color: $jumbo;
    cursor: not-allowed;
    border: 0;
    &:hover {
      opacity: 90%;
    }
  }
}
</style>
