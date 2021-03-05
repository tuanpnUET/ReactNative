import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container, {padding: 100}}>
      <View>
        <TextInput
          style={styles.TextInput}
          placeholder ="Enter to do item"/>
          <Button title ="Add to do"
          onPress = {() => console.log("Button clicked")}
          />
      </View>
      <View>
        <Text>List of Todo</Text>
      </View>
      {/* <Text>Hello World!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding : 60

  },
  TextInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth:  1
  }
});
