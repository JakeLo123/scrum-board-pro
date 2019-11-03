import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './redux/user';

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

const rootReducer = combineReducers({
	user: userReducer
});

const store = createStore(rootReducer, middleware);

export default store;
