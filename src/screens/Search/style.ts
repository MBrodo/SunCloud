import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  wrapper: {
    padding: 10,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    fontSize: 16,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  citiesResult: {
    flexGrow: 0,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    marginTop: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    maxHeight: '38%',
  },
  citiesBlock: {
    height: 40,
    justifyContent: 'center',
  },
  citiesText: {
    fontSize: 16,
  },
  animationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 300,
    width: 300,
  },
});
