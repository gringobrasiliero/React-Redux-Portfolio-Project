import React from 'react';
import './index.css';
import App from './containers/App';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import rootReducer from './reducers';

const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)

const store = createStore(rootReducer,
  {
    categories: [],
    posts: [],
    articles: [],
    comments: [],
    locations: [],
    users: []

  }, allStoreEnhancers
 );

  render(
    <Provider store={store}>
      <BrowserRouter>
      <React.Fragment>
      <Helmet title="You Are Doing Great" />

        <App />
        </React.Fragment>

      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
