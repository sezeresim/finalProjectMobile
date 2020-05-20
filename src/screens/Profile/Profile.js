import React, {useContext, memo, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, Divider, Title, Card, Paragraph} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import color from '../../core/colors';

const Profile = ({navigation}) => {
  const authContext = useContext(AuthContext);
  console.log(authContext.userData);

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
  },
});

export default memo(Profile);
