import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Require cycle:']);

import React from 'react';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Home />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
