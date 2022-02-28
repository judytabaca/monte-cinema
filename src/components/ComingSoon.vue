<template>
  <div class="coming-soon">
    <div class="coming-soon__headings">
      <h3>SOON IN THE CINEMA</h3>
      <h3>SOON</h3>
      <h3>SEE ALL</h3>
    </div>
    <div class="coming-soon__wrapper">
      <MovieCard
        title="Predator"
        img="/src/assets/img/predator.png"
        description="A team of commandos on a mission in a Central American jungle find themselves haunted by an extraterrestrial warrior."
      ></MovieCard>
      <MovieCard
        title="Commando"
        img="{movie2}"
        description="A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate."
      ></MovieCard>
      <MovieCard
        title="Terminator 2"
        img="{movie3}"
        description="A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."
      ></MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "ComingSoon",
  components: {
    MovieCard,
  },
};
</script>

<style scoped lang="scss">
.coming-soon {
  width: 100%;
  margin: 1% 0%;

  &__headings {
    display: flex;
    justify-content: space-between;
    margin: 60px 0px 30px 0px;

    h3 {
      font-family: "Roboto Mono", monospace;
      font-weight: 700;
      font-size: 22px;
      line-height: 170%;
      color: $tuna;
      letter-spacing: 0.015em;

      &:nth-of-type(2) {
        display: none;
      }

      &:nth-of-type(3) {
        color: $cherry-red;
      }
    }
  }

  .coming-soon__wrapper {
    display: flex;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .scoming-soon__wrapper {
    div:nth-of-type(3) {
      display: none;
    }

    div:nth-of-type(2) {
      margin-left: 3%;
    }
  }
}

@media only screen and (max-width: 450px) {
  .cominng-soon__wrapper {
    width: 92%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &__headings {
      h3:nth-of-type(1) {
        display: none;
      }

      h3:nth-of-type(2) {
        display: inline-block;
      }
    }

    .coming-soon__wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
