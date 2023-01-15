import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoStore} from './TodoStore';
import {ObservableTodoStore} from './ObservableTodoStore';
import {runInAction} from 'mobx';

const observableTodoStore = new ObservableTodoStore();

const BeginTodoList = () => {
  return <Text style={styles.item}>{begin()}</Text>;
};

const begin = () => {
  action1();
  action2();
  action3();
  action4();
  action5();
  // runInAction(() => {
  //   observableTodoStore.addTodo('阅读 MobX 教程');
  //   observableTodoStore.addTodo('试用 MobX');
  //   observableTodoStore.todos[0].completed = true;
  //   observableTodoStore.todos[1].task = '在自己的项目中使用 MobX';
  //   observableTodoStore.todos[0].task = '理解 MobX 教程';
  // });
};

const action1 = () => {
  runInAction(() => {
    observableTodoStore.addTodo('阅读 MobX 教程');
  });
};

const action2 = () => {
  runInAction(() => {
    observableTodoStore.addTodo('试用 MobX');
  });
};

const action3 = () => {
  runInAction(() => {
    observableTodoStore.todos[0].completed = true;
  });
};

const action4 = () => {
  runInAction(() => {
    observableTodoStore.todos[1].task = '在自己的项目中使用 MobX';
  });
};

const action5 = () => {
  runInAction(() => {
    observableTodoStore.todos[0].task = '理解 MobX 教程';
  });
};

const styles = StyleSheet.create({
  item: {
    padding: 50,
  },
});

export default BeginTodoList;
