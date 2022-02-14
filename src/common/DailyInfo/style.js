import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  dailyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    color: new DynamicValue('black', 'gray'),
    marginHorizontal: 10,
    fontSize: 16,
  },
  line: {
    borderColor: new DynamicValue('darkgray', '#BB86FC'),
    borderBottomWidth: 1,
    marginTop: 10,
  },
  nightText: {
    fontSize: 16,
    color: new DynamicValue('gray', '#BB86FC'),
  },
});
