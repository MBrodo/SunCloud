import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  button: {
    backgroundColor: new DynamicValue('pink', 'pink'),
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 300,
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
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
});
