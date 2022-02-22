export const OneCallAPI = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=3f9feb1f63569abb44257f657efb4fbc`;
};

export const CurrWeatherAPI = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3f9feb1f63569abb44257f657efb4fbc`;
};

export const UnsplashAPI = city => {
  return `https://api.unsplash.com/search/photos?page1&query=${city}&client_id=1bwEGsKSyxbajBgshXCWDzIOOoDN_H533vNWQYrPk4c`;
};

export const GeocodingAPI = (lat, lon) => {
  return `http://api.positionstack.com/v1/reverse
  ? access_key=9439105d585aac25c15cdd636b762c96
  & query = ${lat},${lon}`;
};
