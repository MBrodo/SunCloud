import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './style';

export const MapMenuView = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Current position:</Text>
        <Text style={styles.headerText}>Minsk, brovki 11</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsLine}>
            <Pressable style={styles.button} onPress={props.goToMapMenu}>
              <Text style={styles.buttonText}>Choose point</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={props.goToMapMenu}>
              <Text style={styles.buttonText}>Change point</Text>
            </Pressable>
          </View>
          <View style={styles.buttonsLine}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Take photo</Text>
            </Pressable>
            <Pressable style={styles.button}>
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
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
