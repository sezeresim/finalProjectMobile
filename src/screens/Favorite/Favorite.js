import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Favorite = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.View}>
      <Text style={{fontSize: 25}}>Counter:{JSON.stringify(counter)}</Text>
      <Button onPress={() => setCounter(counter + 1)} title="Increase Foo!" />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#FCCF14',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
  },
});

export default Favorite;
