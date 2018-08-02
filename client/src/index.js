import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './login';
import Categories from './components/categories';
import Home from './Home';
import PostsContainer from './components/posts'
// import createStore from './createStore'
import voteReducer from './reducers/voteReducer'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'



const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 export default store;



// export function render() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
