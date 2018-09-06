import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge'

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        nextState[action.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      return merge({}, state, { [action.todo.id]: action.todo });
    default:
      return state;
  }
};

export default todosReducer;