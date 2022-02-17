import React, { useState, useEffect } from 'react';
import { LoginView } from './LoginView';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const LoginContainer = () => {
  const [userLocation, setUserLocation] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(currentPosition =>
      setUserLocation(currentPosition),
    );
  }, []);

  const goToHome = () => {
    navigation.replace('Home', { selectedCity: userLocation });
  };
  const goToPhotoMap = () => {
    navigation.navigate('PhotoMap');
  };

  return <LoginView goToHome={goToHome} goToPhotoMap={goToPhotoMap} />;
};

export default LoginContainer;
