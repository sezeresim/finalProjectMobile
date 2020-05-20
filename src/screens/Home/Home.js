import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, Card, Title, Paragraph, Searchbar} from 'react-native-paper';
import Axios from 'axios';
import HTTP from '../../core/url';
import color from '../../core/colors';

const Home = ({navigation}) => {
  const [publicData, setPublicData] = useState([]);

  useEffect(() => {
    getDataPublic();
  }, []);

  const getDataPublic = async callback => {
    await Axios.get(HTTP.HOME_URL)
      .then(res => {
        setPublicData(res.data.data.reverse());
      })
      .catch(err => alert(err));
  };

  return (
    <View style={styles.View}>
      <Searchbar
        style={styles.searchBar}
        placeholder="İçerik Ara"
        onChangeText={null}
        value={0}
      />
      <FlatList
        data={publicData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Card.Title title={item.title} />
            <Card.Content>
              <Paragraph>{item.purpose}</Paragraph>
              <Paragraph>{item.like_count}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  View: {
    backgroundColor: color.bg_color,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 13,
    marginBottom: 10,
    backgroundColor: color.white,
    borderRadius: 5,
    elevation: 3,
  },
  searchBar: {
    marginTop: 21,
    marginHorizontal: 20,
    marginBottom: 21,
  },
});

export default Home;
