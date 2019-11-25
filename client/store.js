import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './redux/user';
import selectedProjectReducer from './redux/selectedProject';

const rootReducer = combineReducers({
  user: userReducer,
  selectedProject: selectedProjectReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
