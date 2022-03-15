<template>
  <div>
    <h1>Screenings</h1>
    <div>
      <p
        v-for="day in daysList"
        :key="day.id"
        :data-date="day.date.toJSON()"
        @click="setSelectedDay"
      >
        {{ day.id === 1 ? day.name : niceDay(day.name) }}
      </p>
      <hr />
      <div
        v-for="movie in this.$store.getters.movieList"
        :key="`movie_${movie.id}`"
      >
        <div>
          {{ movie.title }}
          <p
            v-for="seance in seancesList
              .filter(
                (seance) => seance.datetime.substring(0, 10) === selectedDay
              )
              .filter((seance) => seance.movie == movie.id)"
            :key="`seance_${seance.id}`"
          >
            {{ seance.datetime.substring(11, 16) }}
          </p>
        </div>
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
      selectedDay: "2022-03-14",
      seancesList: [],
      seanceOnTheDay: [],
    };
  },
  computed: {
    todayDate() {
      return new Date();
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
    },
    async getSeancesList() {
      this.seancesList = await apiSeancesService.getSeancesList();
    },
  },
  mounted() {
    this.daysList.push({ id: 1, date: new Date(), name: "Today" });
    for (let i = 1; i < 5; i++) {
      const date = new Date(
        this.todayDate.setDate(this.todayDate.getDate() + 1)
      );

      this.daysList.push({
        id: i + 1,
        date: date,
        name: date.getDay(),
      });
    }

    this.getSeancesList();
  },
};
</script>

<style lang="scss" scoped></style>
