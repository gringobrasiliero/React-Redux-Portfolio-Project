import React from 'react';
import './index.css';
import App from './App';
// import Header from './components/header';
// import Login from './login';
// import Home from './Home';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers';

const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer,
{
  categories: [],
  votes: [],
  posts: [],
  articles: [],
  comments: [],
  users: []

}, allStoreEnhancers
 );



  render(
    <Provider store={store}>
    <BrowserRouter>

      <App />
      </BrowserRouter>

    </Provider>,
    document.getElementById('root')
  )




store.dispatch({ type: '@@INIT' });
