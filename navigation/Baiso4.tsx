import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile', {userId: '1289'})}
      />
    </View>
  );
}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
function ProfileScreen({route, navigation}: ProfileScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Profile', {userId: '1234'})}
      />
      <Text>Profile with userId: {route.params.userId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const FeedScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Feed" component={FeedScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
