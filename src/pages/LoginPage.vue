<template>
  <div class="login-page">
    <h1 class="login-page__hi">Hi there!</h1>
    <h2 class="login-page__care">Care to log in?</h2>
    <LoginCard />
    <p class="login-page__forgot-password">
      Did you forget your password? <a class="reset">Reset it now</a>
    </p>
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";

export default {
  name: "LoginPage",
  metaInfo: {
    title: "Login",
  },
  components: { LoginCard },
};
</script>

<style lang="scss" scoped>
.login-page {
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
  &__hi {
    color: $tuna;
    margin-top: 40px;
  }
  &__care {
    color: $jumbo;
    margin-bottom: 40px;
  }

  p {
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

@include sm {
  .login-page {
    p {
      font-size: 40px;
      min-width: 100%;
      text-align: center;
    }

    &__forgot-password {
      min-width: 100%;
      text-align: center;
    }
  }
}
</style>
