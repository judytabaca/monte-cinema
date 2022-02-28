<template>
  <div class="welcome">
    <div class="welcome__text">
      <h1>Welcome to the best cinema in Monterail</h1>
      <p>
        Best movies, best experiences, best people. And all that doesn't exist.
        Yikes.
      </p>
      <MainButton button-type="primary">Book a ticket</MainButton>
    </div>
    <div class="welcome-img__container">
      <img src="@/assets/img/welcome.jpg" />
    </div>
  </div>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "WelcomeCard",
  components: {
    MainButton,
  },
};
</script>

<style scoped lang="scss">
.welcome {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1% 0%;
  background-color: $wisp-pink;

  .welcome__text,
  .welcome-img__container {
    width: 50%;
    aspect-ratio: 1;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .welcome__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    color: $tuna;

    h1 {
      font-family: Eczar;
      font-weight: 600;
      font-size: 80px;
      letter-spacing: -0.01em;
      line-height: 102%;
      margin: 3% 0%;
      color: $tuna;
    }

    p {
      font-family: "Roboto Mono", monospace;
      font-weight: 400;
      font-size: 22px;
      letter-spacing: 0.015em;
      line-height: 170%;
      width: 70%;
      margin: 3% 0%;
    }

    a {
      font-size: 22px;
      line-height: 100%;
      font-weight: 500;
      letter-spacing: 0.015em;
      padding: 20px 40px;
      align-self: flex-start;
      font-family: "Roboto Mono", monospace;
      margin: 3% 0%;
    }

    .button {
      max-width: 50%;
    }
  }
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .welcome {
    .welcome-img__container {
      display: none;
    }

    .welcome__text {
      width: 80%;
      align-items: flex-start;
      text-align: start;
      aspect-ratio: auto;

      a {
        align-self: center;
      }

      p {
        width: 90%;
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .welcome-img__container {
    display: none;
  }
  .welcome__text {
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    aspect-ratio: auto;

    a {
      align-self: center;
    }

    h1 {
      font-size: 48px;
    }

    p {
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
  }
}
</style>
