import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export const ProfileInfo = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.value}</Text>
      </View>
      <Text>{props.additionalText}</Text>
      <View style={styles.line} />
    </View>
  );
};
