import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: '5%',
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
  },
  mapContainer: {
    height: '95%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapPinIcon: {
    position: 'absolute',
    top: '39%',
  },
  footer: {
    position: 'absolute',
    bottom: '3%',
  },
});
