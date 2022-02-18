import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapPickerView } from './MapPickerView';

const MapPickerContainer = () => {
  const navigation = useNavigation();
  const goToMapMenu = () => {
    navigation.goBack();
  };
  return <MapPickerView goToMapMenu={goToMapMenu} />;
};

export default MapPickerContainer;
