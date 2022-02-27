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

<style scoped lang="scss"></style>
