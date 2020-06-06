import React from 'react';
import {Card, Divider} from 'react-native-paper';

const QuestionCard = () => {
  return (
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
              status={checked[index] === answer.id ? 'checked' : 'unchecked'}
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

export default QuestionCard;
