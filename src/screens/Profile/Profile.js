import React, {useContext, memo, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Divider,
  Title,
  Card,
  Paragraph,
  Switch,
  Button,
} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import color from '../../core/colors';

const Profile = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const [themeSwitch, setThemeSwitch] = useState(false);

  const onToggleSwitch = () => {
    themeSwitch ? setThemeSwitch(false) : setThemeSwitch(true);
  };

  return (
    <View style={styles.View}>
      <Card style={styles.Card}>
        <Card.Title title={authContext.userData.name} />
        <Divider />
        <Card.Content>
          <Paragraph>E-Posta = {authContext.userData.email}</Paragraph>
          <Paragraph>Ülke = {authContext.userData.country}</Paragraph>
          <Paragraph>
            Kalan Hakkınız ={' '}
            {authContext.userData.post_count -
              authContext.userData.post_counter}
          </Paragraph>
          <Paragraph>
            E-Posta Doğrulama ={' '}
            {authContext.userData.email_verified_at === null
              ? 'Doğrulanmamış'
              : 'Doğrulandı'}
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.Card}>
        <Card.Title title="Ayarlar" />
        <Divider />
        <Card.Content style={styles.preference}>
          <Text style={styles.text}>Gece Modu</Text>
          <Switch value={themeSwitch} onValueChange={onToggleSwitch} />
        </Card.Content>
        <Divider />
        <Card.Content style={styles.logOutButton}>
          <Button
            icon="logout"
            mode="text"
            color={color.black}
            onPress={() => console.log('Pressed')}>
            Çıkış Yap
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: color.bg_color,
    flex: 1,
  },
  Card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 13,
    marginBottom: 10,
    backgroundColor: color.white,
    borderRadius: 5,
    elevation: 3,
    fontSize: 25,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logOutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
});

export default memo(Profile);
