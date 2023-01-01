import React from 'react';
import {View, StyleSheet} from 'react-native';

function FixedDimensionsBasics() {
  return (
    <View>
      <View style={[styles.container, styles.powderblue]} />
      <View style={[styles.container, styles.powderblue]} />
      <View style={[styles.container, styles.steelblue]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  powderblue: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    width: 150,
    height: 150,
    backgroundColor: 'steelblue',
  },
});

export default FixedDimensionsBasics;
