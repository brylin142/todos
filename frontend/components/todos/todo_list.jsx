import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render() {
    const { todos, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key= {todo.id}
        todo={ todo }
        removeTodo={ removeTodo }
      />
    ));

    return (
      <div>
        <ul>{ todoItems }</ul>
      </div>
    );
  }
}

export default TodoList;