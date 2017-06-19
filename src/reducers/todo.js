import * as todoConstants from './../constants/todo';
/*

{
  id: number,
  caption: text,
  isComplited: bool,
}

*/


export default (state = [], action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case todoConstants.TOGGLE_COMPLITION:
      return state.map((todo) => {
        console.log(action.payload);
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return { ...todo };
      });
    case todoConstants.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.todoId);
    case todoConstants.EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            caption: action.payload.newCaption,
          };
        }
        return { ...todo };
      });
    case todoConstants.GOT_INITIAL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getTodos = state => state.todos;

export const getComplitedTodos = state => state.todos.filter(todo => todo.isCompleted);

export const getIncomplitetdTodos = state => state.todos.filter(todo => !todo.isCompleted);
