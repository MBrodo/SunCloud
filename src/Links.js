export const IP = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=017ad6c36fdb4218cd9683095e911819`;
};
