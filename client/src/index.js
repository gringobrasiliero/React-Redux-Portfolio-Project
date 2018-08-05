import React from 'react';
import './index.css';
import App from './App';
import Header from './components/header';
import Login from './login';
import Home from './Home';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';


const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const store = createStore(rootReducer,
{
  categories: [],
  votes: [],
  posts: []
}, allStoreEnhancers
 );



// export function render() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )




store.dispatch({ type: '@@INIT' });
