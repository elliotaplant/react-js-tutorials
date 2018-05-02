import {applyMiddleware, createStore} from 'redux';

const reducer = (state=0, action) => {
  if (action.type === 'INC') {
    return state + action.payload;
  }
  if (action.type === 'DEC') {
    return state - action.payload;
  }
  return state;
}

// Logger middleware
const logger = store => next => action => {
  console.log('Action fired!', action);
  action.type = 'DEC';
  next(action);
}

// Logger middleware
const error = store => next => action => {
  try {
    next(action);
  } catch (error) {
    console.error(error);
  }
}

const store = createStore(reducer, applyMiddleware(logger, error));

store.subscribe(() => {
  console.log('store changed!', store.getState());
})

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 12});
store.dispatch({type: 'INC', payload: 22});
store.dispatch({type: 'DEC', payload: 100});
store.dispatch({type: 'INC', payload: 123});
