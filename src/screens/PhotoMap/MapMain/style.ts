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
  button: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'black',
    height: '5%',
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    zIndex: 1,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  modalBG: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '60%',
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  modalImage: {
    height: '85%',
    width: '100%',
  },
  modalFooter: {
    alignItems: 'center',
    marginTop: 5,
  },
  modalText: {
    color: 'black',
    fontSize: 18,
  },
});
