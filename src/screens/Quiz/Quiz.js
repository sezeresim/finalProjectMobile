import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useReducer,
} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  Text,
  Card,
  Divider,
  RadioButton,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

const questionReducer = (currentQuestions, action) => {
  switch (action.type) {
    case 'SET':
      return action.questions;
    // case 'ADD':
    // //return [...currentIngredients, action.ingredient];
    // case 'DELETE':
    // //return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
};

const Quiz = ({route, navigation}) => {
  const authContext = useContext(AuthContext);
  const [questions, dispatch] = useReducer(questionReducer, []);
  const {surveyID} = route.params;
  const [loaded, setLoaded] = useState(false);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  useEffect(() => {
    let answerArray = [...checked];
    questions.map(
      (item, index) => (
        (answerArray[index] = {questionID: -1, answerID: -1}),
        setChecked(answerArray)
      ),
    );
  }, [questions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getQuestions = useCallback(() => {
    Axios.get(HTTP.SURVEY_URL + surveyID)
      .then(response => {
        dispatch({type: 'SET', questions: response.data.questions});
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoaded(true));
  }, [surveyID]);

  const postSurvey = () => {
    console.log(checked);
  };

  const changeAnswers = (questionID, answerID, index) => {
    let answerArray = [...checked];
    answerArray[index] = {questionID: questionID, answerID: answerID};
    setChecked(answerArray);
  };

  const renderQuestionCard = (item, index) => {
    return (
      <Card key={item.id} style={styles.Card}>
        <Card.Title title={item.question + 'index' + index} />
        <Divider />
        <Card.Content style={styles.cardContent}>
          {item.answers.map(answer => (
            <View
              key={answer.id}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RadioButton
                key={answer.id}
                value={answer.id}
                status={
                  checked[index].answerID === answer.id
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  changeAnswers(item.id, answer.id, index);
                }}
              />
              <Text>{answer.answer}</Text>
            </View>
          ))}
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.View}>
      {loaded ? (
        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => renderQuestionCard(item, index)}
        />
      ) : (
        <ActivityIndicator
          style={(styles.Card, {flex: 1})}
          size="large"
          animating={true}
          color={color.bg_color}
        />
      )}
      {loaded ? (
        <Card>
          <Button mode="contained" onPress={postSurvey}>
            Tamamla
          </Button>
        </Card>
      ) : null}
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
