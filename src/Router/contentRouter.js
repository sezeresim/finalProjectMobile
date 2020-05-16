import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import {ProfileScreen, FavoriteScreen, AccountScreen} from '../screens';
//
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ContentRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'More') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={AccountScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="More">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Favorite" component={FavoriteScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ContentRouter;
