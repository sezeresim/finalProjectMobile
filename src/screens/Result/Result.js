import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Fovorite = ({route, navigation}) => {
  const {title, data} = route.params;
  return (
    <View style={styles.View}>
      <Text>{title}</Text>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'white',
  },
});

export default Fovorite;
