<template>
  <div>
    <BreadCrumbs backPath="/movies" :secondLevel="movie.title"
      >Movies</BreadCrumbs
    >
    <div class="movie-page">
      <div class="movie-page__description">
        <h1>{{ movie.title }}</h1>
        <div>
          <span class="movie-page__description-genre">{{
            movie.genre.name
          }}</span>
          <span class="movie-page__description-length">{{
            toHoursAndMinutes(movie.length)
          }}</span>
        </div>
        <p class="movie-page__description-text">{{ movie.description }}</p>
      </div>
      <div class="movie-page__image">
        <img :src="movie.poster_url" alt="" />
      </div>
    </div>
    <div>
      <DaysTabs @selection="setSelectedDay" />
      <SeanceCard :movieId="movieId" :seancesByMovie="todayScreenings" />
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
import toHoursAndMinutes from "@/utils/toHoursAndMinutes";
import apiSeancesService from "@/services/api/apiSeancesService";
import DaysTabs from "@/components/UI/DaysTabs.vue";
import SeanceCard from "@/components/seances/SeanceCard.vue";

export default {
  name: "MovieDetailsPage",
  metaInfo() {
    return { title: this.movie?.title };
  },
  data() {
    return {
      movie: this.$store.getters.movieList.find(
        (movie) => movie.id == this.movieId
      ),
      selectedDay: "",
      seancesList: [],
    };
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  components: {
    BreadCrumbs,
    DaysTabs,
    SeanceCard,
  },
  computed: {
    todayDaySelection() {
      let date = new Date();
      return date.toISOString().substring(0, 10);
    },
    todayScreenings() {
      return this.seancesList.filter(
        (seance) => seance.movie === parseInt(this.movieId)
      );
    },
  },
  methods: {
    toHoursAndMinutes(timeInMinutes) {
      return toHoursAndMinutes(timeInMinutes);
    },
    setSelectedDay(date) {
      this.selectedDay = date.toISOString().substring(0, 10);
    },
    async getSeancesList() {
      this.isLoading = true;
      try {
        const fullList = await apiSeancesService.getSeancesList();
        this.seancesList = fullList.filter(
          (seance) => seance.datetime.substring(0, 10) === this.selectedDay
        );
      } catch (err) {
        this.error = err;
      }
      this.isLoading = false;
    },
  },
  watch: {
    selectedDay() {
      this.getSeancesList();
    },
  },
  mounted() {
    this.selectedDay = this.todayDaySelection;
  },
};
</script>

<style lang="scss" scoped>
.movie-page {
  display: flex;
  margin-top: 4.5em;
  width: 100%;
  height: 100%;

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
    width: 50%;
    height: 100%;
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
