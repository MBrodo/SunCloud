import React, { useState, useEffect } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import { LoginView } from './LoginView';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { setUserCoords } from '../../store/reducers/MapReducer';

const LoginContainer = () => {
  const [userLocation, setUserLocation] = useState({});
  const [isLocationAccessDenied, locationAccessDenied] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(response => {
      if (response === true) {
        Geolocation.getCurrentPosition(
          currentPosition => {
            setUserLocation(currentPosition);
            locationAccessDenied(false);
            dispatch(setUserCoords(currentPosition.coords));
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else if (response === false) {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).then(response => {
          if (response === 'never_ask_again' || response === 'denied') {
            return Alert.alert(
              'Error',
              'SunCloud needs access to your location. If you want to continue using our app, let us track your position',
              [{ text: 'OK', onPress: () => console.log('Access denied') }],
            );
          }
        });
      }
    });
  }, []);

  const goToHome = () => {
    navigation.replace('Home', { selectedCity: userLocation });
  };
  const goToPhotoMap = () => {
    navigation.navigate('PhotoMap');
  };

  return (
    <LoginView
      goToHome={goToHome}
      goToPhotoMap={goToPhotoMap}
      isLocationAccessDenied={isLocationAccessDenied}
    />
  );
};

export default LoginContainer;
