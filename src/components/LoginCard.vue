<template>
  <div class="login-card-wrapper">
    <form @submit.prevent="submitForm" novalidate>
      <div class="login-card-wrapper__form form-field">
        <MainInput v-model="email" @blurTouched="emailTouched = true" />
        <PasswordInput
          v-model="password"
          @blurTouched="passwordTouched = true"
        />
        <div class="login-card-wrapper__form__buttons">
          <router-link :to="{ name: 'RegisterPage' }">
            <MainButton button-type="secondary">Register instead</MainButton>
          </router-link>
          <router-link to="#">
            <MainButton button-type="primary" :disabled="!isFormValid"
              >Log In</MainButton
            >
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MainButton from "../components/UI/MainButton.vue";
import MainInput from "../components/UI/EmailInput.vue";
import PasswordInput from "../components/UI/PasswordInput.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      console.log("user email: ", this.email);
      console.log("user password: ", this.password);
    },
    submitForm() {
      this.loginUser();
    },
  },
  computed: {
    isFormValid() {
      return this.email && this.password;
    },
  },
  components: {
    MainButton,
    MainInput,
    PasswordInput,
  },
};
</script>

<style lang="scss" scoped>
.login-card-wrapper {
  min-width: 600px;
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
      font-weight: 700;

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

@media only screen and (max-width: 1024px) and (min-width: 650px) {
}

@media only screen and (max-width: 650px) {
  .login-card-wrapper {
    min-width: 100%;
    padding: 40px;
    box-shadow: none;
    border-radius: 0px;
    margin-bottom: 0;

    &__form {
      &__buttons {
        margin-top: 2em;
        flex-direction: column-reverse;
        align-items: center;

        a {
          width: 95%;

          button {
            width: 95%;
          }
        }
      }
    }
  }
}
</style>
