import 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
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

  const hoursList = ({ item }) => (
    <View key={item.dt} style={styles.hoursContainer}>
      <TempInfo
        style={styles.activeText}
        time={getHours(item)}
        icon={svgPicker(item.weather[0].main)}
        temp={Math.round(item.temp)}
      />
    </View>
  );
  const dailyList = item => (
    <View key={item.dt}>
      <DailyInfo
        icon={svgPicker(item.weather[0].main)}
        day={getDays(item)}
        tempDay={Math.round(item.temp.day)}
        tempNight={Math.round(item.temp.night)}
      />
    </View>
  );

  const panelContent = () => (
    <View style={styles.panelContent}>
      {props.data.dataMain.daily.map(item => dailyList(item))}
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground
      source={{ uri: props.cityImage.results[0].urls.full }}
      style={styles.backgroundImage}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Pressable onPress={props.goToSearch}>{svgs.search}</Pressable>
          <Text style={styles.locationText}>
            {props.data.dataCity.name}, {props.data.dataCity.sys.country}
          </Text>
          <Pressable onPress={props.goToProfile}>
            <Image source={images.defaultProfile} style={styles.profilePic} />
          </Pressable>
        </View>
        <View style={styles.main}>
          <Text style={styles.currentDegText}>
            {Math.round(props.data.dataMain.current.temp)}°
          </Text>
          <Text style={styles.commonText}>
            Feels like {Math.round(props.data.dataMain.current.feels_like)}°
          </Text>
        </View>
        <FlatList
          data={props.data.dataMain.hourly}
          renderItem={hoursList}
          contentContainerStyle={styles.footer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          extraData={props.currentCity}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        renderHeader={panelHeader}
        renderContent={panelContent}
        snapPoints={['44%', '85%']}
        initialSnap={0}
      />
    </ImageBackground>
  );
};
