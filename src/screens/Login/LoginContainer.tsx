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
  return <LoginView goToHome={goToHome} />;
};

export default LoginContainer;
