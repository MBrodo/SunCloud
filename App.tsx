import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Require cycle:']);

import React from 'react';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import { Host } from 'react-native-portalize';

const App = () => {
  return (
    <Provider store={store}>
      <Host>
        <Home />
      </Host>
    </Provider>
  );
};

export default App;
