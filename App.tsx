import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/StackNavigation';
import { ColorSchemeProvider } from 'react-native-dynamic';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
