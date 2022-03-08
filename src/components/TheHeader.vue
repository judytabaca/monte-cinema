<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/logo.svg" />
      </router-link>
    </div>
    <div v-if="!isLogin && !isRegister">
      <router-link :to="{ name: 'AllMovies' }">Movies</router-link>
      <router-link to="#">Screenings</router-link>
      <router-link to="#">Contact us</router-link>
    </div>
    <div v-if="!isLogin && !isRegister" class="header__buttons">
      <router-link :to="{ name: 'RegisterPage' }">
        <MainButton button-type="secondary">Register</MainButton>
      </router-link>
      <router-link :to="{ name: 'LoginPage' }">
        <MainButton button-type="primary">Login</MainButton>
      </router-link>
      <div class="menu__toggle">
        <div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div v-if="isLogin || isRegister">DESIGNED BY WITH ❤️ BY MONTERAIL</div>
  </header>
</template>

<script>
import MainButton from "./UI/MainButton.vue";

export default {
  name: "TheHeader",
  computed: {
    isLogin() {
      return this.$route.name === "LoginPage";
    },
    isRegister() {
      return this.$route.name === "RegisterPage";
    },
  },
  components: {
    MainButton,
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  .header__buttons {
    display: flex;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.015em;

    .button {
      margin-left: 1em;
    }

    .menu__toggle {
      height: 100%;
      width: 60px;
      cursor: pointer;
      display: none;
      justify-content: center;
      align-self: center;

      .line {
        width: 32px;
        height: 3px;
        background-color: $tuna;
        margin-bottom: 5px;
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .header {
    padding: 15px 25px;
  }

  .menu__toggle {
    display: flex;
  }

  .header__buttons .button {
    display: none;
  }
}
</style>
