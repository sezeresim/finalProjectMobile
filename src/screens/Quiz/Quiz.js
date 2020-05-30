/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  Text,
  Card,
  Divider,
  Alert,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';

const Quiz = ({route, navigation}) => {
  const {surveyID} = route.params;
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuestions = () => {
    Axios.get(HTTP.SURVEY_URL + surveyID)
      .then(response => {
        setQuestions(response.data.questions.questions);
        console.log(response.data.questions.questions);
      })
      .catch(error => Alert.alert(error));
  };

  return (
    <View style={styles.View}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card key={item.id} style={styles.Card}>
            <Card.Title title={item.question} />
            <Divider />
            <Card.Content style={styles.cardContent}>
              {item.answers.map(answer => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioButton
                    key={answer.id}
                    value={answer.id}
                    status={checked === answer.id ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(answer.id);
                    }}
                  />
                  <Text>{answer.answer}</Text>
                </View>
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
