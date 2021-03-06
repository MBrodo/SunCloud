import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { getWeatherForecast } from '../../store/reducers/ApiReducer';
import { getUnsplashImg } from '../../store/reducers/UnsplashReducer';

const HomeContainer = ({ route }) => {
  const [currentCity, setCurrentCity] = useState(route.params.selectedCity);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const cityImage = useSelector(state => state.imagesBG);
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
    dispatch(getWeatherForecast(currentCity.coords));
  }, [currentCity]);

  useEffect(() => {
    if (data.requestStatus === 'finished') {
      dispatch(getUnsplashImg(data.cityName.name));
    }
  }, [data]);

  useEffect(() => {
    if (cityImage.requestStatus === 'finished') {
      setLoading(false);
    }
  }, [cityImage]);

  return isLoading ? (
    <Loader />
  ) : (
    <HomeView
      data={data}
      cityImage={cityImage.unsplashImg}
      goToSearch={goToSearch}
      goToProfile={goToProfile}
      setCurrentCity={setCurrentCity}
      setLoading={setLoading}
    />
  );
};

export default HomeContainer;
