import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Fovorite = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>This is Login Screen</Text>
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
