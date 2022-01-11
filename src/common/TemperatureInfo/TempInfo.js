import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export const TempInfo = props => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={[styles.commonText, props.style]}>{props.time}</Text>
      {props.icon}
      <Text style={[styles.commonText, props.style]}>{props.temp}°</Text>
    </View>
  );
};
