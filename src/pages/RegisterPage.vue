<template>
  <div class="register-page">
    <h1 class="register-page__ahoy">Ahoy you!</h1>
    <h1 class="register-page__care">Care to register?</h1>

    <RegisterCard />
  </div>
</template>

<script>
import RegisterCard from "../components/RegisterCard.vue";
export default {
  name: "RegisterPage",
  components: { RegisterCard },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.register-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
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
