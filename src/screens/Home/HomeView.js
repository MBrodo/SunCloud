import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../store/actions/api/ApiActionCreator';
import { Loader } from '../../common/Loader/Loader';
import { styles } from './style';
import { IP } from '../../Links';

const HomeView = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiCall(IP.WeatherApi));
  }, []);
  return <View>{loading ? <Loader /> : <Text>I love iTechArt!</Text>}</View>;
};

export default HomeView;
