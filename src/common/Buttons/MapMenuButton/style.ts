import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  button: {
    width: '40%',
    height: '35%',
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
  active: {
    backgroundColor: new DynamicValue('pink', 'pink'),
  },
  disabled: {
    backgroundColor: 'palevioletred',
  },
});
