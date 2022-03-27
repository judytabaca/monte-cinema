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
        :movie="movie"
      ></MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from "../movies/MovieCard.vue";

export default {
  name: "ComingSoon",
  data() {
    return {
      movies: [
        {
          title: "Predator",
          poster_url: "img/predator.png",
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
          genre: {
            name: "Action",
          },
          length: 87,
        },
        {
          title: "Commando",
          poster_url: "img/commando.png",
          description:
            "A retired Special Forces colonel tries to save his daughter, who was abducted by his former subordinate.",
          genre: {
            name: "Action",
          },
          length: 86,
        },
        {
          title: "Terminator 2",
          poster_url: "img/terminator.png",
          description:
            "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
          genre: {
            name: "Action",
          },
          length: 85,
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
