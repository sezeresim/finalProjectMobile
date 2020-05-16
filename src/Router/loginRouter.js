import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import {LoginScreen} from '../screens';

const Stack = createStackNavigator();

const loginRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScren" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default loginRouter;
