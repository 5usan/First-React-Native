import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
  Button,
} from 'react-native';

const SimpleForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const changeHandler = e => {
    console.log(e.target);
  };
  const submitHandler = () => {
    if (email === '') {
      setErrorEmail(prepState => (prepState = true));
    }
    if (password === '') {
      setErrorPassword(prepState => (prepState = true));
    } else {
      setErrorEmail(false);
      setErrorPassword(false);
      Alert.alert('Login', `E-mail: ${email} and Password: ${password}`, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>OFDesk</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.hello}>Hello there, welcome back</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#bfbcbb"
            onChangeText={setEmail}
            onChange={changeHandler}
          />
          {errorEmail && <Text style={styles.error}>Invalid Email</Text>}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            placeholderTextColor="#bfbcbb"
          />
          {errorPassword && <Text style={styles.error}>Invalid Passowrd</Text>}
        </View>
        <View>
          <Text style={styles.forget}>Forget your password?</Text>
          <Button title="Sign In" color="#6F3CCF" onPress={submitHandler} />
        </View>
        <Text style={styles.forget}>Not here, Sign up instead</Text>
      </View>
    </View>
  );
};
export default SimpleForm;

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
