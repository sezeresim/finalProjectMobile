import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  Card,
  Paragraph,
  Divider,
  IconButton,
  Badge,
  TouchableRipple,
  Alert,
} from 'react-native-paper';
import Axios from 'axios';
import HTTP from '../../core/url';
import color from '../../core/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [publicData, setPublicData] = useState([]);

  useEffect(() => {
    getDataPublic();
  }, []);

  const getDataPublic = async callback => {
    await Axios.get(HTTP.HOME_URL)
      .then(response => {
        setPublicData(response.data.data.reverse());
      })
      .catch(error => Alert.alert(error));
  };

  const likeButton = id => {
    Axios.post(HTTP.HOME_URL + '/' + id)
      .then(response => {
        getDataPublic();
      })
      .catch(error => Alert.alert(error));
  };

  return (
    <View style={styles.View}>
      {/* <Searchbar
        style={styles.searchBar}
        placeholder="İçerik Ara"
        // onChangeText={() => alert('search')}
        value={0}
      /> */}
      <FlatList
        data={publicData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableRipple
            onPress={() =>
              navigation.navigate('Quiz', {
                title: item.title,
                surveyID: item.id,
              })
            }
            rippleColor="rgba(0,0,0, .05)">
            <Card style={styles.Card}>
              <Card.Title title={item.title} />
              <Badge size={30} style={styles.Badge}>
                {item.like_count}
              </Badge>

              <Divider />
              <Card.Content style={styles.cardContent}>
                <Paragraph>{item.purpose}</Paragraph>
                <Card.Actions>
                  <IconButton
                    icon={({}) => (
                      <Ionicons
                        name={'ios-arrow-up'}
                        size={40}
                        color={color.green}
                      />
                    )}
                    onPress={() => likeButton(item.id)}
                    style={{position: 'absolute', right: 0, paddingBottom: 7}}
                  />
                </Card.Actions>
              </Card.Content>
            </Card>
          </TouchableRipple>
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
  Card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
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
  cardContent: {
    marginTop: 5,
  },
  Badge: {
    position: 'absolute',
    right: 22,
    paddingBottom: 0,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: color.white,
  },
});

export default Home;
