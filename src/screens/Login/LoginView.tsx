import React from 'react';
import { Text, ImageBackground, View, Pressable } from 'react-native';
import { stylesDynamic } from './style';
import { images, svgs } from '../../img';
import LottieView from 'lottie-react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { LoginBtn } from '../../common/Buttons/LoginButton/LoginButton';

export const LoginView = props => {
  const styles = useDynamicValue(stylesDynamic);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={images.defaultLogin}>
      <View style={styles.wrapper}>
        <View style={styles.welcomeBlock}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeText}>
            Log in to start using SunCloud app.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.welcomeText}>Available services</Text>
          <View style={styles.buttonBlock}>
            <LoginBtn
              colorBG={styles.buttonVk}
              onPress={props.goToHome}
              disabled={props.isLocationAccessDenied}
              icon={svgs.vk}
              text={'Login with Vk'}
            />
            <LoginBtn
              colorBG={styles.buttonGoogle}
              onPress={props.goToPhotoMap}
              disabled={props.isLocationAccessDenied}
              icon={svgs.google}
              colorText={styles.buttonGoogleText}
              text={'Go to Photo map'}
            />
          </View>
          <LoginBtn
            colorBG={styles.buttonMap}
            onPress={props.goToPhotoMap}
            disabled={props.isLocationAccessDenied}
            icon={svgs.map}
            text={'Go to Photo map'}
          />
          <LottieView
            style={styles.animation}
            source={require('../../img/lottie/weather.json')}
            autoPlay
          />
        </View>
      </View>
    </ImageBackground>
  );
};
