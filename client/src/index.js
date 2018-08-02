import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './login';
import Categories from './components/categories';
import Home from './Home';
import PostsContainer from './components/posts'
import createStore from './createStore'
import voteReducer from './reducers/voteReducer'






   </React.Fragment>
  </Router>,
   document.getElementById('root'));
registerServiceWorker();
};

store.dispatch({ type: '@@INIT' });
