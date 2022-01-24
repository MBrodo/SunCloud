import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../store/actions/api/ApiActionCreator';
import { IP } from '../../Links';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';
import { data } from '../../consts/HomeConsts';
import { useNavigation } from '@react-navigation/native';

const HomeContainer = ({ route }) => {
  const [currentCity, setCurrentCity] = useState(route.params.selectedCity);
  const dispatch = useDispatch();
  const dataIP = useSelector(state => state.apiReducer.data);
  const isLoading = useSelector(state => state.apiReducer.loading);
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('Search');
  };
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    setCurrentCity(route.params.selectedCity);
  }, [route.params.selectedCity]);

  useEffect(() => {
    dispatch(
      apiCall(IP(currentCity.coords.latitude, currentCity.coords.longitude)),
    );
  }, [currentCity]);
  return isLoading ? (
    <Loader />
  ) : (
    <HomeView data={data} goToSearch={goToSearch} goToProfile={goToProfile} />
  );
};

export default HomeContainer;
