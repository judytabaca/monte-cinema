<template>
  <div class="coming-soon">
    <div class="coming-soon__headings">
      <h3>SOON IN THE CINEMA</h3>
      <h3>SOON</h3>
      <h3>SEE ALL</h3>
    </div>
    <div class="coming-soon__wrapper">
      <MovieCard
        v-for="movie in movies"
        :key="movie.title"
        :title="movie.title"
        :img="movie.img"
        :description="movie.description"
      ></MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

import imgPredator from "@/assets/img/predator.png";
import imgCommando from "@/assets/img/commando.png";
import imgTerminator from "@/assets/img/terminator.png";

export default {
  name: "ComingSoon",
  data() {
    return {
      movies: [
        {
          title: "Predator",
          img: imgPredator,
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
        },
        {
          title: "Commando",
          img: imgCommando,
          description:
            "A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate.",
        },
        {
          title: "Terminator 2",
          img: imgTerminator,
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
        },
      ],
    };
  },
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

@media only screen and (max-width: 1024px) and (min-width: 550px) {
  .coming-soon__wrapper {
    div:nth-of-type(3) {
      display: none;
    }

    div:nth-of-type(2) {
      margin-left: 3%;
    }
  }
}

@media only screen and (max-width: 550px) {
  .coming-soon__wrapper {
    flex-direction: column;
    align-items: center;
    width: 94%;

    div:nth-of-type(1) {
      display: none;
    }

    .movie__wrapper {
      width: 100%;
    }

    div:nth-of-type(2) {
      display: inline-block;
    }
  }
}
</style>
