import 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './style';
import { images, svgs } from '../../img/index';
import MainIcon from '../../img/MainIcon.svg';

import { TempInfo } from '../../common/TemperatureInfo/TempInfo';
import { DailyInfo } from '../../common/DailyInfo/DailyInfo';

export const HomeView = props => {
  const panelHeader = () => (
    <View style={styles.panelHeader}>
      <View style={styles.handler} />
    </View>
  );

  const panelContent = () => (
    <View style={styles.panelContent}>
      <DailyInfo
        icon={svgs.cloudy}
        day={'Tomorrow'}
        tempDay={props.data.daily[0].temp.day}
        tempNight={props.data.daily[0].temp.night}
      />
      <DailyInfo
        icon={svgs.day}
        day={props.days[1]}
        tempDay={props.data.daily[1].temp.day}
        tempNight={props.data.daily[1].temp.night}
      />
      <DailyInfo
        icon={svgs.rainDayEasy}
        day={props.days[2]}
        tempDay={props.data.daily[2].temp.day}
        tempNight={props.data.daily[2].temp.night}
      />
      <DailyInfo
        icon={svgs.hail}
        day={props.days[3]}
        tempDay={props.data.daily[3].temp.day}
        tempNight={props.data.daily[3].temp.night}
      />
      <DailyInfo
        icon={svgs.thunder}
        day={props.days[4]}
        tempDay={props.data.daily[4].temp.day}
        tempNight={props.data.daily[4].temp.night}
      />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground
      source={images.nightBackground}
      style={styles.backgroundImage}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <>
            <MainIcon height={30} width={30} />
          </>
          <Text style={styles.locationText}>{props.data.timezone}</Text>
          <>
            <Image source={images.defaultProfile} style={styles.profilePic} />
          </>
        </View>
        <View style={styles.main}>
          <Text style={styles.currentDegText}>{props.data.current.temp}°</Text>
          <Text style={styles.commonText}>
            Feels like {props.data.current.feels_like}°
          </Text>
        </View>
        <View style={styles.footer}>
          <TempInfo
            style={styles.activeText}
            time={'Now'}
            icon={svgs.cloudy}
            temp={props.data.hourly[0].temp}
          />
          <TempInfo
            time={props.hours[1]}
            icon={svgs.cloudyDayHard}
            temp={props.data.hourly[1].temp}
          />
          <TempInfo
            time={props.hours[2]}
            icon={svgs.cloudyDayHard}
            temp={props.data.hourly[2].temp}
          />
          <TempInfo
            time={props.hours[3]}
            icon={svgs.cloudyDayMedium}
            temp={props.data.hourly[3].temp}
          />
          <TempInfo
            time={props.hours[4]}
            icon={svgs.cloudyDayEasy}
            temp={props.data.hourly[4].temp}
          />
          <TempInfo
            time={props.hours[5]}
            icon={svgs.cloudyDayEasy}
            temp={props.data.hourly[5].temp}
          />
        </View>
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
