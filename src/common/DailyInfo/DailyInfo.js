import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import MainIcon from '../../img/MainIcon.svg';

export const DailyInfo = props => {
  return (
    <View>
      <View style={styles.dailyInfo}>
        <View style={styles.date}>
          {props.icon}
          <Text style={styles.dateText}>{props.day}</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.dateText}>{props.tempDay}°</Text>
          <Text>{props.tempNight}°</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};
