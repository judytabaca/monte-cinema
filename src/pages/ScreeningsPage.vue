<template>
  <div>
    <h1>Screenings</h1>
    <h2>{{ selectedDay }}</h2>
    <div>
      <button
        class="day-tabs"
        v-for="day in daysList"
        :key="day.id"
        :data-date="day.date.toJSON()"
        @click="setSelectedDay"
      >
        {{ day.id === 1 ? day.name : niceDay(day.name) }}
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
          v-for="seance in seancesList
            .filter(
              (seance) => seance.datetime.substring(0, 10) === selectedDay
            )
            .filter((seance) => seance.movie == movieId)"
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
      daysList: [],
      selectedDay: "",
      seancesList: [],
      seanceOnTheDay: [],
      moviesOnTheDay: [],
    };
  },
  computed: {
    todayDate() {
      return new Date();
    },
    todayDaySelection() {
      let date = new Date();
      return date.toJSON().substring(0, 10);
    },
  },
  methods: {
    niceDay(dayValue) {
      switch (dayValue) {
        case 1:
          return "Mon";
        case 2:
          return "Tue";
        case 3:
          return "Wed";
        case 4:
          return "Thu";
        case 5:
          return "Fri";
        case 6:
          return "Sat";
        case 0:
          return "Sun";
      }
    },
    setSelectedDay(event) {
      this.selectedDay = event.currentTarget
        .getAttribute("data-date")
        .substring(0, 10);
      console.log(this.selectedDay);
      this.setMoviesOnTheDay();
    },
    setMoviesOnTheDay() {
      const seancesOnTheDay = this.seancesList.filter(
        (seance) => seance.datetime.substring(0, 10) === this.selectedDay
      );
      const uniqueMovies = [
        ...new Set(seancesOnTheDay.map((seance) => seance.movie)),
      ];
      this.moviesOnTheDay = uniqueMovies;
    },
    async getSeancesList() {
      this.seancesList = await apiSeancesService.getSeancesList();
      this.setMoviesOnTheDay();
    },
    makeDayList() {
      this.daysList.push({ id: 1, date: new Date(), name: "Today" });
      for (let i = 1; i < 6; i++) {
        const date = new Date(
          this.todayDate.setDate(this.todayDate.getDate() + 1)
        );

        this.daysList.push({
          id: i + 1,
          date: date,
          name: date.getDay(),
        });
      }
    },
  },
  mounted() {
    this.selectedDay = this.todayDaySelection;
    this.makeDayList();
    this.getSeancesList();
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
