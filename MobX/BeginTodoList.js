import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoStore} from './TodoStore';
import {ObservableTodoStore} from './ObservableTodoStore';
import {runInAction} from 'mobx';

// function BeginTodoList() {
//   const todoStore = new TodoStore();

//   const begin = () => {
//     todoStore.addTodo('阅读 MobX 教程');
//     console.log(todoStore.report());

//     todoStore.addTodo('试用 MobX');
//     console.log(todoStore.report());

//     todoStore.todos[0].completed = true;
//     console.log(todoStore.report());

//     todoStore.todos[1].task = '在自己的项目中使用 MobX';
//     console.log(todoStore.report());

//     todoStore.todos[0].task = '理解 MobX 教程';
//     console.log(todoStore.report());
//   };

//   return <Text style={styles.item}>{begin()}</Text>;
// }

function BeginTodoList() {
  const observableTodoStore = new ObservableTodoStore();

  const begin = () => {
    // observableTodoStore.addTodo('阅读 MobX 教程');
    // observableTodoStore.addTodo('试用 MobX');
    // observableTodoStore.todos[0].completed = true;
    // observableTodoStore.todos[1].task = '在自己的项目中使用 MobX';
    // observableTodoStore.todos[0].task = '理解 MobX 教程';

    runInAction(() => {
      observableTodoStore.addTodo('阅读 MobX 教程');
      observableTodoStore.addTodo('试用 MobX');
      observableTodoStore.todos[0].completed = true;
      observableTodoStore.todos[1].task = '在自己的项目中使用 MobX';
      observableTodoStore.todos[0].task = '理解 MobX 教程';
    });
  };

  return <Text style={styles.item}>{begin()}</Text>;
}

const styles = StyleSheet.create({
  item: {
    padding: 50,
  },
});

export default BeginTodoList;
