import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './style';
import { svgs } from '../../../img';
import { MapNavigationBtn } from '../../../common/Buttons/MapNavButton/PhMapNavButton';

export const MapPickerView = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select marker position</Text>
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
      <View style={styles.footer}>
        <MapNavigationBtn
          func={props.goToMapMenu}
          disabled={false}
          text={'Add photo'}
        />
      </View>
    </SafeAreaView>
  );
};
