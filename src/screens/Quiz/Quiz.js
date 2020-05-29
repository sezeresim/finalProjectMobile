import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, Card, Divider, Button} from 'react-native-paper';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';

const Quiz = ({route, navigation}) => {
  const {surveyID} = route.params;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    Axios.get(HTTP.SURVEY_URL + surveyID)
      .then(response => {
        setQuestions(response.data.questions.questions);
        console.log(response.data.questions.questions);
      })
      .catch(error => alert(error));
  };

  return (
    <View style={styles.View}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card style={styles.Card}>
            <Card.Title title={item.question} />
            <Divider />
            <Card.Content style={styles.cardContent}>
              {item.answers.map(answer => (
                <Text key={answer.id}>{answer.answer}</Text>
              ))}
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: color.white,
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
export default Quiz;
