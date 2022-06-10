import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Profile = ({route, navigation}) => {
  const {email, password} = route.params;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>E-mail: {email}</Text>
      <Text style={styles.text}>Password: {password}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
