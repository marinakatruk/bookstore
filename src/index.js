import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { configureStore } from '@reduxjs/toolkit'
import allReducer from './store/reducers';
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: allReducer
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


