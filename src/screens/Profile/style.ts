import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 180,
    borderColor: 'white',
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
    backgroundColor: 'rgba(218,112,214,0.9)',
    position: 'relative',
    top: -30,
    right: -30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userName: {
    color: 'white',
    fontSize: 20,
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
    backgroundColor: 'white',
    marginVertical: 10,
  },
  panelContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '100%',
    justifyContent: 'space-around',
  },
});
