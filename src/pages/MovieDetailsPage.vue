<template>
  <div class="movie-page">
    <div class="movie-page__description">
      <h1>{{ movie[0].title }}</h1>
      <div>
        <span class="movie-page__description-genre">{{
          movie[0].genre.name
        }}</span>
        <span class="movie-page__description-length">{{
          toHoursAndMinutes(movie[0].length)
        }}</span>
      </div>
      <p class="movie-page__description-text">{{ movie[0].description }}</p>
    </div>
    <div class="movie-page__image">
      <img :src="movie[0].poster_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetailsPage",
  data() {
    return {
      movie: this.$store.getters.movieList.filter(
        (movie) => movie.id == this.movieId
      ),
    };
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  methods: {
    toHoursAndMinutes(timeInMinutes) {
      return `${Math.floor(timeInMinutes / 60)}h ${timeInMinutes % 60} min`;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-page {
  display: flex;
  margin-top: 4.5em;

  &__description {
    width: 50%;

    &-genre {
      @include genre-button;
    }
    &-length {
      @include time-info;
      margin-left: 15px;
    }
    &-text {
      font-family: "Roboto Mono";
      font-weight: 400;
      font-size: 22px;
      line-height: 37px;
      letter-spacing: 0.015em;
      color: $tuna;
      margin: 32px 0px;
    }
  }
  &__image {
    width: 621px;
    height: 289px;
    aspect-ratio: 16/9;

    img {
      max-width: 100%;
      min-width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  h1 {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 80px;
    line-height: 82px;
    letter-spacing: -0.01em;
    color: $tuna;
    margin: 32px 0px;
  }
}
</style>
