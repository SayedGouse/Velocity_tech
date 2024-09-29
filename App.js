import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigator />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
