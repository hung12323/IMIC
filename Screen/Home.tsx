import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AppContext} from './AppContext';

const HomePage = () => {
  const {name} = useContext(AppContext);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 25, color: '#000'}}>Welcome {name}!</Text>
    </View>
  );
};

export default HomePage;