
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ScannerScreen from './screens/ScannerScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>

      <App/>

    </NavigationContainer>
  );
} 