
import React, { Component } from 'react';

import './App.css';
import Categories from './containers/categories';
import Header from './components/header';
import Posts from './containers/posts';
import Vote from './components/votes';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import LoginForm from './components/users/LoginForm'
import './index.css';


import Login from './login';
import Home from './Home';
import PostsContainer from './containers/posts'




import SearchablePostsContainer from './components/searchablePostsContainer';
require('dotenv').config();



class App extends Component {



  render() {
    return (
      <Router>
      <React.Fragment>
        <Route path="/" component={Header} />
           <Route exact path="/" component={Home} />
         <Route exact path="/categories/:id/posts" component={PostsContainer} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/categories" component={Categories} />

         </React.Fragment>
        </Router>
    );
  }
}

export default App;
