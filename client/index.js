import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ basename: '' });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
