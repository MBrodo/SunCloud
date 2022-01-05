import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../store/actions/api/ApiActionCreator';
import { IP } from '../../Links';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const dataIP = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);
  const data = {
    timezone: 'Rotterdam, NL',
    current: {
      feels_like: 17,
      temp: 18,
    },
    hourly: [
      { dt: 1640667600, temp: 12 },
      { dt: 1640671200, temp: 13 },
      { dt: 1640674800, temp: 13 },
      { dt: 1640678400, temp: 14 },
      { dt: 1640682000, temp: 14 },
      { dt: 1640685600, temp: 14 },
    ],
    daily: [
      { dt: 1641331214, temp: { day: 13, night: 8 } },
      { dt: 1641331214, temp: { day: 11, night: 6 } },
      { dt: 1640667600, temp: { day: 16, night: 9 } },
      { dt: 1641752087, temp: { day: 14, night: 8 } },
      { dt: 1640667600, temp: { day: 13, night: 6 } },
    ],
  };

  const daysOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };
  const hourOptions = {
    hour: 'numeric',
  };
  const getDays = data.daily;
  const days = getDays.map(getDays =>
    new Date(getDays.dt * 1000).toLocaleDateString('en-EU', daysOptions),
  );
  const getHours = data.hourly;
  const hours = getHours.map(getHours =>
    new Date(getHours.dt * 1000)
      .toLocaleTimeString('en-EU', hourOptions)
      .toLowerCase(),
  );

  useEffect(() => {
    dispatch(apiCall(IP.WeatherApi));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <HomeView data={data} days={days} hours={hours} />
  );
};

export default HomeContainer;
