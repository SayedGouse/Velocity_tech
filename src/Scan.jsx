import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Scan = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.font}>Scan</Text>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 24,
    fontWeight: '700',
  },
});
