import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { View, ImageBackground, Text, Image, Pressable } from 'react-native';
import { stylesDynamic } from './style';
import { useDynamicValue } from 'react-native-dynamic';
import { images, svgs } from '../../img';
import { ProfileInfo } from '../../common/ProfileInfo/ProfileInfo';

export const ProfileView = props => {
  const styles = useDynamicValue(stylesDynamic);

  const panelHeader = () => (
    <View style={styles.panelHeader}>
      <View style={styles.handler} />
    </View>
  );

  const panelContent = () => (
    <View style={styles.panelContent}>
      <ProfileInfo name={'Name:'} value={'Yegor'} />
      <ProfileInfo name={'Current city:'} value={'Minsk, Belarus'} />
      <ProfileInfo
        name={'Current theme:'}
        value={props.currentTheme}
        additionalText={'* Dark / Light only'}
      />
      <ProfileInfo name={'Email:'} value={'yegor.vasilevskiy@gmail.com'} />
      <ProfileInfo name={'Phone:'} value={'+375 (29) 703 - 20 - 00'} />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={images.nightBackground}>
      <View style={styles.header}>
        <Pressable style={styles.button}>
          <Text>Edit</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text>Log out</Text>
        </Pressable>
      </View>
      <View style={styles.userInfoHeader}>
        <Image source={images.defaultProfile} style={styles.profilePic} />
        <View style={styles.editIcon}>{svgs.edit}</View>
        <Text style={styles.userName}>Hello, Yegor!</Text>
      </View>
      <BottomSheet
        ref={sheetRef}
        renderHeader={panelHeader}
        renderContent={panelContent}
        snapPoints={['50%']}
        initialSnap={0}
        enabledGestureInteraction={false}
        enabledBottomInitialAnimation={true}
      />
    </ImageBackground>
  );
};
