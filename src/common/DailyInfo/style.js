import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    color: 'black',
    marginHorizontal: 10,
    fontSize: 15,
  },
  line: {
    borderColor: 'rgba(210,215,211, 0.8)',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});
