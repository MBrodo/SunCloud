import React from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import { styles } from './style';
import { images } from '../../img';
import LottieView from 'lottie-react-native';

export const Item = ({ fullName }) => (
  <View style={styles.citiesBlock}>
    <Text style={styles.citiesText}>{fullName}</Text>
  </View>
);

export const SearchView = props => {
  const renderItem = ({ item }) => <Item fullName={item.fullName} />;

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={images.defaultSearch}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.searchBar}
          autoFocus={true}
        />
        <FlatList
          data={props.cities}
          renderItem={renderItem}
          style={styles.citiesResult}
          showsVerticalScrollIndicator={false}
        />
        {/* <View style={styles.citiesResult}>
          {props.cities.map((value, key) => {
            return (
              <View style={styles.citiesBlock} key={value.city}>
                <Text style={styles.citiesText}>{value.fullName}</Text>
              </View>
            );
          })}
        </View> */}
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
