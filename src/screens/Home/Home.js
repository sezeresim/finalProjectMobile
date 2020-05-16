import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Home</Text>
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

export default Home;
