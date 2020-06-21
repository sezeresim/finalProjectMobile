import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {DataTable} from 'react-native-paper';
import color from '../../core/colors';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HTTP from '../../core/url';
import Axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

const Account = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const [accountData, setAccountData] = useState([]);
  const id = authContext.userData.id;
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAccountData();
  }, []);

  const getAccountData = () => {
    Axios.get(HTTP.ACCOUNT_URL + id)
      .then(response => {
        setAccountData(response.data.data);
        console.log(response.data.data);
        setAccountData(false);
      })
      .catch(error => alert(error));
  };
  const refreshHandle = () => {
    setRefresh(true);
    getAccountData();
  };
  return (
    <View style={styles.View}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>İsim</DataTable.Title>
          <DataTable.Title numeric>Son Tarih</DataTable.Title>
          <DataTable.Title numeric>Durum</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={accountData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <DataTable.Row>
              <DataTable.Cell
                onPress={() =>
                  navigation.navigate('Quiz', {
                    title: item.title,
                    surveyID: item.question_area_id,
                  })
                }>
                {item.title}
              </DataTable.Cell>
              <DataTable.Cell numeric>{item.last_date}</DataTable.Cell>
              <DataTable.Cell numeric>
                {item.complete ? (
                  <AwesomeIcon size={25} style={styles.Check} name={'check'} />
                ) : (
                  <AwesomeIcon
                    size={25}
                    style={styles.Wait}
                    name={'hourglass-end'}
                  />
                )}
              </DataTable.Cell>
            </DataTable.Row>
          )}
          refreshing={refresh}
          onRefresh={() => refreshHandle()}
        />
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: color.white,
    alignItems: 'center',
    flex: 1,
  },
  Check: {
    color: color.green,
  },
  Wait: {
    color: 'tomato',
  },
  Ban: {
    color: color.red,
  },
});

export default Account;
