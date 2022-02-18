import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './style';

export const MapPickerView = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minsk, brovki 12</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>
      <Pressable style={styles.button} onPress={props.goToMapMenu}>
        <Text style={styles.buttonText}>Add photo</Text>
      </Pressable>
    </SafeAreaView>
  );
};
