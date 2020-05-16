import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const Login = ({navigation}) => {
  return (
    <View style={styles.View}>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign in" />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'red',
  },
});

export default Login;
