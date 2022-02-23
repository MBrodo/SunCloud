import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMainView } from './MapMainView';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMarkerCoords,
  setMarkerImage,
} from '../../../store/reducers/MapReducer';

const MapMainContainer = () => {
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const markers = useSelector(state => state.photoMap.markersAll);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goToMapMenu = () => {
    navigation.navigate('MapMenu');
    dispatch(setMarkerCoords({}));
    dispatch(setMarkerImage({}));
  };
  return (
    <MapMainView
      goToMapMenu={goToMapMenu}
      userCoords={userCoords}
      markers={markers}
    />
  );
};

export default MapMainContainer;
