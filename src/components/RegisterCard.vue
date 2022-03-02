<template>
  <div class="register-card-wrapper">
    <form class="register-card-wrapper__form" @submit.prevent="registerUser">
      <MainInput v-model="RegisterInfo.email" />
      <PasswordInput v-model="RegisterInfo.password" />
      <p>At least 8 characters</p>
      <p>At lest one letter</p>
      <p>At least one digit</p>
      <div class="register-card-wrapper__form__buttons">
        <MainButton button-type="secondary">Log in instead</MainButton>
        <MainButton button-type="primary">Next step</MainButton>
      </div>
    </form>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";
import MainInput from "./UI/EmailInput.vue";
import PasswordInput from "./UI/PasswordInput.vue";

export default {
  data() {
    return {
      RegisterInfo: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    MainButton,
    MainInput,
    PasswordInput,
  },
  methods: {
    registerUser() {
      console.log("user email: ", this.RegisterInfo.email);
      console.log("user password: ", this.RegisterInfo.password);
    },
  },
};
</script>

<style lang="scss" scoped>
.register-card-wrapper {
  width: 45%;
  padding: 40px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  margin-bottom: 40px;

  &__form {
    display: flex;
    flex-direction: column;

    &__buttons {
      display: flex;
      text-align: center;
      justify-content: center;

      &--secondary {
        color: $cherry-red;
      }
    }

    input {
      display: block;
      max-width: 100%;
      padding: 1em 1.5em;
      border: 0;
      border-radius: 0.5em;
      background-color: $input-background;
    }

    p {
      font-size: 14px;
      line-height: 170%;
      letter-spacing: 0.04em;
      color: $tuna;

      &:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
