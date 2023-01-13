export class TodoStore {
  todos = [];

  get completedTodosCount() {
    const completes = this.todos.filter(todo => todo.completed === true);
    return completes.length;
  }

  report() {
    if (this.todos.length === 0) {
      return '<无>';
    }
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return (
      `下一个待办：${nextTodo ? nextTodo.task : '无'}。` +
      `进度：${this.completedTodosCount} / ${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}
