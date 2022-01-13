export const data = {
  timezone: 'Rotterdam, NL',
  current: {
    feels_like: 17,
    temp: 18,
  },
  hourly: [
    {
      dt: 1640667600,
      temp: 12,
      weather: [{ description: 'light snow', main: 'Snow' }],
    },
    {
      dt: 1640671200,
      temp: 13,
      weather: [
        { description: 'thunderstorm with light rain', main: 'Drizzle' },
      ],
    },
    {
      dt: 1640674800,
      temp: 13,
      weather: [{ description: 'light snow', main: 'Rain' }],
    },
    {
      dt: 1640678400,
      temp: 14,
      weather: [{ description: 'light snow', main: 'Thunderstorm' }],
    },
    {
      dt: 1640682000,
      temp: 14,
      weather: [{ description: 'light snow', main: 'Clouds' }],
    },
    {
      dt: 1640685600,
      temp: 14,
      weather: [{ description: 'light snow', main: 'Atmosphere' }],
    },
    {
      dt: 1640689200,
      temp: 15,
      weather: [{ description: 'light snow', main: 'Clouds' }],
    },
    {
      dt: 1640692800,
      temp: 15,
      weather: [{ description: 'light snow', main: 'Clear' }],
    },
    {
      dt: 1640696400,
      temp: 16,
      weather: [{ description: 'light snow', main: 'Clear' }],
    },
  ],
  daily: [
    {
      dt: 1665576000,
      temp: { day: 13, night: 8 },
      weather: [{ description: 'light snow', main: 'Clear' }],
    },
    {
      dt: 1665662400,
      temp: { day: 11, night: 6 },
      weather: [{ description: 'light snow', main: 'Drizzle' }],
    },
    {
      dt: 1665748800,
      temp: { day: 16, night: 9 },
      weather: [{ description: 'light snow', main: 'Thunderstorm' }],
    },
    {
      dt: 1665835200,
      temp: { day: 14, night: 8 },
      weather: [{ description: 'light snow', main: 'Rain' }],
    },
    {
      dt: 1665921600,
      temp: { day: 13, night: 6 },
      weather: [{ description: 'light snow', main: 'Clouds' }],
    },
  ],
};
export const daysOptions = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
};
export const hourOptions = {
  hour: 'numeric',
};
