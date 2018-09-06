import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {};
  const store = configureStore(preloadedState);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Todos App</h1>, root);
});