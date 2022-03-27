<template>
  <div>
    <BreadCrumbs>Screenings</BreadCrumbs>
    <div class="screening-page">
      <h1 class="screening-page__title">Screenings</h1>
      <h2 class="screening-page__date">{{ headerDate }}</h2>
      <div>
        <div class="screening-page__controls">
          <DayTabs @selection="setSelectedDay" />
        </div>

        <div class="seances-list">
          <SeanceCard
            v-for="movieId in moviesOnTheDay"
            :key="`movie_${movieId}`"
            :movieId="movieId"
            :seancesByMovie="seancesByMovie(movieId)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiSeancesService from "@/services/api/apiSeancesService";
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
import SeanceCard from "@/components/seances/SeanceCard.vue";
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
  metaInfo: {
    title: "Screenings",
  },
  components: {
    DayTabs,
    SeanceCard,
    BreadCrumbs,
  },
};
</script>

<style lang="scss" scoped>
.screening-page {
  &__controls {
    margin-bottom: 50px;
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
