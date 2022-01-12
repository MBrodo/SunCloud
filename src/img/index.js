import React from 'react';

import Cloudy from './animated/cloudy.svg';
import Hail from './animated/rainy-7.svg';
import Day from './animated/day.svg';
import Night from './animated/night.svg';
import CloudyDayEasy from './animated/cloudy-day-1.svg';
import CloudyDayMedium from './animated/cloudy-day-2.svg';
import CloudyDayHard from './animated/cloudy-day-3.svg';
import CloudyNightEasy from './animated/cloudy-night-1.svg';
import CloudyNightMedium from './animated/cloudy-night-2.svg';
import CloudyNightHard from './animated/cloudy-night-3.svg';
import RainDayEasy from './animated/rainy-1.svg';
import RainDayMedium from './animated/rainy-2.svg';
import RainDayHard from './animated/rainy-3.svg';
import RainNightEasy from './animated/rainy-4.svg';
import RainNightMedium from './animated/rainy-5.svg';
import RainNightHard from './animated/rainy-6.svg';
import SnowyDayEasy from './animated/snowy-1.svg';
import SnowyDayMedium from './animated/snowy-2.svg';
import SnowyDayHard from './animated/snowy-3.svg';
import SnowyNightEasy from './animated/snowy-4.svg';
import SnowyNightMedium from './animated/snowy-5.svg';
import SnowyNightHard from './animated/snowy-6.svg';
import Thunder from './animated/thunder.svg';
import Search from './search.svg';

export const images = {
  defaultBackground: require('./sky.jpg'),
  nightBackground: require('./night.jpg'),
  defaultProfile: require('./defaultProfilePic.png'),
  defaultSearch: require('./location.jpg'),
};

export const svgs = {
  cloudy: <Cloudy height={40} width={40} />,
  hail: <Hail height={40} width={40} />,
  day: <Day height={40} width={40} />,
  night: <Night height={40} width={40} />,
  thunder: <Thunder height={40} width={40} />,
  cloudyDayEasy: <CloudyDayEasy height={40} width={40} />,
  cloudyDayMedium: <CloudyDayMedium height={40} width={40} />,
  cloudyDayHard: <CloudyDayHard height={40} width={40} />,
  cloudyNightEasy: <CloudyNightEasy height={40} width={40} />,
  cloudyNightMedium: <CloudyNightMedium height={40} width={40} />,
  cloudyNightHard: <CloudyNightHard height={40} width={40} />,
  rainDayEasy: <RainDayEasy height={40} width={40} />,
  rainDayMedium: <RainDayMedium height={40} width={40} />,
  rainDayHard: <RainDayHard height={40} width={40} />,
  rainNightEasy: <RainNightEasy height={40} width={40} />,
  rainNightMedium: <RainNightMedium height={40} width={40} />,
  rainNightHard: <RainNightHard height={40} width={40} />,
  snowyDayEasy: <SnowyDayEasy height={40} width={40} />,
  snowyDayMedium: <SnowyDayMedium height={40} width={40} />,
  snowyDayHard: <SnowyDayHard height={40} width={40} />,
  snowyNightEasy: <SnowyNightEasy height={40} width={40} />,
  snowyNightMedium: <SnowyNightMedium height={40} width={40} />,
  snowyNightHard: <SnowyNightHard height={40} width={40} />,
  search: <Search height={30} width={30} />,
};
