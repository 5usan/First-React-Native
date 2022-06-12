import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '../services/loginApi';
import {login} from '../store/slice/authSlice';
import Button from './common/Button';

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
    <View style={styles.wrapper}>
      <View style={styles.welcome}>
        <Text style={styles.ofdesk}>OF-Desk</Text>
      </View>
      <View style={styles.login}>
        <View style={styles.loginView}>
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
        <View style={styles.lastView}>
          <Text style={styles.forget}>Forget your password?</Text>
          <Button name="Sign In" onPress={submitHandler} />
          <Text style={styles.forget}>Not here, Sign up instead</Text>
        </View>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  welcome: {
    flex: 0.9,
    width: Dimensions.get('window').width,
    backgroundColor: '#4c739c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ofdesk: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },

  login: {
    flex: 1.1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#4B5072',
    fontSize: 30,
    marginTop: 15,
    color: 'black',
  },

  forget: {
    color: '#000',
    fontSize: 18,
    margin: 20,
  },

  error: {
    color: 'red',
    fontSize: 15,
  },

  lastView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: -100,
  },
});
