import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {TodoStore} from './TodoStore';
import {ObservableTodoStore} from './ObservableTodoStore';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';

const observableTodoStore = new ObservableTodoStore();

const BeginTodoList = observer(() => {
  useEffect(() => {
    console.log('ddd');
    begin();
    //return function clean() {};
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        data={observableTodoStore.todos.map(todo => {
          return {title: todo.task, completed: todo.completed};
        })}
        renderItem={item => <TodoItem value={item} />}
      />
    </SafeAreaView>
  );
});

const TodoItem = item => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        runInAction(() => {
          const data = observableTodoStore.todos[item.value.index];
          const selected = !data.completed;
          const object = {
            task: data.task,
            completed: selected,
            assignee: null,
          };
          observableTodoStore.todos[item.value.index] = object;
        });
      }}>
      <Image
        style={styles.button}
        source={
          item.value.item.completed === true
            ? require('../Images/selected.png')
            : require('../Images/unselected.png')
        }
      />
      <Text style={styles.title}>{item.value.item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 0,
    paddingBottom: 0,
    //backgroundColor: 'red',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    padding: 10,
  },
  button: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  title: {
    padding: 10,
    fontSize: 18,
  },
});

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

export default BeginTodoList;
