import React from 'react';
import {Doubler, myState, increment} from './MyDoubler';
import {Text, StyleSheet} from 'react-native';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';

const doubler = new Doubler();

const BeginMyDoubler = observer(() => {
  return <Text style={styles.item}>{doubler.value}</Text>;
});

setInterval(() => {
  // increment(myState);
  runInAction(() => {
    doubler.value++;
    doubler.value++;
  });
  //doubler.increment();
}, 1000);

const styles = StyleSheet.create({
  item: {
    padding: 50,
  },
});

export default BeginMyDoubler;
