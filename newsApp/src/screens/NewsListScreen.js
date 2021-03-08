import React from "react";
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import { TouchableOpacity } from "react-native-gesture-handler";

const NewsListScreen = props => {

    console.log(props);
    return (
        <View>
          <Header />
          <TouchableOpacity onPress={() => props.navigation.navigate('Girl Detail')}>
            <Card navigation={props.navigation}/>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    
});
export default NewsListScreen;