const toHoursAndMinutes = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  if (minutes < 10) {
    return `${hours}h 0${minutes}min`;
  } else {
    return `${hours}h ${minutes}min`;
  }
};

export default toHoursAndMinutes;
