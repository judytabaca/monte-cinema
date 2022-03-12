<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/logo.svg" />
      </router-link>
    </div>
    <template v-if="!isLogin && !isRegister">
      <ul class="header__navbar">
        <li>
          <router-link
            :to="{ name: 'AllMovies' }"
            class="header__navbar-options"
            >Movies</router-link
          >
        </li>
        <li>
          <router-link to="#" class="header__navbar-options"
            >Screenings</router-link
          >
        </li>
        <li>
          <router-link to="#" class="header__navbar-options"
            >Contact us</router-link
          >
        </li>
      </ul>
      <div class="header__buttons">
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
    </template>
    <template v-if="isLogin || isRegister">
      <div class="with-love">designed with ❤️ by monterail</div>
    </template>
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
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .with-love {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    text-align: right;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-top: 20px;
  }

  &__navbar {
    height: 100%;
  }

  &__navbar li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover,
    &:active {
      font-weight: 700;
      color: $gray-abbey;
      box-shadow: inset 0px -4px 0px $cherry-red;
    }
  }

  &__navbar-options {
    font-size: 18px;
    line-height: 21px;
    color: $jumbo;
    justify-content: space-between;
    margin: 0 30px;
  }
  &__buttons {
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
