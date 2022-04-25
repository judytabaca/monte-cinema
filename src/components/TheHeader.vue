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
          <router-link
            :to="{ name: 'ScreeningsPage' }"
            class="header__navbar-options"
            >Screenings</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'ContactPage' }"
            class="header__navbar-options"
            >Contact us</router-link
          >
        </li>
      </ul>
      <div class="header__buttons">
        <template v-if="isLoggedIn">
          <MainButton button-type="primary" @click="logout">Logout</MainButton>
        </template>
        <template v-else>
          <router-link :to="{ name: 'RegisterPage' }">
            <MainButton button-type="secondary">Register</MainButton>
          </router-link>
          <router-link :to="{ name: 'LoginPage' }">
            <MainButton button-type="primary">Login</MainButton>
          </router-link>
        </template>
      </div>
    </template>
    <template v-if="isLogin || isRegister">
      <div class="with-love">designed with ❤️ by monterail</div>
    </template>
    <div class="menu__toggle" @click="mobileMenuOn = !mobileMenuOn">
      <div :class="buttonActive">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
    </div>
    <Transition>
      <div class="mobile-menu" v-if="mobileMenuOn">
        <div class="mobile-menu__buttons">
          <template v-if="isLoggedIn">
            <MainButton button-type="primary" @click="logout"
              >Logout</MainButton
            >
          </template>
          <template v-else>
            <router-link :to="{ name: 'RegisterPage' }">
              <MainButton button-type="secondary">Register</MainButton>
            </router-link>
            <router-link :to="{ name: 'LoginPage' }">
              <MainButton button-type="primary">Login</MainButton>
            </router-link>
          </template>
        </div>
        <ul class="mobile-menu__links">
          <li>
            <router-link
              :to="{ name: 'AllMovies' }"
              class="header__navbar-options"
              >Movies</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'ScreeningsPage' }"
              class="header__navbar-options"
              >Screenings</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'ContactPage' }"
              class="header__navbar-options"
              >Contact us</router-link
            >
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script>
import MainButton from "./UI/MainButton.vue";

export default {
  name: "TheHeader",
  data() {
    return {
      mobileMenuOn: false,
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "LoginPage";
    },
    isRegister() {
      return this.$route.name === "RegisterPage";
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    line1active() {
      return { "line1--active": this.mobileMenuOn };
    },
    line2active() {
      return { "line2--active": this.mobileMenuOn };
    },
    line3active() {
      return { "line3--active": this.mobileMenuOn };
    },
    buttonActive() {
      return this.mobileMenuOn
        ? "menu__toggle__lines--active"
        : "menu__toggle__lines";
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    MainButton,
  },
};
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .mobile-menu {
    background-color: white;
    width: 100%;
    height: 170px;
    position: fixed;
    top: 80px;
    right: 0;
    z-index: 99;
    box-shadow: 0px 30px 24px 0px rgba(66, 68, 90, 0.32);

    &__buttons {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

    &__links {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;

      li {
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
    }
  }

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
  }

  .menu__toggle {
    height: 100%;
    width: 60px;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;

    &__lines {
      .line {
        width: 32px;
        height: 3px;
        background-color: $tuna;
        margin-bottom: 5px;
      }

      .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }

      .line2 {
        transition: transform 0.2s ease-in-out;
      }

      .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }
    }
    &__lines--active {
      .line {
        width: 32px;
        height: 3px;
        background-color: $tuna;
        margin-bottom: 5px;
      }

      .line1 {
        transform: rotate(45deg) translateY(11px);
      }
      .line2 {
        transform: scaleY(0);
      }
      .line3 {
        transform: rotate(-45deg) translateY(-11px);
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  .header {
    padding: 15px 25px;

    &__navbar {
      display: none;
    }

    .menu__toggle {
      display: flex;
    }

    &__buttons {
      display: none;
    }

    .with-love {
      display: none;
    }
  }
}
</style>
