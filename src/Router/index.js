import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//SCREENS
import HomeScreen from '../screens/Home/Home';
import DrawerNavigator from '../screens/DrawerNavigator/DrawerNavigator';

//NAVİGATİON
const Drawer = createDrawerNavigator();

const Router = ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerNavigator {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default Router;
