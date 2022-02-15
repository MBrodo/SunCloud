import React from 'react';
import { View, Text } from 'react-native';
import { stylesDynamic } from './style';
import { useDynamicValue } from 'react-native-dynamic';

export const ProfileInfo = props => {
  const styles = useDynamicValue(stylesDynamic);
  return (
    <View style={styles.wrapper}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.value}</Text>
      </View>
      <Text style={styles.additionalText}>{props.additionalText}</Text>
      <View style={styles.line} />
    </View>
  );
};
