import 'react-native-gesture-handler';
import React, {useState, useMemo, Provider} from 'react';
import {StatusBar} from 'react-native';
import Router from './Router/index';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
