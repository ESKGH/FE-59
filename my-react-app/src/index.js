import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store/store.ts'
import AppRouter from './components/router/approuter.tsx';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);