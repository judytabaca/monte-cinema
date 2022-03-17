<template>
  <div class="register-page">
    <h1 class="register-page__ahoy">Ahoy you!</h1>
    <h2 class="register-page__care">Care to register?</h2>

    <RegisterCard />
  </div>
</template>

<script>
import RegisterCard from "../components/register/RegisterCard.vue";
export default {
  name: "RegisterPage",
  metaInfo: {
    title: "Register",
  },
  components: { RegisterCard },
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

@media only screen and (max-width: 1024px) and (min-width: 650px) {
}

@media only screen and (max-width: 650px) {
  .register-page {
    p {
      font-size: 40px;
      text-align: center;
      min-width: 100%;
    }
  }
}
</style>
