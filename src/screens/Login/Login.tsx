import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../../components/Login/Background';
import Logo from '../../components/Login/Logo';
import Header from '../../components/Login/Header';
import Button from '../../components/Login/Button';
import TextInput from '../../components/Login/TextInput';
import {theme} from '../../core/theme';
import {emailValidator, passwordValidator} from '../../core/utils';
import {Navigation} from '../../types';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';
type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    let loginData = {email: '', password: ''};
    loginData.email = email.value;
    loginData.password = password.value;

    Axios.post(HTTP.LOGIN_URL, loginData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Background>
      {/* <Logo /> */}
      <Header>Üye Girişi</Header>

      <TextInput
        label="E-Posta"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Şifre"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Şifremi unuttum</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Giriş Yap
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Hesabım Yok </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Üye Ol</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: color.black,
  },
  link: {
    fontWeight: 'bold',
    color: color.black,
  },
});

export default memo(LoginScreen);
