<template>
  <div class="address-card">
    <img src="@/assets/img/pinlocation.svg" alt="location pin icon" />
    <p>
      Monterail Sp. z o.o. <br />
      ul. Oławska 27-29 <br />
      50-123 Wrocław <br />
      Poland
    </p>
    <img src="@/assets/img/emailicon.svg" alt="email icon" />
    <p>hello@monterail.com</p>
    <img src="@/assets/img/phoneicon.svg" alt="phone icon" />
    <p>+48 533 600 136</p>
  </div>
</template>

<script>
export default {
  name: "AddressCard",
};
</script>

<style lang="scss" scoped>
.address-card {
  max-width: 800px;
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
</style>
