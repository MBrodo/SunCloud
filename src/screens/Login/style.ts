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
    height: '35%',
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
    backgroundColor: new DynamicValue(
      'rgba(25, 118, 210, 0.8)',
      'rgba(25, 118, 210, 0.6)',
    ),
  },
  buttonGoogle: {
    backgroundColor: 'rgba(245, 245, 220,0.8)',
  },
  buttonGoogleText: {
    color: 'black',
  },
  buttonMap: {
    backgroundColor: 'rgba(95, 145, 100,0.8)',
  },
  animation: {
    height: 350,
    width: 350,
    top: -30,
    zIndex: 0,
  },
});
