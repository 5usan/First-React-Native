import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollViewComponent,
  ScrollView,
} from 'react-native';
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
      {userDetails && (
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.info}>
              <Image
                source={{
                  uri: userDetails.about.image,
                }}
                style={{width: 170, height: 170}}
              />
              <View style={styles.socials}>
                <Text style={styles.text}>
                  Github: {userDetails.about.socialMedia.github}
                </Text>
                <Text style={styles.text}>
                  Linkedin: {userDetails.about.socialMedia.linkedin}
                </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.text}>Name: {userDetails.about.name}</Text>
              <Text style={styles.text}>DOB: {userDetails.about.dob}</Text>
              <Text style={styles.text}>
                Phone Number: {userDetails.about.cellNo.mobileNumber}
              </Text>
              <Text style={styles.text}>Email: {userDetails.about.email}</Text>
              <Text style={styles.text}>
                Bank Account: {userDetails.about.bankAccount}
              </Text>
              <Text style={styles.text}>
                Pan Number: {userDetails.about.panNumber}
              </Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.text}>
                Designation: {userDetails.workDetails.designation}
              </Text>
              <Text style={styles.text}>
                Hire Date: {userDetails.workDetails.hireDate}
              </Text>
              <Text style={styles.text}>
                Job Description: {userDetails.workDetails.jobDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
  },
  info: {
    flexDirection: 'row',
    backgroundColor: '#dfe3eb',
    padding: 10,
  },
  socials: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'column',
  },
  text: {
    fontSize: 23,
    paddingBottom: 3,
    fontWeight: '500',
  },

  details: {
    marginTop: 10,
    backgroundColor: '#dfe3eb',
    padding: 10,
  },
});
