import * as React from 'react';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {faker} from '@faker-js/faker';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const NameContext = createContext<string | undefined>(undefined);

export default function Bai5() {
  const [name, setName] = useState('Hello');
  const [email, setEmail] = useState('abc@gmail.com');

  function ktsnt(so: number) {
    console.log(so);
  }

  const ktsnt2 = useCallback((so: number) => {
    console.log(so);
  }, []);
  useEffect(() => {
    //kiem tra so nguyen to
    ktsnt(3);
  }, []);

  const memoizedValue = useMemo(() => {
    console.log('useMemo');
    var arr = [];
    for (let index = 0; index < 50; index++) {
      arr.push(index);
    }
    return arr;
  }, []);

  function initArray() {
    console.log('unMemo');
    var arr = [];
    for (let index = 0; index < 50; index++) {
      arr.push(index);
    }
    return arr;
  }
  let unMemo = initArray();

  console.log(unMemo);

  useEffect(() => {
    //kiem tra so nguyen to
    ktsnt2(5);
  }, [ktsnt2]);

  return (
    <View style={styles.container}>
      <Text>Bai5</Text>
      <NameContext.Provider value={name}>
        <ComponentD />
        <ComponentE />
        <ComponentF />
      </NameContext.Provider>
      <Text>====================</Text>
      <ComponentA name={name} />
      <ComponentB name={name} />
      <ComponentC name={name} />
      <ComponentC name={email} />
      <Text>${memoizedValue}</Text>
      <Button
        title="update name"
        onPress={() => {
          setName(faker.person.fullName());
          setEmail(faker.internet.email());
        }}
      />
      <Button title="button2" onPress={() => ktsnt2(2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
    flexDirection: 'column',
  },
});

export interface Props {
  name: string;
}

const ComponentA: React.FC<Props> = props => {
  return (
    <>
      <Text>{props.name}</Text>
      <ComponentA1 name={props.name} />
    </>
  );
};

const ComponentA1: React.FC<Props> = props => {
  return <Text>{props.name}</Text>;
};

const ComponentB: React.FC<Props> = props => {
  return <Text>{props.name}</Text>;
};

const ComponentC: React.FC<Props> = props => {
  return <Text>{props.name}</Text>;
};

const ComponentD = () => {
  const nameContext = useContext(NameContext);
  return <Text>{nameContext}</Text>;
};

const ComponentE = () => {
  const nameContext = useContext(NameContext);
  return <Text>{nameContext}</Text>;
};

const ComponentF = () => {
  const nameContext = useContext(NameContext);
  return <Text>{nameContext}</Text>;
};
