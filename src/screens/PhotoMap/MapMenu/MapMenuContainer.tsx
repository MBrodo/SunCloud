import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMenuView } from './MapMenuView';

const MapMenuContainer = () => {
  const navigation = useNavigation();
  const goToMapMenu = () => {
    navigation.navigate('MapPicker');
  };
  return <MapMenuView goToMapMenu={goToMapMenu} />;
};

export default MapMenuContainer;
