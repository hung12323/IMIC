import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import HomePage from './Home';
import AppProvider from './AppContext';
import About from './About';
import Profile from './Profile';
const Tab = createMaterialBottomTabNavigator();
const StackScreen = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomePage} /> */}
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Stack = createNativeStackNavigator();
export function Index() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Welcome'}}
          />
          {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
          <Stack.Screen name="HomePage" component={StackScreen} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
