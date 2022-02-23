import React from 'react';
import { View, Text, Pressable, Image, Modal } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { styles } from './style';
import { svgs } from '../../../img';
import { getDate } from '../../../utils/HomeFuncts';

export const MapMainView = props => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalImage, setModalImage] = React.useState('');
  const [modalDate, setModalDate] = React.useState('');
  console.log(props.markers);

  const modalCityPicker = () => {
    return (
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {}}>
        <View style={styles.modalBG}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                }}>
                {svgs.close}
              </Pressable>
            </View>
            <Image source={{ uri: modalImage }} style={styles.modalImage} />
            <View style={styles.modalFooter}>
              <Text style={styles.modalText}>{getDate(modalDate)}</Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.wrapper}>
      {modalCityPicker()}
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
              onPress={() => {
                setModalImage(marker.path);
                setModalDate(marker.modificationDate);
                setModalVisible(true);
              }}
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            />
          ))}
        </MapView>
      </View>
      <Pressable style={styles.button} onPress={props.goToMapMenu}>
        <Text style={styles.buttonText}>Add photo</Text>
      </Pressable>
    </View>
  );
};
