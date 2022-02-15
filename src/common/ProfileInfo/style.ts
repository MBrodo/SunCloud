import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  wrapper: {
    marginBottom: 15,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  text: {
    color: new DynamicValue('black', 'gray'),
    fontSize: 16,
  },
  line: {
    borderColor: '#BB70FC',
    borderBottomWidth: 1,
  },
  additionalText: {
    color: 'gray',
  },
});
