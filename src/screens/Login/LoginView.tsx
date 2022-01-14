import React from 'react';
import { Text, ImageBackground, View, Pressable } from 'react-native';
import { styles } from './style';
import { images, svgs } from '../../img';
import LottieView from 'lottie-react-native';

export const LoginView = () => {
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
            <Pressable style={styles.buttonVk}>
              {svgs.vk}
              <Text style={styles.buttonTextVk}>Login with Vk</Text>
            </Pressable>
            <Pressable style={styles.buttonGoogle}>
              {svgs.google}
              <Text style={styles.buttonTextGoogle}>Login with Google</Text>
            </Pressable>
          </View>
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
