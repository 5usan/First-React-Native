import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({name, onPress}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnTxt}>{name}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
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
