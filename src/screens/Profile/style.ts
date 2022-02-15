import { Dimensions } from 'react-native';
import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';

export const stylesDynamic = new DynamicStyleSheet({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  button: {
    height: 30,
    width: 85,
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#BB70FC'),
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 180,
    borderColor: 'beige',
    borderWidth: 1,
  },
  userInfoHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '45%',
    borderColor: 'white',
  },
  editIcon: {
    height: 40,
    width: 40,
    borderRadius: 180,
    backgroundColor: '#BB70FC',
    position: 'relative',
    top: -30,
    right: -30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userName: {
    color: new DynamicValue('rgb(237, 234, 222)', 'gray'),
    fontSize: 20,
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
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#BB70FC'),
    marginVertical: 10,
  },
  panelContent: {
    backgroundColor: new DynamicValue('rgb(237, 234, 222)', '#212121'),
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '100%',
    justifyContent: 'space-around',
  },
});
