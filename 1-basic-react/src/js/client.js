import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

const reducer = (state={}, action) => {
  if (action.type === 'INC') {
    return state + action.payload;
  }
  if (action.type === 'DEC') {
    return state - action.payload;
  }
  return state;
}

store.dispatch({ type: 'FOO' });
