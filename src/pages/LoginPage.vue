<template>
  <div class="login-page">
    <p class="login-page__hi">Hi there!</p>
    <p class="login-page__care">Care to log in?</p>
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";

export default {
  name: "LoginPage",
  components: { LoginCard },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 600;
    font-size: 80px;
    line-height: 108%;
    letter-spacing: -0.01em;
  }
  .login-page__hi {
    color: $tuna;
    margin-top: 40px;
  }
  .login-page__care {
    color: $jumbo;
    margin-bottom: 40px;
  }
}
</style>
