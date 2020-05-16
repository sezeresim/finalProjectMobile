import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const Favorite = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.View}>
      <Text style={{fontSize: 25}}>Counter:{JSON.stringify(counter)}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'auto',
          alignContent: 'space-between',
        }}>
        <Button
          icon="comment"
          mode="outlined"
          color="green"
          onPress={() => setCounter(counter + 1)}>
          Press me
        </Button>
        <Button
          icon="share"
          mode="outlined"
          color="black"
          onPress={() => setCounter(counter - 1)}>
          Decrease
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
  },
});

export default Favorite;
