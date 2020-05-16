import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomTabs } from './bottomTabs';
import { Details } from './details';
import { StackNavigatorParamlist } from './types';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
    >
      <Stack.Screen
        name="FeedList"
        component={BottomTabs}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};