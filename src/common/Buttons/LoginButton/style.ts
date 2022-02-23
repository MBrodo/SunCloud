import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  button: {
    flexDirection: 'row',
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
    zIndex: 1,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    color: new DynamicValue('rgb(245, 245, 220)', 'rgb(245, 245, 220)'),
    marginHorizontal: 10,
  },
});
