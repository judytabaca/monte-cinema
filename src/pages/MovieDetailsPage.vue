<template>
  <div class="movie-page">
    <div class="movie-page__description">
      <h1>{{ movie[0].title }}</h1>
      <div>
        <span class="movie-page__description__genre">{{
          movie[0].genre.name
        }}</span>
        <span class="movie-page__description__length">{{
          toHoursAndMinutes(movie[0].length)
        }}</span>
      </div>
      <p>{{ movie[0].description }}</p>
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

  &__description {
    width: 50%;

    &__genre {
    }
    &__length {
      margin-left: 15px;
    }
  }

  &__image {
    width: 50%;
  }
}
</style>
