import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, DataTable} from 'react-native-paper';
import color from '../../core/colors';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Account = ({navigation}) => {
  return (
    <View style={styles.View}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>İsim</DataTable.Title>
          <DataTable.Title numeric>Son Tarih</DataTable.Title>
          <DataTable.Title numeric>Durum</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Check} name={'check'} />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Wait} name={'bell'} />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Ban} name={'ban'} />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Check} name={'check'} />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Check} name={'check'} />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Check} name={'check'} />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Wait} name={'bell'} />
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>
            <AwesomeIcon size={25} style={styles.Ban} name={'ban'} />
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
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
