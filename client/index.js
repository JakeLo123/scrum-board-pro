import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
// import { Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
