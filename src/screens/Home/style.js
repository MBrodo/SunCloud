import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    color: 'rgba(255,255,255, 0.6)',
  },
  profilePic: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  main: {
    alignItems: 'center',
    paddingVertical: 50,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
  },
  currentDegText: {
    color: 'white',
    fontSize: 80,
  },
  commonText: {
    color: 'rgba(255,255,255, 0.8)',
  },
  hoursContainer: {
    alignItems: 'center',
    width: 63,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  weatherContainer: {
    alignItems: 'center',
    height: 80,
    width: 50,
    justifyContent: 'space-between',
  },
  activeText: {
    color: 'rgb(255,255,255)',
  },
  panelHeader: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  handler: {
    width: 45,
    height: 6,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  panelContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'space-around',
  },
});
