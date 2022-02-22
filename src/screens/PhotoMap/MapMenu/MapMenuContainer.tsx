import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMenuView } from './MapMenuView';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkerAddress } from '../../../store/reducers/AddressReducer';

const MapMenuContainer = () => {
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const markerCoords = useSelector(state => state.photoMap.markerCoords);
  const markerAddress = useSelector(
    state => state.addressReducer.markerAddress,
  );
  const [coords, setCoords] = useState(userCoords);
  const [isPointPicked, pointPicked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToMapPicker = () => {
    navigation.navigate('MapPicker');
  };
  const markerPosition = () => {
    if (markerAddress.data === undefined) {
      return 'not picked yet';
    } else {
      return markerAddress.data[0].locality + ', ' + markerAddress.data[0].name;
    }
  };

  useEffect(() => {
    if (markerCoords.latitude != undefined) {
      dispatch(getMarkerAddress(markerCoords));
      setCoords(markerCoords);
      pointPicked(true);
    }
  }, [markerCoords]);
  console.log(markerAddress.data);

  return (
    <MapMenuView
      goToMapPicker={goToMapPicker}
      coords={coords}
      isPointPicked={isPointPicked}
      markerPosition={markerPosition}
    />
  );
};

export default MapMenuContainer;
