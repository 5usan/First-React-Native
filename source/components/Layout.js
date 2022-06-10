import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const Layout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>OFDesk</Text>
      </View>
      <View style={styles.content}>{props.children}</View>
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
});
