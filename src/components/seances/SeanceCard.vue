<template>
  <div class="seance-card">
    <div class="seance-card__poster">
      <img :src="matchedMovie(movieId).poster_url" alt="poster" />
    </div>
    <div class="seance-card__details">
      <h3>
        {{ matchedMovie(movieId).title }}
      </h3>
      <div class="seance-card__details__info">
        <span class="seance-card__details__info__genre">
          {{ matchedMovie(movieId).genre.name }}
        </span>
        <span class="seance-card__details__info__time">
          {{ movieLength(matchedMovie(movieId).length) }}
          min
        </span>
      </div>
      <ul class="seance-card__details__list">
        <li
          v-for="seance in seancesByMovie"
          :key="`seance_${seance.id}`"
          class="seance-card__details__list__item"
        >
          {{ seanceTime(seance) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import toHoursAndMinutes from "@/utils/toHoursAndMinutes";

export default {
  name: "SeanceCard",
  props: {
    movieId: {
      type: Number,
      default: null,
    },
    seancesByMovie: {
      type: Array,
      default: null,
    },
  },
  methods: {
    movieLength(time) {
      return toHoursAndMinutes(time);
    },
    matchedMovie(movieId) {
      return this.$store.getters.movieList.find((movie) => movie.id == movieId);
    },
    seanceTime(seance) {
      return seance.datetime.substring(11, 16);
    },
  },
};
</script>

<style lang="scss" scoped>
.seance-card {
  min-width: 90%;
  display: flex;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  margin-bottom: 40px;

  &__poster {
    max-width: 98px;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__details {
    margin-left: 40px;
    h3 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 20px;
    }
    &__info__genre {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: $bittersweet;
      background-color: $wisp-pink;
      padding: 10px 16px;
      border-radius: 24px;
      margin: 10px 35px 0 0;
    }

    &__info__time {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: $jumbo;
    }

    &__list {
      display: flex;
      margin-top: 40px;

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 114px;
        height: 40px;
        border-radius: 64px;
        padding: 10px 16px;
        border: 2px solid $cherry-red;
        color: $cherry-red;
        font-family: "Roboto Mono";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        margin-right: 10px;
      }
    }
  }
}
</style>
