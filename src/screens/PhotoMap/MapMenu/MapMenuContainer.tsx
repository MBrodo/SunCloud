import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMenuView } from './MapMenuView';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkerAddress } from '../../../store/reducers/AddressReducer';

const MapMenuContainer = () => {
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const markerCoords = useSelector(state => state.photoMap.markerCoords);
  const [coords, setCoords] = useState(userCoords);
  const [isPointPicked, pointPicked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToMapPicker = () => {
    navigation.navigate('MapPicker');
  };

  useEffect(() => {
    if (markerCoords.latitude != undefined) {
      dispatch(getMarkerAddress(markerCoords));
      setCoords(markerCoords);
      pointPicked(true);
    }
  }, [markerCoords]);

  return (
    <MapMenuView
      goToMapPicker={goToMapPicker}
      coords={coords}
      isPointPicked={isPointPicked}
    />
  );
};

export default MapMenuContainer;
