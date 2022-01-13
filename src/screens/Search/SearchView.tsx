import React from 'react';
import { View, ImageBackground, TextInput } from 'react-native';
import { styles } from './style';
import { images } from '../../img';
import LottieView from 'lottie-react-native';

export const SearchView = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={images.defaultSearch}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          autoFocus={true}
        />
        <View style={styles.animationContainer}>
          <LottieView
            style={styles.animation}
            source={require('../../img/lottie/map.json')}
            autoPlay
          />
        </View>
      </View>
    </ImageBackground>
  );
};
