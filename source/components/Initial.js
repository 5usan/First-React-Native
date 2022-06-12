import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Button from './common/Button';

const Initial = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>OF-Desk</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button name="SIGN IN" onPress={pressHandler} />
        <Button name="SIGN UP" />
      </View>
    </View>
  );
};

export default Initial;

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#4c739c',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    letterSpacing: 4,
  },
  btnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 105,
  },
  btn: {
    width: 140,
    backgroundColor: '#324d69',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  btnTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
