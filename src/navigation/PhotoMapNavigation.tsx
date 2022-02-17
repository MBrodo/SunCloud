import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapMain from '../screens/PhotoMap/MapMain';
import MapMenu from '../screens/PhotoMap/MapMenu';
import MapPicker from '../screens/PhotoMap/MapPositionPicker';

const Stack = createStackNavigator();

export const PhotoMapNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MapMain"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MapMain" component={MapMain} />
      <Stack.Screen name="MapMenu" component={MapMenu} />
      <Stack.Screen name="MapPicker" component={MapPicker} />
    </Stack.Navigator>
  );
};
