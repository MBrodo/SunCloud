import { hourOptions, daysOptions } from '../consts/HomeConsts';
import { svgs } from '../img';
import moment from 'moment';

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

export const getDate = e => {
  return moment.unix(e / 1000).format('MMMM Do YYYY, h:mm:ss a');
};
