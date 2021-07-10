import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Add from './screens/Add';
import Edit from './screens/Edit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#of4c75',
            },
            title: 'Netflix WatchList',
            headerTitleStyle: {
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {
              backgroundColor: '#of4c75',
            },
            title: 'Netflix WatchList',
            headerTitleStyle: {
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {
              backgroundColor: '#of4c75',
            },
            title: 'Netflix WatchList',
            headerTitleStyle: {
              color: '#00b7c2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;