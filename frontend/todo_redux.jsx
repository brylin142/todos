import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {};
  const store = configureStore(preloadedState);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store } />, root);
});