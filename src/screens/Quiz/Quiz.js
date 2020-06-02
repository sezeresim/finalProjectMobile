/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {
  Text,
  Card,
  Divider,
  Alert,
  RadioButton,
  TouchableRipple,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import color from '../../core/colors';
import HTTP from '../../core/url';
import Axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

const Quiz = ({route, navigation}) => {
  const authContext = useContext(AuthContext);
  const {surveyID} = route.params;
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState([
    {name: authContext.userData.name, email: authContext.userData.email},
  ]);
  const [checked, setChecked] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuestions = () => {
    Axios.get(HTTP.SURVEY_URL + surveyID)
      .then(response => {
        let apiQuetions = response.data.questions.questions;
        setQuestions(apiQuetions);
        console.log(apiQuetions);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch(error => Alert.alert(error));
  };

  const postAnswers = () => {
    console.log(formData);
  };

  const changeAnswers = (questionID, answerID, index) => {
    const newArray = [...checked];
    newArray[index] = {questionID: questionID, answerID: answerID};
    setChecked(newArray);
    console.log(checked);
  };

  return (
    <View style={styles.View}>
      {loaded ? (
        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Card key={item.id} style={styles.Card}>
              <Card.Title title={item.question + 'index' + index} />
              <Divider />
              <Card.Content style={styles.cardContent}>
                {item.answers.map(answer => (
                  <View
                    key={answer.id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <RadioButton
                      key={answer.id}
                      value={answer.id}
                      status={
                        checked === null
                          ? 'unchecked'
                          : checked[index] === answer.id
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
          )}
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
          <Button mode="contained" onPress={postAnswers}>
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
