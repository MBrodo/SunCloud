import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../store/actions/ApiActionCreator';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);

  useEffect(() => {
    dispatch(
      apiCall(
        'https://api.openweathermap.org/data/2.5/onecall?lat=53.89&lon=27.56&appid=017ad6c36fdb4218cd9683095e911819',
      ),
    );
  }, []);
  console.log(data, 'data');

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text>I love iTechArt!</Text>
      )}
    </View>
  );
};

export default Home;
