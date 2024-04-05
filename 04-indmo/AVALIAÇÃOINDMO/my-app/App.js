import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../my-app/screens/LoginScreen';
import ChoiceScreen from '../my-app/screens/ChoiceScreen';
import SwitchScreen from '../my-app/screens/SwitchScreen';
import InterestScreen from '../my-app/screens/InterestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Choice" component={ChoiceScreen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Interest" component={InterestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
