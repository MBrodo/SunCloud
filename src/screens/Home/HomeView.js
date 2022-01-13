import 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { styles } from './style';
import { images, svgs } from '../../img';

import { TempInfo } from '../../common/TemperatureInfo/TempInfo';
import { DailyInfo } from '../../common/DailyInfo/DailyInfo';

import { getHours, getDays, svgPicker } from '../../utils/HomeFuncts';

export const HomeView = props => {
  const panelHeader = () => (
    <View style={styles.panelHeader}>
      <View style={styles.handler} />
    </View>
  );

  const hoursList = item => (
    <View key={item.dt}>
      <TempInfo
        style={styles.activeText}
        time={getHours(item)}
        icon={svgPicker(item.weather[0].main)}
        temp={item.temp}
      />
    </View>
  );
  const dailyList = item => (
    <View key={item.dt}>
      <DailyInfo
        icon={svgPicker(item.weather[0].main)}
        day={getDays(item)}
        tempDay={item.temp.day}
        tempNight={item.temp.night}
      />
    </View>
  );

  const panelContent = () => (
    <View style={styles.panelContent}>
      {props.data.daily.map(item => dailyList(item))}
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground
      source={images.nightBackground}
      style={styles.backgroundImage}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Pressable onPress={props.goToSearch}>{svgs.search}</Pressable>
          <Text style={styles.locationText}>{props.data.timezone}</Text>
          <Image source={images.defaultProfile} style={styles.profilePic} />
        </View>
        <View style={styles.main}>
          <Text style={styles.currentDegText}>{props.data.current.temp}°</Text>
          <Text style={styles.commonText}>
            Feels like {props.data.current.feels_like}°
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.footer}>
          {props.data.hourly.map(item => hoursList(item))}
        </ScrollView>
      </View>
      <BottomSheet
        ref={sheetRef}
        renderHeader={panelHeader}
        renderContent={panelContent}
        snapPoints={[330, 100]}
        initialSnap={0}
      />
    </ImageBackground>
  );
};
