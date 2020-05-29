import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import color from '../../core/colors';

const Quiz = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Quiz Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: color.bg_color,
    flex: 1,
  },
});

export default Quiz;
