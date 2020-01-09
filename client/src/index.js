import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThank from 'redux-thunk';

import rootReducer from './reducers'
import App from './App'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThank)(createStore);
render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)



