<template>
  <div>
    <WelcomeCard />
    <ComingSoon />
    <OnlineBooking />
  </div>
</template>

<script>
import WelcomeCard from "../components/home/WelcomeCard.vue";
import OnlineBooking from "../components/home/OnlineBooking.vue";
import ComingSoon from "../components/home/ComingSoon.vue";

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
