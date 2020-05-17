import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator} from '../../core/utils';
import Background from '../../components/Login/Background';
import BackButton from '../../components/Login/BackButton';
import Logo from '../../components/Login/Logo';
import Header from '../../components/Login/Header';
import TextInput from '../../components/Login/TextInput';
import {theme} from '../../core/theme';
import Button from '../../components/Login/Button';
import {Navigation} from '../../types';

type Props = {
  navigation: Navigation;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      {/* <Logo /> */}

      <Header>Şifremi Unuttum</Header>

      <TextInput
        label="E-Posta Adresiniz"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Şifremi Sıfırla
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.label}>← Giriş Yap</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
