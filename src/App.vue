<template>
  <div class="app">
    <TheHeader />
    <WelcomeCard />
    <ComingSoon />
    <OnlineBooking />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import WelcomeCard from "./components/WelcomeCard.vue";
import OnlineBooking from "./components/OnlineBooking.vue";
import ComingSoon from "./components/ComingSoon.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    WelcomeCard,
    ComingSoon,
    OnlineBooking,
  },
};
</script>

<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}

.app {
  max-width: 1440px;
  width: 95%;
  margin: auto;
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .app {
    width: 95%;
    margin: auto;
  }
}

@media only screen and (max-width: 450px) {
  .app {
    width: 100%;
    margin: auto;
  }
}
</style>
