import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMainView } from './MapMainView';
import { useSelector } from 'react-redux';

const MapMainContainer = () => {
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const navigation = useNavigation();
  const goToMapMenu = () => {
    navigation.navigate('MapMenu');
  };

  return <MapMainView goToMapMenu={goToMapMenu} userCoords={userCoords} />;
};

export default MapMainContainer;
