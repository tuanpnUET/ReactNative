import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Item, SafeAreaView, FlatList } from 'react-native';

import Header from './src/components/Header'
export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  }
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    }
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title}/>
  );

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            // text="Play Girl"
            placeholder="Enter todo item"
            onChangeText={text => setTodoItem(text)}
            value={todoItem}
          />
          <Button 
            title="Add to do"
            // onPress = {() => console.log("Button clicked")}
            onPress={addTodoList}
          />
        </View>
        <View>
          {todoList.map(todo => <View style={styles.todoItem}><Text>{todo}</Text></View>)}
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          ></FlatList>
        </SafeAreaView>
      </View>
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
  textInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth:  1
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 20,
  },
  item: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});
