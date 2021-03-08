import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Girls List" 
                    component={NewsListScreen}
                    option={{title: 'All Girls'}}
                />
                <Stack.Screen 
                    name="Girl Detail" 
                    component={NewsDetailScreen}
                    options={{title:'Girl Detail'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
   );
}

export default AppNavigator;