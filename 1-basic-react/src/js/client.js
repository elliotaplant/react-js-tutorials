import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state={}, action) => {
  return state;
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: 'LOADING' })
  setTimeout(() => dispatch({ type: 'DONE'}), 100)
});
