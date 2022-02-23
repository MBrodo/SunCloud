import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapMenuView } from './MapMenuView';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkerAddress } from '../../../store/reducers/AddressReducer';
import ImagePicker from 'react-native-image-crop-picker';
import { setMarkerImage } from '../../../store/reducers/MapReducer';
import { addMarker } from '../../../store/reducers/MapReducer';

const MapMenuContainer = () => {
  const userCoords = useSelector(state => state.photoMap.userCoords);
  const markerCoords = useSelector(state => state.photoMap.markerCoords);
  const markerAddress = useSelector(
    state => state.addressReducer.markerAddress,
  );
  const markerImage = useSelector(state => state.photoMap.markerImage);
  const [coords, setCoords] = useState(userCoords);
  const [isPointPicked, pointPicked] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const marker = {
    ...markerCoords,
    ...markerImage,
  };
  const goToMapPicker = () => {
    navigation.navigate('MapPicker');
  };
  const goToMapMain = () => {
    navigation.navigate('MapMain');
    dispatch(addMarker(marker));
  };
  const markerPosition = () => {
    if (markerAddress.data === undefined) {
      return 'not picked yet';
    } else {
      return markerAddress.data[0].locality + ', ' + markerAddress.data[0].name;
    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      dispatch(setMarkerImage(image));
    });
  };
  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      dispatch(setMarkerImage(image));
    });
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
      goToMapMain={goToMapMain}
      coords={coords}
      isPointPicked={isPointPicked}
      markerPosition={markerPosition}
      takePhotoFromCamera={takePhotoFromCamera}
      takePhotoFromLibrary={takePhotoFromLibrary}
    />
  );
};

export default MapMenuContainer;
