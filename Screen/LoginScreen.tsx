import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {AppContext} from './AppContext';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const {name, setName} = useContext(AppContext);

  useEffect(() => {
    Alert.alert(
      'Thông báo',
      'Ứng dụng muốn truy cập vào vị trí của bạn',
      [
        {
          text: "Don't Allow",
          onPress: () => console.log("Don't Allow Pressed"),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }, []);

  const handleLogin = () => {
    if (username === '') {
      setUsernameError('Vui lòng điền thông tin');
    } else {
      setUsernameError('');
    }

    if (pass === '') {
      setPasswordError('Vui lòng điền thông tin');
    } else {
      setPasswordError('');
    }

    if (username !== '' && pass !== '') {
      setError('');
      Alert.alert(`Chào mừng ${username} đăng nhập`);
      setName(username);
      navigation.navigate('HomePage');
    } else {
      setError('Vui lòng điền đủ thông tin agggggggg');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.text}> Yolo System </Text>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập "
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <Text style={{color: 'red'}}>{usernameError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={pass}
          onChangeText={text => setPass(text)}
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
        {/* <Text style={{color: 'red', alignSelf: 'center'}}>{error}</Text> */}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={styles.tex1}>OR</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
            Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
            Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 140,
  },
  container: {
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  text: {
    color: 'green',
    fontSize: 50,
    fontWeight: '700',
    margin: 8,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },

  input: {
    height: 40,
    width: 370,
    marginHorizontal: 16,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    height: 40,
    margin: 4,
    backgroundColor: '#99109c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
  },
  tex1: {
    color: 'green',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  button1: {
    height: 40,
    margin: 4,
    backgroundColor: '#0b8a0b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
  },
  button2: {
    height: 40,
    margin: 4,
    backgroundColor: '#e01d1d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginHorizontal: 16,
  },
});
