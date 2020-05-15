import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';

//Screens
import ProfileScreen from '../Profile/Profile';
import AccountScreen from '../Account/Account';
const Stack = createStackNavigator();
const Home = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerTitle: 'Tweet'}}
      />
    </Stack.Navigator>
  );
};

export default Home;
