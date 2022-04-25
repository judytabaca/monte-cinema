<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <AddressCard />
  </div>
</template>

<script>
import AddressCard from "@/components/contact/AddressCard.vue";
export default {
  name: "ContactUs",
  components: { AddressCard },
};
</script>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 2em auto;
    font-family: "Eczar";
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: $tuna;
  }

  &__address {
    max-width: 600px;
    max-height: 400px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 32px 300px;
    grid-template-rows: 130px 30px 30px;
    gap: 2.5em;
    width: 100%;
    padding: 3em;
    font-size: 18px;
    font-weight: 400;
    font-family: "Roboto Mono";
    line-height: 32px;
    letter-spacing: 0.015em;
    color: $tuna;
    background-color: $input-background;
    border-radius: 24px;
  }
}

@include sm {
  .contact-us {
    min-height: initial;

    &__address {
      padding: 1em;
    }

    h1 {
      font-size: 40px;
    }
  }
}
</style>
