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
import Animated from 'react-native-reanimated';

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
      {props.data.weatherForecast.daily.map(item => dailyList(item))}
    </View>
  );

  const sheetRef = React.useRef(null);
  const bottomSheetPosition = React.useRef(new Animated.Value(1)).current;

  const mainSectionAnimation = {
    opacity: Animated.add(0, Animated.multiply(bottomSheetPosition, 1)),
    transform: [
      {
        translateY: Animated.add(
          -100,
          Animated.multiply(bottomSheetPosition, 100),
        ),
      },
    ],
    useNativeDriver: true,
  };
  const headerAnimation = {
    transform: [
      {
        translateY: Animated.add(
          10,
          Animated.multiply(bottomSheetPosition, -10),
        ),
      },
    ],
    useNativeDriver: true,
  };

  return (
    <ImageBackground
      source={{ uri: props.cityImage.results[0].urls.full }}
      style={styles.backgroundImage}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.header, headerAnimation]}>
          <Pressable onPress={props.goToSearch}>{svgs.search}</Pressable>
          <Text style={styles.locationText}>
            {props.data.cityName.name}, {props.data.cityName.sys.country}
          </Text>
          <Pressable onPress={props.goToProfile}>
            <Image source={images.defaultProfile} style={styles.profilePic} />
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.main, mainSectionAnimation]}>
          <Text style={styles.currentDegText}>
            {Math.round(props.data.weatherForecast.current.temp)}°
          </Text>
          <Text style={styles.commonText}>
            Feels like{' '}
            {Math.round(props.data.weatherForecast.current.feels_like)}°
          </Text>
        </Animated.View>
        <Animated.View style={mainSectionAnimation}>
          <FlatList
            data={props.data.weatherForecast.hourly}
            renderItem={hoursList}
            contentContainerStyle={styles.footer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            extraData={props.currentCity}
          />
        </Animated.View>
      </View>
      <BottomSheet
        ref={sheetRef}
        renderHeader={panelHeader}
        renderContent={panelContent}
        snapPoints={['44%', '85%']}
        initialSnap={0}
        enabledBottomInitialAnimation={true}
        callbackNode={bottomSheetPosition}
        enabledBottomClamp={true}
      />
    </ImageBackground>
  );
};
