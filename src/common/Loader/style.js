import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  preloader: {
    height: '100%',
    backgroundColor: new DynamicValue('white', '#212121'),
    justifyContent: 'center',
  },
});
