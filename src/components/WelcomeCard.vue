<template>
  <div class="welcome__container">
    <div class="welcome__text">
      <h1>Welcome to the best cinema in Monterail</h1>
      <p>
        Best movies, best experiences, best people. And all that doesn't exist.
        Yikes.
      </p>
      <a class="button button-primary" href="#online-booking">
        Book a ticket
      </a>
    </div>
    <div class="welcome__img--container">
      <img src="@/assets/img/welcome.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
};
</script>

<style scoped lang="scss">
.welcome__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1% 0%;
  background-color: $wisp-pink;

  .welcome__text,
  .welcome__img--container {
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
  }
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .welcome__img--container {
    display: none;
  }

  .welcome__text {
    width: 100%;
    align-items: center;
    text-align: center;
    aspect-ratio: auto;

    a {
      align-self: center;
    }
  }
}

@media only screen and (max-width: 450px) {
  .welcome__img--container {
    display: none;
  }

  .welcome__text {
    width: 100%;
    align-items: center;
    text-align: center;
    aspect-ratio: auto;

    a {
      align-self: center;
    }

    h1 {
      font-size: 48px;
    }
  }
}
</style>
