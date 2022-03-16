<template>
  <div>
    <h1>Contact Us</h1>
    <div class="contact-page">
      <div class="contact-page__image">
        <img src="@/assets/img/map.png" alt="map" />
      </div>
      <AddressCard />
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
import AddressCard from "@/components/contact/AddressCard.vue";
export default {
  name: "ContactPage",
  components: { AddressCard },
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

  .address-card {
    margin: auto 0;
    padding: 0;
    border-radius: 0;
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

    .address-card {
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
