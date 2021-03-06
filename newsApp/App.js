import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Header from './src/components/Header';
import Card from './src/components/Card';
const loadFonts = () => {
  return Font.loadAsync({
    'AkayaTelivigala': require('./assets/fonts/AkayaTelivigala-Regular.ttf')
  });
};
export default function App() {
  return (
    <View>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
});
