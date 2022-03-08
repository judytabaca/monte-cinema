<template>
  <div class="register-page">
    <p class="register-page__ahoy">Ahoy you!</p>
    <p class="register-page__care">Care to register?</p>

    <RegisterCard />
  </div>
</template>

<script>
import RegisterCard from "../components/register/RegisterCard.vue";
export default {
  name: "RegisterPage",
  components: { RegisterCard },
};
</script>

<style lang="scss" scoped>
.register-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 600;
    font-size: 80px;
    line-height: 108%;
    letter-spacing: -0.01em;
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
</style>
