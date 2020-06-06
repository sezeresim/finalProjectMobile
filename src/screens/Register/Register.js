import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../../components/Login/Background';
import Header from '../../components/Login/Header';
import Button from '../../components/Login/Button';
import TextInput from '../../components/Login/TextInput';
import {theme} from '../../core/theme';

import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../core/utils';
import HTTP from '../../core/url';
import Axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [passwordC, setPasswordC] = useState({value: '', error: ''});

  const registerApi = (
    nameRegister,
    emailRegister,
    passwordRegister,
    passwordCRegister,
  ) => {
    let registerData = {
      name: nameRegister,
      email: emailRegister,
      password: passwordRegister,
      c_password: passwordCRegister,
    };

    Axios.post(HTTP.REGISTER_URL, registerData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      //console.log(res);
      if (res.status === 200) {
        navigation.navigate('Login');
      }
    });
  };

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const passwordCError = passwordValidator(passwordC.value);

    if (emailError || passwordError || nameError || passwordCError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setPassword({...passwordC, error: passwordCError});
      return;
    }

    registerApi(name.value, email.value, password.value, passwordC.value);
  };

  return (
    <Background>
      <Header>Üye Ol</Header>

      <TextInput
        label="İsim "
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />

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
      <TextInput
        label="Şifre Onayı"
        returnKeyType="done"
        value={passwordC.value}
        onChangeText={text => setPasswordC({value: text, error: ''})}
        error={!!passwordC.error}
        errorText={passwordC.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Üye Ol
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Hesabım Var? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    paddingBottom: 50,
  },
  picker: {
    alignItems: 'center',
    height: 50,
    width: 300,
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black',
  },
});

export default memo(RegisterScreen);
