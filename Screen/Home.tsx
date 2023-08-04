import React, {useContext} from 'react';
import {View, Text,Button,StyleSheet} from 'react-native';
import {AppContext} from './AppContext';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigationContainer,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';


type RootStackParamList = {
  MainTab: undefined;
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Home: undefined;
  Feed: undefined;
  Setting: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createStackNavigator<RootStackParamList>();

type HomeScreenProps = HomeTabScreenProps<'Home'>;
function HomeScreen({navigation, route}: HomeScreenProps) {
  route;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile', {userId: '1234'})}
      />
    </View>
  );
}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
function ProfileScreen({route, navigation}: ProfileScreenProps) {
  return (
    <View style={styles.container}>
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
    <View style={styles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
};

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="MainTab">
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="MainTab"
          component={MainTab}
        />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Feed" component={FeedScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});


const HomePage = () => {
  const {name} = useContext(AppContext);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 25, color: '#000'}}>Welcome {name}!</Text>
    </View>
  );
};

export default HomePage;
const Tab = createBottomTabNavigator<HomeTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
       
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        
        name="Feed"
        component={FeedScreen}
      />
      <Tab.Screen
        
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};