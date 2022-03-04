<template>
  <div>
    <label for="password">Password</label>
    <input
      required
      :type="inputType"
      placeholder="Enter your password"
      :value="value"
      name="password"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blurTouched')"
    />
    <div class="password-eye" @click.prevent="toggleViewPassword">
      <img src="../../assets/img/eye.png" alt="eye" />
    </div>
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
input {
  display: block;
  max-width: 100%;
  padding: 1em 1.5em;
  border: 0;
  border-radius: 0.5em;
  background-color: $input-background;
}

label {
  color: $bittersweet;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin: 12px 0;
}

.password-eye {
  position: relative;

  img {
    position: absolute;
    top: -30px;
    right: 3%;
  }
}
</style>
