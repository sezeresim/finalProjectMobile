import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#F2CF14',
    alignItems: 'center',
    flex: 1,
  },
});

export default Account;
