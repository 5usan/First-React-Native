import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../store/slice/authSlice';

const Layout = ({navigation, children}) => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');
    dispatch(logout());
    navigation();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>OF-Desk</Text>
        <Pressable onPress={logoutHandler}>
          <Image
            source={require('../assets/logout.png')}
            style={styles.logout}
          />
        </Pressable>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#4c739c',
    height: 80,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logout: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginLeft: 20,
  },
  content: {
    flexDirection: 'column',
    height: Dimensions.get('window').height - 80,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});
