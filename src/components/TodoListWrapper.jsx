import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TodoList from './../components/TodoList';
import TodoInput from './../components/TodoInput';
import * as todoActions from './../actions/todo';
import * as todoGetters from './../reducers/todo';

class TodoListWrapper extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.addTodo} />
        <div>
          <Link to="/">All</Link>
          {' '}
          <Link to="/incomplited">Incomplited</Link>
          {' '}
          <Link to="/complited">Complited</Link>
        </div>
        <TodoList
          todos={this.props.todos}
          toggleComplition={this.props.toggleComplition}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let todos = [];
  switch (ownProps.match.params.type) {
    case undefined:
      todos = todoGetters.getTodos(state);
      break;
    case 'complited':
      todos = todoGetters.getComplitedTodos(state);
      break;
    case 'incomplited':
      todos = todoGetters.getIncomplitetdTodos(state);
      break;
    default:
      todos = [];
  }
  return { todos };
};

const mapDeispatchToProps = dispatch => ({
  getInitialData: todoActions.getInitialData(dispatch),
  addTodo: todoActions.addTodo(dispatch),
  toggleComplition: todoActions.toggleComplition(dispatch),
  deleteTodo: todoId => dispatch(todoActions.deleteTodo(todoId)),
  editTodo: (todoId, newCaption) => dispatch(todoActions.editTodo(todoId, newCaption)),
});

export default connect(mapStateToProps, mapDeispatchToProps)(TodoListWrapper);

TodoListWrapper.propTypes = {
  toggleComplition: PropTypes.func.isRequired,
  getInitialData: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  })).isRequired,
};
