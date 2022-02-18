import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMainView } from './MapMainView';

const MapMainContainer = () => {
  const navigation = useNavigation();
  const goToMapMenu = () => {
    navigation.navigate('MapMenu');
  };
  return <MapMainView goToMapMenu={goToMapMenu} />;
};

export default MapMainContainer;
