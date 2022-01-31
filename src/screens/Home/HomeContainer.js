import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../../store/actions/api/ApiActionCreator';
import { OneCallAPI, CurrWeatherAPI } from '../../Links';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { setData, setDataCurrent } from '../../store/reducers/ApiReducer';

const HomeContainer = ({ route }) => {
  const [currentCity, setCurrentCity] = useState(route.params.selectedCity);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const dataCurrent = useSelector(state => state.data.dataCurrent);
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate('Search');
  };
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    setCurrentCity(route.params.selectedCity);
    setLoading(true);
  }, [route.params.selectedCity]);

  useEffect(() => {
    apiCall(
      OneCallAPI(currentCity.coords.latitude, currentCity.coords.longitude),
    ).then(res => {
      if (res.status === 200) {
        dispatch(setData(res.data));
        apiCall(
          CurrWeatherAPI(
            currentCity.coords.latitude,
            currentCity.coords.longitude,
          ),
        ).then(res => {
          if (res.status === 200) {
            dispatch(setDataCurrent(res.data));
            setLoading(false);
          }
        });
      }
    });
  }, [currentCity]);

  return isLoading ? (
    <Loader />
  ) : (
    <HomeView
      data={data}
      dataCurrent={dataCurrent}
      goToSearch={goToSearch}
      goToProfile={goToProfile}
    />
  );
};

export default HomeContainer;
