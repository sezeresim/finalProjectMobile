import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Fovorite = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={styles.View}>
      <Text>{title}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'white',
  },
});

export default Fovorite;
