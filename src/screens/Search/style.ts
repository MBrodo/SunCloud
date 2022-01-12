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
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  animation: {
    height: 300,
    width: 300,
  },
});
