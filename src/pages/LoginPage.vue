<template>
  <div class="login-page">
    <p class="login-page__hi">Hi there!</p>
    <p class="login-page__care">Care to log in?</p>
    <LoginCard />
    <h5 class="login-page__forgot-password">
      Did you forget your password? <span class="reset">Reset it now</span>
    </h5>
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
    min-width: 600px;
  }
  &__hi {
    color: $tuna;
    margin-top: 40px;
  }
  &__care {
    color: $jumbo;
    margin-bottom: 40px;
  }

  &__forgot-password {
    font-size: 16px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 0.04em;
    color: $tuna;
    margin: 20px 0px 40px 0px;
    min-width: 600px;

    .reset {
      color: $cherry-red;
      font-weight: 700;
    }
  }
}
</style>
