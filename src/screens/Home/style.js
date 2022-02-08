import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    zIndex: 10,
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
    zIndex: 5,
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
  footerSection: {
    borderTopWidth: 1.3,
    borderColor: 'rgba(255,255,255, 0.5)',
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
  modalBG: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitle: {
    color: 'black',
    fontSize: 17,
  },
  modalMain: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
