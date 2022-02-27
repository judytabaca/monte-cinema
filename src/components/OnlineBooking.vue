<template>
  <div class="booking__wrapper">
    <h1>Online booking</h1>
    <h4>Soon</h4>
    <div class="email__wrapper">
      <img src="@/assets/img/logo.svg" />
      <p>
        Leave us your email address and we'll let you know as soon as the
        machine will start.
      </p>
      <label>EMAIL</label>
      <input
        type="text"
        class="email__input"
        placeholder="e.g. mynameislaura@mail.com"
      />
      <MainButton button-text="Let me know" button-type="primary" />
    </div>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "OnlineBooking",
  components: {
    MainButton,
  },
};
</script>

<style scoped lang="scss">
.booking__wrapper {
  width: 100%;
  color: $tuna;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 0%;
  padding: 150px 20px;

  h1 {
    font-family: Eczar;
    font-weight: 600;
    font-size: 80px;
    letter-spacing: -0.01em;
    line-height: 102%;
  }

  h4 {
    font-family: "Roboto Mono", monospace;
    font-weight: 400;
    font-size: 22px;
    line-height: 170%;
    letter-spacing: 0.015em;
    margin: 20px 0px;
  }

  .email__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
    margin: 1% 1%;
    width: 44%;

    p {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 150%;
      color: $charade;
      margin: 40px 0px;
      text-align: center;
    }

    label {
      font-family: "Roboto Mono", monospace;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: $bittersweet;
      margin: 12px 0px;
      align-self: flex-start;
    }

    .email__input {
      padding: 24px 16px 24px 24px;
      width: 100%;
      height: 55px;
      background-color: $grey-input;
      border-radius: 8px;
      border-style: none;
      color: $jumbo;
      font-family: Roboto;
      font-weight: 400;
      font-size: 18px;
    }

    button {
      margin-top: 30px;
      align-self: stretch;
      font-family: "Roboto Mono", monospace;
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0.015em;
      transition: 0.3s ease-out;
    }
  }
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .booking__wrapper {
    padding: 40px 0px;
    text-align: center;

    .email__wrapper {
      width: 66%;
    }
  }
}

@media only screen and (max-width: 450px) {
  .booking__wrapper {
    padding: 100px 0px;
    text-align: center;

    h1 {
      font-size: 40px;
    }
    .email__wrapper {
      width: 100%;
      padding: 25px 27px;
      margin: 0px;
      box-shadow: none;
    }
  }
}
</style>
