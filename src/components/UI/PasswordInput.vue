<template>
  <div class="wrapper">
    <label for="password" class="password-label">Password</label>
    <input
      class="password-input"
      required
      :type="inputType"
      placeholder="Enter your password"
      :value="value"
      name="password"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blurTouched')"
    />
    <button class="password-eye" @click.prevent="toggleViewPassword">
      <img src="../../assets/img/eye.png" alt="eye" />
    </button>
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    toggleViewPassword: function () {
      this.showPassword = !this.showPassword;
    },
  },
  computed: {
    inputType() {
      return this.showPassword ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .password-input {
    display: block;
    width: 100%;
    padding: 1em 1.5em;
    border: 0;
    border-radius: 0.5em;
    background-color: $input-background;
    margin-bottom: 15px;
  }

  .password-label {
    color: $bittersweet;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    margin: 12px 0;
  }

  .password-eye {
    position: absolute;
    top: 30px;
    right: 3%;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
