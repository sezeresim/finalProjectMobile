import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import color from '../../core/colors';

const Fovorite = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{title} için cevabınız alındı</Text>
      <Divider />
      <Text style={styles.Text}>Anasayfa</Text>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: color.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 30,
    color: color.green,
  },
});

export default Fovorite;
