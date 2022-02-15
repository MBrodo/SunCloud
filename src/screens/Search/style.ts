import { Dimensions } from 'react-native';
import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
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
    backgroundColor: new DynamicValue('rgba(0, 0, 0, 0.3)', 'rgba(0,0,0,0.7)'),
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    fontSize: 16,
    backgroundColor: new DynamicValue('white', '#606060'),
    color: new DynamicValue('gray', 'rgb(211,211,211)'),
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
    backgroundColor: new DynamicValue('white', '#606060'),
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
  citiesItem: {
    flexDirection: 'row',
  },
  citiesName: {
    height: 40,
    justifyContent: 'center',
    width: '70%',
  },
  citiesAdd: {
    height: 40,
    justifyContent: 'center',
    width: '30%',
    alignItems: 'flex-end',
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
