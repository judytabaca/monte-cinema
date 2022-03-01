<template>
  <div>
    <WelcomeCard />
    <ComingSoon />
    <OnlineBooking />
  </div>
</template>

<script>
import WelcomeCard from "../components/WelcomeCard.vue";
import OnlineBooking from "../components/OnlineBooking.vue";
import ComingSoon from "../components/ComingSoon.vue";

export default {
  name: "HomePage",
  components: {
    WelcomeCard,
    ComingSoon,
    OnlineBooking,
  },
};
</script>

<style scoped lang="scss"></style>
