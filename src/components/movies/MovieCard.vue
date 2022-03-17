<template>
  <div class="movie__wrapper">
    <h2>{{ movie.title }}</h2>
    <p class="movie__time">{{ toHoursAndMinutes(movie.length) }}</p>
    <!-- <p>{{ length }}</p> -->
    <div class="image__wrapper">
      <img :src="movie.poster_url" />
    </div>
    <p class="movie__genre">{{ movie.genre.name }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      default: null,
    },
  },
  methods: {
    toHoursAndMinutes(timeInMinutes) {
      return `${Math.floor(timeInMinutes / 60)}h ${timeInMinutes % 60} min`;
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

  .movie__time {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $jumbo;
    margin: 15px 0;
  }

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

  .movie__genre {
    display: inline-block;
    background-color: $wisp-pink;
    color: $bittersweet;
    border-radius: 24px;
    padding: 0.5em 0.9em;
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

@include md {
  .movie__wrapper {
    flex-grow: 1;
  }
}

@include sm {
  .movie__wrapper {
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
  }
}
</style>
