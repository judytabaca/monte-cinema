<template>
  <header class="header-container">
    <div class="logo">
      <img src="../../img/logo.svg" />
    </div>
    <div class="header-buttons">
      <button class="button button-secondary">Register</button>
      <button class="button button-primary">Login</button>
      <div class="menu-toggle">
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
// import logo from "../../img/logo.svg";
export default {
  name: "TheHeader",
};
</script>

<style>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
}

.header-buttons {
  display: flex;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.015em;
}

.header-buttons > .button {
  margin-left: 1em;
}

.menu-toggle {
  height: 100%;
  width: 60px;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-self: center;
}

.menu-toggle .line {
  width: 32px;
  height: 3px;
  background-color: #5d5d67;
  margin-bottom: 5px;
}

@media only screen and (max-width: 450px) {
  .header-container {
    padding: 15px 25px;
  }

  .menu-toggle {
    display: flex;
  }

  .header-buttons > .button {
    display: none;
  }
}
</style>
