import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#D9EAE9',
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
