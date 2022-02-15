import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { stylesDynamic } from './style';
import { useDynamicValue } from 'react-native-dynamic';

export const Loader = () => {
  const styles = useDynamicValue(stylesDynamic);
  return (
    <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#BB70FC" />
    </View>
  );
};
