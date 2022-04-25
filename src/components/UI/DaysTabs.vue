<template>
  <div>
    <label class="day__label">DAY</label>
    <div class="day">
      <button
        class="day-tabs"
        v-for="day in daysList"
        :key="day.id"
        @click="$emit('selection', day.date)"
      >
        {{ day.name }}
      </button>
      <button class="day-tabs day-tabs--calendar">
        <img src="@/assets/img/calendaricon.svg" alt="calendar-icon" />
      </button>
    </div>
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

  button:first-of-type {
    margin-left: 0px;
  }

  &__label {
    font-family: "Roboto Mono";
    color: $bittersweet;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin: 16px 0;
  }

  &-tabs {
    width: 136px;
    height: 56px;
    background: transparent;
    border: 2px solid $tuna;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    border-radius: 64px;
    transition: background-color 0.4s, border-color 0.2s;
    margin: 12px 10px;
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;

    &--calendar {
      width: 50px;
    }

    &:focus,
    &:active,
    &:hover {
      color: $snow-white;
      background-color: $tuna;
    }
  }
}
</style>
