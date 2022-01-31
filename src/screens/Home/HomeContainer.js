import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeView } from './HomeView';
import { Loader } from '../../common/Loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { getData, getDataCurrent } from '../../store/reducers/ApiReducer';
import { getUnsplashImg } from '../../store/reducers/UnsplashReducer';

const HomeContainer = ({ route }) => {
  const [currentCity, setCurrentCity] = useState(route.params.selectedCity);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const dataCurrent = useSelector(state => state.data.dataCurrent);
  const cityImage = useSelector(state => state.imagesBG.unsplashImg);
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
    dispatch(getData(currentCity.coords));
    dispatch(getDataCurrent(currentCity.coords));
  }, [currentCity]);

  useEffect(() => {
    if (dataCurrent != []) {
      dispatch(getUnsplashImg(dataCurrent.name));
      setLoading(false);
    }
  }, [dataCurrent]);

  return isLoading ? (
    <Loader />
  ) : (
    <HomeView
      data={data}
      dataCurrent={dataCurrent}
      cityImage={cityImage}
      goToSearch={goToSearch}
      goToProfile={goToProfile}
    />
  );
};

export default HomeContainer;
