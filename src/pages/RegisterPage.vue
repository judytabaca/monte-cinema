<template>
  <div class="register-page">
    <template v-if="currentStep === 1">
      <h1 class="register-page__ahoy">Ahoy you!</h1>
      <h2 class="register-page__care">Care to register?</h2>
    </template>
    <template v-if="currentStep === 2">
      <h1 class="register-page__ahoy">Great!</h1>
      <h2 class="register-page__care">Now your name</h2>
    </template>

    <RegisterSteps>
      <RegisterCard
        v-if="currentStep === 1"
        @userCredentials="updateUserCredentials"
      />
      <RegisterCardTwo
        v-if="currentStep === 2"
        @userDetails="updateUserDetails"
      />
    </RegisterSteps>
  </div>
</template>

<script>
import { register } from '@/services/api/apiAuthService'

import RegisterSteps from "@/components/register/RegisterSteps.vue";
import RegisterCard from "../components/register/RegisterCard.vue";
import RegisterCardTwo from "../components/register/RegisterCardTwo.vue";
export default {
  data() {
    return {
      currentStep: 1,
      userCredentialas: {},
    };
  },
  methods: {
    updateUserCredentials(payload) {
      this.userCredentialas = payload;
      this.currentStep += 1;
    },
    async updateUserDetails(payload) {
      this.userCredentialas = {
        ...this.userCredentialas, 
        first_name: payload.first_name,
        last_name: payload.last_name,
        date_of_birth: payload.date_of_birth
        }
      console.log(this.userCredentialas);
      await register(this.userCredentialas)
    },
  },
  name: "RegisterPage",
  metaInfo: {
    title: "Register",
  },
  components: { RegisterCard, RegisterCardTwo, RegisterSteps },
};
</script>

<style lang="scss" scoped>
.register-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  h1,
  h2 {
    font-weight: 600;
    font-size: 80px;
    line-height: 108%;
    letter-spacing: -0.01em;
    min-width: 600px;
    font-family: "Eczar";
  }

  &__ahoy {
    color: $tuna;
    margin-top: 40px;
  }
  &__care {
    color: $jumbo;
    margin-bottom: 40px;
  }
}

@include sm {
  .register-page {
    p {
      font-size: 40px;
      text-align: center;
      min-width: 100%;
    }
  }
}
</style>
