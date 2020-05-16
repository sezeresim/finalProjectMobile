import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const Account = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Sezer Esim</Text>
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
