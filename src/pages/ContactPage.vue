<template>
  <div>
    <h1>Contact Us</h1>
    <div class="contact-page">
      <div class="contact-page__image">
        <img src="@/assets/img/map.png" alt="map" />
      </div>
      <div class="contact-page__address">
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
      <div class="contact-page__social">
        <img src="@/assets/img/social-icons/twitter.svg" alt="twitter" />
        <img src="@/assets/img/social-icons/facebook.svg" alt="facebok icon" />
        <img src="@/assets/img/social-icons/linkedin.svg" alt="linkedin icon" />
        <img
          src="@/assets/img/social-icons/instagram.svg"
          alt="instagram icon"
        />
        <img src="@/assets/img/social-icons/github.svg" alt="github icon" />
        <img src="@/assets/img/social-icons/behance.svg" alt="behance icon" />
        <img src="@/assets/img/social-icons/dribble.svg" alt="dribble icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Eczar";
  font-weight: 600;
  font-size: 80px;
  line-height: 82px;
  letter-spacing: -0.01em;
  color: $tuna;
  margin: 32px 0px;
}

.contact-page {
  display: flex;
  height: 415px;
  background-color: $input-background;
  border-radius: 8px;

  &__image {
    img {
      border-radius: 8px 0 0 8px;
    }
  }

  &__address {
    display: grid;
    grid-template-columns: 32px 300px;
    grid-template-rows: 130px 30px 30px;
    gap: 2.5em;
    width: 100%;
    margin: auto 0;
    padding-left: 4em;
    font-size: 18px;
    font-weight: 400;
    font-family: "Roboto Mono";
    line-height: 32px;
    letter-spacing: 0.015em;
    color: $tuna;
  }

  &__social {
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 32px;
      height: auto;
    }
  }
}

@include md {
  .contact-page {
    &__image {
      aspect-ratio: 1;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
}

@include sm {
  h1 {
    font-size: 48px;
    line-height: 49px;
  }
  .contact-page {
    flex-direction: column;
    background-color: transparent;

    &__image {
      aspect-ratio: 1;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px 8px 0 0;
      }
    }

    &__address {
      background-color: $input-background;
      padding-top: 2em;
      padding-bottom: 2em;
      padding-left: 0;
      align-content: center;
      justify-content: center;
    }

    &__social {
      background-color: $input-background;
      flex-direction: row;
      min-height: 80px;
      justify-content: space-evenly;
      margin-top: 5px;
      border-radius: 0 0 8px 8px;
    }
  }
}
</style>
