const toHoursAndMinutes = (timeInMinutes: number): string => {
  return `${Math.floor(timeInMinutes / 60)}h ${timeInMinutes % 60} min`;
};

export default toHoursAndMinutes;
