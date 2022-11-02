import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//redux
import store from './redux/store';
//component
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
