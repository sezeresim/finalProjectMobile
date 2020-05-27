import React, {memo, useState, useContext, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import Background from '../../components/Login/Background';
import Logo from '../../components/Login/Logo';
import Header from '../../components/Login/Header';
import Button from '../../components/Login/Button';
import TextInput from '../../components/Login/TextInput';
import {emailValidator, passwordValidator} from '../../core/utils';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
const LoginScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  useEffect(() => {
    controlUser();
  }, []);

  //control user data
  //if device storage has one account,after run,this function works
  const controlUser = async () => {
    try {
      const savedUserDAta = JSON.parse(await AsyncStorage.getItem('userData'));
      if (savedUserDAta !== null) {
        console.log(savedUserDAta);
        loginHandler(savedUserDAta.email, savedUserDAta.password);
      }
    } catch (error) {
      console.log('kayıtlı kullanıcı yok');
    }
  };

  //Alert for unsuccesfulllogin
  const unSuccesfullLogin = () => {
    Alert.alert(
      'Geçersiz Kullanıcı',
      'Lütfen bilgileriniz kontrol ediniz',
      [{text: 'Tamam'}],
      {cancelable: false},
    );
  };

  const loginButton = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    //For Press Button
    loginHandler(email.value, password.value);
  };

  //Login Process
  const loginHandler = (loginEmail, loginPassword) => {
    const loginData = {email: loginEmail, password: loginPassword};
    Axios.post(HTTP.LOGIN_URL, loginData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          authContext.login(res.data.user, loginData);
        }
      })
      .catch(error => {
        unSuccesfullLogin();
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

      <Button mode="contained" onPress={() => loginButton()}>
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
  error: {
    fontSize: 14,
    color: color.red,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(LoginScreen);
