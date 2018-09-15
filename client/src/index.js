import React from 'react';
import './index.css';
import App from './containers/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers';

const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware))

const store = createStore(rootReducer,
  {
    categories: [],
    posts: [],
    articles: [],
    comments: [],

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
