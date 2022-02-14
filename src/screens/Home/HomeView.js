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
  Modal,
} from 'react-native';
import { stylesDynamic } from './style';
import { images, svgs } from '../../img';
import { TempInfo } from '../../common/TemperatureInfo/TempInfo';
import { DailyInfo } from '../../common/DailyInfo/DailyInfo';
import { getHours, getDays, svgPicker } from '../../utils/HomeFuncts';
import Animated, { Value, multiply, add } from 'react-native-reanimated';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { useSelector, useDispatch } from 'react-redux';
import { removeCityAction } from '../../store/reducers/FavListReducer';
import { useDynamicValue } from 'react-native-dynamic';

export const HomeView = props => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const favCities = useSelector(state => state.favList.favCitiesList);
  const dispatch = useDispatch();
  const styles = useDynamicValue(stylesDynamic);

  const [selectedCityFromPicker, setSelectedCityFromPicker] = React.useState(
    props.data.cityName.name,
  );

  const onItemSelected = selectedItem => {
    setSelectedCityFromPicker(selectedItem);
  };
  const removeCityFromFav = () => {
    const i = selectedCityFromPicker;
    dispatch(removeCityAction(favCities[i].city));
  };
  const setCurrentCityFromModal = () => {
    const i = selectedCityFromPicker;
    props.setCurrentCity(favCities[i]);
    setModalVisible(false);
    props.setLoading(true);
  };

  const modalCityPicker = () => {
    return (
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBG}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Select a city from favorites
              </Text>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                {svgs.close}
              </Pressable>
            </View>
            {favCities.length == 0 ? (
              <Text style={styles.modalText}>
                Oops, looks like you don't have any favorite cities yet.
              </Text>
            ) : (
              <>
                <View style={styles.modalMain}>
                  <WheelPicker
                    data={favCities.map(item => {
                      return item['city'];
                    })}
                    onItemSelected={onItemSelected}
                    indicatorColor={'#BB89FC'}
                    selectedItemTextSize={21}
                    itemTextSize={16}
                    itemTextColor={'gray'}
                  />
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.modalButton}
                    onPress={removeCityFromFav}>
                    <Text style={styles.modalButtonText}>Remove from fav.</Text>
                  </Pressable>
                  <Pressable
                    style={styles.modalButton}
                    onPress={setCurrentCityFromModal}>
                    <Text style={styles.modalButtonText}>Pick a city</Text>
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    );
  };

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
  const bottomSheetPosition = React.useRef(new Value(1)).current;

  const mainSectionAnimation = {
    opacity: add(0, multiply(bottomSheetPosition, 1)),
    transform: [
      {
        translateY: add(-100, multiply(bottomSheetPosition, 100)),
      },
      {
        scale: add(0, multiply(bottomSheetPosition, 1)),
      },
    ],
  };
  const headerAnimation = {
    transform: [
      {
        translateY: add(10, multiply(bottomSheetPosition, -10)),
      },
    ],
  };

  return (
    <ImageBackground
      source={{ uri: props.cityImage.results[0].urls.full }}
      style={styles.backgroundImage}>
      <View style={styles.wrapper}>
        {modalCityPicker()}
        <Animated.View style={[styles.header, headerAnimation]}>
          <Pressable onPress={props.goToSearch}>{svgs.search}</Pressable>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.locationText}>
              {props.data.cityName.name}, {props.data.cityName.sys.country}
            </Text>
          </Pressable>
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
        <Animated.View style={[mainSectionAnimation, styles.footerSection]}>
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
        snapPoints={['44%', '84%']}
        initialSnap={0}
        enabledBottomInitialAnimation={true}
        callbackNode={bottomSheetPosition}
        enabledBottomClamp={true}
      />
    </ImageBackground>
  );
};
