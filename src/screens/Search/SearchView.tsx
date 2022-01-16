import React from 'react';
import { View, ImageBackground, TextInput, Text, FlatList } from 'react-native';
import { styles } from './style';
import { images } from '../../img';
import LottieView from 'lottie-react-native';

export const SearchView = props => {
  const renderItem = ({ item }) => (
    <View style={styles.citiesBlock}>
      <Text style={styles.citiesText}>{item.fullName}</Text>
    </View>
  );
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={images.defaultSearch}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.searchBar}
          autoFocus={true}
          onChangeText={searchCity => props.handleFilter(searchCity)}
        />
        {props.filteredCities.length != 0 && (
          <FlatList
            data={props.filteredCities}
            renderItem={renderItem}
            style={styles.citiesResult}
            showsVerticalScrollIndicator={false}
          />
        )}
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
