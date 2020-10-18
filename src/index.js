import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { contactReducer } from './Store/Reducers/ContactReducer';

const store = createStore(contactReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

