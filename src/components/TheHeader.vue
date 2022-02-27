<template>
  <header class="header__container">
    <div class="logo">
      <img src="@/assets/img/logo.svg" />
    </div>
    <div class="header__buttons">
      <MainButton button-text="Register" button-type="secondary" />
      <MainButton button-text="Login" button-type="primary" />
      <div class="menu__toggle">
        <div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "TheHeader",
  components: {
    MainButton,
  },
};
</script>

<style scoped lang="scss">
.header__container {
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
    }

    .menu__toggle .line {
      width: 32px;
      height: 3px;
      background-color: $tuna;
      margin-bottom: 5px;
    }
  }
}

@media only screen and (max-width: 450px) {
  .header__container {
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
