import React, {useContext, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';

const Profile = ({navigation}) => {
  const authContext = useContext(AuthContext);
  console.log(authContext.userData);
  return (
    <View style={styles.View}>
      <Text>Name:{authContext.userData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#E5ABE8',
    alignItems: 'center',
    flex: 1,
  },
});

export default memo(Profile);
