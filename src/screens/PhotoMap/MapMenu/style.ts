import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    padding: '2%',
    zIndex: 1,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
  },
  headerText: {
    color: 'gray',
    fontSize: 15,
  },
  main: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    height: '45%',
    width: '100%',
    justifyContent: 'space-around',
  },
  buttonsLine: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: '35%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
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
    fontSize: 14,
  },
  mapContainer: {
    height: '55%',
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
  },
  mapTitle: {
    color: 'black',
    fontSize: 15,
    height: '10%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  footer: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'black',
    height: '60%',
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
  footerButtonText: {
    color: 'black',
    fontSize: 15,
  },
});
