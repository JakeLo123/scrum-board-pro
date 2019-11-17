import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './redux/user';

const rootReducer = combineReducers({
	user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
