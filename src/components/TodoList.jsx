import React from 'react';
import PropTypes from 'prop-types';
import Todo from './../components/Todo';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo
        {...todo}
        key={todo.id}
        toggleComplition={props.toggleComplition}
        deleteTodo={props.deleteTodo}
        editTodo={props.editTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
  })).isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
