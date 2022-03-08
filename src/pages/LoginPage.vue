<template>
  <div class="login-page">
    <h1 class="login-page__hi">Hi there!</h1>
    <p>Care to log in?</p>
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
  h1 {
    font-weight: 600;
    font-size: 80px;
    line-height: 108%;
    letter-spacing: -0.01em;

    color: $tuna;
    margin-top: 40px;
  }
  p {
    color: $jumbo;
    margin-bottom: 40px;
  }
}
</style>
