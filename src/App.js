import React from 'react';
import Router from './Router';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AuthContextProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </AuthContextProvider>
  );
};

export default App;
