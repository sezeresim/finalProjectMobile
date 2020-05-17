import React from 'react';
import Router from './Router/index';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#600EE6',
      secondary: '#414757',
      error: '#f13a59',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
