import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './login';
import Categories from './containers/categories';
import Home from './Home';
import PostsContainer from './containers/posts'
import voteReducer from './reducers/voteReducer'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Upvote from './components/votes/Upvote'
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
