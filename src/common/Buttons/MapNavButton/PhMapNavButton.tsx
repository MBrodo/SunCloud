import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesDynamic } from './style';
import { useDynamicValue } from 'react-native-dynamic';

export const MapNavigationBtn = props => {
  const styles = useDynamicValue(stylesDynamic);
  return (
    <Pressable
      style={styles.button}
      onPress={props.func}
      disabled={props.disabled}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
};
