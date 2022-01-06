import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../store/actions/api/ApiActionCreator';
import { IP } from '../../Links';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';
import { data } from '../../consts/HomeConsts';
import { svgs } from '../../img';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const dataIP = useSelector(state => state.apiReducer.data);
  const isLoading = useSelector(state => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiCall(IP.WeatherApi));
  }, []);
  return isLoading ? <Loader /> : <HomeView data={data} />;
};

export default HomeContainer;
