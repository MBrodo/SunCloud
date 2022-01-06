import { hourOptions } from '../consts/HomeConsts';
import { daysOptions } from '../consts/HomeConsts';
import { svgs } from '../img';

export const svgPicker = e => {
  switch (e) {
    case 'Thunderstorm':
      return svgs.thunder;

    case 'Drizzle':
      return svgs.rainNightEasy;

    case 'Rain':
      return svgs.rainNightHard;

    case 'Snow':
      return svgs.snowyNightMedium;

    case 'Atmosphere':
      return svgs.cloudy;

    case 'Clear':
      return svgs.day;

    case 'Clouds':
      return svgs.cloudy;
  }
};

export const getHours = e => {
  return new Date(e.dt * 1000)
    .toLocaleTimeString('en-EU', hourOptions)
    .toLowerCase();
};

export const getDays = e => {
  return new Date(e.dt * 1000).toLocaleDateString('en-EU', daysOptions);
};
