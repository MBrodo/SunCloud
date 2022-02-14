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
    height: '100%',
    width: '100%',
    backgroundColor: new DynamicValue('rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)'),
  },
  welcomeBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
  },
  welcomeTitle: {
    color: new DynamicValue(
      'rgba(245, 245, 220, 1)',
      'rgba(245, 245, 220, 0.8)',
    ),
    fontSize: 28,
    marginBottom: 30,
  },
  welcomeText: {
    color: new DynamicValue(
      'rgba(245, 245, 220, 1)',
      'rgba(245, 245, 220, 0.8)',
    ),
    fontSize: 17,
  },
  main: {
    alignItems: 'center',
  },
  buttonBlock: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonVk: {
    flexDirection: 'row',
    backgroundColor: new DynamicValue(
      'rgba(25, 118, 210, 0.8)',
      'rgba(25, 118, 210, 0.6)',
    ),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 180,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonGoogle: {
    flexDirection: 'row',
    backgroundColor: 'rgba(245, 245, 220,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 170,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonTextVk: {
    color: 'rgb(245, 245, 220)',
    marginLeft: 10,
    marginRight: 20,
  },
  buttonTextGoogle: {
    color: 'black',
    marginHorizontal: 10,
  },
  animation: {
    height: 350,
    width: 350,
    top: -15,
  },
});
