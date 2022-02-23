import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { styles } from './style';
import { MapNavigationBtn } from '../../../common/Buttons/MapNavButton/PhMapNavButton';
import { MapMenuBtn } from '../../../common/Buttons/MapMenuButton/PhMapMenuButton';

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
            <MapMenuBtn
              styleFunc={props.isChooseBtnActive()}
              onPress={props.goToMapPicker}
              disabled={props.isPointPicked}
              text={'Choose point'}
            />
            <MapMenuBtn
              styleFunc={styles.active}
              onPress={props.goToMapPicker}
              disabled={false}
              text={'Change point'}
            />
          </View>
          <View style={styles.buttonsLine}>
            <MapMenuBtn
              styleFunc={props.isButtonDisabled()}
              onPress={props.takePhotoFromCamera}
              disabled={!props.isPointPicked}
              text={'Take photo'}
            />
            <MapMenuBtn
              styleFunc={props.isButtonDisabled()}
              onPress={props.takePhotoFromLibrary}
              disabled={!props.isPointPicked}
              text={'Add from lib'}
            />
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
        <MapNavigationBtn
          func={props.goToMapMain}
          disabled={props.isPhotoPicked()}
          text={'Submit'}
        />
      </View>
    </View>
  );
};
