import React from 'react';
import Router from './Router/index';
import {Provider as PaperProvider} from 'react-native-paper';

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
