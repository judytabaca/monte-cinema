<template>
  <div class="register-card-wrapper">
    <form @submit.prevent="submitForm" novalidate>
      <div class="register-card-wrapper__form form-field">
        <MainInput v-model="firstName" inputName="first-name" inputType="text"
          >FIRST NAME</MainInput
        >
        <MainInput v-model="lastName" inputName="last-name" inputType="text"
          >LAST NAME</MainInput
        >
        <MainInput
          v-model="dateOfBirth"
          inputName="date-of-birth"
          inputType="date"
          >DATE OF BIRTH</MainInput
        >

        <div class="register-card-wrapper__form__buttons">
          <router-link :to="{ name: 'LoginPage' }">
            <MainButton button-type="secondary">Log in instead</MainButton>
          </router-link>
          <MainButton button-type="primary" :disabled="!isFormValid"
            >Register</MainButton
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MainInput from "@/components/UI/MainInput.vue";
import MainButton from "@/components/UI/MainButton.vue";
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      dateOfBirth: null,
    };
  },
  computed: {
    isFormValid() {
      return this.isFirstNameValid && this.isLastNameValid && this.idDobValid;
    },
    isFirstNameValid() {
      return this.firstName;
    },
    isLastNameValid() {
      return this.lastName;
    },
    idDobValid() {
      return this.dateOfBirth;
    },
  },
  methods: {
    submitForm() {
      const userDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
      };
      this.$emit("userDetails", userDetails);
    },
  },
  components: {
    MainInput,
    MainButton,
  },
};
</script>

<style lang="scss" scoped>
.register-card-wrapper {
  min-width: 600px;
  padding: 40px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  margin-bottom: 40px;

  .password_error {
    color: rgb(150, 23, 23);
  }

  &__form {
    display: flex;
    flex-direction: column;

    &__buttons {
      display: flex;
      text-align: center;
      justify-content: center;
    }

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

@media only screen and (max-width: 650px) {
  .register-card-wrapper {
    min-width: 100%;
    padding: 40px;
    box-shadow: none;
    border-radius: 0px;
    margin-bottom: 40px;

    &__form {
      &__buttons {
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
