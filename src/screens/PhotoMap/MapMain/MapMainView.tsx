import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { styles } from './style';

export const MapMainView = props => {
  console.log(props.markers);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Photo map</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
          region={{
            latitude: props.userCoords.latitude,
            longitude: props.userCoords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {props.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <Callout>
                <View>
                  <Image
                    source={{ uri: marker.path }}
                    style={{ height: 100, width: 100 }}
                  />
                  <Text>{marker.modificationDate}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
      <Pressable style={styles.button} onPress={props.goToMapMenu}>
        <Text style={styles.buttonText}>Add photo</Text>
      </Pressable>
    </View>
  );
};
