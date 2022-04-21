const toHoursAndMinutes = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  if (timeInMinutes <= 0) {
    return "Unknown";
  } else if (timeInMinutes === 60) {
    return "60min";
  } else if (timeInMinutes < 61) {
    return `${minutes}min`;
  } else {
    return `${hours}h ${minutes}min`;
  }
};

export default toHoursAndMinutes;
