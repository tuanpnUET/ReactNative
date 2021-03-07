import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading  from 'expo-app-loading';

import NewsListScreen from './src/screens/NewsListScreen';
export default function App() {

  const [loaded] = useFonts({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'), 
  });

  if(!loaded){
    return null;
  }
  return (
      <NewsListScreen/>
  );
}

const styles = StyleSheet.create({
});
