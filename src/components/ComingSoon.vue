<template>
  <div class="coming-soon_wrapper">
    <div class="headings">
      <h3>SOON IN THE CINEMA</h3>
      <h3>SOON</h3>
      <h3>SEE ALL</h3>
    </div>
    <div class="soon-movies_wrapper">
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
.coming-soon_wrapper {
  width: 100%;
  margin: 1% 0%;
}

.headings {
  display: flex;
  justify-content: space-between;
  margin: 60px 0px 30px 0px;
}

.headings > h3 {
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 22px;
  line-height: 170%;
  color: $tuna;
  letter-spacing: 0.015em;
}

.headings > h3:nth-of-type(2) {
  display: none;
}

.headings > h3:nth-of-type(3) {
  color: $cherry-red;
}

.soon-movies_wrapper {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .soon-movies_wrapper > div:nth-of-type(3) {
    display: none;
  }

  .soon-movies_wrapper > div:nth-of-type(2) {
    margin-left: 3%;
  }
}

@media only screen and (max-width: 450px) {
  .coming-soon_wrapper {
    width: 92%;
    margin: auto;
  }

  .headings > h3:nth-of-type(1) {
    display: none;
  }

  .headings > h3:nth-of-type(2) {
    display: inline-block;
  }

  .soon-movies_wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
