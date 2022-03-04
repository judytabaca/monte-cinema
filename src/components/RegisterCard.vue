<template>
  <div class="register-card-wrapper">
    <form @submit.prevent="submitForm" novalidate>
      <div
        class="register-card-wrapper__form form-field"
        :class="{ 'form-field--error': !!emailError }"
      >
        <MainInput v-model="email" @blurTouched="emailTouched = true" />
        <div>
          {{ emailError }}
        </div>
        <PasswordInput
          v-model="password"
          @blurTouched="passwordTouched = true"
        />
        <div>
          {{ passwordError }}
        </div>
        <p>At least 8 characters</p>
        <p>At lest one letter</p>
        <p>At least one digit</p>
        <div class="register-card-wrapper__form__buttons">
          <MainButton button-type="secondary">Log in instead</MainButton>
          <MainButton button-type="primary" :disabled="!isFormValid"
            >Next step</MainButton
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";
import MainInput from "./UI/EmailInput.vue";
import PasswordInput from "./UI/PasswordInput.vue";

const isEmailValid = (email) => email && email.includes("@");

export default {
  data() {
    return {
      email: "",
      password: "",
      emailTouched: false,
      passwordTouched: false,
    };
  },
  methods: {
    registerUser() {
      console.log("user email: ", this.email);
      console.log("user password: ", this.password);
    },
    submitForm() {
      this.touchAll();
      if (this.isFormValid) {
        console.log("submitted");
        this.registerUser();
      }
    },
    touchAll() {
      this.emailTouched = true;
      this.passwordTouched = true;
    },
  },
  computed: {
    emailError() {
      if (!this.emailTouched) return "";
      if (!this.email) {
        return "Email is required";
      }
      if (!isEmailValid(this.email)) {
        return "Email should contain @ character";
      }
      return "";
    },
    passwordError() {
      if (!this.passwordTouched) return "";
      if (!this.password) {
        return "Password can not be empty";
      }
      return "";
    },
    isFormValid() {
      return !this.emailError && !this.passwordError;
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
