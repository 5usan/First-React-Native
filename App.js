import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  Alert,
} from 'react-native';

const SimpleForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  console.log(email);
  const submitHandler = () =>
    Alert.alert('Login', `E-mail: ${email} and Password: ${password}`, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.hello}>Hello there, welcome back</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
          />
        </View>
        <View>
          <Text style={styles.forget}>Forget your password?</Text>
          <Button title="Sign In" color="#653ED6" onPress={submitHandler} />
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
});
