import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: new DynamicValue('rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)'),
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    height: '8%',
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
    borderColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    zIndex: 5,
  },
  currentDegText: {
    color: new DynamicValue('rgb(237, 234, 222)', 'rgb(211,211,211)'),
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
    borderColor: new DynamicValue('rgba(255,255,255,0.5)', '#BB70FC'),
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
    color: new DynamicValue('rgb(237, 234, 222)', 'rgb(211,211,211)'),
  },
  panelHeader: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#212121'),
    alignItems: 'center',
  },
  handler: {
    width: 45,
    height: 6,
    borderRadius: 4,
    backgroundColor: new DynamicValue('darkgray', '#BB70FC'),
    marginVertical: 10,
  },
  panelContent: {
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#212121'),
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
    backgroundColor: new DynamicValue('rgb(255,255,255)', 'rgb(211,211,211)'),
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
  modalText: {
    marginVertical: 15,
    fontSize: 15,
    color: 'black',
  },
  modalButton: {
    borderWidth: 1,
    borderColor: '#BB89FC',
    borderRadius: 8,
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#BB89FC'),
    color: 'black',
    padding: 8,
  },
  modalButtonText: {
    color: 'black',
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
