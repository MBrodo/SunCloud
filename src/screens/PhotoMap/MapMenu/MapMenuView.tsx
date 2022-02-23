import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { styles } from './style';

export const MapMenuView = props => {
  const newPoint = () => {
    if (props.isPointPicked === true) {
      return (
        <Marker
          coordinate={{
            latitude: props.coords.latitude,
            longitude: props.coords.longitude,
          }}
        />
      );
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Current position:</Text>
        <Text style={styles.headerText}>{props.markerPosition()}</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsLine}>
            <Pressable
              style={styles.button}
              onPress={props.goToMapPicker}
              disabled={props.isPointPicked}>
              <Text style={styles.buttonText}>Choose point</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={props.goToMapPicker}>
              <Text style={styles.buttonText}>Change point</Text>
            </Pressable>
          </View>
          <View style={styles.buttonsLine}>
            <Pressable
              style={styles.button}
              disabled={!props.isPointPicked}
              onPress={props.takePhotoFromCamera}>
              <Text style={styles.buttonText}>Take photo</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              disabled={!props.isPointPicked}
              onPress={props.takePhotoFromLibrary}>
              <Text style={styles.buttonText}>Add from lib</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <Text style={styles.mapTitle}>Preview:</Text>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: props.coords.latitude,
              longitude: props.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {newPoint()}
          </MapView>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText} onPress={props.goToMapMain}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
