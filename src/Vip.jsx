import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Vip = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.font}>Vip</Text>
    </View>
  );
};

export default Vip;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 24,
    fontWeight: '700',
    color:'black'
  },
});
