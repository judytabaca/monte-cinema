<template>
  <div>
    <WelcomeCard />
    <ComingSoon />
    <ContactUs />
  </div>
</template>

<script>
import WelcomeCard from "../components/home/WelcomeCard.vue";
import ContactUs from "../components/home/ContactUs.vue";
import ComingSoon from "../components/home/ComingSoon.vue";

export default {
  name: "HomePage",
  components: {
    WelcomeCard,
    ComingSoon,
    ContactUs,
  },
};
</script>

<style scoped lang="scss"></style>
