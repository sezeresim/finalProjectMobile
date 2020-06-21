/* eslint-disable no-trailing-spaces */
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useReducer,
} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import {
  Text,
  Card,
  Divider,
  RadioButton,
  Button,
  Portal,
  Paragraph,
  Dialog,
  ActivityIndicator,
  FAB,
} from 'react-native-paper';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

const questionReducer = (currentQuestions, action) => {
  switch (action.type) {
    case 'SET':
      return action.questions;
    default:
      throw new Error('Should not get there!');
  }
};

const Quiz = ({route, navigation}) => {
  const authContext = useContext(AuthContext);
  const [questions, dispatch] = useReducer(questionReducer, []);
  const {surveyID, title} = route.params;
  const [loaded, setLoaded] = useState(false);
  const [checked, setChecked] = useState([]);
  const [sendButton, setSendButton] = useState(false);
  const userData = {
    name: authContext.userData.name,
    email: authContext.userData.email,
  };
  const [errorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  useEffect(() => {
    let answerArray = [...checked];
    questions.map(
      (item, index) => (
        (answerArray[index] = {answer_id: -1, question_id: item.id}),
        setChecked(answerArray)
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, errorMessage]);

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
    const surveyData = {
      survey: userData,
      responses: checked,
      userID: authContext.userData.id,
    };
    console.log(surveyData);
    Axios.post(HTTP.SURVEY_URL + surveyID, surveyData)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          navigation.navigate('Result', {
            title: title,
          });
        }
      })
      .catch(error => {
        setErrorMessage(true);
        console.log(error);
      });
  };

  const setAnswers = (questionID, answerID, index) => {
    let answerArray = [...checked];
    answerArray[index] = {answer_id: answerID, question_id: questionID};
    setChecked(answerArray);
    controlSendButton(index, questions.length);
  };

  const controlSendButton = (answerLength, questionLength) => {
    if (questionLength === answerLength + 1) {
      setSendButton(true);
    }
  };

  const renderQuestionCard = (item, index) => {
    return (
      <Card key={item.id} style={styles.Card}>
        <Card.Title title={item.question} />
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
                  checked[index].answer_id === answer.id
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setAnswers(item.id, answer.id, index);
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
      {errorMessage ? (
        <Portal>
          <Dialog
            visible={errorMessage}
            onDismiss={() => {
              setErrorMessage(false);
            }}>
            <Dialog.Content>
              <Paragraph>
                Malesef her kullanıcının bir kez cevaplama hakkı vardır :(
              </Paragraph>
            </Dialog.Content>
          </Dialog>
        </Portal>
      ) : null}

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

      <FAB
        visible={sendButton}
        color={color.black}
        label="Tamamla"
        style={styles.fab}
        icon="send"
        onPress={postSurvey}
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Quiz;
