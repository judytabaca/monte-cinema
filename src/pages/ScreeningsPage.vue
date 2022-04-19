<template>
  <div class="screening-page">
    <template v-if="isLoading">
      <LoadingSpinner />
    </template>
    <template v-else-if="error">
      <ErrorMessage />
    </template>
    <template v-else>
      <BreadCrumbs>Screenings</BreadCrumbs>
      <div>
        <h1 class="screening-page__title">Screenings</h1>
        <h2 class="screening-page__date">{{ headerDate }}</h2>
        <div class="screening-page__controls">
          <DayTabs @selection="setSelectedDay" />
          <MovieCategoryDropdown />
        </div>
        <div class="seances-list">
          <SeanceCard
            v-for="movie in moviesByCategory"
            :key="`movie_${movie.id}`"
            :movieId="movie.id"
            :seancesByMovie="seancesByMovie(movie.id)"
          />
      </div>
    </template>
  </div>
</template>

<script>
import apiSeancesService from "@/services/api/apiSeancesService";
import LoadingSpinner from "@/components/UI/LoadingSpinner.vue";
import ErrorMessage from "@/components/UI/ErrorMessage.vue";
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
import SeanceCard from "@/components/seances/SeanceCard.vue";
import DayTabs from "@/components/UI/DaysTabs.vue";
import MovieCategoryDropdown from "@/components/UI/MovieCategoryDropdown.vue";
import { mapGetters } from "vuex";

export default {
  name: "ScreeningsPage",
  data() {
    return {
      isLoading: false,
      error: null,
      selectedDay: "",
      seancesList: [],
    };
  },
  computed: {
    ...mapGetters(["movieList", "selectedGenre"]),
    todayDaySelection() {
      let date = new Date();
      return date.toISOString().substring(0, 10);
    },
    headerDate() {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = new Date(this.selectedDay);
      const dayName = days[day.getDay()];
      const date = new Date(this.selectedDay).toLocaleDateString();
      return `${dayName}, ${date}`;
    },
    moviesOnTheDay() {
      const moviesShown = [
        ...new Set(this.seancesOnTheDay.map((seance) => seance.movie)),
      ];
      const moviesWithGenre = moviesShown.map((movie) => {
        return {
          id: movie,
          genre: this.movieList.find((film) => film.id === movie).genre.name,
        };
      });
      return moviesWithGenre;
    },
    moviesByCategory() {
      if (this.selectedGenre === "") {
        return this.moviesOnTheDay;
      } else {
        return this.moviesOnTheDay.filter(
          (movie) => movie.genre === this.selectedGenre
        );
      }
    },
    seancesOnTheDay() {
      return this.seancesList.filter(
        (seance) => seance.datetime.substring(0, 10) === this.selectedDay
      );
    },
  },
  methods: {
    setSelectedDay(date) {
      console.log(date);
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
    seancesByMovie(movieId) {
      return this.seancesOnTheDay.filter((seance) => seance.movie == movieId);
    },
  },
  watch: {
    selectedDay() {
      this.getSeancesList();
    },
  },
  mounted() {
    this.selectedDay = this.todayDaySelection;
    this.$store.commit("setSelectedGenre", "");
  },
  metaInfo: {
    title: "Screenings",
  },
  components: {
    DayTabs,
    SeanceCard,
    BreadCrumbs,
    MovieCategoryDropdown,
    LoadingSpinner,
    ErrorMessage,
  },
  errorCaptured(error) {
    this.error = error || true;
  },
};
</script>

<style lang="scss" scoped>
.screening-page {
  &__controls {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }

  &__title,
  &__date {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 80px;
    line-height: 82px;
    letter-spacing: -0.01em;
    color: $tuna;
    margin: 32px 0px;
  }

  &__date {
    color: $jumbo;
    line-height: 20px;
    margin-bottom: 50px;
  }

  .seances-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
