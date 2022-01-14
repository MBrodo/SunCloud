import React from 'react';
import { LoginView } from './LoginView';
import { useNavigation } from '@react-navigation/native';

const LoginContainer = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.replace('Home');
  };
  return <LoginView goToHome={goToHome} />;
};

export default LoginContainer;
