<template>
  <div class="movie__wrapper">
    <h2>{{ movie.title }}</h2>
    <p class="movie__wrapper__time">{{ movieLength(movie.length) }}</p>
    <!-- <p>{{ length }}</p> -->
    <div class="image__wrapper">
      <img :src="movie.poster_url" />
    </div>
    <p class="movie__wrapper__genre">{{ movie.genre.name }}</p>
  </div>
</template>

<script>
import toHoursAndMinutes from "@/utils/toHoursAndMinutes";

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      default: null,
    },
  },
  methods: {
    movieLength(timeInMinutes) {
      return toHoursAndMinutes(timeInMinutes);
    },
  },
};
</script>

<style scoped lang="scss">
.movie__wrapper {
  width: 100%;
  padding: 40px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;

  h2 {
    font-family: Roboto;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: $tuna;
    margin: 8px 0px;
    min-height: 84px;
  }

  .image__wrapper {
    width: 100%;
    aspect-ratio: 16/9;

    img {
      max-width: 100%;
      min-width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }

  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;
    line-height: 170%;
    letter-spacing: 0.04em;
    color: $tuna;
    margin-top: 16px;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 450px) {
  .movie__wrapper {
    flex-grow: 1;
  }
}

@media only screen and (max-width: 450px) {
  .movie__wrapper {
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
  }
}
</style>
