import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyGetUserDetailsQuery} from '../services/userApi';
import Layout from './Layout';
import {getUserData} from '../store/slice/userSlice';

const Profile = ({navigation}) => {
  const [getUserDetails, response] = useLazyGetUserDetailsQuery();

  const userDetails = useSelector(state => state.user.userDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      var login = JSON.parse(await AsyncStorage.getItem('user'));
      getUserDetails({id: login.id, token: login.accessToken});
    };

    getUser();
  }, [AsyncStorage, getUserDetails]);

  const data = response.data && response.data.payload.data;

  useEffect(() => {
    data && dispatch(getUserData(data));
  }, [data, dispatch]);

  console.log(userDetails, 'details');
  return (
    <Layout>
      <View style={styles.wrapper}>
        {/* <Text>{response.data && response.data.code}</Text> */}
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </Layout>
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
