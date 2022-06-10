import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../services/loginApi';
import {login} from '../store/slice/authSlice';
import Layout from './Layout';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [isLogin] = useLoginMutation();
  const dispatch = useDispatch();
  const isLoggedInState = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const isLoggedIn = async () => {
      if (isLoggedInState) {
        navigation.navigate('Profile');
      } else {
        const isLoggedInStorage = JSON.parse(
          await AsyncStorage.getItem('isLoggedIn'),
        );
        isLoggedInStorage && navigation.navigate('Profile');
      }
    };
    isLoggedIn();
  }, [isLoggedInState]);

  const submitHandler = async () => {
    setInvalid(false);
    if (email === '') {
      setErrorEmail(prepState => (prepState = true));
    }
    if (password === '') {
      setErrorPassword(prepState => (prepState = true));
    } else {
      setErrorEmail(false);
      setErrorPassword(false);
      const loginData = await isLogin({email, password});
      if (loginData.error) {
        setInvalid(true);
      }
      const user = loginData.data.payload.data;
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
      await AsyncStorage.setItem('user', JSON.stringify(user));
      dispatch(login(user));
      navigation.navigate('Profile', {
        email,
        password,
      });
    }
  };

  return (
    <Layout>
      <View style={styles.welcome}>
        <Text style={styles.hello}>Hello there, welcome back</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#bfbcbb"
          onChangeText={setEmail}
        />
        {errorEmail && <Text style={styles.error}>Invalid Email</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          placeholderTextColor="#bfbcbb"
          secureTextEntry={true}
        />
        {errorPassword && <Text style={styles.error}>Invalid Password</Text>}
        {invalid && (
          <Text style={styles.error}>Email or Password is incorrect</Text>
        )}
      </View>
      <View>
        <Text style={styles.forget}>Forget your password?</Text>
        <Button title="Sign In" color="#6F3CCF" onPress={submitHandler} />
      </View>
      <Text style={styles.forget}>Not here, Sign up instead</Text>
    </Layout>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#21254A',
  },
  header: {
    backgroundColor: '#6F3CCF',
    height: 80,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    color: 'white',
  },
  content: {
    flexDirection: 'column',
    height: Dimensions.get('window').height - 80,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  welcome: {
    width: 350,
  },
  hello: {
    color: 'white',
    fontSize: 60,
  },
  input: {
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#4B5072',
    fontSize: 30,
    marginTop: 15,
    color: 'white',
  },
  forget: {
    color: 'white',
    fontSize: 15,
    marginBottom: 30,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
});
