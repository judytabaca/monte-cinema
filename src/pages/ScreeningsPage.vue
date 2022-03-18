<template>
  <div>
    <h1>Screenings</h1>
    <h2>{{ selectedDay }}</h2>
    <div>
      <button
        class="day-tabs"
        v-for="day in daysList"
        :key="day.id"
        @click="setSelectedDay(day.date)"
      >
        {{ day.name }}
      </button>
      <button class="day-tabs__calendar">
        <img src="@/assets/img/calendaricon.svg" alt="calendar-icon" />
      </button>
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

export default {
  name: "ScreeningsPage",
  data() {
    return {
      selectedDay: "",
      seancesList: [],
    };
  },
  computed: {
    todayDate() {
      return new Date();
    },
    todayDaySelection() {
      let date = new Date();
      return date.toISOString().substring(0, 10);
    },
    daysList() {
      let daysList = [];
      daysList.push({ id: 1, date: new Date(), name: "Today" });
      for (let i = 1; i < 6; i++) {
        const date = new Date(
          this.todayDate.setDate(this.todayDate.getDate() + 1)
        );

        daysList.push({
          id: i + 1,
          date: date,
          name: date.toLocaleDateString("en-US", { weekday: "short" }),
        });
      }
      return daysList;
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

.day-tabs,
.day-tabs__calendar {
  width: 136px;
  height: 56px;
  background: transparent;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border-radius: 64px;
  transition: background-color 0.4s, border-color 0.2s;
  margin: 0px 3px;

  &:focus,
  &:active,
  &:hover {
    color: $snow-white;
    background-color: $tuna;
  }
}
</style>
