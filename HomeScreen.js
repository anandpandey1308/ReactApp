import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Hello, Anand</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign:'center',
  },
});

export default HomeScreen;