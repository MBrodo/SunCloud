import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesDynamic } from './style';
import { useDynamicValue } from 'react-native-dynamic';

export const LoginBtn = props => {
  const styles = useDynamicValue(stylesDynamic);
  return (
    <Pressable
      style={[styles.button, props.colorBG]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.icon}
      <Text style={[styles.buttonText, props.colorText]}>{props.text}</Text>
    </Pressable>
  );
};
