import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/StackNavigation';
import { ColorSchemeProvider } from 'react-native-dynamic';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ColorSchemeProvider>
          <Navigation />
        </ColorSchemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
