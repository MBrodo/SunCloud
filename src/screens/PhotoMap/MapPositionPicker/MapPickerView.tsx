import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './style';
import { svgs } from '../../../img';

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
          onRegionChangeComplete={props.setMarkerLocation}
          initialRegion={{
            latitude: props.userCoords.latitude,
            longitude: props.userCoords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <View style={styles.mapPinIcon}>{svgs.mapMarker}</View>
      </View>
      <Pressable style={styles.button} onPress={props.goToMapMenu}>
        <Text style={styles.buttonText}>Add photo</Text>
      </Pressable>
    </SafeAreaView>
  );
};
