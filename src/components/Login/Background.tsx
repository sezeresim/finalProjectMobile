import React, {memo} from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';
import color from '../../core/colors';
type Props = {
  children: React.ReactNode;
};

const Background = ({children}: Props) => (
  <ImageBackground
    // source={require('../../assets/logo.png')}
    resizeMode="repeat"
    style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: color.bg_color,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
