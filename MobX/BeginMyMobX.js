import React from 'react';
import {Doubler, myState, increment} from './MyMobX';
import {Text, StyleSheet} from 'react-native';
import {observable, runInAction} from 'mobx';
import {observer} from 'mobx-react';

const doubler = new Doubler();

// function BeginMyMobX() {
//   //const doubler = new Doubler();
//   //doubler.increment();
//   return <Text style={styles.item}>{doubler.value}</Text>;
// }

//const doubler = new Doubler();

const BeginMyMobX = observer(() => {
  return <Text style={styles.item}>{doubler.value}</Text>;
  //<Text style={styles.item}>{doubler.value}</Text>;
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

export default BeginMyMobX;
