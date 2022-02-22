import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapPickerView } from './MapPickerView';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkerCoords } from '../../../store/reducers/MapReducer';

const MapPickerContainer = () => {
  const [markerLocation, setMarkerLocation] = useState({});
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goToMapMenu = () => {
    dispatch(setMarkerCoords(markerLocation));
    navigation.navigate('MapMenu');
  };
  return (
    <MapPickerView
      goToMapMenu={goToMapMenu}
      userCoords={userCoords}
      setMarkerLocation={setMarkerLocation}
    />
  );
};

export default MapPickerContainer;
