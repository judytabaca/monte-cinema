<template>
  <div class="day">
    <button
      class="day-tabs"
      v-for="day in daysList"
      :key="day.id"
      @click="$emit('selection', day.date)"
    >
      {{ day.name }}
    </button>
    <button class="day-tabs__calendar">
      <img src="@/assets/img/calendaricon.svg" alt="calendar-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: "DayTabs",
  computed: {
    todayDate() {
      return new Date();
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
  },
};
</script>

<style lang="scss" scoped>
.day {
  display: flex;

  &-tabs,
  &-tabs__calendar {
    width: 100px;
    height: 40px;
    background: transparent;
    border: 2px solid $tuna;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.4s, border-color 0.2s;
    margin: 0px 3px;

    &:focus,
    &:active,
    &:hover {
      color: $snow-white;
      background-color: $tuna;
    }
  }
}
</style>
