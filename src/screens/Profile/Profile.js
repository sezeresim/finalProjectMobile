import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Profile</Text>
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

export default Profile;
