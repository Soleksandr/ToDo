import * as constants from './../constants/todo';
import * as todoApiCalls from '../apiCalls/todo';

const gotInitialData = todos => ({
  type: constants.GOT_INITIAL_DATA,
  payload: todos,
});

const addTodoActionCreater = todo => ({
  type: constants.ADD_TODO,
  payload: todo,
});

export const addTodo = dispatch => caption =>
  todoApiCalls.addTodo(caption)
    .then(todo => dispatch(addTodoActionCreater(todo)));

const toggleComplitionActionCreater = todo => ({
  type: constants.TOGGLE_COMPLITION,
  payload: todo,
});

export const toggleComplition = dispatch => todoId =>
  todoApiCalls.toggleTodo(todoId)
    .then(todo => dispatch(toggleComplitionActionCreater(todo)));

export const deleteTodo = todoId => ({
  type: constants.DELETE_TODO,
  payload: { todoId },
});

export const editTodo = (todoId, newCaption) => ({
  type: constants.EDIT_TODO,
  payload: { todoId, newCaption },
});

export const getInitialData = dispatch => () => {
  todoApiCalls.getTodos()
    .then(todos => dispatch(gotInitialData(todos)));
};
