<template>
  <div>
    <h1>Screenings</h1>
    <h2>{{ selectedDay }}</h2>
    <div>
      <DayTabs @selection="setSelectedDay" />
      <hr />
      <div v-for="movieId in moviesOnTheDay" :key="`movie_${movieId}`">
        <p>
          {{
            $store.getters.movieList.filter((movie) => movie.id == movieId)[0]
              .title
          }}
        </p>
        <p
          v-for="seance in seancesByMovie(movieId)"
          :key="`seance_${seance.id}`"
        >
          {{ seance.datetime.substring(11, 16) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import apiSeancesService from "@/services/api/apiSeancesService";

import DayTabs from "@/components/UI/DaysTabs.vue";

export default {
  name: "ScreeningsPage",
  data() {
    return {
      selectedDay: "",
      seancesList: [],
    };
  },
  computed: {
    todayDaySelection() {
      let date = new Date();
      return date.toISOString().substring(0, 10);
    },

    moviesOnTheDay() {
      return [...new Set(this.seancesOnTheDay.map((seance) => seance.movie))];
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
      const fullList = await apiSeancesService.getSeancesList();
      this.seancesList = fullList.filter(
        (seance) => seance.datetime.substring(0, 10) === this.selectedDay
      );
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
  },
  components: {
    DayTabs,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Eczar";
  font-weight: 600;
  font-size: 80px;
  line-height: 82px;
  letter-spacing: -0.01em;
  color: $tuna;
  margin: 32px 0px;
}
</style>
