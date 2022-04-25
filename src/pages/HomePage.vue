<template>
  <div>
    <WelcomeCard />
    <ComingSoon />
    <ScreeningsPage />
    <ContactUs />
  </div>
</template>

<script>
import WelcomeCard from "../components/home/WelcomeCard.vue";
import ContactUs from "../components/home/ContactUs.vue";
import ComingSoon from "../components/home/ComingSoon.vue";
import ScreeningsPage from "@/pages/ScreeningsPage.vue";

export default {
  name: "HomePage",
  components: {
    WelcomeCard,
    ComingSoon,
    ContactUs,
    ScreeningsPage,
  },
};
</script>

<style scoped lang="scss"></style>
